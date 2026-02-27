'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Building2,
  Wallet,
  MessageSquare,
  FileSignature,
  BrainCircuit,
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
      'Every M-Pesa payment verified automatically against your actual account. Direct bank transfers with major commercial banks, automated invoicing, and built-in tax calculations — no more chasing screenshots.',
    highlight: 'Real-time M-Pesa verification',
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
    title: 'Digital Leases & Contracts',
    description:
      'Generate contracts from templates, collect legally binding e-signatures, and set auto-renewal rules. Every document stored, searchable, and audit-ready.',
    highlight: 'E-signatures built in',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Insights',
    description:
      'Dynamic pricing recommendations based on market data, occupancy forecasting, revenue optimization, and tenant risk scoring — powered by machine learning trained on East African markets.',
    highlight: 'Pricing & forecasting',
  },
  {
    icon: Shield,
    title: 'Background Checks & Compliance',
    description:
      'Verify tenant identity before they sign. Digital consent collection under Kenyan Data Protection Act, full audit trails, and automated compliance reporting.',
    highlight: 'Tenant verification',
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
          <span className="inline-block px-4 py-1.5 bg-forest-500/5 border border-forest-500/20 text-forest-500 text-sm font-medium rounded-full mb-6">
            Capabilities
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-granite-900 mb-4">
            One platform. Zero workarounds.
          </h2>
          <p className="text-granite-500 text-lg max-w-2xl mx-auto">
            Every tool you need to manage properties professionally — from
            tenant onboarding to financial reporting. No more stitching together
            spreadsheets and WhatsApp groups.
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
                className="group relative bg-white border border-granite-200 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-granite-200/50 hover:border-granite-300"
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
