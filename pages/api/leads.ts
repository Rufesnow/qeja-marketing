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

// Simple in-memory rate limit (per email, 5 min window)
const recentSubmissions = new Map<string, number>()
const RATE_LIMIT_WINDOW = 5 * 60 * 1000 // 5 minutes

function isRateLimited(email: string): boolean {
  const now = Date.now()
  const lastSubmission = recentSubmissions.get(email)
  if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW) {
    return true
  }
  recentSubmissions.set(email, now)

  // Clean old entries
  for (const [key, time] of recentSubmissions) {
    if (now - time > RATE_LIMIT_WINDOW) {
      recentSubmissions.delete(key)
    }
  }

  return false
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Validate input
  const parsed = leadSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({
      error: 'Invalid input',
      details: parsed.error.flatten().fieldErrors,
    })
  }

  const { email } = parsed.data

  // Rate limit
  if (isRateLimited(email)) {
    return res.status(429).json({
      error: 'Too many requests. Please try again in a few minutes.',
    })
  }

  // Attempt Google Sheets append
  try {
    await appendLeadToSheet(parsed.data)
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Failed to save lead:', error)

    // If Google Sheets is not configured, still return success
    // (leads will be logged in server output)
    if (
      error instanceof Error &&
      error.message === 'Google Sheets credentials not configured'
    ) {
      console.log('Lead captured (no Sheets configured):', parsed.data)
      return res.status(200).json({ success: true, note: 'stored_locally' })
    }

    return res.status(500).json({ error: 'Failed to save. Please try again.' })
  }
}
