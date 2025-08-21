import Link from "next/link"

export default function CTABand() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Level Up Your Skills?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join our next live class on Zoom and start building real projects with expert guidance. Your journey to
          success starts with a single step.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  )
}
