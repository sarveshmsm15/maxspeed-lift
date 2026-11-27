import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const floors = ['G', '01', '02', '03', '04', '05']

export default function ElevatorFloorIndicator() {
  const [activeFloor, setActiveFloor] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return
      const ratio = Math.min(Math.max(scrollTop / docHeight, 0), 1)
      const index = Math.min(Math.floor(ratio * floors.length), floors.length - 1)
      setActiveFloor(index)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <aside
      aria-label="Page floor indicator"
      className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 pointer-events-none select-none"
    >
      <span className="text-[9px] tracking-[0.2em] uppercase text-warm-gray">FLR</span>
      <div className="glass rounded-full px-2.5 py-4 flex flex-col items-center gap-2.5 shadow-sm">
        {floors.map((floor, index) => {
          const isActive = index === activeFloor
          return (
            <div key={floor} className="relative flex items-center justify-center w-6 h-6">
              {isActive && !prefersReducedMotion && (
                <motion.span
                  layoutId="elevator-floor-active"
                  className="absolute inset-0 rounded-full bg-charcoal"
                  transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                />
              )}
              {isActive && prefersReducedMotion && (
                <span className="absolute inset-0 rounded-full bg-charcoal" />
              )}
              <span
                className={`relative z-10 text-[10px] font-medium tracking-wider transition-colors ${
                  isActive ? 'text-ivory' : 'text-warm-gray'
                }`}
              >
                {floor}
              </span>
            </div>
          )
        })}
      </div>
    </aside>
  )
}
