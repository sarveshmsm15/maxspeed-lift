import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal, ImageReveal } from '@/components/animations/AnimationWrappers'
import { siteConfig, GalleryImage } from '@/config/site'

const categories = [
  'All',
  'Interiors',
  'Architecture',
  'Commercial',
  'Residential',
  'Industrial',
  'Healthcare',
  'Premium',
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages =
    activeCategory === 'All'
      ? siteConfig.gallery
      : siteConfig.gallery.filter((img) => img.category === activeCategory)

  return (
    <PageTransition>
      <SEO
        title="Gallery"
        description="Explore our curated visual gallery of modern elevator cabins, architectural shafts, and vertical mobility environments."
        path="/gallery"
      />

      {/* Page Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Gallery</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-7xl text-charcoal mb-6">
              Visual<br />
              <span className="italic font-normal">Excellence</span>
            </h1>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-lg text-warm-gray max-w-2xl">
              Architectural minimalism, refined cabin finishes, and contemporary elevator design aesthetics.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-charcoal text-ivory'
                    : 'border border-border-light text-warm-gray hover:text-charcoal hover:border-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, idx) => (
              <ImageReveal key={image.src + idx} delay={idx * 0.05}>
                <button
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`group relative w-full overflow-hidden rounded-2xl bg-beige text-left focus:outline-none focus:ring-2 focus:ring-charcoal ${
                    idx % 3 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="self-end w-10 h-10 rounded-full bg-ivory/90 text-charcoal flex items-center justify-center">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-label text-[10px] text-ivory/80 block mb-1">
                        {image.category}
                      </span>
                      <p className="text-sm text-ivory font-medium line-clamp-2">{image.alt}</p>
                    </div>
                  </div>
                </button>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[120] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 text-ivory hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
              <div className="mt-4 text-center">
                <span className="text-label text-[10px] text-ivory/50 block mb-1">
                  {selectedImage.category}
                </span>
                <p className="text-sm text-ivory/80">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}
