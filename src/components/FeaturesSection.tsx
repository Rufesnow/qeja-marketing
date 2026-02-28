'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Building2,
  Wallet,
  MessageSquare,
  FileSignature,
  UserSearch,
  Shield,
} from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Portfolio Management',
    description:
      'Track every property, unit, and occupancy rate from a single dashboard. Upload images, monitor vacancies, and manage your entire portfolio — whether it\'s 5 units or 5,000.',
    highlight: 'One dashboard for everything',
  },
  {
    icon: Wallet,
    title: 'Payment Reconciliation',
    description:
      'M-Pesa verification with mandatory transaction codes, direct bank transfers with KCB, Equity, NCBA, Co-op, ABSA and Stanbic, automated invoicing, and built-in tax calculations. The financial plumbing just works.',
    highlight: 'M-Pesa + 6 banks',
  },
  {
    icon: MessageSquare,
    title: 'Tenant Communications',
    description:
      'Reach tenants via email, mass SMS, and WhatsApp — all white-labeled so messages come from your brand. Automate rent reminders, lease renewals, and maintenance updates.',
    highlight: 'SMS, Email & WhatsApp',
  },
  {
    icon: FileSignature,
    title: 'Digital Leases & Auto-Invoicing',
    description:
      'Generate contracts from templates, collect e-signatures, and set auto-renewal rules. When a lease is signed, every invoice for the entire lease term is created automatically. A 2-year lease at KES 45,000/month generates 24 invoices on day one.',
    highlight: 'Zero manual invoicing',
  },
  {
    icon: UserSearch,
    title: 'Tenant Onboarding & Screening',
    description:
      'Digital application forms, identity verification under Kenyan Data Protection Act, background checks with consent management, and document collection — all before a tenant signs anything.',
    highlight: 'Compliant screening',
  },
  {
    icon: Shield,
    title: 'Compliance & Audit Trail',
    description:
      'Kenyan Data Protection Act consent forms via DocuSeal, VAT and withholding tax calculations, and a complete audit trail for every transaction. When KRA comes knocking, you\'re ready.',
    highlight: 'KRA-ready',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="hidden sm:block py-20 sm:py-28 bg-granite-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          ref={ref}
        >
          <span className="inline-block px-4 py-1.5 bg-compass border border-compass text-granite-900 text-sm font-medium rounded-full mb-6">
            The Foundation
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-granite-900 mb-4">
            Everything else you need. Already built in.
          </h2>
          <p className="text-granite-500 text-lg max-w-2xl mx-auto">
            M-Pesa reconciliation, digital contracts, multi-channel communications,
            compliance — the operational essentials other platforms sell as their
            headline. For Qeja, they&apos;re just the starting point.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative bg-white border border-granite-200 rounded-2xl p-6 sm:p-8 shadow-sm shadow-granite-200/60 transition-all duration-300 hover:shadow-lg hover:shadow-granite-200/50 hover:border-granite-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-forest-500/10 flex items-center justify-center mb-5 group-hover:bg-forest-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-forest-600" />
                </div>

                {/* Highlight badge */}
                <span className="inline-block px-2.5 py-0.5 bg-compass/10 text-compass-dark text-xs font-semibold rounded-full mb-3">
                  {feature.highlight}
                </span>

                <h3 className="font-display font-bold text-lg text-granite-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-granite-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
