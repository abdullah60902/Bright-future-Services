import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: Request) {
  try {
    const { courseId } = await req.json()

    // Yeh apke lib/data.ts se course data laayega
    const { allCourses } = await import("@/lib/data")
    const course = allCourses.find((c) => c.id === Number(courseId))

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_creation: "always", // ✅ stripe ko force karega email capture karne ke liye
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course.title,
              description: course.description,
            },
            unit_amount: course.price * 100,
          },
          quantity: 1,
        },
      ],
      metadata: {
        courseId: String(course.id),
        courseName: course.title,
        amount: String(course.price),
      },
      success_url: `${req.headers.get("origin")}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/checkout/cancel`,
    })

    return NextResponse.json({ id: session.id, url: session.url })
  } catch (error: any) {
    console.error("Stripe Error:", error.message)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
