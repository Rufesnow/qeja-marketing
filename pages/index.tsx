import Head from 'next/head'
import LandingNav from '@/components/LandingNav'
import HeroSection from '@/components/HeroSection'
import PainPointsSection from '@/components/PainPointsSection'
import StatsSection from '@/components/StatsSection'
import FeaturesSection from '@/components/FeaturesSection'
import IntegrationsSection from '@/components/IntegrationsSection'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Qeja | Property Management Platform for East Africa</title>
        <meta
          name="description"
          content="All-in-one property management platform built for East African property managers. Manage properties, tenants, payments, and compliance with M-Pesa integration."
        />
        <meta
          name="keywords"
          content="property management, Kenya, East Africa, M-Pesa, tenant management, real estate, Nairobi, property manager software, Qeja"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Qeja — Stop Losing Money to Broken Systems" />
        <meta
          property="og:description"
          content="The all-in-one platform for managing properties, tenants, payments, and compliance across East Africa."
        />
        <meta property="og:image" content="https://www.qe-ja.com/images/og-image.jpg" />
        <meta property="og:url" content="https://www.qe-ja.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Qeja" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qeja — Stop Losing Money to Broken Systems" />
        <meta
          name="twitter:description"
          content="All-in-one platform for East African property managers."
        />
        <meta name="twitter:image" content="https://www.qe-ja.com/images/og-image.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://www.qe-ja.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Qeja',
              description:
                'Property management platform for East African property managers',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'KES',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '120',
              },
            }),
          }}
        />
      </Head>

      <main>
        <LandingNav />
        <HeroSection />
        <StatsSection />
        <PainPointsSection />
        <FeaturesSection />
        <IntegrationsSection />
        <PricingSection />
        <CTASection />
        <FooterSection />
      </main>
    </>
  )
}
