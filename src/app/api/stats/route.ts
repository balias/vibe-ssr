import { NextResponse } from 'next/server'

export async function GET() {
  const stats = {
    totalUsers: 42,
    totalPosts: 156,
    totalProducts: 89,
    activeUsers: 38,
    totalRevenue: 12540.5,
    conversionRate: 3.2,
  }

  return NextResponse.json({
    success: true,
    data: stats,
    timestamp: new Date().toISOString(),
    message: 'Statistics retrieved successfully',
  })
}
