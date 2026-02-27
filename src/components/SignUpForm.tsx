'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'

const signUpSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  companyName: z.string().min(2, 'Company name must be at least 2 characters').max(100),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, 'Enter a valid phone number (e.g. 0712345678)'),
  email: z.string().email('Enter a valid email address'),
})

type SignUpFormData = z.infer<typeof signUpSchema>

export default function SignUpForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: SignUpFormData) => {
    setServerError('')
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.status === 429) {
        setServerError('Too many requests. Please try again in a few minutes.')
        return
      }

      if (!response.ok) {
        const result = await response.json()
        setServerError(result.error || 'Something went wrong. Please try again.')
        return
      }

      setSubmitted(true)

      // GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'sign_up_form_submit', {
          event_category: 'engagement',
        })
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.')
    }
  }

  const inputClasses =
    'w-full px-4 py-2.5 bg-granite-700/50 border border-granite-600/50 rounded-lg text-granite-50 placeholder:text-granite-500 focus:outline-none focus:ring-2 focus:ring-compass focus:border-transparent transition-colors'

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center py-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle className="w-16 h-16 text-compass mx-auto mb-4" />
          </motion.div>
          <h3 className="font-display font-bold text-2xl text-granite-50 mb-2">
            Thank you!
          </h3>
          <p className="text-granite-400">
            We&apos;ll be in touch within 24 hours to get you started.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* Name row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-granite-300 mb-1">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                {...register('firstName')}
                className={inputClasses}
                placeholder="Jane"
              />
              {errors.firstName && (
                <p className="text-red-400 text-xs mt-1">{errors.firstName.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-granite-300 mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                {...register('lastName')}
                className={inputClasses}
                placeholder="Mwangi"
              />
              {errors.lastName && (
                <p className="text-red-400 text-xs mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-granite-300 mb-1">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              {...register('companyName')}
              className={inputClasses}
              placeholder="Mwangi Properties Ltd"
            />
            {errors.companyName && (
              <p className="text-red-400 text-xs mt-1">{errors.companyName.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-granite-300 mb-1">
              Phone Number
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 bg-granite-700/70 border border-r-0 border-granite-600/50 rounded-l-lg text-granite-400 text-sm">
                +254
              </span>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className={`${inputClasses} rounded-l-none`}
                placeholder="712345678"
              />
            </div>
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-granite-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register('email')}
              className={inputClasses}
              placeholder="jane@mwangiproperties.co.ke"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Server error */}
          {serverError && (
            <p className="text-red-400 text-sm text-center">{serverError}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-compass py-3 text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Get Early Access'
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
