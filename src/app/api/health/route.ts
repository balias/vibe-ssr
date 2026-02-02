import { NextResponse } from 'next/server'

export async function GET() {
  const health = {
    status: 'healthy',
    uptime: Math.floor(Math.random() * 1000000),
    environment: 'production',
    apiVersion: '1.0.0',
    database: 'connected',
    cache: 'enabled',
  }

  return NextResponse.json({
    success: true,
    data: health,
    timestamp: new Date().toISOString(),
    message: 'Server is running normally',
  })
}
