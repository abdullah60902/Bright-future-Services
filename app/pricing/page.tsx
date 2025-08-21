import Header from "@/components/header"
import Footer from "@/components/footer"
import { pricingPlans, consultationService } from "@/lib/data"
import { BookOpen, Zap, Crown, CheckCircle, Clock, Users } from "lucide-react"
import EnrollButton from "@/components/enroll-button"   // ✅ EnrollButton import kiya
// Link ko sirf consultation section ke liye rakha, pricing me hata diya
import Link from "next/link"

const iconMap = {
  BookOpen,
  Zap,
  Crown,
}

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your learning journey. All plans include live Zoom classes, lifetime access to
              recordings, and community support.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => {
                const IconComponent = iconMap[plan.icon as keyof typeof iconMap]
                return (
                  <div
                    key={plan.id}
                    className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                      plan.popular
                        ? "border-blue-500 card-shadow scale-105"
                        : "border-gray-100 card-shadow hover:border-blue-200"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <div
                        className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                          plan.popular ? "bg-blue-600" : "bg-blue-100"
                        }`}
                      >
                        <IconComponent className={`w-8 h-8 ${plan.popular ? "text-white" : "text-blue-600"}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                      <p className="text-slate-600 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-slate-900 mb-1">${plan.price}</div>
                      <p className="text-slate-600">One-time payment</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* ✅ Checkout Link hata diya aur EnrollButton add kiya */}
                   <EnrollButton
  courseId={plan.courseId} // 👈 ab correct course match hoga
  className="block w-full text-center text-lg py-4 mb-4 rounded-xl font-semibold transition-colors duration-200"
>
  {plan.buttonText}
</EnrollButton>

                  </div>
                )
              })}
            </div>

            {/* Plan Benefits Note */}
            <div className="text-center mt-12">
              <p className="text-slate-600 max-w-3xl mx-auto">
                All plans include lifetime access to recordings, live Zoom classes with expert instructors, and access
                to our supportive learning community. Start your journey today with our 7-day money-back guarantee.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation Pricing */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Need Personal Guidance?</h2>
              <p className="text-xl text-slate-600">
                Get 1:1 mentorship and personalized project guidance from our expert instructors.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 card-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Clock className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Personal Consultation</h3>
                  <p className="text-slate-600 mb-6">
                    Get personalized mentorship, project guidance, and career advice from industry experts. Perfect for
                    specific questions or custom learning paths.
                  </p>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    From ${consultationService.hourlyRate}/hour
                  </div>
                  <p className="text-slate-600 mb-6">Flexible scheduling • Expert mentors • Personalized guidance</p>
                  <Link href="/contact" className="btn-primary inline-block">
                    Book Consultation
                  </Link>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {consultationService.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center text-blue-800 font-medium mb-2">
                      <Users className="w-5 h-5 mr-2" />
                      Available Topics
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {consultationService.availableTopics.slice(0, 4).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
