"use client"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        toast.success("✅ Message sent successfully!")
        setFormData({ name: "", email: "", interest: "", message: "" })
      } else {
        toast.error("❌ Failed to send message. Try again later.")
      }
    } catch (err) {
      toast.error("⚠️ Something went wrong. Check server logs.")
    }

    setIsSubmitting(false)
  }

  const interests = [
    "Web Development Course",
    "App Development Course",
    "Digital Marketing Course",
    "SEO Course",
    "Personal Consultation",
    "Custom Service",
    "General Inquiry",
  ]

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook", color: "hover:text-blue-600" },
    { href: "#", icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
    { href: "#", icon: Instagram, label: "Instagram", color: "hover:text-pink-600" },
    { href: "#", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-700" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Toaster position="top-right" />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Have questions about our courses or services? We're here to help you start your learning journey.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-slate-700 mb-2">
                      I'm interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select your interest</option>
                      {interests.map((interest) => (
                        <option key={interest} value={interest}>
                          {interest}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your goals, questions, or how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
<div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Office Location</h3>
<p className="text-slate-600">
  Krizi 11 Agioi Omologites
  <br />
  ZIP Code: 1080
  <br />
  City: Nicosia
  <br />
  Region: Lefkosia
  <br />
  Country: Cyprus
</p>

                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
<p className="text-slate-600">
  <a href="tel:+35794554049" className="hover:text-blue-600">
    +357 94554049
  </a>
</p>
                      <p className="text-sm text-slate-500">Mon-Fri, 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
<p className="text-slate-600">
  <a href="mailto:bright.future.ser@gmail.com" className="hover:text-blue-600">
    bright.future.ser@gmail.com
  </a>
</p>
                      <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 transition-colors duration-200 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>

               {/* Map Section */}
<div className="mt-8">
  <h3 className="font-semibold text-slate-900 mb-4">Find Us</h3>
  <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d104374.59938279056!2d33.280225154518!3d35.16394654412647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e6!4m0!4m1!2sKrizi%2011%20Agioi%20Omologites%20ZIP%20Code%3A%201080%20City%3A%20Nicosia%20Region%3A%20Lefkosia%20Country%3A%20Cyprus!5e0!3m2!1sen!2s!4v1755792520951!5m2!1sen!2s"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
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
