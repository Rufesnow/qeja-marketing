import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { H2, Lead } from '@/components/ui/typography'
import SignUpForm from '@/components/SignUpForm'

const faqs = [
  {
    q: 'How does M-Pesa verification work?',
    a: 'A payment can only be recorded with its real M-Pesa transaction code, which Qeja checks against the transaction. Without a valid code, nothing is entered.',
  },
  {
    q: 'What is Verified Rental History?',
    a: 'When a tenant applies and gives consent, Qeja checks their payment and tenancy records from other landlords on the platform. We only share what’s needed to make a rental decision, in line with the Kenya Data Protection Act.',
  },
  {
    q: 'What is your data policy?',
    a: 'We follow the Kenya Data Protection Act and GDPR. Your data is encrypted, kept separate from other companies’ data, and tenant checks only run with the tenant’s consent. If you leave, you can export everything, and it’s permanently deleted 30 days later.',
  },
  {
    q: 'Can I try it before paying?',
    a: 'We don’t offer free trials, because every account runs on paid cloud and AI services from day one. Instead, if Qeja isn’t right for you, we’ll refund your money within your first 30 days.',
  },
  {
    q: 'Can I import my existing tenants and records from Excel?',
    a: 'Yes. You can import your tenants and records from Excel straight into Qeja, so there’s no need to re-enter them.',
  },
  {
    q: 'Do my tenants need to download an app?',
    a: 'No. Qeja is used by landlords and property managers. Tenants receive rent reminders by SMS, email or WhatsApp, sent under your brand.',
  },
  {
    q: 'How long does setup take?',
    a: 'Less than an hour. Import your tenants and records from Excel and you’re ready to go.',
  },
  {
    q: 'What happens after I contact you?',
    a: 'We’ll call you within one business day to learn about your portfolio and recommend the plan that fits.',
  },
]

// Figma: FAQ & Contact — FAQ first, then the closing headline next to the contact form.
export default function FaqSignUp() {
  return (
    <section className="bg-primary/5 px-6 py-16 lg:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-24">
        <div id="faq" className="flex max-w-3xl scroll-mt-4 flex-col gap-6">
          <H2>Frequently asked questions</H2>
          <Accordion type="single" collapsible defaultValue="faq-2">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent className="text-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex flex-wrap items-start gap-x-16 gap-y-12">
          <div className="flex min-w-80 max-w-lg flex-1 flex-col gap-3">
            <H2>
              Your next great tenant is applying now. <span className="text-primary">Know them before you sign.</span>
            </H2>
            <Lead>
              With the tenant’s consent, Verified Rental History shows their track record. AI Insights flags risk
              before rent day passes.
            </Lead>
          </div>
          <SignUpForm />
        </div>
      </div>
    </section>
  )
}
