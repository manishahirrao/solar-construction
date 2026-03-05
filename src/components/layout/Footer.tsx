import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Khatu Shyam Engineering Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-xl font-heading font-bold">
                Khatu Shyam Engineering
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional engineering firm specializing in solar construction services 
              across India. Established in 2016, we provide piling, earthing, MMS installation, 
              AC/DC works, structural installation, and civil works.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-start space-x-2">
                <span>📍</span>
                <span>SKS Binnayaga, Pehalpur<br />Jhalawar, Rajasthan - 326512</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>6267877719 | 9420293817</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🆔</span>
                <span>GST: 08CTTPB6150L1Z8</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📋</span>
                <span>PAN: CTTPB6150L</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Khatu Shyam Engineering. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}