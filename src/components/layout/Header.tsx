import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Khatu Shyam Engineering Logo"
                width={40}
                height={40}
                className="rounded-md"
                priority
              />
              <span className="text-lg sm:text-xl font-heading font-bold text-gray-900">
                <span className="hidden sm:inline">Khatu Shyam Engineering</span>
                <span className="sm:hidden">KSE</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <Navigation />

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <span>📞</span>
              <span>6267877719</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>📞</span>
              <span>9420293817</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}