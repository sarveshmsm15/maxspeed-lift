import { Link } from 'react-router-dom'
import { Phone, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { FadeIn } from '@/components/animations/AnimationWrappers'

export default function Footer() {
  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`
  const currentYear = new Date().getFullYear()

  const handleCookieSettings = () => {
    localStorage.removeItem('maxspeed-cookie-consent')
    window.location.reload()
  }

  return (
    <footer className="bg-charcoal text-ivory/80">
      {/* Marquee */}
      <div className="border-b border-white/10 py-6 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="heading-display text-5xl md:text-7xl text-white/5 mx-8">
              MAXSPEED LIFT
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block bg-white rounded-xl px-3.5 py-2 mb-6" aria-label="MAXSPEED LIFT Home">
                <img
                  src="/images/logo.jpg"
                  alt="MAXSPEED LIFT"
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-body text-sm text-ivory/60 mb-6 max-w-xs">
                Premium elevator solutions for residential, commercial, and industrial spaces in Tamil Nadu, India.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-white/40 transition-colors"
                  aria-label="Call us"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-white/40 transition-colors"
                  aria-label="Directions"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-label text-ivory/40 mb-6">Company</h4>
              <ul className="space-y-3">
                {siteConfig.footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-label text-ivory/40 mb-6">Legal</h4>
              <ul className="space-y-3">
                {siteConfig.footerLinks.legal.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={handleCookieSettings}
                    className="text-sm text-ivory/60 hover:text-ivory transition-colors"
                  >
                    Cookie Settings
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-label text-ivory/40 mb-6">Contact</h4>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="block text-sm text-ivory/60 hover:text-ivory transition-colors"
                >
                  {siteConfig.company.phone}
                </a>
                <div className="text-sm text-ivory/60">
                  <p>{siteConfig.company.address.street}</p>
                  <p>{siteConfig.company.address.area}, {siteConfig.company.address.city}</p>
                  <p>{siteConfig.company.address.state} — {siteConfig.company.address.pincode}</p>
                </div>
                <a
                  href={siteConfig.company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-ivory/60 hover:text-ivory transition-colors"
                >
                  Get Directions <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">
            © {currentYear} MAXSPEED LIFT. All rights reserved.
          </p>
          <p className="text-xs text-ivory/40">
            {siteConfig.company.address.area}, {siteConfig.company.address.city}, {siteConfig.company.address.state}
          </p>
        </div>
      </div>
    </footer>
  )
}
