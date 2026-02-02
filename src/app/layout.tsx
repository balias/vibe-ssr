import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibe SSR - Next.js Server-Side Rendering Demo',
  description: 'Demonstration of Next.js SSR capabilities with dynamic pages and API routes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-blue-600 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">Vibe SSR</h1>
            <p className="text-blue-100 text-sm">Next.js Server-Side Rendering Demo</p>
          </div>
        </nav>
        <main className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
