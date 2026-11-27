import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Phone, MapPin, Shield, Heart, Eye } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal, StaggerChildren, ImageReveal } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'

const pillars = [
  {
    icon: Shield,
    title: 'Quality Engineering',
    description: 'Every elevator system we provide meets rigorous quality standards. We work with reliable components and proven engineering practices to deliver systems that perform consistently.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Your requirements guide every decision. From initial consultation through installation and ongoing support, we prioritize clear communication and responsive service.',
  },
  {
    icon: Eye,
    title: 'Safety First',
    description: 'Safety is integrated into every aspect of our work. Our installations follow established safety protocols, and our maintenance programs help ensure ongoing safe operation.',
  },
]

export default function About() {
  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`

  return (
    <PageTransition>
      <SEO
        title="About Us"
        description="Learn about MAXSPEED LIFT — a professional elevator solutions provider based in Vellore, Tamil Nadu, specializing in passenger, home, and commercial elevators."
        path="/about"
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">About Us</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-7xl text-charcoal mb-6">
              Engineering Vertical<br />
              <span className="italic font-normal">Mobility</span>
            </h1>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-lg text-warm-gray max-w-2xl">
              MAXSPEED LIFT is a dedicated elevator solutions provider, committed to delivering 
              quality vertical transportation systems for diverse building environments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ImageReveal>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/images/about/company-story.jpg"
                  alt="Modern building architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ImageReveal>

            <div>
              <FadeIn>
                <p className="text-label text-warm-gray mb-4">Our Story</p>
              </FadeIn>
              <TextReveal>
                <h2 className="heading-editorial text-3xl md:text-4xl text-charcoal mb-8">
                  Professional Elevator Solutions in Tamil Nadu
                </h2>
              </TextReveal>
              <FadeIn delay={0.3}>
                <div className="space-y-5 text-body text-warm-gray">
                  <p>
                    Based in Pallikonda, near Vellore in Tamil Nadu, MAXSPEED LIFT serves clients 
                    across the region with comprehensive elevator solutions. Our services span from 
                    consultation and installation to ongoing maintenance and repair.
                  </p>
                  <p>
                    We work with a range of elevator types — from compact home elevators to robust 
                    commercial and goods lifting systems. Our team brings technical expertise and 
                    a customer-first approach to every project.
                  </p>
                  <p>
                    Our commitment is straightforward: deliver reliable elevator systems, provide 
                    responsive support, and ensure every installation meets the safety and quality 
                    standards our customers expect.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-label text-warm-gray mb-4">Our Approach</p>
            </FadeIn>
            <TextReveal>
              <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-charcoal">
                What Guides Us
              </h2>
            </TextReveal>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-beige mb-6">
                  <pillar.icon className="w-6 h-6 text-charcoal" />
                </div>
                <h3 className="heading-editorial text-xl text-charcoal mb-4">{pillar.title}</h3>
                <p className="text-body text-sm text-warm-gray">{pillar.description}</p>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Service Region */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <p className="text-label text-warm-gray mb-4">Service Region</p>
              </FadeIn>
              <TextReveal>
                <h2 className="heading-editorial text-3xl md:text-4xl text-charcoal mb-8">
                  Serving Tamil Nadu
                </h2>
              </TextReveal>
              <FadeIn delay={0.3}>
                <p className="text-body text-warm-gray mb-6">
                  Our operations are based in the Vellore–Tirupattur region, and we serve 
                  clients across Tamil Nadu. Our local presence ensures responsive service 
                  and support for every installation.
                </p>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-beige/50">
                  <MapPin className="w-5 h-5 text-charcoal mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-charcoal">{siteConfig.company.address.full}</p>
                    <a
                      href={siteConfig.company.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-warm-gray hover:text-charcoal mt-1 transition-colors"
                    >
                      Get Directions <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="left">
              <div className="aspect-square rounded-2xl bg-beige flex items-center justify-center">
                <a
                  href={siteConfig.company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 text-warm-gray hover:text-charcoal transition-colors"
                >
                  <MapPin className="w-12 h-12" />
                  <span className="text-label">View on Google Maps</span>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <TextReveal>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">
              Let's Work Together
            </h2>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-ivory/60 mb-10 max-w-lg mx-auto">
              Have a project in mind? We'd love to discuss how we can help with your elevator requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-ivory text-charcoal text-sm font-medium rounded-full hover:bg-beige transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-ivory/30 text-ivory text-sm font-medium rounded-full hover:bg-ivory/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="flex items-center gap-2 px-8 py-4 text-ivory/60 text-sm font-medium hover:text-ivory transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
