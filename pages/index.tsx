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
          content="Property management software for Kenyan landlords and property managers. Rent, M-Pesa reconciliation, leases and tenant screening in one place, plus early warnings on at-risk tenants, non-renewals and rising costs."
        />
        <meta
          name="keywords"
          content="property management AI, Kenya property intelligence, tenant risk scoring, vacancy prediction, East Africa real estate software, tenant background check Kenya, Qeja"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
                'Property management software for East African landlords and property managers, with M-Pesa reconciliation, Verified Rental History and AI early warnings',
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
