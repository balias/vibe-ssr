import Link from 'next/link'

interface User {
  id: number
  name: string
  email: string
  company: string
  phone: string
  website: string
  joinDate: string
  bio: string
}

// Mock user data - in a real app, this would come from a database
const users: Record<number, User> = {
  1: {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    company: 'Tech Corp',
    phone: '+1-555-0101',
    website: 'alice.dev',
    joinDate: '2023-01-15',
    bio: 'Full-stack developer passionate about Next.js and modern web technologies.',
  },
  2: {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    company: 'StartUp Inc',
    phone: '+1-555-0102',
    website: 'bobsmith.dev',
    joinDate: '2023-02-20',
    bio: 'DevOps engineer with expertise in cloud infrastructure and containerization.',
  },
  3: {
    id: 3,
    name: 'Carol Williams',
    email: 'carol@example.com',
    company: 'Design Studio',
    phone: '+1-555-0103',
    website: 'carolwilliams.design',
    joinDate: '2023-03-10',
    bio: 'UI/UX designer focused on creating beautiful and accessible user experiences.',
  },
}

// Generate static params for known users
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const user = users[parseInt(id)]
  return {
    title: user ? `${user.name} - Vibe SSR` : 'User Not Found',
    description: user ? user.bio : 'User not found',
  }
}

export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const userId = parseInt(id)
  const user = users[userId]

  if (!user) {
    return (
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-red-600 mb-4">User Not Found</h1>
        <p className="text-gray-600 mb-6">No user with ID {userId} exists</p>
        <div className="space-x-4">
          <Link href="/" className="text-blue-600 font-semibold hover:underline">
            Back to Home
          </Link>
          <Link href="/users/1" className="text-blue-600 font-semibold hover:underline">
            View Another User
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
        <span className="ssr-badge">Server-Rendered Dynamic Page (ID: {user.id})</span>
      </div>

      {/* Profile Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Profile Information</h2>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 pb-4 border-b">
              <span className="text-gray-600 font-semibold min-w-fit">Email:</span>
              <span className="text-gray-800">{user.email}</span>
            </div>

            <div className="flex items-start space-x-4 pb-4 border-b">
              <span className="text-gray-600 font-semibold min-w-fit">Company:</span>
              <span className="text-gray-800">{user.company}</span>
            </div>

            <div className="flex items-start space-x-4 pb-4 border-b">
              <span className="text-gray-600 font-semibold min-w-fit">Phone:</span>
              <span className="text-gray-800">{user.phone}</span>
            </div>

            <div className="flex items-start space-x-4 pb-4 border-b">
              <span className="text-gray-600 font-semibold min-w-fit">Website:</span>
              <span className="text-blue-600 hover:underline">{user.website}</span>
            </div>

            <div className="flex items-start space-x-4 pb-4 border-b">
              <span className="text-gray-600 font-semibold min-w-fit">Joined:</span>
              <span className="text-gray-800">{new Date(user.joinDate).toLocaleDateString()}</span>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-700 mb-2">Bio</h3>
              <p className="text-gray-600 leading-relaxed">{user.bio}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-md p-6 h-fit">
          <h3 className="font-bold text-lg mb-4">Other Users</h3>
          <div className="space-y-2">
            {Object.keys(users).map((id) => (
              <Link
                key={id}
                href={`/users/${id}`}
                className={`block p-3 rounded-lg transition-colors ${
                  parseInt(id) === userId
                    ? 'bg-blue-100 text-blue-700 font-semibold'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {users[parseInt(id)].name}
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t">
            <Link
              href="/"
              className="block p-3 rounded-lg bg-blue-600 text-white text-center font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <h3 className="font-bold text-blue-900 mb-2">How SSR Works Here</h3>
        <p className="text-blue-800 text-sm">
          This page uses <code className="bg-blue-100 px-2 py-1 rounded">generateStaticParams</code> to pre-render known user pages at build time.
          For unknown IDs, Next.js renders the page on-demand. All data is fetched and rendered on the server before sending to the browser.
        </p>
      </div>
    </div>
  )
}
