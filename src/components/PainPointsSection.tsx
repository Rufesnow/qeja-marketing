'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  AlertTriangle,
  XCircle,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const painPoints = [
  {
    pain: 'Accountants marking payments that never arrived',
    detail: 'Without M-Pesa transaction code verification, anyone can claim a payment was received. You only discover the gap during reconciliation — if you reconcile at all.',
    solution: 'Qeja requires the actual M-Pesa transaction code before a payment can be recorded. No code, no entry. Fraud becomes structurally impossible, not just unlikely.',
  },
  {
    pain: 'Signing a tenant other landlords already regret',
    detail: 'A prospective tenant shows perfect references and a clean history. What you don\'t know: they were evicted from two other properties last year and owe months of unpaid rent.',
    solution: 'The Qeja Tenant Network shares verified records across all Qeja-managed properties. Evictions, non-payment, and property damage follow a tenant — so you see their real history before signing.',
  },
  {
    pain: 'Finding out a tenant won\'t renew — after they\'ve already left',
    detail: 'A unit sits empty for two months because you had no warning. You scramble to find a replacement while rent revenue disappears.',
    solution: 'Qeja\'s AI analyzes payment patterns, complaint history, and engagement signals to predict non-renewals with 85% accuracy — 60 days before the lease expires. Enough time to act.',
  },
  {
    pain: 'Manually creating rent invoices every single month',
    detail: 'You manage 50 units. Every month, that\'s 50 invoices to create, send, and track. One missed invoice means one missed payment you might not notice.',
    solution: 'Sign a 2-year lease at KES 45,000/month and Qeja generates all 24 invoices automatically. Every tenant, every unit, every month — handled.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function PainPointsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 sm:py-28 bg-granite-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-white border border-granite-600/30 text-granite-700 text-sm font-medium rounded-full mb-6">
            Why most property managers fly blind
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-granite-50 mb-4">
            Your competitors see problems.{' '}
            <span className="text-red-400">You&apos;ll see them coming.</span>
          </h2>
          <p className="text-granite-400 text-lg max-w-2xl mx-auto">
            Other platforms help you react after problems happen.
            Qeja helps you prevent them.
          </p>
        </motion.div>

        {/* Pain → Solution cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {painPoints.map((item, index) => (
            <motion.div
              key={item.pain}
              variants={itemVariants}
              className={`bg-granite-700/30 border border-granite-600/30 rounded-2xl p-6 sm:p-8 group hover:border-forest-500/30 transition-all duration-300 ${index >= 2 ? 'hidden sm:block' : ''}`}
            >
              {/* Pain */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-granite-100 mb-1 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400/60" />
                    {item.pain}
                  </h3>
                  <p className="text-granite-400 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>

              {/* Arrow separator */}
              <div className="flex items-center gap-2 my-4 pl-11">
                <div className="flex-1 h-px bg-gradient-to-r from-granite-600 to-transparent" />
                <ArrowRight className="w-4 h-4 text-forest-500" />
                <div className="flex-1 h-px bg-gradient-to-l from-granite-600 to-transparent" />
              </div>

              {/* Solution */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-forest-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-forest-500" />
                </div>
                <p className="text-granite-300 text-sm leading-relaxed">
                  <span className="text-forest-400 font-medium">With Qeja: </span>
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-granite-400 text-lg mb-6">
            The next bad tenant is already applying somewhere.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#signup')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-compass text-base px-8 py-3.5"
          >
            Protect Your Portfolio — Get Early Access
          </button>
        </motion.div>
      </div>
    </section>
  )
}
