import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Khatu Shyam Engineering',
  description: 'Explore our range of solar construction products and solutions including mounting structures, electrical components, and infrastructure materials.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-500 to-sky-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Quality materials and components for solar construction projects
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Solar Construction Products & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide high-quality products and materials for all aspects of solar construction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1: Module Mounting Structures */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-amber-100 to-sky-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🔩</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  Module Mounting Structures
                </h3>
                <p className="text-gray-600 mb-4">
                  High-quality galvanized steel mounting structures designed for durability 
                  and optimal panel positioning.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Corrosion-resistant materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Wind load certified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Easy installation design</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product 2: Foundation Materials */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-green-100 to-sky-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🏗️</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  Foundation Materials
                </h3>
                <p className="text-gray-600 mb-4">
                  Premium quality piling and foundation materials for stable and long-lasting 
                  solar installations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>High-strength concrete</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Steel reinforcement bars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Ground anchors and piles</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product 3: Electrical Components */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-sky-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">⚡</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  Electrical Components
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete range of electrical components for AC/DC systems and grid connections.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>DC cables and connectors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>AC distribution panels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span>Protection devices</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product 4: Earthing Materials */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-sky-100 to-green-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🔌</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  Earthing Materials
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional earthing and lightning protection materials for electrical safety.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span>Copper earthing electrodes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span>Lightning arresters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2">•</span>
                    <span>Grounding conductors</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product 5: Structural Steel */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-red-100 to-orange-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🏢</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  Structural Steel
                </h3>
                <p className="text-gray-600 mb-4">
                  High-grade structural steel components for robust solar infrastructure.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Galvanized steel sections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Weather-resistant coatings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Custom fabrication available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product 6: Civil Construction Materials */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 bg-gradient-to-br from-orange-100 to-amber-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">🚧</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                  Civil Construction Materials
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete range of civil construction materials for site development.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Cement and aggregates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Fencing materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>Road construction materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/solar-construction-wrok.jpg"
                alt="Quality assurance in solar construction"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                quality={85}
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Quality Assurance & Standards
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                All our products meet international quality standards and are sourced from 
                certified manufacturers. We ensure that every component used in your project 
                is reliable, durable, and performs optimally.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Certified Materials</h3>
                    <p className="text-gray-600">All products comply with industry standards and certifications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Testing</h3>
                    <p className="text-gray-600">Rigorous quality checks before deployment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Warranty Support</h3>
                    <p className="text-gray-600">Comprehensive warranty on all products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Need Product Information?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us for detailed product specifications, pricing, and availability 
            for your solar construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-solar text-lg px-8 py-4 inline-block"
            >
              Request Quote
            </Link>
            <Link
              href="/services"
              className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 inline-block"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}