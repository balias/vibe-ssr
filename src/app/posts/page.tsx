import Link from 'next/link'

interface Post {
  id: number
  title: string
  author: string
  excerpt: string
  date: string
  readTime: number
}

// Mock data
const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with Next.js SSR',
    author: 'Alice Johnson',
    excerpt:
      'Learn how to leverage Server-Side Rendering with Next.js to build fast, SEO-friendly applications.',
    date: '2024-01-15',
    readTime: 8,
  },
  {
    id: 2,
    title: 'Advanced TypeScript Patterns',
    author: 'Bob Smith',
    excerpt: 'Explore advanced TypeScript patterns for building robust and scalable applications.',
    date: '2024-01-10',
    readTime: 12,
  },
  {
    id: 3,
    title: 'Tailwind CSS Best Practices',
    author: 'Carol Williams',
    excerpt: 'Discover best practices for using Tailwind CSS in your Next.js projects.',
    date: '2024-01-05',
    readTime: 6,
  },
  {
    id: 4,
    title: 'Building APIs with Next.js',
    author: 'Alice Johnson',
    excerpt: 'Create powerful backend APIs using Next.js API routes and serverless functions.',
    date: '2024-01-01',
    readTime: 10,
  },
]

export const metadata = {
  title: 'Blog Posts - Vibe SSR',
  description: 'Explore our collection of articles about modern web development',
}

export default function PostsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog & Articles</h1>
        <p className="text-gray-600">
          Collection of articles about modern web development and Next.js SSR
        </p>
        <span className="ssr-badge mt-4">Server-rendered content</span>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-500"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>

              <button className="mt-4 md:mt-0 md:ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Info Section */}
      <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
        <h3 className="font-bold text-green-900 mb-2">Server-Side Rendering Benefits</h3>
        <ul className="text-green-800 text-sm space-y-1 list-disc list-inside">
          <li>All posts are fetched and rendered on the server</li>
          <li>Complete HTML is sent to the browser for instant viewing</li>
          <li>Perfect for SEO - search engines see all content</li>
          <li>Reduced JavaScript sent to the client</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
