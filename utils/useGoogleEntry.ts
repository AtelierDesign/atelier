import { google } from 'googleapis';

export default async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const sheets = google.sheets({
    auth,
    version: 'v4',
  });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'A1:B1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        ['Bob Smith', 'bob@example.com'],
        ['Chandler Chappell', 'chan@example.com'],
      ],
    },
  });

  return res.status(201).json({
    data: response.data,
  });
};
