"use client"

import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import type { ReactNode } from "react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

type EnrollButtonProps = {
  courseId: number
  className?: string
  children?: ReactNode // ✅ children allow
}

export default function EnrollButton({ courseId, className = "", children }: EnrollButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    if (loading) return
    setLoading(true)
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      })

      const data = await res.json()

      // Prefer redirect via returned URL; fallback to redirectToCheckout if you return sessionId instead
      if (data?.url) {
        window.location.href = data.url
      } else if (data?.id) {
        const stripe = await stripePromise
        await stripe?.redirectToCheckout({ sessionId: data.id })
      } else {
        console.error("Stripe: missing url/id in response", data)
        alert("Unable to start checkout. Please try again.")
      }
    } catch (e) {
      console.error(e)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      className={`btn-primary ${className}`}
      disabled={loading}
      aria-busy={loading}
    >
      {children ?? (loading ? "Processing..." : "Enroll Now")}
    </button>
  )
}
