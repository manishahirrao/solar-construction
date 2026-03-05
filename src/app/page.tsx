import Link from 'next/link'
import Image from 'next/image'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-500 to-sky-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/home-hero.jpg"
            alt="Solar construction project - Professional solar panel installation"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/80 to-sky-600/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Professional Solar
              <span className="block text-amber-300">Construction Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
              Khatu Shyam Engineering - Your trusted partner in solar construction across India. 
              Specialized in piling, earthing, MMS installation, and structural works since 2016.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-solar text-lg px-8 py-4 inline-block"
              >
                Get Free Quote
              </Link>
              <Link
                href="/services"
                className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 inline-block"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                About Khatu Shyam Engineering
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Established in 2016, Khatu Shyam Engineering is a professional engineering firm 
                working in the solar construction sector across India. We provide specialized 
                services with a commitment to delivering high-quality solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Excellence</h3>
                    <p className="text-gray-600">8+ years of experience in solar construction industry</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pan-India Operations</h3>
                    <p className="text-gray-600">Serving clients across India with quality services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Safety & Quality Focus</h3>
                    <p className="text-gray-600">Strong commitment to safety standards and timely completion</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/about-construction-work.jpg"
                alt="Khatu Shyam Engineering team working on solar construction project"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solar construction services including piling, earthing, 
              MMS installation, AC/DC works, structural installation, and civil works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Piling Services */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🏗️</span>
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Piling Services
              </h3>
              <p className="text-gray-600">
                Professional foundation piling services for solar installations, 
                ensuring stable and durable support structures.
              </p>
            </div>

            {/* Earthing Services */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">⚡</span>
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Earthing Systems
              </h3>
              <p className="text-gray-600">
                Complete earthing solutions for solar installations, ensuring 
                electrical safety and compliance with industry standards.
              </p>
            </div>

            {/* MMS Installation */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🔧</span>
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                MMS Installation
              </h3>
              <p className="text-gray-600">
                Expert Module Mounting Structure installation for optimal 
                solar panel positioning and maximum energy efficiency.
              </p>
            </div>

            {/* AC/DC Works */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🔌</span>
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                AC/DC Works
              </h3>
              <p className="text-gray-600">
                Complete electrical AC/DC installation and maintenance services 
                for solar power systems and grid connections.
              </p>
            </div>

            {/* Structural Installation */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🏢</span>
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Structural Installation
              </h3>
              <p className="text-gray-600">
                Professional structural installation services ensuring robust 
                and weather-resistant solar infrastructure.
              </p>
            </div>

            {/* Civil Works */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🚧</span>
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3">
                Civil Works
              </h3>
              <p className="text-gray-600">
                Comprehensive civil construction services including site 
                preparation, roads, and infrastructure development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Why Choose Khatu Shyam Engineering?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 2016, we deliver high-quality solar construction services with 
              a strong focus on safety, efficiency, and timely project completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality & Safety */}
            <div className="text-center p-6 rounded-lg bg-amber-50 border border-amber-200">
              <div className="mb-4">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🛡️</span>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-3">
                Quality & Safety Focus
              </h3>
              <p className="text-gray-600">
                Strong commitment to safety standards and quality assurance in all 
                our solar construction projects across India.
              </p>
            </div>

            {/* Timely Completion */}
            <div className="text-center p-6 rounded-lg bg-green-50 border border-green-200">
              <div className="mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">⏰</span>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-3">
                Timely Project Completion
              </h3>
              <p className="text-gray-600">
                We pride ourselves on completing projects on time with strict 
                adherence to quality standards and client requirements.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="text-center p-6 rounded-lg bg-sky-50 border border-sky-200">
              <div className="mb-4">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🏆</span>
                </div>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-3">
                8+ Years Experience
              </h3>
              <p className="text-gray-600">
                Since 2016, we have built long-term relationships with clients 
                through professionalism, transparency, and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures quality delivery and client satisfaction 
              in every solar construction project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Consultation */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-200 transition-colors shadow-lg group-hover:shadow-xl">
                  <span className="text-2xl">📋</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  1
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                Initial Consultation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We assess your project requirements, site conditions, and provide 
                detailed technical consultation for optimal solutions.
              </p>
            </div>

            {/* Step 2: Planning */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-sky-200 transition-colors shadow-lg group-hover:shadow-xl">
                  <span className="text-2xl">📐</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  2
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                Design & Planning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our engineering team creates detailed project plans, structural designs, 
                and technical specifications tailored to your needs.
              </p>
            </div>

            {/* Step 3: Execution */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-green-200 transition-colors shadow-lg group-hover:shadow-xl">
                  <span className="text-2xl">🔧</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  3
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Professional Execution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expert installation of piling, earthing, MMS, AC/DC works, and 
                structural components with strict safety protocols.
              </p>
            </div>

            {/* Step 4: Quality Check */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-purple-200 transition-colors shadow-lg group-hover:shadow-xl">
                  <span className="text-2xl">✅</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  4
                </div>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Quality Assurance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive testing, quality checks, and project handover with 
                complete documentation and support.
              </p>
            </div>
          </div>

          {/* Process Flow */}
          <div className="mt-12 hidden lg:block">
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <div className="w-24 h-1 bg-gray-300"></div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-sky-500 rounded-full"></div>
                <div className="w-24 h-1 bg-gray-300"></div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-24 h-1 bg-gray-300"></div>
              </div>
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  🎯 Our Mission
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Provide reliable and efficient solar construction services including piling, earthing, MMS, and structural installation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Complete projects on time with strict quality and safety standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Build long-term relationships with clients through professionalism and transparency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Continuously improve workforce skills and operational efficiency</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  🚀 Our Vision
                </h3>
                <p className="text-gray-600 text-lg">
                  To become a trusted and leading engineering company in the solar construction 
                  industry by delivering high-quality, safe, and sustainable infrastructure 
                  solutions across India.
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/solar-construction-wrok.jpg"
                alt="Solar construction project showing modern infrastructure and sustainable development"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Company Information
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch with us for your solar construction needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                SKS Binnayaga, Pehalpur<br />
                Jhalawar, Rajasthan<br />
                326512, India
              </p>
            </div>

            {/* Contact */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <span className="text-3xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:6267877719" className="hover:text-amber-600">6267877719</a><br />
                <a href="tel:9420293817" className="hover:text-amber-600">9420293817</a>
              </p>
            </div>

            {/* GST */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">GST No.</h3>
              <p className="text-gray-600 text-sm font-mono">
                08CTTPB6150L1Z8
              </p>
            </div>

            {/* PAN */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="mb-4">
                <span className="text-3xl">🆔</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">PAN No.</h3>
              <p className="text-gray-600 text-sm font-mono">
                CTTPB6150L
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Reliable Solar Construction Solutions Across India
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Pan-India Operations
                    </h3>
                    <p className="text-gray-600">
                      Serving clients across India with comprehensive solar construction 
                      services and infrastructure development solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Specialized Expertise
                    </h3>
                    <p className="text-gray-600">
                      Expert team with specialized skills in piling, earthing, MMS installation, 
                      AC/DC works, and structural installation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Sustainable Infrastructure
                    </h3>
                    <p className="text-gray-600">
                      Contributing to India's renewable energy goals through high-quality, 
                      sustainable solar infrastructure development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/solar-construction-wrok.jpg"
                alt="Solar construction site with workers and equipment, showing professional operations"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                quality={85}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Your Solar Construction Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Khatu Shyam Engineering for reliable, efficient, and professional 
            solar construction services. Contact us today for your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-solar text-lg px-8 py-4 inline-block"
            >
              Get Project Quote
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
