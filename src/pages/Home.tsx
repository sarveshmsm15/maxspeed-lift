import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, MessageCircle, Phone, Shield, Award, Users, Headphones, ShieldCheck, Zap, Wrench, Settings, RefreshCw, Hammer, ClipboardCheck, MessageSquare, Image } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import ElevatorFloorIndicator from '@/components/ui/ElevatorFloorIndicator'
import WaveInfographic from '@/components/sections/WaveInfographic'
import { FadeIn, TextReveal, StaggerChildren, ImageReveal } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'

const iconMap: Record<string, React.ElementType> = {
  Award, Users, Shield, Headphones, ShieldCheck, Zap,
  Wrench, Settings, RefreshCw, Hammer, ClipboardCheck, MessageSquare,
}

export default function Home() {
  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`

  return (
    <PageTransition>
      <SEO path="/" includeLocalBusiness />
      <ElevatorFloorIndicator />

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home/hero-bg.jpg"
            alt="Modern architectural building with glass facade"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/90 via-ivory/70 to-ivory" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <TextReveal className="mb-4">
            <p className="text-label text-warm-gray">Premium Elevator Solutions</p>
          </TextReveal>

          <TextReveal delay={0.2}>
            <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-charcoal mb-6">
              Moving Spaces.
              <br />
              <span className="italic font-normal">Elevating Experiences.</span>
            </h1>
          </TextReveal>

          <FadeIn delay={0.6}>
            <p className="text-body text-lg md:text-xl text-warm-gray max-w-2xl mx-auto mb-10">
              Professional elevator solutions engineered for safety, comfort, and architectural excellence. 
              Serving residential, commercial, and industrial spaces across Tamil Nadu.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="group flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors"
              >
                Explore Our Solutions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/gallery"
                className="group flex items-center gap-2 px-8 py-4 bg-ivory/90 backdrop-blur-sm text-charcoal text-sm font-medium rounded-full border border-charcoal/20 hover:bg-ivory hover:border-charcoal transition-colors"
              >
                <Image className="w-4 h-4" />
                View Catalogue
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-charcoal text-charcoal text-sm font-medium rounded-full hover:bg-charcoal hover:text-ivory transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-warm-gray" />
        </motion.div>
      </section>

      {/* ===== COMPANY INTRO ===== */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <FadeIn>
                <p className="text-label text-warm-gray mb-4">About Us</p>
              </FadeIn>
              <TextReveal>
                <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-8">
                  Precision in Every Movement.
                </h2>
              </TextReveal>
              <FadeIn delay={0.3}>
                <p className="text-body text-warm-gray mb-6">
                  MAXSPEED LIFT is a professional elevator solutions provider based in Pallikonda, Vellore district, Tamil Nadu. 
                  We specialize in the supply, installation, and maintenance of passenger lifts, home elevators, 
                  and commercial elevator systems.
                </p>
                <p className="text-body text-warm-gray mb-8">
                  Our approach combines quality engineering with dedicated customer service, 
                  ensuring every installation meets the highest standards of safety and performance.
                </p>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-warm-gray transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </div>

            <ImageReveal>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/images/home/about-intro.jpg"
                  alt="Modern commercial building lobby"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <FadeIn>
              <p className="text-label text-warm-gray mb-4">Our Products</p>
            </FadeIn>
            <TextReveal>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-charcoal">
                Engineered for Excellence
              </h2>
            </TextReveal>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="text-label text-[10px] px-3 py-1 bg-ivory/90 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <h3 className="heading-editorial text-xl mb-2 text-charcoal">{product.name}</h3>
                <p className="text-body text-sm text-warm-gray mb-4">{product.shortDescription}</p>
                <Link
                  to={`/products/${product.slug}`}
                  className="group/link inline-flex items-center gap-1 text-sm font-medium text-charcoal hover:text-warm-gray transition-colors"
                >
                  View Details
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 md:py-32 bg-charcoal text-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <FadeIn>
              <p className="text-label text-ivory/40 mb-4">Our Services</p>
            </FadeIn>
            <TextReveal>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-ivory">
                Complete Elevator Solutions
              </h2>
            </TextReveal>
          </div>

          <WaveInfographic
            theme="dark"
            items={siteConfig.services.map((service) => ({
              id: service.id,
              title: service.title,
              description: service.description,
              icon: iconMap[service.icon] || Shield,
            }))}
          />

          <FadeIn delay={0.4} className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-ivory/30 text-ivory text-sm font-medium rounded-full hover:bg-ivory hover:text-charcoal transition-colors"
            >
              All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <FadeIn>
              <p className="text-label text-warm-gray mb-4">Why MAXSPEED LIFT</p>
            </FadeIn>
            <TextReveal>
              <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-charcoal">
                Built on Trust.<br />
                <span className="italic font-normal">Driven by Quality.</span>
              </h2>
            </TextReveal>
          </div>

          <WaveInfographic
            theme="light"
            items={siteConfig.whyChooseUs.map((item, idx) => ({
              id: `why-${idx}`,
              title: item.title,
              description: item.description,
              icon: iconMap[item.icon] || Shield,
            }))}
          />
        </div>
      </section>

      {/* ===== ELEVATOR EXPERIENCE ===== */}
      <section className="py-24 md:py-32 bg-beige/40">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-label text-warm-gray mb-4">The Experience</p>
              </FadeIn>
              <TextReveal>
                <h2 className="heading-display text-4xl md:text-5xl text-charcoal mb-6">
                  Architectural Craftsmanship in Every Detail.
                </h2>
              </TextReveal>
              <FadeIn delay={0.3}>
                <p className="text-body text-warm-gray mb-6">
                  From brushed stainless steel cabins and precision-aligned doors to intuitive control panels
                  and warm ambient illumination, every detail is designed to complement modern architecture.
                </p>
                <Link
                  to="/gallery"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-warm-gray transition-colors"
                >
                  Explore Design Gallery
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <ImageReveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="/images/home/experience-1.jpg"
                    alt="Modern stainless steel elevator cabin interior"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </ImageReveal>
              <ImageReveal delay={0.2}>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                  <img
                    src="/images/home/experience-2.jpg"
                    alt="Contemporary residential architectural installation"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="py-8 border-y border-border-light overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-label text-lg text-border-light mx-8">
              ELEVATORS &nbsp;•&nbsp; INSTALLATION &nbsp;•&nbsp; MAINTENANCE &nbsp;•&nbsp; MODERNIZATION &nbsp;•&nbsp; REPAIR &nbsp;•&nbsp; CONSULTATION
            </span>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <TextReveal>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              Ready to Elevate<br />
              <span className="italic font-normal">Your Space?</span>
            </h2>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-lg text-warm-gray mb-10 max-w-xl mx-auto">
              Whether you need a new elevator installation, maintenance, or modernization — 
              our team is ready to help.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-a-quote"
                className="group flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors"
              >
                Get a Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-[#25D366] text-[#25D366] text-sm font-medium rounded-full hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="flex items-center gap-2 px-8 py-4 text-warm-gray text-sm font-medium hover:text-charcoal transition-colors"
              >
                <Phone className="w-4 h-4" /> {siteConfig.company.phone}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
