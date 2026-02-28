'use client'

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import NairobiSkyline from './NairobiSkyline'

interface HeroSectionProps {
  /** Path to a background image, e.g. "/images/hero-bg.jpg". When set, replaces the skyline SVG. */
  backgroundImage?: string
}

export default function HeroSection({ backgroundImage }: HeroSectionProps) {
  const scrollToSignup = () => {
    const el = document.querySelector('#signup')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToIntelligence = () => {
    const el = document.querySelector('#intelligence')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-granite-50">
      {/* Background — hero image or SVG skyline fallback */}
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover object-center"
              priority
              quality={85}
            />
          </div>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-granite-50/95 via-granite-50/80 to-granite-50/40" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 flex items-end">
            <NairobiSkyline className="w-full h-[80%] opacity-40" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-granite-50 via-granite-50/80 to-transparent" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-granite-900/5 border border-granite-200 text-granite-600 text-sm font-medium rounded-full mb-8">
              <span className="w-2 h-2 bg-forest-500 rounded-full animate-pulse" />
              The Only AI-Powered Property Platform in East Africa
            </span>
          </motion.div>

          {/* Headline — bold, impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-granite-900 leading-[1.08] mb-6 tracking-tight"
          >
            Know what&apos;s coming
            <br />
            before it{' '}
            <span className="relative inline-block">
              <span className="relative z-10">costs you.</span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-3 bg-compass/30 -z-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.2, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>

          {/* Subheadline — addresses pain */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl text-granite-500 mb-10 leading-relaxed max-w-2xl"
          >
            Qeja&apos;s AI predicts which tenants will default, which leases won&apos;t
            renew, and which expenses are abnormal — 60 days before you&apos;d notice.
            Plus a cross-property tenant network that exposes problem renters other
            landlords already learned about the hard way.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button onClick={scrollToSignup} className="btn-compass text-base px-8 py-4 shadow-lg shadow-compass/20">
              Get Early Access
            </button>
            <button
              onClick={scrollToIntelligence}
              className="btn-outline text-base px-8 py-4"
            >
              See the AI in Action
            </button>
          </motion.div>

          {/* Social proof micro-strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-12 flex items-center gap-4 text-sm text-granite-400"
          >
            <div className="flex -space-x-2">
              {[
                'bg-forest-500',
                'bg-compass',
                'bg-rivian-blue',
                'bg-granite-600',
                'bg-forest-400',
              ].map((bg, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${bg} border-2 border-granite-50 flex items-center justify-center text-xs text-white font-bold`}
                >
                  {['PM', 'KN', 'JM', 'AW', 'SK'][i]}
                </div>
              ))}
            </div>
            <span>
              Trusted by property managers across <strong className="text-granite-600">Kenya</strong>
            </span>
            <span className="hidden sm:block w-px h-5 bg-granite-300" />
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-forest-500/10 border border-forest-500/20 rounded-full text-forest-600 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Kenya DPA Compliant
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-granite-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-granite-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
