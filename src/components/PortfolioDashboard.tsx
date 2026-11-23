import type { LucideIcon } from 'lucide-react'
import {
  BarChart,
  Building2,
  ClipboardList,
  FilePenLine,
  LineChart,
  ReceiptText,
  Sparkles,
  TrendingUp,
  UserMinus,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Content from Figma: Slot / Hero preview, variants Layer=Analytics / Business Intelligence / AI Insights.
// Illustrative figures only.
export type Layer = 'analytics' | 'bi' | 'ai'

type Stat = { title: string; value: string; note: string; icon: LucideIcon }
type Row = { title: string; description: string; badge: string; icon: LucideIcon }

const layers: Record<Layer, { label: string; stats: Stat[]; rows: Row[] }> = {
  analytics: {
    label: 'Analytics',
    stats: [
      { title: 'Occupancy', value: '94%', note: '45 of 48 units let', icon: Building2 },
      { title: 'Revenue', value: 'KES 2.03M', note: 'This month', icon: Wallet },
      { title: 'Tasks', value: '5 pending', note: '2 urgent', icon: ClipboardList },
    ],
    rows: [
      { title: 'Rent received · Unit 4B', description: 'KES 45,000 by M-Pesa · today', badge: 'Paid', icon: ReceiptText },
      { title: 'Kitchen sink leaking · Unit 2A', description: 'Due 25 Nov · Peter Otieno', badge: 'High', icon: Wrench },
      { title: 'Lease signed · Unit 7C', description: 'Grace Wanjiku · moves in 1 Dec', badge: 'Completed', icon: FilePenLine },
    ],
  },
  bi: {
    label: 'Business Intelligence',
    stats: [
      { title: 'Revenue YTD', value: 'KES 21.8M', note: '+8.2% on last year', icon: Wallet },
      { title: 'YoY growth', value: '+11%', note: 'Quarterly average', icon: TrendingUp },
      { title: 'Retention', value: '86%', note: 'Above industry avg', icon: Users },
    ],
    rows: [
      { title: 'Quarterly revenue', description: '3 of 4 quarters grew on last year', badge: 'Year-over-year', icon: BarChart },
      { title: 'Monthly growth', description: 'Revenue rose in 4 of the last 6 months', badge: 'Month-over-month', icon: LineChart },
      { title: 'Occupancy', description: 'Averaged 92% against a 90% target', badge: 'On target', icon: Building2 },
    ],
  },
  ai: {
    label: 'AI Insights',
    stats: [
      { title: 'Forecast', value: 'KES 2.07M', note: 'Next month', icon: LineChart },
      { title: 'Tenants at risk', value: '3 tenants', note: 'Next 3 months', icon: UserMinus },
      { title: 'Maintenance', value: 'KES 180K', note: 'Expected next quarter', icon: Wrench },
    ],
    rows: [
      { title: 'John Doe · Unit 12B', description: 'Likely to leave before his lease ends in February', badge: 'High risk', icon: Sparkles },
      { title: 'Rent review · Westlands Heights', description: 'Room to raise rent 8% and stay fully let', badge: 'Revenue opportunity', icon: Sparkles },
      { title: 'Block A plumbing', description: 'Repair costs set to rise next quarter', badge: 'Maintenance', icon: Sparkles },
    ],
  },
}

export const layerOrder: Layer[] = ['analytics', 'bi', 'ai']

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
        <CardDescription>Westlands Heights Apartments · 48 units</CardDescription>
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
                {layers[l].stats.map((s) => (
                  <StatCard key={s.title} {...s} />
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {layers[l].rows.map(({ icon: Icon, ...r }) => (
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
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
