import { H2, H3, Lead } from '@/components/ui/typography'

// Figma: Differentiators — a large statement title over three short points (Slot / Differentiator).
const points = [
  { title: 'M-Pesa + 6 banks', note: 'Every payment checked and reconciled automatically.' },
  { title: 'Verified Rental History', note: 'See a tenant’s track record before you sign, with their consent.' },
  { title: 'Early warnings', note: 'At-risk tenants, non-renewals and rising costs, up to 60 days ahead.' },
]

export default function WhyQeja() {
  return (
    <section id="why-qeja" className="bg-primary/5 px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {/* 30px (kit H2) on tablet and mobile; 48px statement on desktop; no rule under it. */}
        <H2 className="max-w-[960px] border-b-0 pb-0 lg:text-5xl lg:leading-none">
          Stop losing income to things you could have seen coming.
        </H2>
        <ul className="grid gap-x-12 gap-y-10 md:grid-cols-3">
          {points.map((p) => (
            <li key={p.title} className="flex flex-col gap-2">
              <H3 className="text-base uppercase">{p.title}</H3>
              <Lead className="text-sm">{p.note}</Lead>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
