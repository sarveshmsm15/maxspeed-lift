import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Settings } from 'lucide-react'

type ConsentPreferences = {
  essential: boolean
  analytics: boolean
  functional: boolean
}

const CONSENT_KEY = 'maxspeed-cookie-consent'

function getStoredConsent(): ConsentPreferences | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCustomize, setShowCustomize] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true,
    analytics: false,
    functional: false,
  })

  useEffect(() => {
    const stored = getStoredConsent()
    if (!stored) {
      const timer = setTimeout(() => setIsVisible(true), 2000)
      return () => clearTimeout(timer)
    } else {
      setPreferences(stored)
    }
  }, [])

  const saveConsent = useCallback((prefs: ConsentPreferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs))
    setPreferences(prefs)
    setIsVisible(false)
    setShowCustomize(false)
  }, [])

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, functional: true })
  }

  const rejectNonEssential = () => {
    saveConsent({ essential: true, analytics: false, functional: false })
  }

  const saveCustom = () => {
    saveConsent({ ...preferences, essential: true })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="max-w-4xl mx-auto glass rounded-2xl p-6 md:p-8 shadow-xl">
            {!showCustomize ? (
              <>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Cookie className="w-5 h-5 text-charcoal" />
                    <h3 className="text-sm font-medium text-charcoal">Cookie Preferences</h3>
                  </div>
                  <button
                    onClick={rejectNonEssential}
                    className="text-warm-gray hover:text-charcoal transition-colors"
                    aria-label="Close cookie banner"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-body text-sm text-warm-gray mb-6">
                  We use essential cookies to make our website work. With your consent, we may also use
                  non-essential cookies to improve your experience. You can manage your preferences at any time.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="px-6 py-2.5 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={rejectNonEssential}
                    className="px-6 py-2.5 border border-border-light text-charcoal text-sm font-medium rounded-full hover:bg-beige transition-colors"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="px-6 py-2.5 text-warm-gray text-sm font-medium flex items-center gap-2 hover:text-charcoal transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Customize
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-medium text-charcoal">Customize Preferences</h3>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="text-warm-gray hover:text-charcoal transition-colors"
                    aria-label="Back"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4 mb-6">
                  <label className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-charcoal">Essential Cookies</p>
                      <p className="text-xs text-warm-gray">Required for the website to function</p>
                    </div>
                    <input type="checkbox" checked disabled className="w-4 h-4 accent-charcoal" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="text-sm font-medium text-charcoal">Analytics Cookies</p>
                      <p className="text-xs text-warm-gray">Help us understand how visitors use our website</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences(p => ({ ...p, analytics: e.target.checked }))}
                      className="w-4 h-4 accent-charcoal"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <div>
                      <p className="text-sm font-medium text-charcoal">Functional Cookies</p>
                      <p className="text-xs text-warm-gray">Enable additional features and personalization</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences(p => ({ ...p, functional: e.target.checked }))}
                      className="w-4 h-4 accent-charcoal"
                    />
                  </label>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={saveCustom}
                    className="px-6 py-2.5 bg-charcoal text-ivory text-sm font-medium rounded-full hover:bg-primary transition-colors"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="px-6 py-2.5 text-warm-gray text-sm font-medium hover:text-charcoal transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Export for footer cookie settings link
export function openCookieSettings() {
  localStorage.removeItem(CONSENT_KEY)
  window.location.reload()
}
