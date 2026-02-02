import Link from 'next/link'

interface Product {
  id: number
  name: string
  price: number
  category: string
  stock: number
  description: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Next.js Course',
    price: 99.99,
    category: 'Education',
    stock: 50,
    description: 'Complete guide to building SSR applications with Next.js',
  },
  {
    id: 2,
    name: 'React Developer Pack',
    price: 149.99,
    category: 'Development',
    stock: 30,
    description: 'Essential tools and resources for React development',
  },
  {
    id: 3,
    name: 'TypeScript Masterclass',
    price: 129.99,
    category: 'Education',
    stock: 45,
    description: 'Advanced TypeScript patterns and best practices',
  },
  {
    id: 4,
    name: 'Web Performance Optimization',
    price: 79.99,
    category: 'Education',
    stock: 60,
    description: 'Optimize your web applications for speed and efficiency',
  },
  {
    id: 5,
    name: 'DevTools Pro',
    price: 199.99,
    category: 'Development',
    stock: 20,
    description: 'Professional development tools and extensions',
  },
  {
    id: 6,
    name: 'UI Component Library',
    price: 89.99,
    category: 'Components',
    stock: 100,
    description: 'Pre-built, customizable UI components for React',
  },
]

export const metadata = {
  title: 'Products - Vibe SSR',
  description: 'Browse our collection of development resources and tools',
}

export default function ProductsPage() {
  const categories = [...new Set(products.map((p) => p.category))]
  const inStock = products.filter((p) => p.stock > 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Products</h1>
        <p className="text-gray-600 mb-4">Browse our collection of development resources</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="ssr-badge">
            {inStock.length} In Stock
          </span>
          <span className="ssr-badge bg-purple-100 text-purple-800">
            {categories.length} Categories
          </span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            {/* Product Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 h-40 flex items-center justify-center">
              <div className="text-6xl text-white">📦</div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900 flex-1">{product.name}</h3>
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{product.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-blue-600">${product.price}</div>
                <div
                  className={`text-sm font-semibold ${
                    product.stock > 20
                      ? 'text-green-600'
                      : product.stock > 0
                        ? 'text-yellow-600'
                        : 'text-red-600'
                  }`}
                >
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </div>
              </div>

              <button
                disabled={product.stock === 0}
                className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                  product.stock > 0
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.stock > 0 ? 'Add to Cart' : 'Unavailable'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-blue-600 mb-2">{products.length}</div>
          <p className="text-gray-600">Total Products</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-green-600 mb-2">
            ${products.reduce((sum, p) => sum + p.price, 0).toFixed(2)}
          </div>
          <p className="text-gray-600">Total Value</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <div className="text-4xl font-bold text-purple-600 mb-2">
            {products.reduce((sum, p) => sum + p.stock, 0)}
          </div>
          <p className="text-gray-600">Items in Stock</p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
        <h3 className="font-bold text-blue-900 mb-2">Data Processing</h3>
        <p className="text-blue-800 text-sm">
          This page demonstrates server-side data processing. The product list is fetched, filtered, and
          aggregated on the server, then rendered into complete HTML before being sent to the client.
        </p>
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
