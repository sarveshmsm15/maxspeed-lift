import { Helmet } from 'react-helmet-async'
import { siteConfig } from '@/config/site'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  path?: string
  type?: 'website' | 'article'
  includeLocalBusiness?: boolean
}

export default function SEO({
  title,
  description = siteConfig.seo.defaultDescription,
  image = siteConfig.seo.defaultImage,
  path = '',
  type = 'website',
  includeLocalBusiness = false,
}: SEOProps) {
  const pageTitle = title
    ? `${title} — ${siteConfig.seo.siteName}`
    : siteConfig.seo.defaultTitle
  const url = `${siteConfig.seo.siteUrl}${path}`

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.company.name,
    description: siteConfig.company.description,
    telephone: siteConfig.company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.company.address.street,
      addressLocality: siteConfig.company.address.city,
      addressRegion: siteConfig.company.address.state,
      postalCode: siteConfig.company.address.pincode,
      addressCountry: 'IN',
    },
    hasMap: siteConfig.company.googleMapsUrl,
    areaServed: siteConfig.company.regions,
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteConfig.seo.siteName} />
      <meta property="og:locale" content={siteConfig.seo.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {includeLocalBusiness && (
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>
      )}
    </Helmet>
  )
}
