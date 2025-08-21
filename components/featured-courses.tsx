import Link from "next/link";
import { Star, Users, Calendar, Video } from "lucide-react";

interface Course {
  id: number;
  title: string;
  level: string;
  duration: string;
  price: number;
  rating: number;
  students: number;
  nextCohort: string;
  liveOnZoom: boolean;
}

interface FeaturedCoursesProps {
  courses: Course[];
}

export default function FeaturedCourses({ courses }: FeaturedCoursesProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Courses</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of students in our live Zoom classes. Learn from industry experts and build real projects
            that advance your career.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl"></div>

              <div className="relative p-6">
                {/* Price & Level */}
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    From ${course.price}
                  </span>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {course.level}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                {/* Course Info */}
                <div className="space-y-2 mb-4 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {course.students.toLocaleString()} students
                  </div>
                  {course.liveOnZoom && (
                    <div className="flex items-center text-blue-600 font-medium">
                      <Video className="w-4 h-4 mr-2" />
                      Live on Zoom
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-slate-600">{course.rating}</span>
                </div>

                {/* Enroll Button */}
                <Link
                  href={`/courses/${course.id}`}
                  className="block w-full text-center py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-block py-2 px-6 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
