import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Check, Send } from 'lucide-react'
import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'
import { quoteFormSchema, validateForm, validateField } from '@/lib/validation'

const buildingTypes = ['Residential', 'Commercial', 'Hospital', 'Industrial', 'Other']

export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    buildingType: '',
    floors: '2',
    elevatorType: '',
    quantity: '1',
    location: '',
    requirements: '',
    contactMethod: 'whatsapp',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [serverMessage, setServerMessage] = useState('')

  const whatsappUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(siteConfig.company.whatsappMessage)}`

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      const rules = quoteFormSchema[field]
      if (rules) {
        const err = validateField(value, rules)
        setErrors((prev) => {
          const next = { ...prev }
          if (err) next[field] = err
          else delete next[field]
          return next
        })
      }
    }
  }

  const handleBlur = (field: string) => {
    const rules = quoteFormSchema[field]
    if (!rules) return
    const err = validateField(formData[field as keyof typeof formData], rules)
    setErrors((prev) => {
      const next = { ...prev }
      if (err) next[field] = err
      else delete next[field]
      return next
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm(formData, quoteFormSchema)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setServerMessage('')

    // Build a WhatsApp message from the quote form data
    const parts = [
      `Hello MAXSPEED LIFT,`,
      `I'd like to request a quote with the following details:`,
      ``,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Building Type: ${formData.buildingType}`,
      `Location: ${formData.location}`,
      `Floors: ${formData.floors}`,
      `Elevator Type: ${formData.elevatorType || 'Not specified'}`,
      `Quantity: ${formData.quantity}`,
      `Preferred Contact: ${formData.contactMethod}`,
    ]
    if (formData.requirements.trim()) {
      parts.push(``, `Additional Requirements:`, formData.requirements)
    }
    const waMsg = parts.join('\n')
    const waUrl = `https://wa.me/${siteConfig.company.whatsapp}?text=${encodeURIComponent(waMsg)}`

    // Open WhatsApp with the prefilled message
    window.open(waUrl, '_blank', 'noopener,noreferrer')

    setStatus('success')
    setServerMessage(
      'Your quote request has been prepared and WhatsApp has been opened. If it did not open, please message us directly.'
    )
    setFormData({
      name: '',
      phone: '',
      email: '',
      buildingType: '',
      floors: '2',
      elevatorType: '',
      quantity: '1',
      location: '',
      requirements: '',
      contactMethod: 'whatsapp',
    })
    setErrors({})
  }

  return (
    <PageTransition>
      <SEO
        title="Get a Quote"
        description="Request a personalized elevator quotation from MAXSPEED LIFT for residential, commercial, hospital, or industrial buildings."
        path="/get-a-quote"
      />

      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Get a Quote</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-7xl text-charcoal mb-6">
              Request a<br />
              <span className="italic font-normal">Detailed Quote</span>
            </h1>
          </TextReveal>
          <FadeIn delay={0.3}>
            <p className="text-body text-lg text-warm-gray max-w-2xl">
              Share your building details and requirements so our engineering team can prepare an accurate estimate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quote Form & Sidebar */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-12 border border-border-light">
              {status === 'success' ? (
                <div className="p-8 rounded-2xl bg-beige/60 border border-border-light text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-charcoal text-ivory mb-4">
                    <Check className="w-5 h-5" />
                  </div>
                  <h2 className="heading-editorial text-2xl text-charcoal mb-2">Quote Request Submitted</h2>
                  <p className="text-body text-sm text-warm-gray mb-6">{serverMessage}</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 border border-charcoal text-charcoal text-xs font-medium rounded-full hover:bg-charcoal hover:text-ivory transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quote-name" className="block text-xs font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal"
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="quote-phone" className="block text-xs font-medium text-charcoal mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="quote-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal"
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal"
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1.5">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="quote-location" className="block text-xs font-medium text-charcoal mb-2">
                        Location / City *
                      </label>
                      <input
                        id="quote-location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleChange('location', e.target.value)}
                        onBlur={() => handleBlur('location')}
                        placeholder="e.g., Vellore, Tamil Nadu"
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal"
                      />
                      {errors.location && <p className="text-xs text-red-600 mt-1.5">{errors.location}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quote-building" className="block text-xs font-medium text-charcoal mb-2">
                        Building Type *
                      </label>
                      <select
                        id="quote-building"
                        value={formData.buildingType}
                        onChange={(e) => handleChange('buildingType', e.target.value)}
                        onBlur={() => handleBlur('buildingType')}
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal"
                      >
                        <option value="">Select building type</option>
                        {buildingTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.buildingType && <p className="text-xs text-red-600 mt-1.5">{errors.buildingType}</p>}
                    </div>

                    <div>
                      <label htmlFor="quote-elevator" className="block text-xs font-medium text-charcoal mb-2">
                        Elevator Type
                      </label>
                      <select
                        id="quote-elevator"
                        value={formData.elevatorType}
                        onChange={(e) => handleChange('elevatorType', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal"
                      >
                        <option value="">Select elevator type (optional)</option>
                        {siteConfig.products.map((p) => (
                          <option key={p.id} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quote-floors" className="block text-xs font-medium text-charcoal mb-2">
                        Number of Floors
                      </label>
                      <input
                        id="quote-floors"
                        type="number"
                        min={2}
                        max={100}
                        value={formData.floors}
                        onChange={(e) => handleChange('floors', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal"
                      />
                    </div>

                    <div>
                      <label htmlFor="quote-quantity" className="block text-xs font-medium text-charcoal mb-2">
                        Number of Elevators Needed
                      </label>
                      <input
                        id="quote-quantity"
                        type="number"
                        min={1}
                        max={50}
                        value={formData.quantity}
                        onChange={(e) => handleChange('quantity', e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="block text-xs font-medium text-charcoal mb-3">
                      Preferred Contact Method
                    </span>
                    <div className="flex flex-wrap gap-6">
                      {(['phone', 'whatsapp', 'email'] as const).map((method) => (
                        <label key={method} className="inline-flex items-center gap-2 cursor-pointer text-sm text-charcoal capitalize">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.contactMethod === method}
                            onChange={(e) => handleChange('contactMethod', e.target.value)}
                            className="accent-charcoal"
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label htmlFor="quote-requirements" className="text-xs font-medium text-charcoal">
                        Additional Requirements
                      </label>
                      <span className="text-[11px] text-warm-gray">{formData.requirements.length}/2000</span>
                    </div>
                    <textarea
                      id="quote-requirements"
                      rows={4}
                      maxLength={2000}
                      value={formData.requirements}
                      onChange={(e) => handleChange('requirements', e.target.value)}
                      placeholder="Specify capacity, cabin finish preferences, shaft dimensions, or timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-border-light bg-ivory/40 text-sm text-charcoal focus:outline-none focus:border-charcoal resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {status === 'submitting' ? 'Submitting...' : 'Submit Quote Request'}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass rounded-3xl p-8">
                <p className="text-label text-warm-gray mb-3">Direct Assistance</p>
                <h2 className="heading-editorial text-2xl text-charcoal mb-4">
                  For immediate assistance, call us directly
                </h2>
                <p className="text-body text-sm text-warm-gray mb-6">
                  Our team can answer preliminary technical questions and schedule a site visit.
                </p>

                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.company.phone}`}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border-light hover:border-charcoal transition-colors"
                  >
                    <Phone className="w-4 h-4 text-charcoal" />
                    <span className="text-sm font-medium text-charcoal">{siteConfig.company.phone}</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-white border border-border-light hover:border-[#25D366] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span className="text-sm font-medium text-charcoal">WhatsApp Enquiry</span>
                  </a>
                  <a
                    href={siteConfig.company.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border-light hover:border-charcoal transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-charcoal shrink-0 mt-0.5" />
                    <span className="text-xs text-warm-gray">{siteConfig.company.address.full}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
