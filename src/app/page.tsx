import Link from 'next/link'

export default function Home() {
  const currentTime = new Date().toLocaleString()

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Vibe SSR</h1>
        <p className="text-xl text-gray-600 mb-6">
          A comprehensive Next.js Server-Side Rendering demonstration
        </p>
        <span className="ssr-badge">Server-Side Rendered at {currentTime}</span>
      </section>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Feature 1: Dynamic Pages */}
        <Link href="/users/1" className="feature-card cursor-pointer hover:scale-105 transition-transform">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">👤</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Dynamic Pages</h3>
              <p className="text-gray-600">
                View server-rendered dynamic user pages with route parameters. Each page is generated on the server.
              </p>
              <p className="text-blue-600 font-semibold mt-2">Try User Profile →</p>
            </div>
          </div>
        </Link>

        {/* Feature 2: API Routes */}
        <Link href="/api-demo" className="feature-card cursor-pointer hover:scale-105 transition-transform">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🔌</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">API Routes</h3>
              <p className="text-gray-600">
                Explore serverless functions and data fetching with built-in API routes. Perfect for backend operations.
              </p>
              <p className="text-blue-600 font-semibold mt-2">API Demo →</p>
            </div>
          </div>
        </Link>

        {/* Feature 3: Server-Rendered Data */}
        <Link href="/posts" className="feature-card cursor-pointer hover:scale-105 transition-transform">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">📝</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Server Data Fetching</h3>
              <p className="text-gray-600">
                See how data is fetched on the server and rendered into HTML before sending to the client.
              </p>
              <p className="text-blue-600 font-semibold mt-2">View Posts →</p>
            </div>
          </div>
        </Link>

        {/* Feature 4: ISR */}
        <Link href="/products" className="feature-card cursor-pointer hover:scale-105 transition-transform">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">⚡</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Products List</h3>
              <p className="text-gray-600">
                View a complete product listing rendered server-side with revalidation capabilities.
              </p>
              <p className="text-blue-600 font-semibold mt-2">Browse Products →</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Information Section */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">What is Server-Side Rendering (SSR)?</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Server-Side Rendering (SSR)</strong> is a technique where the HTML content is generated on the server
            and sent as a fully rendered page to the client&apos;s browser. With Next.js, SSR provides several benefits:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>SEO Friendly:</strong> Search engines can easily crawl and index fully rendered HTML
            </li>
            <li>
              <strong>Performance:</strong> Fast initial page load with content immediately visible
            </li>
            <li>
              <strong>Security:</strong> Keep sensitive operations on the server away from client browsers
            </li>
            <li>
              <strong>Real-time Data:</strong> Always serve fresh data from your backend APIs
            </li>
            <li>
              <strong>Better UX:</strong> No loading spinners or layout shifts before content appears
            </li>
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'].map((tech) => (
            <div key={tech} className="bg-blue-50 rounded-lg p-4 text-center">
              <p className="font-semibold text-blue-600">{tech}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
