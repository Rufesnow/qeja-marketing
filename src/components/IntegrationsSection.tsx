'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Smartphone,
  Landmark,
  UserSearch,
  MessageCircle,
  Mail,
  Receipt,
  FileCheck,
  ShieldCheck,
  BarChart3,
  Banknote,
} from 'lucide-react'

const capabilities = [
  {
    icon: Smartphone,
    label: 'M-Pesa Reconciliation',
    description: 'Automatic payment verification — no more screenshots',
  },
  {
    icon: Landmark,
    label: 'Major Commercial Banks',
    description: 'Direct integration with KCB, Equity, NCBA, Co-op, ABSA & Stanbic',
  },
  {
    icon: UserSearch,
    label: 'Tenant Background Checks',
    description: 'Identity verification before lease signing',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp Messaging',
    description: 'White-labeled tenant communications at scale',
  },
  {
    icon: Mail,
    label: 'Mass SMS & Email',
    description: 'Bulk rent reminders and property updates',
  },
  {
    icon: Receipt,
    label: 'Automated Invoicing',
    description: 'Generate and send invoices automatically each month',
  },
  {
    icon: FileCheck,
    label: 'Digital Contracts',
    description: 'E-signatures and auto-renewal workflows',
  },
  {
    icon: ShieldCheck,
    label: 'Compliance Management',
    description: 'Kenyan Data Protection Act & tax compliance built in',
  },
  {
    icon: BarChart3,
    label: 'Accounting Integration',
    description: 'Sync with your existing accounting software',
  },
  {
    icon: Banknote,
    label: 'Tax Management',
    description: 'VAT and withholding tax calculations, auto-filed',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function IntegrationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="integrations" className="py-20 sm:py-28 bg-granite-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-granite-900 border border-granite-900 text-white text-sm font-medium rounded-full mb-6">
            Integrations
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-granite-900 mb-4">
            Plugs into what you already use
          </h2>
          <p className="text-granite-500 text-lg max-w-2xl mx-auto">
            M-Pesa, major banks, WhatsApp, SMS — the infrastructure your business
            already runs on. Qeja connects to all of it natively.
          </p>
        </motion.div>

        {/* Capabilities grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.label}
                variants={itemVariants}
                className="group bg-white border border-granite-200 rounded-xl p-5 text-center hover:shadow-md hover:border-granite-300 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-granite-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-forest-500/10 transition-colors">
                  <Icon className="w-5 h-5 text-granite-600 group-hover:text-forest-600 transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-sm text-granite-800 mb-1">
                  {cap.label}
                </h3>
                <p className="text-granite-400 text-xs leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
