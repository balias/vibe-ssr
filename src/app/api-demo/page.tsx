'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ApiResponse {
  status: string
  data?: unknown
  timestamp: string
  message?: string
}

export default function ApiDemoPage() {
  const [responses, setResponses] = useState<ApiResponse[]>([])
  const [loading, setLoading] = useState(false)

  const fetchFromApi = async (endpoint: string) => {
    setLoading(true)
    try {
      const response = await fetch(endpoint)
      const data = await response.json()
      setResponses((prev) => [
        {
          status: response.ok ? 'success' : 'error',
          data,
          timestamp: new Date().toLocaleTimeString(),
          message: response.statusText,
        },
        ...prev,
      ])
    } catch (error) {
      setResponses((prev) => [
        {
          status: 'error',
          message: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toLocaleTimeString(),
        },
        ...prev,
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">API Routes Demo</h1>
        <p className="text-gray-600">
          Explore Next.js API routes - serverless functions for your backend
        </p>
      </div>

      {/* API Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User API */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>👤</span> User Data API
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Fetch user information from the server without rendering a full page.
          </p>
          <button
            onClick={() => fetchFromApi('/api/users/1')}
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
          >
            {loading ? 'Loading...' : 'Get User Data'}
          </button>
        </div>

        {/* Stats API */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>📊</span> Statistics API
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Retrieve aggregated statistics and metrics from the server.
          </p>
          <button
            onClick={() => fetchFromApi('/api/stats')}
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
          >
            {loading ? 'Loading...' : 'Get Statistics'}
          </button>
        </div>

        {/* Health Check API */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>🏥</span> Health Check API
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Check the health status and server information.
          </p>
          <button
            onClick={() => fetchFromApi('/api/health')}
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
          >
            {loading ? 'Loading...' : 'Check Health'}
          </button>
        </div>

        {/* Time API */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span>⏰</span> Time API
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Get current server time and timezone information.
          </p>
          <button
            onClick={() => fetchFromApi('/api/time')}
            disabled={loading}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
          >
            {loading ? 'Loading...' : 'Get Server Time'}
          </button>
        </div>
      </div>

      {/* Responses */}
      {responses.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">API Responses</h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {responses.map((response, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-l-4 font-mono text-sm ${
                  response.status === 'success'
                    ? 'bg-green-50 border-green-500 text-green-900'
                    : 'bg-red-50 border-red-500 text-red-900'
                }`}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold uppercase">{response.status}</span>
                  <span className="text-xs opacity-75">{response.timestamp}</span>
                </div>
                <pre className="whitespace-pre-wrap break-words text-xs">
                  {response.message || JSON.stringify(response.data, null, 2)}
                </pre>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
        <h3 className="font-bold text-purple-900 mb-2">About API Routes</h3>
        <ul className="text-purple-800 text-sm space-y-2 list-disc list-inside">
          <li>API routes run on the server, never exposed to the client</li>
          <li>Perfect for sensitive operations like database queries</li>
          <li>Can be called from frontend components with <code>fetch()</code></li>
          <li>Each route file can handle different HTTP methods (GET, POST, etc.)</li>
          <li>Serverless functions - scale automatically with demand</li>
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
