import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Clock, ArrowUpRight, Send, Check } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'
import { contactFormSchema, validateForm, validateField } from '@/lib/validation'

const servicesList = [
  'Elevator Installation',
  'Lift Maintenance',
  'Elevator Modernization',
  'Elevator Repair',
  'Technical Inspection',
  'Elevator Consultation',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [serverMessage, setServerMessage] = useState('')

  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      const err = validateField(value, contactFormSchema[field] || [])
      setErrors((prev) => {
        const next = { ...prev }
        if (err) next[field] = err
        else delete next[field]
        return next
      })
    }
  }

  const handleBlur = (field: string) => {
    const err = validateField(formData[field as keyof typeof formData], contactFormSchema[field] || [])
    setErrors((prev) => {
      const next = { ...prev }
      if (err) next[field] = err
      else delete next[field]
      return next
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm(formData, contactFormSchema)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setServerMessage('')

    // Build a WhatsApp message from the form data
    const parts = [
      `Hello MAXSPEED LIFT,`,
      ``,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Service: ${formData.service}`,
      `Location: ${formData.location}`,
      ``,
      `Message:`,
      formData.message,
    ]
    const waMsg = parts.join('\n')
    const waUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(waMsg)}`

    // Open WhatsApp with the prefilled message
    window.open(waUrl, '_blank', 'noopener,noreferrer')

    setStatus('success')
    setServerMessage('Your enquiry has been prepared and WhatsApp has been opened. If it did not open, please message us directly.')
    setFormData({ name: '', phone: '', email: '', service: '', location: '', message: '' })
    setErrors({})
  }

  return (
    <PageTransition>
      <SEO
        title="Contact Us"
        description="Get in touch with MAXSPEED LIFT in Pallikonda, Vellore, Tamil Nadu. Call +91 70946 33952 or send an enquiry online."
        path="/contact"
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Contact Us</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-7xl text-charcoal mb-6">
              Let&apos;s Start a<br />
              <span className="italic font-normal">Conversation</span>
            </h1>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-lg text-warm-gray max-w-2xl">
              Have questions about an elevator installation, maintenance plan, or modernization?
              Reach out to our team directly or send us your enquiry below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="p-6 rounded-2xl bg-white border border-border-light hover:border-charcoal transition-colors group"
            >
              <Phone className="w-5 h-5 text-charcoal mb-4" />
              <p className="text-label text-[10px] text-warm-gray mb-1">Phone</p>
              <p className="text-base font-medium text-charcoal group-hover:underline">
                {siteConfig.company.phone}
              </p>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-border-light hover:border-[#25D366] transition-colors group"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366] mb-4" />
              <p className="text-label text-[10px] text-warm-gray mb-1">WhatsApp</p>
              <p className="text-base font-medium text-charcoal group-hover:text-[#25D366] transition-colors">
                Chat with Us
              </p>
            </a>

            <a
              href={siteConfig.company.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white border border-border-light hover:border-charcoal transition-colors group"
            >
              <MapPin className="w-5 h-5 text-charcoal mb-4" />
              <p className="text-label text-[10px] text-warm-gray mb-1">Location</p>
              <p className="text-sm font-medium text-charcoal">
                {siteConfig.company.address.area}, {siteConfig.company.address.city}
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-warm-gray mt-1 group-hover:text-charcoal">
                Get Directions <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>

            <div className="p-6 rounded-2xl bg-white border border-border-light">
              <Clock className="w-5 h-5 text-charcoal mb-4" />
              <p className="text-label text-[10px] text-warm-gray mb-1">Business Hours</p>
              <p className="text-sm text-charcoal">Mon–Fri: {siteConfig.company.businessHours.weekdays}</p>
              <p className="text-xs text-warm-gray mt-1">Sat: {siteConfig.company.businessHours.saturday}</p>
              <p className="text-[11px] text-warm-gray mt-1">{siteConfig.company.businessHours.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Map Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Enquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-border-light">
              <h2 className="heading-editorial text-2xl md:text-3xl text-charcoal mb-2">
                Send an Enquiry
              </h2>
              <p className="text-body text-sm text-warm-gray mb-8">
                Fill in your details and our team will get back to you.
              </p>

              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-beige/60 border border-border-light text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-charcoal text-ivory mb-4">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="heading-editorial text-2xl text-charcoal mb-2">Enquiry Received</h3>
                  <p className="text-body text-sm text-warm-gray mb-6">{serverMessage}</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 border border-charcoal text-charcoal text-xs font-medium rounded-full hover:bg-charcoal hover:text-ivory transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-medium text-charcoal mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-medium text-charcoal mb-2">
                        Service Required *
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        onBlur={() => handleBlur('service')}
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                      >
                        <option value="">Select a service</option>
                        {servicesList.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-xs text-red-600 mt-1.5">{errors.service}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-location" className="block text-xs font-medium text-charcoal mb-2">
                      Location / City *
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      onBlur={() => handleBlur('location')}
                      placeholder="e.g., Vellore, Tamil Nadu"
                      className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    />
                    {errors.location && <p className="text-xs text-red-600 mt-1.5">{errors.location}</p>}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="contact-message" className="text-xs font-medium text-charcoal">
                        Message *
                      </label>
                      <span className="text-[11px] text-warm-gray">{formData.message.length}/1000</span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      maxLength={1000}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder="Tell us about your building, floors, or service requirement..."
                      className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal transition-colors resize-none"
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1.5">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-warm-gray">Prefer WhatsApp for faster response?</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#25D366] hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send us a message directly
                </a>
              </div>
            </div>

            {/* Map / Address Card */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-charcoal text-ivory rounded-3xl p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-label text-ivory/40 mb-4">Visit Us</p>
                  <h3 className="heading-editorial text-2xl md:text-3xl text-ivory mb-4">
                    MAXSPEED LIFT
                  </h3>
                  <p className="text-body text-sm text-ivory/70 mb-6">
                    {siteConfig.company.address.full}
                  </p>
                  <p className="text-body text-sm text-ivory/60 mb-8">
                    Serving {siteConfig.company.regions.join(', ')} with dedicated installation and maintenance support.
                  </p>
                </div>

                <a
                  href={siteConfig.company.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-ivory text-charcoal text-sm font-medium rounded-full hover:bg-beige transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
