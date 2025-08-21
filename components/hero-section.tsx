import Link from "next/link"
import Image from "next/image"
import hero from '@/public/hero-illustration.jpg'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left mt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Grow Your Business with <span className="text-blue-600">Expert Services</span> &{" "}
              <span className="text-blue-600">Online Courses</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Learn hands-on with mentors. Live Zoom classes start from $2. Build real projects and get support from
              industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/courses" className="btn-primary text-lg px-8 py-4">
            <p className="mt-1"> Start Learning</p>
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                See Services
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-slate-900">5,000+</div>
                <div className="text-slate-600">Students Enrolled</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-slate-900">4.8★</div>
                <div className="text-slate-600">Average Rating</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-slate-900">From $2</div>
                <div className="text-slate-600">Course Pricing</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={hero}
                alt="Online learning illustration"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-blue-200 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
