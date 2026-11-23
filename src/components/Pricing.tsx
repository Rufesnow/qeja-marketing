import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { H2, Lead, List, Muted, Small } from '@/components/ui/typography'
import { ANNUAL_DISCOUNT_LABEL, pricingPlans, type PricingPlan } from '@/lib/pricing-data'
import { cn } from '@/lib/utils'

type Billing = 'monthly' | 'annual'

const kes = (n: number) => `KES ${n.toLocaleString('en-KE')}`

function PlanCard({ plan, billing, className }: { plan: PricingPlan; billing: Billing; className?: string }) {
  const price = billing === 'annual' ? plan.annualPrice : plan.monthlyPrice
  return (
    <Card className={cn('w-full min-w-72 max-w-lg flex-1', className)}>
      <CardHeader>
        <CardTitle>{plan.name}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="border-b pb-2 text-3xl font-semibold">{price === null ? 'Custom' : kes(price)}</p>
          <Muted>
            {price === null ? plan.customPriceNote : 'per month'}
          </Muted>
          <Small className="whitespace-pre-wrap">{plan.limits}</Small>
        </div>
        <Separator />
        <List>
          {plan.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </List>
      </CardContent>
      <CardFooter>
        <Button asChild size="lg" variant={plan.recommended ? 'default' : 'outline'} className="w-full">
          <a href="#sign-up">{plan.ctaLabel}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const [selected, setSelected] = useState('Professional')

  return (
    <section id="pricing" className="px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8">
        <div className="flex w-full max-w-3xl flex-col items-center gap-3 text-center">
          <Badge variant="secondary">Pricing</Badge>
          <H2>Predictive AI using real data that pays for itself.</H2>
          <Lead>No hosting charges, no user limits (where applicable) and no credit card required.</Lead>
        </div>

        {/* Desktop: billing toggle. Tablet/mobile: plan switcher. */}
        <Tabs value={billing} onValueChange={(v) => setBilling(v as Billing)} className="hidden w-full max-w-sm lg:flex">
          <TabsList className="w-full" aria-label="Billing period">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annual">{ANNUAL_DISCOUNT_LABEL}</TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs value={selected} onValueChange={setSelected} className="w-full max-w-lg lg:hidden">
          <TabsList className="w-full" aria-label="Plan">
            {pricingPlans.map((p) => (
              <TabsTrigger key={p.name} value={p.name}>
                {p.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex w-full flex-wrap items-stretch justify-center gap-6">
          {pricingPlans.map((p) => (
            <PlanCard
              key={p.name}
              plan={p}
              billing={billing}
              className={p.name === selected ? 'flex' : 'hidden lg:flex'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
