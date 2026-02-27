'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItemProps {
  value: number
  suffix: string
  prefix?: string
  label: string
  detail: string
  delay: number
}

function StatItem({ value, suffix, prefix = '', label, detail, delay }: StatItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const timeout = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const interval = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(interval)
    }, delay * 1000)
    return () => clearTimeout(timeout)
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center px-4"
    >
      <div className="font-display font-extrabold text-4xl sm:text-5xl text-granite-50 mb-1">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="font-display font-semibold text-compass text-sm mb-1">{label}</div>
      <div className="text-granite-500 text-xs">{detail}</div>
    </motion.div>
  )
}

const stats = [
  {
    value: 200,
    suffix: 'K+',
    prefix: 'KES ',
    label: 'Average Monthly Loss',
    detail: 'From M-Pesa fraud alone per property manager',
  },
  {
    value: 72,
    suffix: '%',
    label: 'Time Saved',
    detail: 'On rent collection and reconciliation',
  },
  {
    value: 6,
    suffix: '+',
    label: 'Banks Integrated',
    detail: 'KCB, Equity, NCBA, Co-op, ABSA, Stanbic',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Platform Uptime',
    detail: 'Hosted on Google Cloud infrastructure',
  },
]

export default function StatsSection() {
  return (
    <section className="bg-granite-900 py-16 sm:py-20 border-y border-granite-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              label={stat.label}
              detail={stat.detail}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
