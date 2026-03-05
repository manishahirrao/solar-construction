'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className="flex items-center">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-sm font-medium transition-colors duration-200 ${
              isActive(item.href)
                ? 'text-amber-600 border-b-2 border-amber-600 pb-1'
                : 'text-gray-700 hover:text-amber-600'
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link
          href="/admin/login"
          className="btn-outline text-xs py-2 px-4"
        >
          Admin
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-700 hover:text-amber-600 focus:outline-none focus:text-amber-600"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden z-40">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-amber-600 bg-amber-50 border-l-4 border-amber-600'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600 hover:bg-gray-50 border-t border-gray-200 mt-2 pt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}