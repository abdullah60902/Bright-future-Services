import Header from "@/components/header"
import Footer from "@/components/footer"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Refund Policy</h1>

            <p className="text-slate-600 mb-8">
              <strong>Last updated:</strong> January 2024
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                  Simple 7-Day Refunds on Eligible Purchases
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  We want you to be completely satisfied with your learning experience. If you're not happy with a
                  course purchase, you can request a refund within <strong>7 days</strong> of payment, provided you have
                  not consumed more than <strong>20%</strong> of the course content or attended more than one live Zoom
                  session.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Eligibility Requirements</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  To be eligible for a refund, you must meet the following criteria:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Request made within 7 days of purchase</li>
                  <li>Less than 20% of course content accessed</li>
                  <li>Attended no more than one live Zoom session</li>
                  <li>No previous refund requests for the same course</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">How to Request a Refund</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  To request a refund, please email us at{" "}
                  <a href="mailto:info.bright.future.ser@gmail.com" className="text-blue-600 hover:underline">
                    info.bright.future.ser.com
                  </a>{" "}
                  with the following information:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Your order ID (found in your confirmation email)</li>
                  <li>The email address used for purchase</li>
                  <li>Reason for the refund request</li>
                  <li>Any feedback to help us improve</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Exclusions</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The following purchases may be non-refundable unless required by local law:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Personal consultation sessions (1:1 coaching calls)</li>
                  <li>Custom services or project work</li>
                  <li>Discounted bundles or promotional offers</li>
                  <li>Courses completed beyond the 20% threshold</li>
                  <li>Purchases made more than 7 days ago</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Processing Time</h2>
                <p className="text-slate-700 leading-relaxed">
                  Once your refund request is approved, we will process the refund to your original payment method
                  through Stripe. Refunds typically appear in your account within 5-10 business days, depending on your
                  bank or card issuer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Partial Refunds</h2>
                <p className="text-slate-700 leading-relaxed">
                  In some cases, we may offer partial refunds for courses where significant content has been accessed
                  but circumstances warrant consideration. These are evaluated on a case-by-case basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Chargebacks</h2>
                <p className="text-slate-700 leading-relaxed">
                  Before initiating a chargeback with your bank or credit card company, please contact us directly.
                  We're committed to resolving any issues and will work with you to find a satisfactory solution.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
                <p className="text-slate-700 leading-relaxed">
                  For refund requests or questions about this policy, please contact:
                </p>
                <div className="bg-slate-50 rounded-xl p-6 mt-4">
                  <p className="text-slate-700 mb-2">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:bright.future.ser@gmail.com" className="text-blue-600 hover:underline">
                    bright.future.ser.com
                    </a>
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Phone:</strong> +35794554049
                  </p>
                  <p className="text-slate-700">
                    <strong>Business Hours:</strong> Monday-Friday, 9AM-6PM PST
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Policy Updates</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this refund policy from time to time. Any changes will be posted on this page with an
                  updated "Last updated" date. Continued use of our services after changes constitutes acceptance of the
                  new policy.
                </p>
              </section>

              <section className="bg-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Commitment</h2>
                <p className="text-slate-700 leading-relaxed">
                  We stand behind the quality of our courses and services. Our goal is your success, and we're committed
                  to providing exceptional learning experiences. If you're not satisfied, we want to make it right.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
