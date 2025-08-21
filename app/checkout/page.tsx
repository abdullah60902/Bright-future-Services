"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { CreditCard, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState("standard")
  const [isProcessing, setIsProcessing] = useState(false)

  const plans = {
    basic: { name: "Basic Plan", price: 2 },
    standard: { name: "Standard Plan", price: 15 },
    premium: { name: "Premium Plan", price: 49 },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to success page
    window.location.href = "/checkout/success"
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/pricing" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Pricing
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">Complete Your Enrollment</h1>
            <p className="text-slate-600 mt-2">Join thousands of students learning with expert instructors</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-8 card-shadow h-fit">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Plan</span>
                  <span className="font-medium text-slate-900">{plans[selectedPlan as keyof typeof plans].name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Price</span>
                  <span className="font-medium text-slate-900">${plans[selectedPlan as keyof typeof plans].price}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-slate-900">Total</span>
                    <span className="text-lg font-semibold text-slate-900">
                      ${plans[selectedPlan as keyof typeof plans].price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-medium text-slate-900 mb-2">What's Included:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Live Zoom classes with expert instructors</li>
                  <li>• Lifetime access to all recordings</li>
                  <li>• Community forum access</li>
                  <li>• Certificate of completion</li>
                  <li>• 7-day money-back guarantee</li>
                </ul>
              </div>
            </div>

            {/* Payment Form */}
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <div className="flex items-center mb-6">
                <Lock className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm text-slate-600">Secure checkout powered by Stripe</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Select Plan</label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="basic">Basic Plan - $2</option>
                    <option value="standard">Standard Plan - $15</option>
                    <option value="premium">Premium Plan - $49</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="1234 5678 9012 3456"
                    />
                    <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">CVC</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="123"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Processing...
                    </div>
                  ) : (
                    `Complete Payment - $${plans[selectedPlan as keyof typeof plans].price}`
                  )}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  By completing your purchase, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/refund-policy" className="text-blue-600 hover:underline">
                    Refund Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
