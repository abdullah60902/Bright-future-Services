"use client"
import Link from "next/link"
import { Mail } from "lucide-react"
import logo from "@/public/logo1.jpg"
import Image from "next/image"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/courses", label: "Courses" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ]

  const [email, setEmail] = useState("")

  const subscribe = () => {
    if (!email.trim()) {
      toast.error("Please enter a valid email!")
      return
    }
    toast.success(`Subscribed successfully with ${email}!`)
    setEmail("") // Clear input
  }

  return (
    <footer className="bg-slate-900 text-white relative">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand + Subscribe */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image src={logo} alt="Logo" width={62} height={62} className="w-10 h-10" />
                <span className="font-bold text-xl text-gray-100">Bright future service</span>
              </Link>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Expert-led online courses and professional services. Learn hands-on with mentors through live Zoom classes
              starting from $15.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors cursor-pointer"
                onClick={subscribe}
              >
                <Mail size={16} />
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Bright future. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Refund Policy
            </Link>
          </div>
        </div>

        {/* Design Credit */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          Design by <span className="text-white font-semibold">Abdullah</span> and{" "}
          <span className="text-white font-semibold">Noman</span>
        </div>
      </div>
    </footer>
  )
}
