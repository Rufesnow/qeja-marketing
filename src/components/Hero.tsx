import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { H1, Lead, Muted } from '@/components/ui/typography'
import PortfolioDashboard from '@/components/PortfolioDashboard'

export default function Hero() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
        <div className="flex w-full min-w-80 max-w-3xl flex-col items-center gap-6 text-center">
          {/* Figma: 36px mobile, 48px tablet (kit H1), 60px desktop (text-6xl bold, leading-none). */}
          <H1 className="lg:text-6xl lg:font-bold lg:leading-none">Property management that sees what’s coming.</H1>
          <Lead>
            Rent, M-Pesa reconciliation, leases and tenant screening in one place, plus early warnings on
            at-risk tenants, non-renewals and rising costs.
          </Lead>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="#contact">
                Talk to us
                <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#pricing">See pricing</a>
            </Button>
          </div>
          <Muted>Kenya DPA and GDPR compliant</Muted>
        </div>
        {/* Figma "Dashboard preview": cropped to 346px (tab row, stats and the first data row) and
            faded out from 55% down. Hidden on phones, as in the Figma mobile frame. */}
        <div
          id="portfolio-dashboard"
          aria-hidden="true"
          className="hidden h-[346px] w-full max-w-[960px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent)] md:block"
        >
          <PortfolioDashboard />
        </div>
      </div>
    </section>
  )
}
