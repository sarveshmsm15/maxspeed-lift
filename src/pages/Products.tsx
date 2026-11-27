import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal, StaggerChildren, ImageReveal } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'

export default function Products() {
  return (
    <PageTransition>
      <SEO
        title="Products"
        description="Explore MAXSPEED LIFT's range of elevator solutions — passenger, home, hospital, goods, capsule, and commercial elevators."
        path="/products"
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Our Products</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-7xl text-charcoal mb-6">
              Elevator Solutions<br />
              <span className="italic font-normal">for Every Need</span>
            </h1>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-lg text-warm-gray max-w-2xl">
              From residential home lifts to heavy-duty commercial systems, we offer a comprehensive 
              range of elevator solutions tailored to your specific requirements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.products.map((product) => {
              const enquiryMsg = `Hello MAXSPEED LIFT, I am interested in your ${product.name}. Please provide more details and pricing information.`
              const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(enquiryMsg)}`

              return (
                <div key={product.id} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-500">
                  <ImageReveal>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-label text-[10px] px-3 py-1 bg-ivory/90 rounded-full backdrop-blur-sm">
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </ImageReveal>

                  <div className="p-6">
                    <h3 className="heading-editorial text-xl text-charcoal mb-2">{product.name}</h3>
                    <p className="text-body text-sm text-warm-gray mb-6">{product.shortDescription}</p>
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/products/${product.slug}`}
                        className="group/btn flex items-center gap-1.5 px-5 py-2.5 bg-charcoal text-ivory text-xs font-medium rounded-full hover:bg-primary transition-colors"
                      >
                        View Details
                        <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-5 py-2.5 border border-[#25D366] text-[#25D366] text-xs font-medium rounded-full hover:bg-[#25D366] hover:text-white transition-colors"
                      >
                        <MessageCircle className="w-3 h-3" />
                        Enquire
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <TextReveal>
            <h2 className="heading-display text-3xl md:text-4xl text-ivory mb-4">
              Need a Custom Solution?
            </h2>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-ivory/60 mb-8 max-w-lg mx-auto">
              Every building is unique. Contact us to discuss your specific elevator requirements 
              and we'll help you find the right solution.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-ivory text-charcoal text-sm font-medium rounded-full hover:bg-beige transition-colors"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
