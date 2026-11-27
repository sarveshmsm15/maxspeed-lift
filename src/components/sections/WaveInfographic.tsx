import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export interface WaveItem {
  id: string
  title: string
  description: string
  icon: React.ElementType
}

interface WaveInfographicProps {
  items: WaveItem[]
  theme?: 'dark' | 'light'
}

/**
 * Alternating 6-node sinusoidal infographic matching the Quiet Luxury theme.
 * Desktop: horizontal wave path with alternating top/bottom text blocks.
 * Mobile/Tablet: clean vertical connected timeline.
 */
export default function WaveInfographic({ items, theme = 'light' }: WaveInfographicProps) {
  const prefersReducedMotion = useReducedMotion()
  const isDark = theme === 'dark'

  // Node vertical offsets on desktop (alternating low / high along the S-curve)
  // Index 0: low, 1: high, 2: low, 3: high, 4: low, 5: high
  const isTopText = (idx: number) => idx % 2 === 1

  const trackStroke = isDark ? 'rgba(250, 246, 240, 0.14)' : 'rgba(23, 23, 23, 0.12)'
  const activeStroke = isDark ? 'rgba(250, 246, 240, 0.45)' : 'rgba(23, 23, 23, 0.55)'
  const nodeBg = isDark
    ? 'bg-[#1F1F1F] border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.5)]'
    : 'bg-white border-border-light shadow-[0_12px_32px_rgba(23,23,23,0.08)]'
  const ringClass = isDark ? 'border-white/10' : 'border-border-light/80'
  const iconColor = isDark ? 'text-ivory' : 'text-charcoal'
  const titleColor = isDark ? 'text-ivory' : 'text-charcoal'
  const descColor = isDark ? 'text-ivory/65' : 'text-warm-gray'
  const numColor = isDark ? 'text-ivory/35' : 'text-warm-gray/60'

  return (
    <>
      {/* Desktop Sinusoidal Wave (lg and above) */}
      <div className="hidden lg:block relative w-full py-4">
        {/* Continuous SVG S-Curve Ribbon centered on the 150px wave band */}
        <svg
          viewBox="0 0 1200 150"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[150px] pointer-events-none"
        >
          {/* Base subtle track */}
          <path
            d="M 20 100 C 60 100, 75 100, 100 100 C 165 100, 235 50, 300 50 C 365 50, 435 100, 500 100 C 565 100, 635 50, 700 50 C 765 50, 835 100, 900 100 C 965 100, 1035 50, 1100 50 C 1140 50, 1165 75, 1185 75"
            stroke={trackStroke}
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Animated accent stroke */}
          <motion.path
            d="M 20 100 C 60 100, 75 100, 100 100 C 165 100, 235 50, 300 50 C 365 50, 435 100, 500 100 C 565 100, 635 50, 700 50 C 765 50, 835 100, 900 100 C 965 100, 1035 50, 1100 50 C 1140 50, 1165 75, 1185 75"
            stroke={activeStroke}
            strokeWidth="2"
            strokeLinecap="round"
            initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        {/* 6 Nodes Grid: Top Row (auto) | Wave Band (150px) | Bottom Row (auto) */}
        <div className="relative z-10 grid grid-cols-6 gap-4 xl:gap-6 items-stretch">
          {items.map((item, idx) => {
            const Icon = item.icon
            const textOnTop = isTopText(idx)

            return (
              <motion.div
                key={item.id}
                className="relative flex flex-col items-center"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: textOnTop ? -16 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Top Text Block (for odd indices: 02, 04, 06) */}
                <div className="w-full min-h-[168px] flex flex-col justify-end text-center px-1.5 pb-4">
                  {textOnTop && (
                    <>
                      <span className={`text-label text-[10px] mb-1.5 ${numColor}`}>
                        0{idx + 1}
                      </span>
                      <h3 className={`heading-editorial text-base xl:text-lg mb-2 leading-snug ${titleColor}`}>
                        {item.title}
                      </h3>
                      <p className={`text-body text-xs leading-relaxed ${descColor}`}>
                        {item.description}
                      </p>
                    </>
                  )}
                </div>

                {/* Circular Icon Node positioned strictly inside 150px wave band */}
                <div className="h-[150px] w-full flex items-center justify-center shrink-0">
                  <div
                    className={`relative flex items-center justify-center w-20 h-20 rounded-full border transition-transform duration-300 hover:scale-105 ${nodeBg} ${
                      textOnTop ? '-translate-y-6' : 'translate-y-6'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full border flex items-center justify-center ${ringClass}`}>
                      <Icon className={`w-6 h-6 stroke-[1.5] ${iconColor}`} />
                    </div>
                  </div>
                </div>

                {/* Bottom Text Block (for even indices: 01, 03, 05) */}
                <div className="w-full min-h-[168px] flex flex-col justify-start text-center px-1.5 pt-4">
                  {!textOnTop && (
                    <>
                      <span className={`text-label text-[10px] mb-1.5 ${numColor}`}>
                        0{idx + 1}
                      </span>
                      <h3 className={`heading-editorial text-base xl:text-lg mb-2 leading-snug ${titleColor}`}>
                        {item.title}
                      </h3>
                      <p className={`text-body text-xs leading-relaxed ${descColor}`}>
                        {item.description}
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile & Tablet Vertical Connected Timeline (< lg) */}
      <div className="lg:hidden relative space-y-6">
        <div
          aria-hidden="true"
          className={`absolute left-6 top-6 bottom-6 w-px ${
            isDark ? 'bg-white/15' : 'bg-border-light'
          }`}
        />
        {items.map((item, idx) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.id}
              className="relative flex items-start gap-4 sm:gap-5"
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <div
                className={`relative z-10 shrink-0 w-12 h-12 rounded-full border flex items-center justify-center ${nodeBg}`}
              >
                <Icon className={`w-5 h-5 stroke-[1.5] ${iconColor}`} />
              </div>
              <div
                className={`flex-1 min-w-0 rounded-2xl border p-4 sm:p-5 ${
                  isDark
                    ? 'bg-white/[0.03] border-white/10'
                    : 'bg-white/70 border-border-light'
                }`}
              >
                <span className={`text-label text-[10px] block mb-1 ${numColor}`}>
                  0{idx + 1}
                </span>
                <h3 className={`heading-editorial text-lg mb-1.5 leading-snug ${titleColor}`}>
                  {item.title}
                </h3>
                <p className={`text-body text-sm leading-relaxed ${descColor}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </>
  )
}
