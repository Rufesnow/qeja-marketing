'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CreditCard, Clock, Shield, ShieldCheck } from 'lucide-react'
import SignUpForm from './SignUpForm'

const trustBadges = [
  { icon: CreditCard, text: 'No credit card required' },
  { icon: Clock, text: 'Free 14-day trial' },
  { icon: Shield, text: 'Your data stays in Kenya' },
  { icon: ShieldCheck, text: 'GDPR Compliant' },
]

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="signup" className="py-20 sm:py-28 bg-granite-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-compass/10 text-compass text-sm font-medium rounded-full mb-6">
              Early Access
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-granite-50 mb-4 leading-tight">
              The next problem tenant is
              <br />
              <span className="text-compass">already filling out an application.</span>
            </h2>
            <p className="text-granite-400 text-lg mb-8 leading-relaxed">
              Without the Qeja Tenant Network, you have no way to know. Without
              AI Insights, you won&apos;t see the default coming until rent day
              passes. Property managers across East Africa are already signing up.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-4">
              {trustBadges.map((badge) => {
                const Icon = badge.icon
                return (
                  <div key={badge.text} className="flex items-center gap-2 text-granite-400">
                    <Icon className="w-5 h-5 text-compass" />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-granite-800/50 backdrop-blur-sm border border-granite-700/50 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-display font-semibold text-xl text-granite-50 mb-2">
              Sign up for early access
            </h3>
            <p className="text-granite-400 text-sm mb-6">
              Be among the first to try Qeja. We&apos;ll reach out within 24 hours.
            </p>
            <SignUpForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
