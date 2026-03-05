import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function rateLimit(ip: string, limit: number = 10, windowMs: number = 60000): boolean {
  const now = Date.now()
  const key = `rate_limit_${ip}`
  const record = rateLimitStore.get(key)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // Get client IP
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             'unknown'

  // Apply rate limiting to API routes and form submissions
  if (pathname.startsWith('/api/') || pathname.includes('/contact')) {
    if (!rateLimit(ip, 10, 60000)) { // 10 requests per minute
      return new NextResponse('Too Many Requests', { status: 429 })
    }
  }

  // Apply stricter rate limiting to auth endpoints
  if (pathname.startsWith('/api/auth')) {
    if (!rateLimit(`auth_${ip}`, 5, 300000)) { // 5 requests per 5 minutes
      return new NextResponse('Too Many Requests', { status: 429 })
    }
  }

  // Check authentication for admin routes
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('auth-token')?.value

    if (!token) {
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }

    // In a real app, verify the JWT token here
    // For now, we'll just check if the token exists
    try {
      // TODO: Add JWT verification when implementing authentication
      // const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    } catch (error) {
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Add CSRF protection headers
  if (request.method === 'POST') {
    const origin = request.headers.get('origin')
    const host = request.headers.get('host')
    
    if (origin && host && !origin.includes(host)) {
      return new NextResponse('Forbidden', { status: 403 })
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}