import { H2, H3, Large, Lead, Muted } from '@/components/ui/typography'

// Figma: Features — everyday features grouped by when they happen (Slot / Feature group).
const groups = [
  {
    title: 'Before move-in',
    items: [
      { title: 'Tenant screening', description: 'ID verification and background checks, with consent recorded.' },
      { title: 'Digital leases', description: 'Contracts from templates, e-signatures and auto-renewal rules.' },
    ],
  },
  {
    title: 'Every month',
    items: [
      { title: 'Automatic invoicing', description: 'Sign a 2-year lease and all 24 invoices are created on day one.' },
      { title: 'Tenant communications', description: 'SMS, email and WhatsApp reminders, sent under your brand.' },
    ],
  },
  {
    title: 'All year',
    items: [
      { title: 'Portfolio management', description: 'Every property, unit and occupancy rate on one dashboard.' },
      { title: 'Tax & compliance', description: 'VAT and withholding tax calculated, with a full audit trail.' },
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="scroll-mt-4 px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex max-w-3xl flex-col gap-3">
          <H2>The day-to-day, handled.</H2>
          <Lead>Portfolio, money, tenants and paperwork in one place, built for how property is managed in Kenya.</Lead>
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {groups.map((g, gi) => (
            <section key={g.title} aria-labelledby={`feature-group-${gi}`} className="flex flex-col gap-5 border-t-2 border-primary pt-4">
              <H3 id={`feature-group-${gi}`}>{g.title}</H3>
              <ul className="flex flex-col gap-5">
                {g.items.map((i) => (
                  <li key={i.title} className="flex flex-col gap-1">
                    <Large>{i.title}</Large>
                    <Muted>{i.description}</Muted>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
