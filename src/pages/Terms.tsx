import SEO from '@/components/ui/SEO'
import PageTransition from '@/components/animations/PageTransition'
import { FadeIn, TextReveal } from '@/components/animations/AnimationWrappers'
import { siteConfig } from '@/config/site'

export default function Terms() {
  return (
    <PageTransition>
      <SEO
        title="Terms and Conditions"
        description="Terms and Conditions governing use of the MAXSPEED LIFT website and enquiry services."
        path="/terms-and-conditions"
      />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <FadeIn>
            <p className="text-label text-warm-gray mb-4">Legal</p>
          </FadeIn>
          <TextReveal>
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
              Terms &amp; Conditions
            </h1>
          </TextReveal>
          <p className="text-xs text-warm-gray mb-6">
            Last Updated: November 26, 2026
          </p>

          <div className="p-5 rounded-2xl bg-beige/70 border border-border-light mb-10">
            <p className="text-xs text-charcoal font-medium">
              Notice: These terms are website content drafts and should be reviewed by qualified legal counsel before publication.
            </p>
          </div>

          <div className="space-y-8 text-body text-charcoal/90">
            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">1. Website Usage</h2>
              <p>
                By accessing and using this website, you agree to use it solely for lawful purposes and in a manner
                that does not infringe the rights of, or restrict or inhibit the use of this website by, any third party.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">2. Company Information</h2>
              <p>
                This website is operated for MAXSPEED LIFT, located at {siteConfig.company.address.full}, Contact
                Number: {siteConfig.company.phone}. [COMPANY TO CONFIRM: Legal entity registration name and details.]
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">3. Product Information</h2>
              <p>
                All elevator product descriptions, photographs, and feature lists on this website are provided for
                general informational purposes only. Actual specifications, dimensions, finishes, and configurations
                are subject to site conditions and engineering assessment.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">4. Service Descriptions</h2>
              <p>
                Service descriptions outline our general capabilities in elevator installation, maintenance,
                modernization, and repair. Specific scope of work, response timelines, and deliverables are defined
                solely in written service agreements executed with the client.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">5. Enquiry Submissions</h2>
              <p>
                Submitting a contact or quotation form on this website constitutes an enquiry only and does not
                create a binding contract, order, or service commitment.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">6. Quotations and Estimates</h2>
              <p>
                Any quotation or estimate provided following an enquiry is preliminary and subject to physical site
                survey, technical feasibility, and formal written acceptance.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">7. Pricing and Payment</h2>
              <p>
                [COMPANY TO CONFIRM: Specific pricing, advance payment milestones, taxes, and payment terms are
                governed by the formal written quotation and contract issued to each customer.]
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">8. Service Availability</h2>
              <p>
                Availability of installation, maintenance, and repair services depends on geographic location,
                equipment compatibility, and technical assessment.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">9. Intellectual Property</h2>
              <p>
                All original text, design elements, layout, and trademarks displayed on this website belong to
                MAXSPEED LIFT or their respective licensors and may not be reproduced without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">10. Third-Party Links</h2>
              <p>
                This website contains links to external platforms such as Google Maps and WhatsApp. We are not
                responsible for the content, availability, or practices of external websites.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">11. Website Availability</h2>
              <p>
                While we strive to keep the website operational and accurate, we do not guarantee uninterrupted or
                error-free access and reserve the right to modify or suspend the site without prior notice.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">12. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, MAXSPEED LIFT shall not be liable for any indirect,
                incidental, or consequential damages arising out of your use of or inability to use this website.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">13. Disclaimer</h2>
              <p>
                Information on this website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties
                of any kind, express or implied, except as expressly stated in a signed written contract.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">14. Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms and Conditions at any time. Continued use of the website
                after changes are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">15. Governing Law and Jurisdiction</h2>
              <p>
                These Terms and Conditions are governed by the laws of India. Any disputes arising from use of this
                website shall be subject to the exclusive jurisdiction of the competent courts in Vellore, Tamil Nadu,
                India. [COMPANY TO CONFIRM jurisdiction]
              </p>
            </section>

            <section>
              <h2 className="heading-editorial text-2xl text-charcoal mb-3">16. Contact Details</h2>
              <div className="mt-4 p-6 rounded-2xl bg-white border border-border-light text-sm space-y-1">
                <p className="font-medium text-charcoal">MAXSPEED LIFT</p>
                <p>Phone: {siteConfig.company.phone}</p>
                <p>Address: {siteConfig.company.address.full}</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
