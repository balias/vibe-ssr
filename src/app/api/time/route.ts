import { NextResponse } from 'next/server'

export async function GET() {
  const now = new Date()

  const timeData = {
    iso: now.toISOString(),
    unix: now.getTime(),
    readable: now.toLocaleString(),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    utcOffset: -now.getTimezoneOffset() / 60,
  }

  return NextResponse.json({
    success: true,
    data: timeData,
    timestamp: now.toISOString(),
    message: 'Current server time',
  })
}
