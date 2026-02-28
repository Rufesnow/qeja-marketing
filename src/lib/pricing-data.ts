export interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number | null // null = custom pricing
  annualPrice: number | null
  currency: string
  highlighted: boolean
  badge?: string
  features: string[]
  limits: {
    users: string
    properties: string
  }
  ctaLabel: string
  ctaStyle: 'outline' | 'compass' | 'dark'
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    description: 'Perfect for small property managers getting started.',
    monthlyPrice: 0,
    annualPrice: 0,
    currency: 'KES',
    highlighted: false,
    features: [
      'Basic property management',
      'Tenant profiles & documents',
      'Analytics & Business Intelligence',
      'Multi-channel communications',
      'Digital contracts & e-signatures',
      'Community support',
    ],
    limits: {
      users: 'Up to 5 users',
      properties: 'Up to 10 properties',
    },
    ctaLabel: 'Get Started Free',
    ctaStyle: 'outline',
  },
  {
    name: 'Professional',
    description: 'For growing firms that need powerful tools.',
    monthlyPrice: 4999,
    annualPrice: 3999,
    currency: 'KES',
    highlighted: true,
    badge: 'Most Popular',
    features: [
      'Everything in Starter, plus:',
      'M-Pesa payment verification',
      'Full AI Insights dashboard',
      'AI payment default prediction',
      'AI vacancy forecasting',
      'Qeja Tenant Network access',
      'Priority support',
    ],
    limits: {
      users: 'Up to 25 users',
      properties: 'Up to 100 properties',
    },
    ctaLabel: 'Start Free Trial',
    ctaStyle: 'compass',
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs.',
    monthlyPrice: null,
    annualPrice: null,
    currency: 'KES',
    highlighted: false,
    features: [
      'Everything in Professional, plus:',
      'AI revenue forecasting & anomaly detection',
      'Tenant risk scoring for applicants',
      'Custom integrations & API access',
      'Dedicated account manager',
      'SLA & uptime guarantees',
      'On-premise deployment option',
    ],
    limits: {
      users: 'Unlimited users',
      properties: 'Unlimited properties',
    },
    ctaLabel: 'Contact Sales',
    ctaStyle: 'dark',
  },
]
