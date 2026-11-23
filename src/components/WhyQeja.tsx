import { useState } from 'react'
import { BarChart, BrainCircuit, TrendingUp } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Separator } from '@/components/ui/separator'
import { H2, H3, Lead, Muted } from '@/components/ui/typography'
import PortfolioDashboard, { type Layer } from '@/components/PortfolioDashboard'

const definitions: { layer: Layer; title: string; description: string; icon: typeof BarChart }[] = [
  { layer: 'analytics', title: 'Analytics', description: 'What’s happening now: occupancy, collections and maintenance.', icon: BarChart },
  {
    layer: 'bi',
    title: 'Business Intelligence',
    description: 'What happened before: revenue trends, turnover and expense benchmarks.',
    icon: TrendingUp,
  },
  { layer: 'ai', title: 'AI Insights', description: 'What will happen next: tenants at risk, non-renewals and rising costs.', icon: BrainCircuit },
]

const proof = [
  {
    title: 'Payments that can’t be faked',
    description:
      'Every payment needs the real M-Pesa transaction code before it can be recorded. No code, no entry. Bank transfers reconcile directly with KCB, Equity, NCBA, Co-op, ABSA and Stanbic.',
    stat: 'M-Pesa + 6 banks',
    note: 'Reconciled automatically',
  },
  {
    title: 'See a tenant’s real history',
    description:
      'The Qeja Tenant Network shares verified records across every Qeja-managed property. Evictions, non-payment and damage follow a tenant, so you see them before you sign.',
    stat: 'KES 200K+',
    note: 'Average loss avoided per bad tenant',
  },
  {
    title: 'Warnings 60 days ahead',
    description:
      'Qeja AI flags tenants at risk, leases unlikely to renew and costs about to rise, early enough to act on them.',
    stat: '85%',
    note: 'Vacancy prediction accuracy',
  },
]

export default function WhyQeja() {
  const [layer, setLayer] = useState<Layer>('ai')

  return (
    <section id="why-qeja" className="bg-primary/5 px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-wrap items-center gap-x-24 gap-y-12">
          <div className="flex min-w-80 max-w-sm flex-1 flex-col gap-3">
            <Badge variant="secondary">Why Qeja</Badge>
            <H2>Stop losing income to things you could have seen coming.</H2>
            <Lead>Most property software tells you what happened yesterday. Qeja gives you three layers of insight:</Lead>
            <ul>
              {definitions.map(({ layer: l, title, description, icon: Icon }) => (
                <li key={l}>
                  <Item asChild size="sm" className={layer === l ? 'w-full bg-primary/10' : 'w-full'}>
                    <button
                      type="button"
                      onClick={() => setLayer(l)}
                      aria-pressed={layer === l}
                      aria-controls="portfolio-dashboard"
                      className="cursor-default md:cursor-pointer"
                    >
                      <ItemMedia className="text-primary">
                        <Icon />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle className="text-primary">{title}</ItemTitle>
                        <ItemDescription>{description}</ItemDescription>
                      </ItemContent>
                    </button>
                  </Item>
                </li>
              ))}
            </ul>
          </div>
          <div id="portfolio-dashboard" className="hidden min-w-80 flex-1 md:block">
            <PortfolioDashboard layer={layer} onLayerChange={setLayer} />
          </div>
        </div>

        <div className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-6 overflow-x-auto px-6 pb-2 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
          {proof.map((p) => (
            <Card key={p.title} className="w-72 shrink-0 snap-start lg:w-auto lg:min-w-72 lg:flex-1">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Separator />
                <H3>{p.stat}</H3>
                <Muted>{p.note}</Muted>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
