import Header from "@/components/header"
import Footer from "@/components/footer"
import { XCircle, ArrowLeft, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function CheckoutCancelPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Cancel Icon */}
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">Payment Cancelled</h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            No worries! Your payment was cancelled and no charges were made to your account. You can try again anytime.
          </p>

          {/* Helpful Information */}
          <div className="bg-white rounded-2xl p-8 card-shadow mb-12 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Why Choose Our Courses?</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Live Interactive Classes</h3>
                  <p className="text-slate-600">
                    Learn directly from experts through live Zoom sessions with real-time Q&A
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-green-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Affordable Pricing</h3>
                  <p className="text-slate-600">Start learning for just $2 with our flexible pricing plans</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Lifetime Access</h3>
                  <p className="text-slate-600">
                    Access all recordings and materials forever, even after course completion
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-yellow-600 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Money-Back Guarantee</h3>
                  <p className="text-slate-600">Not satisfied? Get a full refund within 7 days, no questions asked</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/pricing" className="btn-primary flex items-center justify-center">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Try Again
            </Link>
            <Link href="/courses" className="btn-secondary">
              Browse Courses
            </Link>
            <Link href="/contact" className="btn-secondary flex items-center justify-center">
              <HelpCircle className="w-5 h-5 mr-2" />
              Get Help
            </Link>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-slate-900 mb-2">Need Assistance?</h3>
            <p className="text-slate-600 mb-4">
              If you experienced any issues during checkout or have questions about our courses, we're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
              <span className="text-slate-600">Email: support@digitalservices.com</span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="text-slate-600">Phone: +1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
