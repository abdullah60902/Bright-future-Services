import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import FeaturedCourses from "@/components/featured-courses"
import Testimonials from "@/components/testimonials"
import TrustedLogos from "@/components/trusted-logos"
import CTABand from "@/components/cta-band"

import { services, featuredCourses, testimonials, trustedLogos } from "@/lib/data"
import Whatsapp from "@/components/whatsapp/Whatsapp"
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesOverview services={services} />
        <FeaturedCourses courses={featuredCourses} />
        <Testimonials testimonials={testimonials} />
        {/* <TrustedLogos logos={trustedLogos} /> */}
        <CTABand />
      </main>
      <Footer />
      <ScrollToTop/>
      <Whatsapp />
    </div>
  )
}
