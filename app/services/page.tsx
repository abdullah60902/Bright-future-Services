import Header from "@/components/header"
import Footer from "@/components/footer"
import { services, consultationService } from "@/lib/data"
import { Code, Smartphone, Search, Palette, TrendingUp, Target, ArrowRight, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import EnrollButton from "@/components/enroll-button"   // 👈 Missing import added

const iconMap = {
  Code,
  Smartphone,
  Search,
  Palette,
  TrendingUp,
  Target,
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Professional Bright Future</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              From web development to digital marketing, we provide comprehensive solutions to help your business thrive
              in the digital world.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const IconComponent = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl p-8 border border-gray-100 card-shadow group hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{service.fullDescription}</p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-slate-900">From ${service.startingPrice}</span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Consultation Service */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{consultationService.title}</h2>
                <p className="text-xl text-slate-600 mb-6">{consultationService.description}</p>
                <div className="text-3xl font-bold text-blue-600 mb-2">From ${consultationService.hourlyRate}/hour</div>
                <p className="text-slate-600">Personalized mentorship and project guidance</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {consultationService.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Available Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {consultationService.availableTopics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <EnrollButton
                  courseId={9}   // 👈 courseId fix karo agar DB me alag hai
                  className="btn-primary inline-block"
                >
                  Book Consultation
                </EnrollButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
