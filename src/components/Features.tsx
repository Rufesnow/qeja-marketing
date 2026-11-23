import { Building2, Calculator, FilePenLine, MessageSquare, ReceiptText, UserCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from '@/components/ui/item'
import { H2, Lead } from '@/components/ui/typography'

const features = [
  { title: 'Portfolio management', description: 'Every property, unit and occupancy rate on one dashboard.', icon: Building2 },
  { title: 'Automatic invoicing', description: 'Sign a 2-year lease and all 24 invoices are created on day one.', icon: ReceiptText },
  { title: 'Tenant communications', description: 'SMS, email and WhatsApp reminders, sent under your brand.', icon: MessageSquare },
  { title: 'Digital leases', description: 'Contracts from templates, e-signatures and auto-renewal rules.', icon: FilePenLine },
  { title: 'Tenant screening', description: 'ID verification and background checks, with consent recorded.', icon: UserCheck },
  { title: 'Tax & compliance', description: 'VAT and withholding tax calculated, with a full audit trail.', icon: Calculator },
]

export default function Features() {
  return (
    <section id="features" className="px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:gap-24">
        <div className="flex min-w-80 max-w-sm flex-col gap-3">
          <Badge variant="secondary">Everything else</Badge>
          <H2>The day-to-day, handled.</H2>
          <Lead>Portfolio, money, tenants and paperwork in one place, built for how property is managed in Kenya.</Lead>
        </div>
        <ul className="-mx-6 flex min-w-80 flex-1 snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 lg:mx-0 lg:grid lg:grid-cols-2 lg:content-start lg:overflow-visible lg:px-0 lg:pb-0">
          {features.map(({ icon: Icon, ...f }) => (
            <li key={f.title} className="w-72 shrink-0 snap-start lg:w-auto">
              <Item variant="outline" className="h-full items-start">
                <ItemMedia>
                  <Icon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{f.title}</ItemTitle>
                  <ItemDescription className="line-clamp-none">{f.description}</ItemDescription>
                </ItemContent>
              </Item>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
