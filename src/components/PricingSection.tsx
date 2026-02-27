'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingPlans } from '@/lib/pricing-data'

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const formatPrice = (price: number | null, currency: string) => {
    if (price === null) return 'Custom'
    if (price === 0) return 'Free'
    return `${currency} ${price.toLocaleString()}`
  }

  const scrollToSignup = () => {
    const el = document.querySelector('#signup')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-granite-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-compass/5 border border-compass/20 text-compass-dark text-sm font-medium rounded-full mb-6">
            Pricing
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-granite-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-granite-500 text-lg max-w-2xl mx-auto mb-8">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-granite-900' : 'text-granite-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-forest-500' : 'bg-granite-300'
              }`}
              role="switch"
              aria-checked={isAnnual}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-granite-900' : 'text-granite-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="ml-2 px-2.5 py-0.5 bg-forest-500/10 text-forest-600 text-xs font-semibold rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-6 sm:p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-white border-compass ring-2 ring-compass/20 shadow-xl shadow-compass/10 scale-[1.02]'
                  : 'bg-white border-granite-200 hover:shadow-lg hover:border-granite-300'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-compass text-granite-900 text-xs font-bold rounded-full shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="font-display font-bold text-xl text-granite-900 mb-1">
                {plan.name}
              </h3>
              <p className="text-granite-500 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <span className="font-display font-extrabold text-4xl text-granite-900">
                  {formatPrice(
                    isAnnual ? plan.annualPrice : plan.monthlyPrice,
                    plan.currency
                  )}
                </span>
                {plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                  <span className="text-granite-400 text-sm ml-1">/month</span>
                )}
              </div>

              {/* Limits */}
              <div className="flex gap-4 mb-6 text-sm text-granite-600">
                <span>{plan.limits.users}</span>
                <span className="text-granite-300">|</span>
                <span>{plan.limits.properties}</span>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToSignup}
                className={`w-full mb-6 ${
                  plan.ctaStyle === 'compass'
                    ? 'btn-compass'
                    : plan.ctaStyle === 'dark'
                    ? 'btn-dark'
                    : 'btn-outline'
                }`}
              >
                {plan.ctaLabel}
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-granite-600">
                    <Check className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
