import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

            <p className="text-slate-600 mb-8">
              <strong>Last updated:</strong> January 2024
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Commitment to Privacy</h2>
                <p className="text-slate-700 leading-relaxed">
                  We value your privacy. This policy explains how we collect, use, and protect your information when you
                  visit our website or enroll in our courses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We collect information you provide directly to us, such as:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Name and email address when you enroll in courses</li>
                  <li>Payment details (processed securely by Stripe)</li>
                  <li>Messages you send through our contact forms</li>
                  <li>Analytics data to improve our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
                <p className="text-slate-700 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Deliver courses and educational content</li>
                  <li>Process payments and send receipts</li>
                  <li>Send course updates and important announcements</li>
                  <li>Improve our services and user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Processors</h2>
                <p className="text-slate-700 leading-relaxed">
                  We work with trusted third-party services to provide our platform:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mt-4">
                  <li>
                    <strong>Stripe:</strong> Payment processing
                  </li>
                  <li>
                    <strong>Email providers:</strong> Course communications
                  </li>
                  <li>
                    <strong>Analytics providers:</strong> Website performance and user insights
                  </li>
                  <li>
                    <strong>Zoom:</strong> Live class delivery
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookies and Tracking</h2>
                <p className="text-slate-700 leading-relaxed">
                  We use cookies and similar technologies for essential site functionality and analytics. You can
                  control cookies through your browser settings. Some features may not work properly if cookies are
                  disabled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Retention</h2>
                <p className="text-slate-700 leading-relaxed">
                  We retain your information for as long as necessary to provide our services and comply with legal
                  obligations. Course materials and progress are kept for the lifetime access period promised in your
                  plan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
                <p className="text-slate-700 leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
                  <li>Request access to your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Request restriction of processing</li>
                  <li>Object to processing of your data</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-4">
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:info.mr6004276@gmail.com" className="text-blue-600 hover:underline">
                    info.bright.future.ser.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Security</h2>
                <p className="text-slate-700 leading-relaxed">
                  We implement industry-standard security measures including encryption, secure access controls, and
                  regular security audits to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">International Transfers</h2>
                <p className="text-slate-700 leading-relaxed">
                  Your data may be processed in countries outside your residence where data protection laws may differ.
                  We ensure appropriate safeguards are in place for such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
                <p className="text-slate-700 leading-relaxed">
                  If you have questions about this privacy policy or our data practices, please contact us at{" "}
                  <a href="mailto:mr6004276@gmail.com" className="text-blue-600 hover:underline">
                    mr6004276@gmail.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to This Policy</h2>
                <p className="text-slate-700 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any material changes by
                  posting the new policy on this page and updating the "Last updated" date.
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
