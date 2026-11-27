import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal, ImageReveal, StaggerChildren } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = siteConfig.products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <PageTransition>
        <SEO title="Product Not Found" path={`/products/${slug || ''}`} />
        <section className="pt-40 pb-32 min-h-[70vh] flex items-center justify-center">
          <div className="max-w-xl mx-auto px-6 text-center">
            <p className="text-label text-warm-gray mb-4">404</p>
            <h1 className="heading-display text-4xl md:text-5xl text-charcoal mb-6">
              Product Not Found
            </h1>
            <p className="text-body text-warm-gray mb-8">
              The elevator solution you are looking for is not available or may have moved.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </section>
      </PageTransition>
    )
  }

  const relatedProducts = siteConfig.products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3)

  const enquiryMsg = `Hello MAXSPEED LIFT, I would like to enquire about your ${product.name}. Please share specifications and quotation details.`
  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(enquiryMsg)}`

  return (
    <PageTransition>
      <SEO
        title={product.name}
        description={product.shortDescription}
        image={product.image}
        path={`/products/${product.slug}`}
      />

      {/* Breadcrumb */}
      <section className="pt-28 pb-6">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-label text-[11px] text-warm-gray">
            <Link to="/" className="hover:text-charcoal transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-charcoal transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ImageReveal>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-beige">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-label text-[10px] px-3 py-1.5 bg-ivory/90 rounded-full backdrop-blur-sm text-charcoal">
                    {product.category}
                  </span>
                </div>
              </div>
            </ImageReveal>

            <div>
              <FadeIn>
                <p className="text-label text-warm-gray mb-4">{product.category} Series</p>
              </FadeIn>
              <TextReveal>
                <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                  {product.name}
                </h1>
              </TextReveal>
              <FadeIn delay={0.2}>
                <p className="text-body text-lg text-warm-gray mb-8">
                  {product.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center gap-4 mb-10">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire Now
                  </a>
                  <a
                    href={`tel:${siteConfig.company.phone}`}
                    className="flex items-center gap-2 px-8 py-4 border border-charcoal text-charcoal text-sm font-medium rounded-full hover:bg-charcoal hover:text-ivory transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="border-t border-border-light pt-8">
                  <h2 className="heading-editorial text-2xl text-charcoal mb-6">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-beige text-charcoal shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-body text-sm text-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-warm-gray mt-6">
                    Specifications and configurations can be customized based on site survey and building requirements.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <FadeIn>
                <p className="text-label text-warm-gray mb-3">Explore More</p>
              </FadeIn>
              <TextReveal>
                <h2 className="heading-editorial text-3xl md:text-4xl text-charcoal">
                  Other Elevator Solutions
                </h2>
              </TextReveal>
            </div>
            <Link
              to="/products"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-warm-gray transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.slug}`}
                className="group block bg-ivory rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-label text-[10px] text-warm-gray">{item.category}</span>
                  <h3 className="heading-editorial text-xl text-charcoal mt-1 mb-2">{item.name}</h3>
                  <p className="text-body text-sm text-warm-gray line-clamp-2">{item.shortDescription}</p>
                </div>
              </Link>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <TextReveal>
            <h2 className="heading-display text-3xl md:text-4xl text-ivory mb-4">
              Interested in {product.name}?
            </h2>
          </TextReveal>
          <FadeIn delay={0.2}>
            <p className="text-body text-ivory/60 mb-8 max-w-lg mx-auto">
              Request a site assessment or speak directly with our engineering team for tailored specifications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-a-quote"
                className="px-8 py-4 bg-ivory text-charcoal text-sm font-medium rounded-full hover:bg-beige transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-[#25D366] text-[#25D366] text-sm font-medium rounded-full hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Enquiry
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}
