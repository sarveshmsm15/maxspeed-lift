import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal } from '@/components/animations/AnimationWrappers'
import { openCookieSettings } from '@/components/ui/CookieConsent'
import { siteConfig } from '@/config/site'

export default function CookiePolicy() {
  return (
    <PageTransition>
      <SEO
        title="Cookie Policy"
        description="Learn how MAXSPEED LIFT uses cookies and local storage, and manage your consent preferences."
        path="/cookie-policy"
      />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Legal</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
              Cookie Policy
            </h1>
          </TextReveal>
          <p className="text-xs text-warm-gray mb-10">
            Last Updated: November 26, 2026
          </p>

          <div className="space-y-8 text-body text-charcoal/90">
            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">1. What Are Cookies</h2>
              <p>
                Cookies and similar browser storage technologies (such as localStorage) are small files stored on
                your device when you visit a website. They help websites function reliably and remember your
                explicit preferences.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">2. Essential Cookies &amp; Storage</h2>
              <p>
                Essential storage is strictly necessary for the core operation of the website, including storing
                your cookie consent selection so you are not repeatedly prompted on every visit. These cannot be
                disabled without affecting basic site functionality.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">3. Analytics Cookies</h2>
              <p>
                Analytics cookies help us understand how visitors interact with our website (such as pages visited
                and navigation patterns). Non-essential analytics scripts are only activated if configured and after
                you provide explicit consent through our cookie banner.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">4. Functional Cookies</h2>
              <p>
                Functional cookies allow the website to remember optional preferences and enhance user convenience.
                They are only enabled when you opt in.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">5. Third-Party Cookies</h2>
              <p>
                When you follow external links to services such as Google Maps or WhatsApp, or when third-party
                resources such as Google Fonts are loaded, those third-party providers may set or process cookies
                in accordance with their respective policies.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">6. Cookie Duration</h2>
              <p>
                Session cookies expire when you close your browser. Consent preferences stored in your browser
                remain until you clear your browser storage or update your preferences using our Cookie Settings
                control.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">7. How to Manage Cookies</h2>
              <p>
                You can manage or block cookies through your web browser settings at any time. You can also update
                your consent preferences directly on our website.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">8. Withdrawing Consent</h2>
              <p className="mb-4">
                You can withdraw or modify your cookie consent at any time using the button below or the
                &quot;Cookie Settings&quot; link in the website footer.
              </p>
              <button
                type="button"
                onClick={openCookieSettings}
                className="px-6 py-3 bg-charcoal text-ivory text-xs font-medium rounded-full hover:bg-primary transition-colors"
              >
                Manage Cookie Preferences
              </button>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">9. Changes to Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology or applicable
                regulations.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">10. Contact Information</h2>
              <p>
                If you have questions about our Cookie Policy, please call us at {siteConfig.company.phone}.
              </p>
            </section>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
