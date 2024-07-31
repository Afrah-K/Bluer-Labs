import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Load the service account key from environment variables
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
    const spreadsheetId = process.env.SPREADSHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      throw new Error('Missing environment variables for Google service account credentials or spreadsheet ID');
    }

    // Configure the JWT auth client
    const scopes = ['https://www.googleapis.com/auth/spreadsheets'];
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: scopes,
    });

    // Create Google Sheets API client
    const sheets = google.sheets({ version: 'v4', auth });

    // Find the next available row in the first column after the title "Emails"
    const getResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A:A',
    });

    const rows = getResponse.data.values;
    const nextRow = rows ? rows.length + 1 : 2; // If rows exist, get the next row; otherwise, start at row 2

    // Append the email to the next available row
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `Sheet1!A${nextRow}`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[email]],
      },
    });

    if (appendResponse.status === 200) {
      return NextResponse.json({ message: 'Email received successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to append email' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
