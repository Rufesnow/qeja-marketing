import Head from 'next/head'
import SiteNav from '@/components/SiteNav'
import Hero from '@/components/Hero'
import WhyQeja from '@/components/WhyQeja'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import FaqSignUp from '@/components/FaqSignUp'
import SiteFooter from '@/components/SiteFooter'
import { pricingPlans } from '@/lib/pricing-data'

// Monthly prices of the plans that have a listed price (Enterprise is custom).
const listedPrices = pricingPlans.flatMap((p) => (p.monthlyPrice === null ? [] : [p.monthlyPrice]))

export default function Home() {
  return (
    <>
      <Head>
        <title>Qeja | AI-Powered Property Management System for East Africa</title>
        <meta
          name="description"
          content="The only property management platform in East Africa with predictive AI and a cross-property tenant network. Know which tenants will pay late, which leases won't renew, and which applicants to avoid — before it costs you."
        />
        <meta
          name="keywords"
          content="property management AI, Kenya property intelligence, tenant risk scoring, vacancy prediction, East Africa real estate software, tenant background check Kenya, Qeja"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="Qeja — Property Intelligence That Sees What's Coming" />
        <meta
          property="og:description"
          content="Predictive AI that flags late payers before they're late. A tenant network that exposes problem renters before you sign them. Built for East African property managers."
        />
        <meta property="og:image" content="https://www.qe-ja.com/images/og-image.jpg" />
        <meta property="og:url" content="https://www.qe-ja.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Qeja" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qeja — Property Intelligence That Sees What's Coming" />
        <meta
          name="twitter:description"
          content="AI-powered property management with predictive analytics and cross-property tenant screening. Built for East Africa."
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
                'AI-powered property intelligence platform for East African property managers with predictive analytics and cross-property tenant network',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: String(Math.min(...listedPrices)),
                highPrice: String(Math.max(...listedPrices)),
                priceCurrency: 'KES',
              },
            }),
          }}
        />
      </Head>

      <SiteNav />
      <main>
        <Hero />
        <WhyQeja />
        <Features />
        <Pricing />
        <FaqSignUp />
      </main>
      <SiteFooter />
    </>
  )
}
