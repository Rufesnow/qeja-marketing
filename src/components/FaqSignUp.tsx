import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { H2, Lead } from '@/components/ui/typography'
import SignUpForm from '@/components/SignUpForm'

const faqs = [
  {
    q: 'How does M-Pesa verification work?',
    a: 'A payment can only be recorded with its real M-Pesa transaction code, which Qeja checks against the transaction. Without a valid code, nothing is entered.',
  },
  {
    q: 'What is the Qeja Tenant Network?',
    a: 'A shared record of verified tenant history across every Qeja-managed property, so evictions, non-payment and damage show up before you sign a lease.',
  },
  {
    q: 'What is your data policy?',
    a: 'We follow the Kenya Data Protection Act and GDPR. Your data is encrypted, kept separate from other companies’ data, and tenant checks only run with the tenant’s consent. If you leave, you can export everything, and it’s permanently deleted 30 days later.',
  },
  {
    q: 'Can I try it before paying?',
    a: 'We don’t offer free trials, because every account runs on paid cloud and AI services from day one. Instead, if Qeja isn’t right for you, we’ll refund your money within your first 30 days.',
  },
]

export default function FaqSignUp() {
  return (
    <section className="bg-primary/5 px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start gap-x-16 gap-y-12">
        <div className="flex min-w-80 flex-1 flex-col gap-6">
          <div className="flex max-w-lg flex-col gap-3">
            <H2>
              The next problem tenant is <span className="text-primary">already filling out an application.</span>
            </H2>
            <Lead>
              Without the Qeja Tenant Network, you have no way to know. Without AI Insights, you won’t see it
              coming until rent day passes.
            </Lead>
          </div>
          <div id="faq" className="flex scroll-mt-4 flex-col gap-6">
            <Badge variant="secondary">FAQ</Badge>
            <Accordion type="single" collapsible defaultValue="faq-2">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <SignUpForm />
      </div>
    </section>
  )
}
