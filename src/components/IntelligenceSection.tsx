'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BarChart3,
  TrendingUp,
  BrainCircuit,
  Shield,
  CheckCircle2,
} from 'lucide-react'

const tiers = [
  {
    icon: BarChart3,
    title: 'Analytics',
    subtitle: "What's happening now",
    accent: false,
    bullets: [
      'Real-time occupancy rates',
      'Payment collection status across all properties',
      'Maintenance request tracking and response times',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    subtitle: 'What happened before',
    accent: false,
    bullets: [
      'Revenue trends and seasonal patterns',
      'Tenant turnover analysis by property',
      'Expense benchmarking across your portfolio',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI Insights',
    subtitle: 'What will happen next',
    accent: true,
    badge: 'Only on Qeja',
    bullets: [
      'Payment default prediction with tenant-specific timing',
      'Vacancy forecasting — know who won\'t renew 60 days early',
      'Revenue projections with confidence ranges',
      'Expense anomaly detection across properties',
      'Tenant risk scoring for new applicants (0–100)',
    ],
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

export default function IntelligenceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="intelligence" className="py-20 sm:py-28 bg-granite-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 bg-compass/10 border border-compass/20 text-compass text-sm font-medium rounded-full mb-6">
            Predictive Intelligence
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-granite-50 mb-4">
            Three layers of insight.{' '}
            <span className="text-compass">One platform.</span>
          </h2>
          <p className="text-granite-400 text-lg max-w-2xl mx-auto">
            Most property software tells you what happened yesterday. Qeja tells
            you what&apos;s happening now, what happened before, and what will happen
            next.
          </p>
        </motion.div>

        {/* Three-tier columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
        >
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={tier.title}
                variants={itemVariants}
                className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                  tier.accent
                    ? 'bg-granite-800/80 border-compass/30 ring-1 ring-compass/10'
                    : 'bg-granite-800/40 border-granite-700/40'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 right-6 px-3 py-1 bg-compass text-granite-900 text-xs font-bold rounded-full">
                    {tier.badge}
                  </span>
                )}

                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    tier.accent
                      ? 'bg-compass/15'
                      : 'bg-granite-700/50'
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      tier.accent ? 'text-compass' : 'text-granite-300'
                    }`}
                  />
                </div>

                <h3 className="font-display font-bold text-xl text-granite-50 mb-1">
                  {tier.title}
                </h3>
                <p
                  className={`text-sm font-medium mb-5 ${
                    tier.accent ? 'text-compass/80' : 'text-granite-400'
                  }`}
                >
                  {tier.subtitle}
                </p>

                <ul className="space-y-3">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          tier.accent ? 'text-compass' : 'text-forest-500'
                        }`}
                      />
                      <span className="text-granite-300 text-sm leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tenant Network callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-compass/5 border border-compass/20 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-compass/15 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-compass" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-granite-50 mb-2">
                The Qeja Tenant Network
              </h3>
              <p className="text-granite-300 text-sm leading-relaxed mb-3">
                A cross-property protection network for landlords. If a tenant
                caused problems at any Qeja-managed property — evictions, chronic
                non-payment, property damage — you see it before you sign them.
                No other platform in East Africa offers this.
              </p>
              <p className="text-granite-400 text-xs leading-relaxed italic">
                Real example: One property manager discovered an applicant with
                stellar references had been evicted from two other properties.
                KES 200,000+ in potential losses avoided.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
