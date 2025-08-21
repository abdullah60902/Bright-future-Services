// # (Next.js + Tailwind + Stripe) 

// \
// **Goal:** Build a modern, professional, fully responsive website
// for a **Digital Services & Online Courses** brand using **Next.js (latest version)**, **Tailwind
// CSS**, and **Framer
// Motion/GSAP**
// . The site sells **Web Development**, **App Development**, and **Digital Marketing** courses (live/online classes on **Zoom**)
// with prices starting
// at **\
// $2**
// . Include a services agency feel (we also offer SEO and Graphic Design) and a lightweight **Stripe checkout** confirmation page.

// ---

// ## Brand & Style

// \
// * Clean, minimal layout
// with **white** background, **dark gray** text (#0F172A / #111827), and **blue
// accents** (#
// 2563EB / #3B82F6).
// * **Rounded cards (rounded-2xl)**, **soft shadows** (shadow-lg/2xl), generous spacing.
// * Modern, legible fonts: Inter, Manrope, or Urbanist.
// * Subtle hover states, micro‑interactions, and smooth page transitions.
// \
// * Use high‑quality **SVG icons/illustrations**
// for each service and course.

// \
// ## Global

// * **Header:** Left: logo placeholder. Right: nav links `Home, Services, Courses, Pricing, Contact`. CTA button: **“Enroll from \$2”**.
// * **Footer:** Quick links, social icons, email subscribe, mini links to **Privacy Policy** and **Refund Policy**.
// \
// * **SEO/meta:** Title, description, Open Graph, favicon, sitemap. Add JSON‑LD
// for Course & Organization.
// \
// * **Accessibility
// :** Semantic HTML, focus states, aria‑labels, color contrast.

// ## Pages & Sections

// ### 1) Home (`/`)

// \
// * **Hero:** Bold headline: **“Grow Your Business
// with Expert Services & Online
// Courses
// ”**. Subheadline: practical, mentor‑led classes from \$2, delivered live on **Zoom**. CTA buttons: **Start Learning** and **See Services**. Hero illustration on right.
// * **Services Overview:** 4–6 icon cards (Web Dev, App Dev, SEO, Graphic Design, Digital Marketing). Short descriptions.
// \
// * **Featured Courses:** Grid of top courses
// with price badge **“
// From
// \$2”**. Include ratings, duration, and mention that classes are conducted live via **Zoom**.
// \
// * **Testimonials:** 3–4 rounded cards
// with avatars, role, short quote.
// \
// * **Logos strip:** Trusted by … (placeholder logos).
// \
// * **CTA band:** “Ready to level up? Join our next live
// class on Zoom.” Button: **Enroll Now**.
// \

// \
// ### 2) Services (\`/services\`)
// \

// \
// * **Grid layout** of all services with icons, 2–3 lines of copy, and a **Learn More** link leading to a modal or detail route. Include: Web Development, App Development, SEO, Graphic Design, Branding, Maintenance.
// \
// * **Consultation Service:** Add a special section/card for clients who want **personal consultation** (instead of group courses). This includes 1:1 mentorship or project guidance (Web Development, App Development, SEO, or Branding) at a **custom consultation price starting from \$20/hour**. CTA button: **Book a Consultation**.
// \

// \
// ### 3) Courses (\`/courses`)

// \
// * Filterable/searchable list of courses: **Web Dev Bootcamp**, **React & Next.js**, **Mobile Apps with React Native/Flutter**, **SEO Fundamentals**, **Digital Marketing 101**.
// \
// * Each course card: title, level, next cohort date, duration, price (from \$2), **Live on Zoom**, **Enroll** button.
// \
// * Course detail page template with syllabus outline, instructor card, FAQs, and **Enroll** CTA.
// \

// \
// ### 4) Pricing (\`/pricing\`)

// \
// * **Three 3‑column pricing cards** (Basic, Standard, Premium) with course/service bundles.
// \
// * Each card: icon, bold plan name, short description, price in **USD**, features list with checkmarks, and **Buy Now** button.
// * Note beneath: “All plans include lifetime access to recordings, Zoom live classes, and community support.”
// * Add separate **Consultation Pricing Section**: starting **\$20/hour** for personalized mentoring, private project help, or SEO strategy calls.

// ### 5) Contact (`/contact`)

// * **Elegant contact form** (name, email, message, interest dropdown).
// * **Google Map** section (embed placeholder) showing office location.
// * **Social icons** (Facebook, X, Instagram, LinkedIn).

// ### 6) Checkout (`/checkout/success` & `/checkout/cancel`)

// * Minimal **Stripe checkout confirmation** page with order summary, course name, learner email, Zoom class joining details, and next steps.
// * Cancel page with a friendly retry CTA.

// ### 7) Legal (`/privacy-policy`, `/refund-policy`)

// * Simple, readable legal pages linked in footer.

// ---

// ## Component/Section Requirements

// * **Card design:** rounded‑2xl, shadow‑xl, border border-gray-100, hover\:shadow-2xl, transition.
// * **Buttons:** primary = blue; secondary = outline dark gray.
// * **Badges:** pill badges for “From \$2”, “Zoom Live”, “Beginner/Intermediate/Advanced”.
// * **Animations:** Framer Motion for fade/slide on scroll; optional GSAP for hero illustration parallax.
// * **Forms:** React Hook Form or native controlled inputs; client‑side validation.
// * **Icons:** Use lucide‑react/Phosphor or inline SVGs.

// ---

// ## Example Copy Snippets (Replace as needed)

// * **Hero heading:** `Grow Your Business with Expert Services & Online Courses`
// * **Hero sub:** `Learn hands‑on with mentors. Live Zoom classes start from $2. Build real projects and get support.`
// * **Services blurbs:**

//   * Web Development — Fast, scalable websites and web apps.
//   * App Development — Cross‑platform mobile apps that users love.
//   * SEO — Technical audits, on‑page, and growth content.
//   * Graphic Design — Brand‑ready visuals and marketing assets.
//   * Consultation Service — 1:1 expert advice on your project or learning journey (from \$20/hour).
// * **CTA:** `Enroll from $2`

// ---

// ## Sample Pricing (USD)

// * **Basic** — `$2` — 1 intro Zoom class, Q\&A session, class recording, community access.
// * **Standard** — `$15` — 3 live Zoom classes, mini project, feedback session, certificate.
// * **Premium** — `$49` — full cohort (6–8 weeks) on Zoom, 1:1 mentor call, capstone review, career tips.
// * **Consultation (1:1)** — `from $20/hour` — personalized support, mentorship, or private project help.

// ---

// ## Tech & Implementation Notes

// * **Next.js (latest version, App Router)**, **Tailwind CSS**, **Framer Motion**.
// * Install libs: `npm i framer-motion lucide-react`.
// * **Stripe Checkout** for payments; after success redirect to `/checkout/success`.
// * Map: Google Maps iframe or react-google-maps placeholder.
// * Responsive: mobile‑first, grid/stack on small screens, 12‑col grid on desktop.
// * Include reusable components: `Header`, `Footer`, `Hero`, `IconCard`, `TestimonialCard`, `PricingCard`, `CourseCard`, `ContactForm`.

// ---

// ## Site Map (JSON for reference)

// ```json
// {
//   "routes": [
//     "/",
//     "/services",
//     "/courses",
//     "/pricing",
//     "/contact",
//     "/checkout/success",
//     "/checkout/cancel",
//     "/privacy-policy",
//     "/refund-policy"
//   ]
// }
