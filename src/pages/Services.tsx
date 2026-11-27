import { Link } from 'react-router-dom'
import {
  Wrench,
  Settings,
  RefreshCw,
  Hammer,
  ClipboardCheck,
  MessageSquare,
  MessageCircle,
  Phone,
  ArrowRight,
  Shield,
} from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal, StaggerChildren } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  Settings,
  RefreshCw,
  Hammer,
  ClipboardCheck,
  MessageSquare,
}

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We listen to your building requirements, usage patterns, and architectural preferences.',
  },
  {
    step: '02',
    title: 'Site Assessment',
    description: 'Our technical team evaluates shaft dimensions, structural readiness, and safety parameters.',
  },
  {
    step: '03',
    title: 'Installation',
    description: 'Precision assembly, wiring, and thorough operational testing by trained technicians.',
  },
  {
    step: '04',
    title: 'Ongoing Support',
    description: 'Scheduled preventive maintenance and responsive repair assistance to keep systems reliable.',
  },
]

export default function Services() {
  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`

  return (
    <PageTransition>
      <SEO
        title="Services"
        description="Complete elevator care from MAXSPEED LIFT — installation, maintenance, modernization, repair, and technical consultation in Tamil Nadu."
        path="/services"
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Our Services</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-7xl text-charcoal mb-6">
              Complete Elevator<br />
              <span className="italic font-normal">Care &amp; Support</span>
            </h1>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-lg text-warm-gray max-w-2xl">
              From new installations to preventive maintenance and modernization, our team delivers
              dependable engineering support throughout your elevator&apos;s lifecycle.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.services.map((service) => {
              const Icon = iconMap[service.icon] || Shield
              const serviceMsg = `Hello MAXSPEED LIFT, I would like to enquire about your ${service.title} service.`
              const serviceWaUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(serviceMsg)}`

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-8 border border-border-light hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-beige text-charcoal mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="heading-editorial text-2xl text-charcoal mb-3">
                      {service.title}
                    </h2>
                    <p className="text-body text-sm text-warm-gray mb-8">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={serviceWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-[#25D366] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire on WhatsApp
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-label text-warm-gray mb-4">How We Work</p>
            </FadeIn>
            <TextReveal>
              <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-charcoal">
                Our Service Process
              </h2>
            </TextReveal>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="relative p-6 rounded-2xl border border-border-light bg-ivory/50">
                <span className="heading-display text-4xl text-border-light block mb-4">
                  {item.step}
                </span>
                <h3 className="heading-editorial text-xl text-charcoal mb-2">{item.title}</h3>
                <p className="text-body text-sm text-warm-gray">{item.description}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <TextReveal>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">
              Need Elevator Service?
            </h2>
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-body text-ivory/60 mb-10 max-w-lg mx-auto">
              Reach out to schedule an inspection, request maintenance support, or discuss a new installation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-ivory text-charcoal text-sm font-medium rounded-full hover:bg-beige transition-colors"
              >
                Contact Us
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-[#25D366] text-[#25D366] text-sm font-medium rounded-full hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="flex items-center gap-2 px-8 py-4 text-ivory/70 text-sm font-medium hover:text-ivory transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.company.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
