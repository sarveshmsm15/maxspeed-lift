import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Info } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal, StaggerChildren, ImageReveal } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'

const applicationSectors = [
  {
    title: 'Residential',
    description: 'Compact home lifts and passenger elevators designed for private residences, villas, and multi-storey apartments.',
    image: '/images/projects/residential.jpg',
  },
  {
    title: 'Commercial',
    description: 'Dependable vertical mobility for office complexes, business centres, and mixed-use developments.',
    image: '/images/projects/commercial.jpg',
  },
  {
    title: 'Healthcare',
    description: 'Spacious, smooth-riding elevator configurations suited for clinics, nursing homes, and medical centres.',
    image: '/images/projects/healthcare.jpg',
  },
  {
    title: 'Industrial',
    description: 'Heavy-duty goods elevators and material handling systems built for warehouses and manufacturing units.',
    image: '/images/projects/industrial.jpg',
  },
  {
    title: 'Hospitality',
    description: 'Refined cabin interiors and quiet operation tailored for hotels, resorts, and guest accommodations.',
    image: '/images/projects/hospitality.jpg',
  },
  {
    title: 'Retail & Showrooms',
    description: 'Accessible and architectural lift solutions enhancing customer flow across multi-level retail spaces.',
    image: '/images/projects/retail.jpg',
  },
]

export default function Projects() {
  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`

  return (
    <PageTransition>
      <SEO
        title="Projects & Applications"
        description="Explore elevator application areas and vertical mobility solutions from MAXSPEED LIFT across residential, commercial, healthcare, and industrial sectors."
        path="/projects"
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Projects &amp; Applications</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-7xl text-charcoal mb-6">
              Applications &amp;<br />
              <span className="italic font-normal">Solutions</span>
            </h1>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-lg text-warm-gray max-w-2xl">
              Discover how MAXSPEED LIFT elevator systems are configured to serve diverse
              architectural and operational environments.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Disclaimer Notice */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-beige/60 border border-border-light">
            <Info className="w-5 h-5 text-warm-gray shrink-0 mt-0.5" />
            <p className="text-xs text-warm-gray leading-relaxed">
              The sectors below illustrate representative elevator application areas. For verified local installation
              references in Vellore, Tirupattur, and Tamil Nadu, please contact our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Application Sectors Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationSectors.map((sector) => (
              <div
                key={sector.title}
                className="group relative rounded-2xl overflow-hidden bg-charcoal aspect-[4/5]"
              >
                <ImageReveal className="w-full h-full">
                  <img
                    src={sector.image}
                    alt={`${sector.title} elevator application`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    loading="lazy"
                  />
                </ImageReveal>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-ivory">
                  <span className="text-label text-[10px] text-ivory/60 block mb-2">
                    Application Sector
                  </span>
                  <h2 className="heading-editorial text-2xl text-ivory mb-3">
                    {sector.title}
                  </h2>
                  <p className="text-body text-sm text-ivory/80">
                    {sector.description}
                  </p>
                </div>
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
              Have a Project in Mind?
            </h2>
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-body text-ivory/60 mb-10 max-w-lg mx-auto">
              Speak with our team to discuss your building specifications, shaft requirements, and timelines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-a-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-ivory text-charcoal text-sm font-medium rounded-full hover:bg-beige transition-colors"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-[#25D366] text-[#25D366] text-sm font-medium rounded-full hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
