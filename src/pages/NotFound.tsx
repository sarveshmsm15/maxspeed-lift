import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn } from '@/components/animations/AnimationWrappers'

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page Not Found" path="/404" />
      <section className="min-h-[85vh] flex items-center justify-center pt-20 pb-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            {/* Subtle elevator indicator */}
            <div className="relative h-16 w-px bg-border-light mx-auto mb-8">
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-charcoal"
                animate={{ top: ['0%', '85%', '0%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <p className="heading-display text-8xl md:text-9xl text-border-light select-none mb-4">
              404
            </p>
            <h1 className="heading-editorial text-3xl md:text-4xl text-charcoal mb-4">
              Page Not Found
            </h1>
            <p className="text-body text-warm-gray mb-10 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-charcoal text-charcoal text-sm font-medium rounded-full hover:bg-charcoal hover:text-ivory transition-colors"
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
