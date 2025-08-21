import Image from "next/image"

interface Logo {
  name: string
  logo: string
}

interface TrustedLogosProps {
  logos: Logo[]
}

export default function TrustedLogos({ logos }: TrustedLogosProps) {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-slate-600 font-medium">Trusted by students who now work at</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <Image
                src={logo.logo || "/placeholder.svg"}
                alt={`${logo.name} logo`}
                width={120}
                height={40}
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
