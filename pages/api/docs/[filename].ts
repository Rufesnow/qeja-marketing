import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

const ALLOWED_FILES: Record<string, string> = {
  'Qeja-Privacy-Policy.pdf': 'Qeja-Privacy-Policy.pdf',
  'Qeja-Terms-of-Service.pdf': 'Qeja-Terms-of-Service.pdf',
  'Qeja-Data-Protection-Policy.pdf': 'Qeja-Data-Protection-Policy.pdf',
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filename } = req.query

  if (typeof filename !== 'string' || !ALLOWED_FILES[filename]) {
    return res.status(404).json({ error: 'File not found' })
  }

  const filePath = path.join(process.cwd(), 'public', 'docs', ALLOWED_FILES[filename])

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' })
  }

  const fileBuffer = fs.readFileSync(filePath)

  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', `attachment; filename="${ALLOWED_FILES[filename]}"`)
  res.setHeader('Content-Length', fileBuffer.length)
  res.send(fileBuffer)
}
