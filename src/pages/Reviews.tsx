import { Link } from 'react-router-dom'
import { Star, ArrowUpRight, Shield, Award, Users, Headphones, ShieldCheck, Zap, ArrowRight } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal, StaggerChildren } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'

const iconMap: Record<string, React.ElementType> = {
  Award,
  Users,
  Shield,
  Headphones,
  ShieldCheck,
  Zap,
}

export default function Reviews() {
  return (
    <PageTransition>
      <SEO
        title="Customer Reviews"
        description="Read verified customer feedback and ratings for MAXSPEED LIFT on Google Maps and local business directories."
        path="/reviews"
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Reviews</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-7xl text-charcoal mb-6">
              What Our<br />
              <span className="italic font-normal">Customers Say</span>
            </h1>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-lg text-warm-gray max-w-2xl">
              Customer trust is earned through reliable engineering, clear communication, and
              dependable after-sales service.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Rating Overview Card */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <FadeIn>
            <div className="glass rounded-3xl p-8 md:p-14 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-6" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-charcoal text-charcoal" />
                ))}
              </div>
              <p className="text-label text-warm-gray mb-3">Verified Business Listing</p>
              <h2 className="heading-editorial text-2xl md:text-4xl text-charcoal mb-6 max-w-2xl mx-auto">
                We value every customer&apos;s feedback. Our reviews are available on Google Maps and local business directories.
              </h2>
              <p className="text-body text-sm text-warm-gray max-w-xl mx-auto mb-10">
                To ensure authenticity, we link directly to our official Google Maps business listing
                rather than publishing unverified quotes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={siteConfig.company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors"
                >
                  View Our Reviews on Google Maps
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-charcoal text-charcoal text-sm font-medium rounded-full hover:bg-charcoal hover:text-ivory transition-colors"
                >
                  Share Your Experience
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-label text-warm-gray mb-4">Our Commitment</p>
            </FadeIn>
            <TextReveal>
              <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-charcoal">
                Why Clients Choose MAXSPEED LIFT
              </h2>
            </TextReveal>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon] || Shield
              return (
                <div key={item.title} className="p-8 rounded-2xl border border-border-light bg-ivory/40">
                  <Icon className="w-6 h-6 text-charcoal mb-5" />
                  <h3 className="heading-editorial text-xl text-charcoal mb-3">{item.title}</h3>
                  <p className="text-body text-sm text-warm-gray">{item.description}</p>
                </div>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <TextReveal>
            <h2 className="heading-display text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">
              Experience Our Service
            </h2>
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-body text-ivory/60 mb-10 max-w-lg mx-auto">
              Ready to discuss your elevator installation or service requirements?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-a-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ivory text-charcoal text-sm font-medium rounded-full hover:bg-beige transition-colors"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-ivory/30 text-ivory text-sm font-medium rounded-full hover:bg-ivory/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
