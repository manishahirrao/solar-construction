import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Khatu Shyam Engineering',
  description: 'Learn about Khatu Shyam Engineering, a leading solar construction company in Jhalawar, Rajasthan. Discover our mission, values, and commitment to renewable energy.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-500 to-sky-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Leading the way in solar construction and renewable energy solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Khatu Shyam Engineering is a trusted name in solar construction, 
                  dedicated to providing high-quality solar energy solutions across Rajasthan.
                </p>
                <p>
                  With years of experience in the renewable energy sector, we specialize in 
                  solar panel installation, maintenance, and comprehensive solar construction services.
                </p>
                <p>
                  Our commitment to excellence and customer satisfaction has made us a preferred 
                  choice for residential, commercial, and industrial solar projects.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <span className="text-6xl mb-4 block">🏢</span>
                <p className="font-medium text-lg">Company Photo</p>
                <p className="text-sm">Professional team image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to sustainable energy and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 text-center">
                Our Mission
              </h3>
              <p className="text-gray-600 text-center">
                To provide reliable, efficient, and affordable solar energy solutions 
                that empower communities and protect the environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 text-center">
                Quality First
              </h3>
              <p className="text-gray-600 text-center">
                We use only premium materials and follow industry best practices 
                to ensure long-lasting, high-performance solar installations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 text-center">
                Customer Focus
              </h3>
              <p className="text-gray-600 text-center">
                Your satisfaction is our priority. We provide personalized service 
                and ongoing support for every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certified and trusted by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed</h3>
              <p className="text-sm text-gray-600">Fully licensed solar contractor</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold text-gray-900 mb-2">Experienced</h3>
              <p className="text-sm text-gray-600">Years of industry expertise</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-2">Insured</h3>
              <p className="text-sm text-gray-600">Comprehensive insurance coverage</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Certified</h3>
              <p className="text-sm text-gray-600">Industry certified professionals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
