import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle, Calendar, Video, Mail, Download } from "lucide-react";
import Link from "next/link";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

function generateOrderId() {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `DS-${new Date().getFullYear()}-${randomNum}`;
}

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;

  if (!params.session_id) {
    return <p>Invalid session</p>;
  }

  const session = await stripe.checkout.sessions.retrieve(params.session_id, {
    expand: ["customer_details"],
  });

  console.log("Stripe session:", session);

  
  const orderDetails = {
    orderId: generateOrderId(),
    courseName: session.metadata?.courseName || "Course",
    studentEmail: session.customer_details?.email || session.customer_email || "No email provided",

    amount: session.metadata?.amount || "0",
    nextClassDate: "within a week",
    zoomLink: "https://zoom.us/j/1234567890",
  };

  // ✅ safe fetch
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/send-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderDetails),
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">Welcome to Bright future!</h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Your enrollment is confirmed. Get ready to start your learning journey with expert instructors and live Zoom
            classes.
          </p>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-8 card-shadow mb-12 text-left max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6 text-center">Order Confirmation</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-slate-600">Order ID</span>
                <span className="font-mono text-slate-900">{orderDetails.orderId}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-slate-600">Plan</span>
                <span className="font-medium text-slate-900">{orderDetails.courseName}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-slate-600">Student Email</span>
                <span className="font-medium text-slate-900">{orderDetails.studentEmail}</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-600">Amount Paid</span>
                <span className="font-semibold text-slate-900">${orderDetails.amount}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 card-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Check Your Email</h3>
              <p className="text-sm text-slate-600">
                We've sent a confirmation email with all the details to {orderDetails.studentEmail}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 card-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Mark Your Calendar</h3>
              <p className="text-sm text-slate-600">Your first live class starts on {orderDetails.nextClassDate}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 card-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Join Zoom Class</h3>
              <p className="text-sm text-slate-600">Use the Zoom link in your email to join live sessions</p>
            </div>

            <div className="bg-white rounded-2xl p-6 card-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Access Materials</h3>
              <p className="text-sm text-slate-600">Download course materials and join our community forum</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="btn-primary">
              Explore More Courses
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
