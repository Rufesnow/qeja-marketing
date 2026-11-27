import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { appendLeadToSheet } from '@/lib/google-sheets'

const leadSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  companyName: z.string().min(2).max(100),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/),
  email: z.string().email(),
})

// Spam checks sent alongside the form fields (not stored).
const botFieldsSchema = z.object({
  website: z.string().optional(), // honeypot: hidden from people, bots fill it in
  startedAt: z.number().optional(), // when the form was rendered (ms since epoch)
})

const MIN_FILL_TIME = 3 * 1000 // people take longer than 3 s to fill in five fields
const EMAIL_WINDOW = 5 * 60 * 1000 // one submission per email per 5 minutes
const IP_WINDOW = 60 * 60 * 1000
const IP_LIMIT = 3 // submissions per visitor address per hour

// In-memory limits: per server instance (Cloud Run runs at most 2), reset on restart.
const recentByEmail = new Map<string, number>()
const recentByIp = new Map<string, number[]>()

function clientIp(req: NextApiRequest): string {
  // Cloud Run puts the visitor's address first in X-Forwarded-For.
  const forwarded = req.headers['x-forwarded-for']
  const first = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(',')[0]?.trim()
  return first || req.socket.remoteAddress || 'unknown'
}

function isEmailLimited(email: string, now: number): boolean {
  for (const [key, time] of recentByEmail) if (now - time > EMAIL_WINDOW) recentByEmail.delete(key)
  const last = recentByEmail.get(email)
  return last !== undefined && now - last < EMAIL_WINDOW
}

function isIpLimited(ip: string, now: number): boolean {
  for (const [key, times] of recentByIp) {
    const fresh = times.filter((t) => now - t < IP_WINDOW)
    if (fresh.length) recentByIp.set(key, fresh)
    else recentByIp.delete(key)
  }
  return (recentByIp.get(ip)?.length ?? 0) >= IP_LIMIT
}

function recordSubmission(email: string, ip: string, now: number) {
  recentByEmail.set(email, now)
  recentByIp.set(ip, [...(recentByIp.get(ip) ?? []), now])
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const now = Date.now()

  // Bot checks first. A bot gets the same "success" reply as a person, so it has
  // nothing to learn from; nothing is stored.
  const bot = botFieldsSchema.safeParse(req.body ?? {})
  const looksAutomated =
    !bot.success ||
    Boolean(bot.data.website?.trim()) ||
    bot.data.startedAt === undefined ||
    now - bot.data.startedAt < MIN_FILL_TIME
  if (looksAutomated) {
    return res.status(200).json({ success: true })
  }

  const parsed = leadSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid input',
      details: parsed.error.flatten().fieldErrors,
    })
  }

  const { email } = parsed.data
  const ip = clientIp(req)
  if (isEmailLimited(email, now) || isIpLimited(ip, now)) {
    return res.status(429).json({
      error: 'Too many requests. Please try again later.',
    })
  }

  try {
    await appendLeadToSheet(parsed.data)
    recordSubmission(email, ip, now)
    return res.status(200).json({ success: true })
  } catch (error) {
    // Never log the visitor's details, only what went wrong.
    console.error('Failed to save lead:', error instanceof Error ? error.message : 'unknown error')
    return res.status(503).json({
      error: 'We couldn’t send your details just now. Please try again in a few minutes.',
    })
  }
}
