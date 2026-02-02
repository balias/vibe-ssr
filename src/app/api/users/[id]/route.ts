import { NextResponse } from 'next/server'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: userId } = await params

  // Mock user data
  const users: Record<string, object> = {
    '1': {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Developer',
      status: 'active',
    },
    '2': {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'DevOps Engineer',
      status: 'active',
    },
    '3': {
      id: 3,
      name: 'Carol Williams',
      email: 'carol@example.com',
      role: 'Designer',
      status: 'inactive',
    },
  }

  const user = users[userId]

  if (!user) {
    return NextResponse.json(
      { error: 'User not found', id: userId },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    data: user,
    timestamp: new Date().toISOString(),
  })
}
