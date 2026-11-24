import { google } from 'googleapis'

interface LeadData {
  firstName: string
  lastName: string
  companyName: string
  phone: string
  email: string
}

export async function appendLeadToSheet(data: LeadData): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

  if (!spreadsheetId) {
    throw new Error('Google Sheets credentials not configured')
  }

  // Use JWT auth if private key is provided, otherwise use Application Default Credentials
  // (ADC works automatically on Cloud Run via the service account assigned to the service)
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY

  let auth
  if (serviceAccountEmail && privateKey) {
    auth = new google.auth.JWT(
      serviceAccountEmail,
      undefined,
      privateKey.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    )
  } else {
    auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
  }

  const sheets = google.sheets({ version: 'v4', auth })

  const timestamp = new Date().toISOString()

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:F',
    // RAW: store exactly what was typed. USER_ENTERED would run text starting with "="
    // as a spreadsheet formula and turn "+254…" phone numbers into plain numbers.
    valueInputOption: 'RAW',
    requestBody: {
      values: [
        [
          timestamp,
          data.firstName,
          data.lastName,
          data.companyName,
          data.phone,
          data.email,
        ],
      ],
    },
  })
}
