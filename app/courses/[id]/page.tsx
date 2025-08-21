import Header from "@/components/header"
import Footer from "@/components/footer"
import { allCourses } from "@/lib/data"
import { Star, Users, Calendar, Video, Clock, CheckCircle, User } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import EnrollButton from "@/components/enroll-button"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CourseDetailPageProps {
  params: {
    id: string
  }
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
  const course = allCourses.find((c) => c.id === Number.parseInt(params.id))

  if (!course) {
    notFound()
  }

  const syllabus = [
    "Introduction and Setup",
    "Core Concepts and Fundamentals",
    "Hands-on Project Development",
    "Advanced Techniques and Best Practices",
    "Real-world Applications",
    "Final Project and Portfolio Review",
  ]

  const faqs = [
    {
      question: "What if I miss a live session?",
      answer: "All live sessions are recorded and available for lifetime access. You can catch up anytime.",
    },
    {
      question: "Do I need prior experience?",
      answer: `This course is designed for ${course.level.toLowerCase()} level. We'll guide you through everything step by step.`,
    },
    {
      question: "What support do I get?",
      answer: "You'll have access to our community forum, live Q&A sessions, and direct instructor support.",
    },
    {
      question: "Is there a certificate?",
      answer: "Yes, you'll receive a certificate of completion after finishing all course requirements.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Course Header */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    From ${course.price}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {course.level}
                  </span>
                  {course.liveOnZoom && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      <Video className="w-3 h-3 mr-1" />
                      Live on Zoom
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{course.title}</h1>

                <p className="text-xl text-slate-600 mb-8 leading-relaxed">{course.description}</p>

                <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {course.students.toLocaleString()} students
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
                    {course.rating} rating
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {course.instructor}
                  </div>
                </div>
              </div>

              {/* Enrollment Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-8 card-shadow sticky top-8">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-slate-900 mb-2">${course.price}</div>
                    <p className="text-slate-600">One-time payment</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm text-slate-600">
                      <Clock className="w-4 h-4 mr-3 text-green-500" />
                      Next cohort starts {new Date(course.nextCohort).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <Video className="w-4 h-4 mr-3 text-blue-500" />
                      Live interactive sessions on Zoom
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                      Lifetime access to recordings
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 mr-3 text-green-500" />
                      Certificate of completion
                    </div>
                  </div>

                 <EnrollButton courseId={course.id} className="block w-full text-center text-lg py-4 mb-4" />


                  <p className="text-xs text-slate-500 text-center">7-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Syllabus */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Syllabus</h2>
                <div className="space-y-4">
                  {syllabus.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Week {index + 1}</h3>
                        <p className="text-slate-600">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Instructor</h2>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {course.instructor
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{course.instructor}</h3>
                      <p className="text-slate-600">Senior {course.category} Expert</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    With over 8 years of industry experience, {course.instructor.split(" ")[0]} has worked with leading
                    tech companies and helped thousands of students launch successful careers in{" "}
                    {course.category.toLowerCase()}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 card-shadow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
