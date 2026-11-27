import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for the MAXSPEED LIFT website, outlining how enquiry data and personal information are handled."
        path="/privacy-policy"
      />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Legal</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
              Privacy Policy
            </h1>
          </TextReveal>
          <p className="text-xs text-warm-gray mb-10">
            Last Updated: November 26, 2026 &nbsp;|&nbsp; Draft for legal counsel review
          </p>

          <div className="space-y-8 text-body text-charcoal/90">
            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">1. Introduction</h2>
              <p>
                MAXSPEED LIFT (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting
                personal data collected through this website. This Privacy Policy explains how information is
                collected, used, and safeguarded when you visit or submit an enquiry on our website, in alignment
                with applicable Indian data protection principles, including the Digital Personal Data Protection
                Act, 2023 (DPDP Act) as applicable.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">2. Information We Collect</h2>
              <p>
                We collect personal information only when you voluntarily provide it to us through our enquiry
                or quotation forms, or when you contact us directly via telephone or WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">3. Personal Information</h2>
              <p>
                The personal information you may provide includes your full name, telephone number, email address,
                city or project location, and project-related requirements.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">4. Contact Form Information</h2>
              <p>
                When you submit our Contact or Get a Quote forms, the details you enter are validated and transmitted
                to our enquiry handling endpoint solely to respond to your request and prepare service or product
                information.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">5. Phone and WhatsApp Enquiries</h2>
              <p>
                Clicking telephone or WhatsApp links on this website initiates direct communication via your device&apos;s
                calling application or WhatsApp. Interactions conducted on WhatsApp are also subject to WhatsApp&apos;s
                own privacy policy and terms of service.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">6. How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To respond to your product, installation, maintenance, or repair enquiries.</li>
                <li>To prepare preliminary quotations and schedule site assessments.</li>
                <li>To communicate regarding requested services.</li>
                <li>To maintain website security and prevent automated spam or abuse.</li>
              </ul>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">7. Data Storage</h2>
              <p>
                Enquiry submissions are processed securely on our server infrastructure. [COMPANY TO CONFIRM:
                specify hosting region, database storage provider, and internal email/CRM workflow before publication.]
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">8. Data Retention</h2>
              <p>
                We retain personal information only for as long as reasonably necessary to fulfill the purpose for
                which it was collected or as required by applicable law. [COMPANY TO CONFIRM: exact retention
                period for customer enquiries and quotation records.]
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">9. Third-Party Services</h2>
              <p>
                This website utilizes third-party services such as Google Fonts for typography and external links
                to Google Maps and WhatsApp. These providers may process technical request metadata (such as IP
                addresses) according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">10. Google Maps Integration</h2>
              <p>
                Links to our business location open Google Maps in a new tab or external application. Google&apos;s
                use of any data collected when you interact with Google Maps is governed by Google&apos;s Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">11. Cookies and Tracking</h2>
              <p>
                We use essential storage mechanisms (such as localStorage) to remember your cookie consent
                preferences. Non-essential analytics or functional cookies are not activated without your explicit
                consent. Please review our Cookie Policy for full details.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">12. Data Security</h2>
              <p>
                We implement reasonable technical and organizational safeguards, including input validation,
                rate limiting, and secure HTTP headers, to protect submitted information from unauthorized access,
                disclosure, or misuse. However, no internet transmission is completely secure.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">13. User Rights</h2>
              <p>
                Subject to applicable Indian law, you may request access to, correction of, or deletion of personal
                information you have submitted to us, or withdraw consent for future communications by contacting us
                using the details below.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">14. Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. Information may only be
                shared with authorized personnel or service partners strictly necessary to address your enquiry, or
                when required by law.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">15. Children&apos;s Privacy</h2>
              <p>
                This website is intended for business and adult users seeking elevator solutions. We do not knowingly
                collect personal data from individuals under 18 years of age.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">16. Policy Updates</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal
                requirements. Updated versions will be posted on this page with a revised &quot;Last Updated&quot; date.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">17. Contact Information</h2>
              <p>
                For privacy-related questions or requests, please contact MAXSPEED LIFT:
              </p>
              <div className="mt-4 p-6 rounded-2xl bg-white border border-border-light text-sm space-y-1">
                <p className="font-medium text-charcoal">MAXSPEED LIFT</p>
                <p>Phone: {siteConfig.company.phone}</p>
                <p>Location: {siteConfig.company.address.full}</p>
                <p>[COMPANY TO CONFIRM: Official privacy contact email address]</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
