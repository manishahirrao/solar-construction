import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Khatu Shyam Engineering',
  description: 'Comprehensive solar construction services including piling, earthing, MMS installation, AC/DC works, structural installation, and civil works across India.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-500 to-sky-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Comprehensive solar construction solutions for your projects
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Specialized Solar Construction Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end solar construction services with expertise, 
              quality, and timely delivery
            </p>
          </div>

          {/* Service 1: Piling Services */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🏗️</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                  Piling Services
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Professional foundation piling services for solar installations. We ensure 
                  stable and durable support structures that can withstand various environmental 
                  conditions and provide long-term reliability.
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">✓</span>
                    <span>Deep foundation piling for large-scale solar projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">✓</span>
                    <span>Soil analysis and foundation design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">✓</span>
                    <span>Quality testing and load-bearing verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2 mt-1">✓</span>
                    <span>Compliance with structural engineering standards</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/solar-construction-wrok.jpg"
                  alt="Piling services for solar construction"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  quality={85}
                />
              </div>
            </div>
          </div>

          {/* Service 2: Earthing Systems */}
          <div className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/about-construction-work.jpg"
                  alt="Earthing system installation"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  quality={85}
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                  Earthing Systems
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Complete earthing solutions for solar installations, ensuring electrical 
                  safety and compliance with industry standards. Our systems protect equipment 
                  and personnel from electrical hazards.
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Lightning protection systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Equipment grounding and bonding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Earth resistance testing and verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>Compliance with electrical safety codes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3: MMS Installation */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🔧</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                  MMS Installation
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Expert Module Mounting Structure (MMS) installation for optimal solar panel 
                  positioning and maximum energy efficiency. We ensure precise alignment and 
                  secure mounting for long-term performance.
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2 mt-1">✓</span>
                    <span>Fixed tilt and tracking system installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2 mt-1">✓</span>
                    <span>Structural analysis and wind load calculations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2 mt-1">✓</span>
                    <span>Corrosion-resistant materials and coatings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sky-500 mr-2 mt-1">✓</span>
                    <span>Precision alignment for optimal energy capture</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/solar-construction-wrok.jpg"
                  alt="MMS installation for solar panels"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  quality={85}
                />
              </div>
            </div>
          </div>

          {/* Service 4: AC/DC Works */}
          <div className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/about-construction-work.jpg"
                  alt="AC/DC electrical works"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  quality={85}
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🔌</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                  AC/DC Works
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Complete electrical AC/DC installation and maintenance services for solar 
                  power systems and grid connections. We handle all aspects of electrical 
                  integration with precision and safety.
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">✓</span>
                    <span>DC cabling and connector installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">✓</span>
                    <span>AC distribution and grid connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">✓</span>
                    <span>Inverter installation and commissioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2 mt-1">✓</span>
                    <span>Testing and quality assurance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 5: Structural Installation */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                  Structural Installation
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Professional structural installation services ensuring robust and 
                  weather-resistant solar infrastructure. We design and install structures 
                  that meet all engineering and safety requirements.
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✓</span>
                    <span>Steel structure fabrication and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✓</span>
                    <span>Weather-resistant coating and protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✓</span>
                    <span>Structural integrity testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">✓</span>
                    <span>Compliance with building codes</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/solar-construction-wrok.jpg"
                  alt="Structural installation for solar projects"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  quality={85}
                />
              </div>
            </div>
          </div>

          {/* Service 6: Civil Works */}
          <div className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/about-construction-work.jpg"
                  alt="Civil works for solar projects"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                  quality={85}
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🚧</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                  Civil Works
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Comprehensive civil construction services including site preparation, roads, 
                  and infrastructure development. We handle all civil engineering aspects of 
                  solar projects from ground up.
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">✓</span>
                    <span>Site leveling and preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">✓</span>
                    <span>Road and drainage construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">✓</span>
                    <span>Boundary walls and fencing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">✓</span>
                    <span>Building and facility construction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your solar construction requirements and 
            get a customized solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-solar text-lg px-8 py-4 inline-block"
            >
              Get Project Quote
            </Link>
            <Link
              href="/about"
              className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 inline-block"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}