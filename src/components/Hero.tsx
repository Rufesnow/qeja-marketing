import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { H1, Lead, Muted } from '@/components/ui/typography'
import PortfolioDashboard, { type Layer } from '@/components/PortfolioDashboard'

export default function Hero() {
  const [layer, setLayer] = useState<Layer>('ai')

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
        {/* The dashboard preview is hidden on phones, as in the Figma mobile frame. */}
        <div id="portfolio-dashboard" className="hidden w-full max-w-[960px] md:block">
          <PortfolioDashboard layer={layer} onLayerChange={setLayer} />
        </div>
      </div>
    </section>
  )
}
