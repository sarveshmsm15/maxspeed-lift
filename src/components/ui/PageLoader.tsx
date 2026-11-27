import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ivory"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Elevator indicator */}
        <div className="relative mb-12">
          <motion.div
            className="w-px h-24 bg-border-light mx-auto"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-charcoal"
            initial={{ top: 0 }}
            animate={{ top: '100%' }}
            transition={{ duration: 1.4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </div>

        {/* Logo text */}
        <motion.h1
          className="heading-display text-3xl md:text-4xl text-charcoal mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          MAXSPEED
        </motion.h1>
        <motion.p
          className="text-label text-warm-gray mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          LIFT
        </motion.p>

        {/* Progress bar */}
        <div className="w-48 h-px bg-border-light overflow-hidden">
          <motion.div
            className="h-full bg-charcoal origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: Math.min(progress / 100, 1) }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
