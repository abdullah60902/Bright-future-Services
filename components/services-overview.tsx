import { Code, Smartphone, Search, Palette, TrendingUp, Users, Target } from "lucide-react"

const iconMap = {
  Code,
  Smartphone,
  Search,
  Palette,
  TrendingUp,
  Users,
  Target,
}

interface Service {
  id: number
  title: string
  description: string
  icon: keyof typeof iconMap
}

interface ServicesOverviewProps {
  services: Service[]
}

export default function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From development to marketing, we provide comprehensive digital solutions to help your business thrive in
            the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 card-shadow group hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
