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
    pain: 'Problem tenants that keep coming back',
    detail: 'A tenant skips on rent at one property, then shows up at another with a clean slate. There is no easy way to check their history.',
    solution: 'Built-in identity checks and tenant screening — flag risky applicants before they ever sign a lease.',
  },
  {
    pain: 'Staying on the right side of the law',
    detail: 'Data protection rules, VAT filings, withholding tax — miss one deadline and the penalties add up fast.',
    solution: 'Compliance is handled for you: digital consent forms, automatic tax calculations, and a full audit trail for every transaction.',
  },
  {
    pain: 'Fake M-Pesa payment screenshots',
    detail: 'Tenants send doctored screenshots as proof of payment. You only realise the money never arrived when you check your statement at month-end.',
    solution: 'Every M-Pesa payment is automatically verified against your actual account — no screenshots, no guesswork.',
  },
  {
    pain: 'Spreadsheets that fall apart',
    detail: 'Your rent tracker lives in a shared Excel file. Formulas break, someone overwrites a row, and pulling a simple report takes half a day.',
    solution: 'A live dashboard that tracks every payment, generates invoices automatically, and gives you audit-ready reports in one click.',
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
          <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium rounded-full mb-6">
            Sound familiar?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-granite-50 mb-4">
            Property management in East Africa is{' '}
            <span className="text-red-400">broken</span>
          </h2>
          <p className="text-granite-400 text-lg max-w-2xl mx-auto">
            Every property manager knows these problems. Most accept them as normal.
            They don&apos;t have to be.
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
            Every month you wait costs you money.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#signup')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-compass text-base px-8 py-3.5"
          >
            Fix It Now — Get Early Access
          </button>
        </motion.div>
      </div>
    </section>
  )
}
