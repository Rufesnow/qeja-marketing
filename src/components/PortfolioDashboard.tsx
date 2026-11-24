import type { LucideIcon } from 'lucide-react'
import { BarChart, Building2, LineChart, TrendingUp, Users, Wallet } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Figma: Hero › Card › Slot / Hero preview, variant Layer=Business Intelligence (node 45:2890).
// A static preview: the tab row shows the three layers but only Business Intelligence is
// shipped, and nothing is clickable, so the AI Insights content is not given away.
// Illustrative figures only.
type Stat = { title: string; value: string; note: string; icon: LucideIcon }
type Row = { title: string; description: string; badge: string; icon: LucideIcon }

const tabs = [
  { value: 'analytics', label: 'Analytics' },
  { value: 'bi', label: 'Business Intelligence' },
  { value: 'ai', label: 'AI Insights' },
]

const stats: Stat[] = [
  { title: 'Revenue YTD', value: 'KES 21.8M', note: '+8.2% on last year', icon: Wallet },
  { title: 'YoY growth', value: '+11%', note: 'Quarterly average', icon: TrendingUp },
  { title: 'Retention', value: '86%', note: 'Above industry avg', icon: Users },
]

const rows: Row[] = [
  { title: 'Quarterly revenue', description: '3 of 4 quarters grew on last year', badge: 'Year-over-year', icon: BarChart },
  { title: 'Monthly growth', description: 'Revenue rose in 4 of the last 6 months', badge: 'Month-over-month', icon: LineChart },
  { title: 'Occupancy', description: 'Averaged 92% against a 90% target', badge: 'On target', icon: Building2 },
]

function StatCard({ title, value, note, icon: Icon }: Stat) {
  return (
    <div className="flex min-w-36 flex-1 flex-col gap-2 rounded-lg border bg-card p-6 text-card-foreground shadow-xs">
      <div className="flex items-center justify-between gap-2 text-sm font-medium">
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

export default function PortfolioDashboard({ className }: { className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Portfolio overview</CardTitle>
        <CardDescription>Westlands Heights Apartments · 48 units</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value="bi" className="gap-4">
          {/* Decorative: not focusable or clickable, and hidden from screen readers. */}
          <TabsList className="pointer-events-none w-full" aria-hidden="true">
            {tabs.map((t) => (
              <TabsTrigger key={t.value} value={t.value} tabIndex={-1}>
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="bi" className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-3">
              {stats.map((s) => (
                <StatCard key={s.title} {...s} />
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {rows.map(({ icon: Icon, ...r }) => (
                <Item key={r.title} size="sm" variant="outline">
                  <ItemMedia className="text-primary">
                    <Icon />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{r.title}</ItemTitle>
                    <ItemDescription>{r.description}</ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <Badge variant="outline">{r.badge}</Badge>
                  </ItemActions>
                </Item>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
