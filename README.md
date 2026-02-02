# Vibe SSR - Next.js Server-Side Rendering Demo

A comprehensive demonstration of **Server-Side Rendering (SSR)** capabilities using **Next.js 15**, **React 19**, and **TypeScript**.

## 🚀 Features Demonstrated

### 1. **Server-Side Rendering (SSR)**
- Pages are rendered on the server before sending HTML to the client
- Complete HTML is available for SEO and fast initial page load
- See `/src/app/page.tsx` for the landing page

### 2. **Dynamic Routes with `generateStaticParams`**
- Pre-render pages at build time for known routes
- On-demand rendering for unknown routes
- Example: `/users/[id]` - View user profiles
- Located in `/src/app/users/[id]/page.tsx`

### 3. **API Routes (Serverless Functions)**
- Backend endpoints without a separate server
- Examples:
  - `GET /api/users/[id]` - Fetch user data
  - `GET /api/stats` - Get statistics
  - `GET /api/health` - Health check
  - `GET /api/time` - Server time

### 4. **Server-Side Data Fetching**
- Pages fetch data on the server
- Data is pre-rendered into HTML
- Examples: `/posts` and `/products` pages
- No JavaScript waterfall requests needed

### 5. **Interactive Features**
- API Demo page (`/api-demo`) showcasing client-server communication
- Dynamic metadata generation
- Responsive design with Tailwind CSS

## 📁 Project Structure

```
vibe-ssr/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── health/route.ts          # Health check endpoint
│   │   │   ├── stats/route.ts           # Statistics endpoint
│   │   │   ├── time/route.ts            # Time endpoint
│   │   │   └── users/[id]/route.ts      # User data endpoint
│   │   ├── users/
│   │   │   └── [id]/page.tsx            # Dynamic user profile page
│   │   ├── api-demo/
│   │   │   └── page.tsx                 # API interaction demo
│   │   ├── posts/
│   │   │   └── page.tsx                 # Server-rendered posts
│   │   ├── products/
│   │   │   └── page.tsx                 # Server-rendered products
│   │   ├── globals.css                  # Global styles
│   │   ├── layout.tsx                   # Root layout
│   │   └── page.tsx                     # Home page
│   └── components/                      # Reusable components (empty for expansion)
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15
- **Runtime**: React 19
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Linting**: ESLint
- **Node.js**: 20+

## 📦 Installation

```bash
npm install
```

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 🌐 Available Routes

### Pages (Server-Side Rendered)
- `/` - Home page with demo overview
- `/users/1`, `/users/2`, `/users/3` - Dynamic user profiles
- `/posts` - Blog posts with server-side data
- `/products` - Product listing with statistics
- `/api-demo` - Interactive API demonstration

### API Routes (Serverless Functions)
- `GET /api/users/[id]` - Fetch user by ID
- `GET /api/stats` - Get application statistics
- `GET /api/health` - Server health check
- `GET /api/time` - Current server time and timezone

## 💡 Key SSR Concepts Demonstrated

### 1. **Server-Side Rendering**
```typescript
// Pages are rendered on the server
export default function Page() {
  // This component runs on the server
  // Full HTML is sent to the client
}
```

### 2. **Dynamic Routes**
```typescript
// URL: /users/[id]
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}
```

### 3. **Dynamic Metadata**
```typescript
export async function generateMetadata({ params }) {
  return {
    title: `User ${params.id}`,
    description: 'User profile page'
  }
}
```

### 4. **API Routes**
```typescript
// api/users/[id]/route.ts
export async function GET(request, { params }) {
  return NextResponse.json({ user: userData })
}
```

### 5. **Server Components**
By default, all components in the App Router are Server Components, meaning:
- No JavaScript sent to the client
- Direct database access
- Keep secrets on the server
- Large dependencies stay on server

## 🔍 How SSR Benefits Your Application

| Benefit | Description |
|---------|-------------|
| **SEO** | Complete HTML for search engines to crawl |
| **Performance** | Faster initial page load and FCP (First Contentful Paint) |
| **Security** | Backend operations hidden from the client |
| **Real-time Data** | Always serve fresh data from databases |
| **No JavaScript Waterfall** | No separate data-fetching requests |

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Server Components](https://react.dev/reference/react/use-server)
- [Next.js App Router](https://nextjs.org/docs/app)
- [API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## 🎯 Next Steps

### Expand the Project
1. **Add a Database**: Connect MongoDB, PostgreSQL, or another database
2. **Add Authentication**: Implement user login with NextAuth.js
3. **Add Forms**: Create server actions for form submissions
4. **Add Search**: Implement full-text search for posts/products
5. **Add Caching**: Implement ISR (Incremental Static Regeneration)

### Example: Adding a Database

```typescript
// lib/db.ts
import mongoose from 'mongoose'

export async function connectDB() {
  return mongoose.connect(process.env.MONGODB_URI!)
}
```

```typescript
// app/users/[id]/page.tsx
import { connectDB } from '@/lib/db'
import User from '@/models/User'

export default async function UserPage({ params }) {
  await connectDB()
  const user = await User.findById(params.id)
  return <div>{user.name}</div>
}
```

## 🚨 Important Notes

- **Server Components by Default**: Components in the App Router are Server Components
- **Client Components**: Use `'use client'` directive for interactivity
- **SEO**: All pages are SSR by default, perfect for SEO
- **Dynamic Routes**: Unknown routes are rendered on-demand
- **API Routes**: Built-in serverless functions via `/api` routes

## 📝 Environment Variables

Create a `.env.local` file if you need environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
DATABASE_URL=your_database_url
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Clear Cache
```bash
npm run build -- --no-cache
```

## 📄 License

MIT

## 🤝 Contributing

Feel free to fork and modify this project for your own learning!

---

**Happy learning! 🎉**
