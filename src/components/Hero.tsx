import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { H1, Lead } from '@/components/ui/typography'

const trust = ['Kenya DPA compliant', 'GDPR compliant', 'AI powered automation']

export default function Hero() {
  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <Badge variant="outline">
          <Sparkles />
          The only ML-powered property platform in East Africa
        </Badge>
        <H1>Know what’s coming before it costs you.</H1>
        <Lead>
          Qeja predicts which tenants will default, which leases won’t renew and which expenses look
          wrong — up to 60 days before you’d notice. Rent, M-Pesa reconciliation, leases and tenant
          screening run on the same platform.
        </Lead>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href="#sign-up">
              Sign up today
              <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#pricing">See pricing</a>
          </Button>
        </div>
        <ul className="flex flex-wrap justify-center gap-2">
          {trust.map((t) => (
            <li key={t}>
              <Badge variant="secondary">
                <ShieldCheck />
                {t}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
