import type { LucideIcon } from 'lucide-react'
import {
  BadgeCheck,
  Building2,
  CalendarClock,
  LineChart,
  ReceiptText,
  Sparkles,
  TrendingUp,
  Wallet,
  Wrench,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Placeholder figures from Figma (Slot / Hero preview). Replace with approved numbers before launch.
export type Layer = 'analytics' | 'bi' | 'ai'

type Stat = { title: string; value: string; note: string; icon: LucideIcon }
type Row = { title: string; description: string; badge: string; icon: LucideIcon; verified?: boolean }

const statIcons = [Building2, Wallet, TrendingUp]

const layers: Record<Layer, { label: string; period: string; stats: Omit<Stat, 'icon'>[]; rows: Row[] }> = {
  analytics: {
    label: 'Analytics',
    period: 'November',
    stats: [
      { title: 'Occupancy', value: '94%', note: '45 of 48 units let' },
      { title: 'Collected', value: 'KES 2.1M', note: 'All M-Pesa verified' },
      { title: 'Maintenance', value: '4 open', note: 'Average response 6 hours' },
    ],
    rows: [
      { title: 'Unit B2 · leaking tap', description: 'Reported today · plumber assigned', badge: 'Maintenance', icon: Wrench },
      { title: 'Unit A7 · KES 38,000', description: 'Rent due in 3 days', badge: 'Due soon', icon: CalendarClock },
      {
        title: 'M-Pesa QFT7H2K9LM · KES 45,000',
        description: 'Unit C2 · matched to November invoice',
        badge: 'Verified',
        icon: ReceiptText,
        verified: true,
      },
    ],
  },
  bi: {
    label: 'Business Intelligence',
    period: 'last 12 months',
    stats: [
      { title: 'Annual revenue', value: 'KES 24.6M', note: '8% up on last year' },
      { title: 'Tenant turnover', value: '11%', note: '5 move-outs this year' },
      { title: 'Expenses', value: 'KES 3.2M', note: '2% under similar properties' },
    ],
    rows: [
      { title: 'January peak', description: 'Rent collection runs 6% higher after the holidays', badge: 'Seasonal', icon: LineChart },
      { title: 'Block C turnover', description: 'Highest in your portfolio at 18%', badge: 'Turnover', icon: TrendingUp },
      { title: 'Water costs', description: '12% above similar properties', badge: 'Benchmark', icon: LineChart },
    ],
  },
  ai: {
    label: 'AI Insights',
    period: 'next 60 days',
    stats: [
      { title: 'Rent forecast', value: 'KES 1.9M', note: 'December, after late payers' },
      { title: 'Renewals at risk', value: '2 leases', note: 'Ending in January' },
      { title: 'At risk', value: '3 tenants', note: 'Flagged by Qeja AI' },
    ],
    rows: [
      { title: 'Unit B4', description: 'Likely to pay late in about 3 weeks', badge: 'Payment risk', icon: Sparkles },
      { title: 'Unit A12', description: 'Lease unlikely to renew in January', badge: 'Vacancy risk', icon: Sparkles },
      { title: 'Water bill', description: '34% above the 6-month average', badge: 'Expense anomaly', icon: Sparkles },
    ],
  },
}

export const layerOrder: Layer[] = ['analytics', 'bi', 'ai']

function StatCard({ title, value, note, icon: Icon }: Stat) {
  return (
    <div className="flex min-w-36 flex-1 flex-col gap-2 rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-start justify-between gap-2 text-sm">
        <span>{title}</span>
        <Icon className="size-4 shrink-0" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-xs text-muted-foreground">{note}</span>
      </div>
    </div>
  )
}

export default function PortfolioDashboard({
  layer,
  onLayerChange,
  className,
}: {
  layer: Layer
  onLayerChange: (l: Layer) => void
  className?: string
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Portfolio overview</CardTitle>
        <CardDescription>Westlands Court · 48 units · {layers[layer].period}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={layer} onValueChange={(v) => onLayerChange(v as Layer)} className="gap-4">
          <TabsList className="w-full">
            {layerOrder.map((l) => (
              <TabsTrigger key={l} value={l}>
                {layers[l].label}
              </TabsTrigger>
            ))}
          </TabsList>
          {layerOrder.map((l) => (
            <TabsContent key={l} value={l} className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                {layers[l].stats.map((s, i) => (
                  <StatCard key={s.title} {...s} icon={statIcons[i]} />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {layers[l].rows.map(({ icon: Icon, ...r }) => (
                  <Item key={r.title} size="sm" variant={r.verified ? 'muted' : 'outline'}>
                    <ItemMedia>
                      <Icon />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle>{r.title}</ItemTitle>
                      <ItemDescription>{r.description}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      {r.verified ? (
                        <Badge className="border-transparent bg-blue-500 text-white dark:bg-blue-600">
                          <BadgeCheck />
                          {r.badge}
                        </Badge>
                      ) : (
                        <Badge variant="outline">{r.badge}</Badge>
                      )}
                    </ItemActions>
                  </Item>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
