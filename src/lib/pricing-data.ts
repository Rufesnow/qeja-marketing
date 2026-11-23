// Plans as designed in Figma (Qeja Website › Pricing). Prices are KES per month.
export interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number | null // null = custom pricing
  annualPrice: number | null // per month, billed annually
  customPriceNote?: string
  limits: string
  features: string[]
  ctaLabel: string
  recommended: boolean
}

export const ANNUAL_DISCOUNT_LABEL = 'Annual — save 20%'

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'For small landlords getting organised.',
    monthlyPrice: 1950,
    annualPrice: 1560,
    limits: 'Up to 5 users · 10  properties',
    features: [
      'Property & tenant management',
      'Digital leases & e-signatures',
      'SMS, Tenant verifications, Fraud detection, Analytics dashboard and Community support',
    ],
    ctaLabel: 'Get started',
    recommended: false,
  },
  {
    name: 'Professional',
    description: 'For growing firms that want the AI.',
    monthlyPrice: 3999,
    annualPrice: 3199,
    limits: 'Up to 25 users · 100 properties',
    features: [
      'Everything in Starter, plus:',
      'AI automations and verification',
      'AI risk & vacancy forecasting',
      'Full AI Insights dashboard',
      'Qeja Tenant Network access',
      'Priority support',
    ],
    ctaLabel: 'Recommended choice',
    recommended: true,
  },
  {
    name: 'Enterprise',
    description: 'For large portfolios with custom needs.',
    monthlyPrice: null,
    annualPrice: null,
    customPriceNote: 'Talk to us about your portfolio.',
    limits: 'Unlimited users · unlimited properties',
    features: [
      'Everything in Professional, plus:',
      'Revenue & maintenance forecasting',
      'Tenant risk scoring (0–100)',
      'API access & custom integrations',
      'Dedicated account manager & SLA',
      'On-premise deployment option',
    ],
    ctaLabel: 'Contact sales',
    recommended: false,
  },
]
