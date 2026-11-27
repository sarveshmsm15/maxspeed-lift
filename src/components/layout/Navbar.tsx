import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
          isScrolled ? 'glass shadow-sm' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" aria-label="MAXSPEED LIFT Home">
              <img
                src="/images/logo.jpg"
                alt="MAXSPEED LIFT"
                className="h-11 md:h-12 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-charcoal'
                      : 'text-warm-gray hover:text-charcoal'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute bottom-0 left-4 right-4 h-px bg-charcoal"
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-warm-gray hover:text-charcoal transition-colors"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="flex items-center gap-2 text-sm text-warm-gray hover:text-charcoal transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <Link
                to="/get-a-quote"
                className="ml-2 px-6 py-2.5 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-charcoal"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[85] bg-ivory flex flex-col pt-24 pb-8 px-8 lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1 flex flex-col justify-center">
              {siteConfig.navigation.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block py-3 heading-editorial text-3xl md:text-4xl transition-colors ${
                      location.pathname === item.path
                        ? 'text-charcoal'
                        : 'text-warm-gray hover:text-charcoal'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col gap-4 pt-8 border-t border-border-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/get-a-quote"
                className="w-full py-4 bg-charcoal text-ivory text-center text-sm font-medium rounded-full hover:bg-primary transition-colors"
              >
                Get a Quote
              </Link>
              <div className="flex items-center justify-center gap-6">
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="flex items-center gap-2 text-sm text-warm-gray"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.company.phone}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
