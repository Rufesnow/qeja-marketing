import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Muted } from '@/components/ui/typography'
import Logo from '@/components/Logo'

const legal = [
  { label: 'Privacy Policy', href: '/api/docs/Qeja-Privacy-Policy.pdf' },
  { label: 'Terms of Service', href: '/api/docs/Qeja-Terms-of-Service.pdf' },
  { label: 'Data Protection', href: '/api/docs/Qeja-Data-Protection-Policy.pdf' },
]

export default function SiteFooter() {
  return (
    <footer className="px-6">
      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Logo size={24} />
          <Muted>© 2025 Qeja Real Estate Property Management.</Muted>
        </div>
        <ul className="flex flex-col items-start gap-1 md:flex-row md:flex-wrap md:justify-end md:gap-2">
          {legal.map((l) => (
            <li key={l.href}>
              <Button asChild variant="link" size="sm" className="px-0 text-xs md:px-3">
                <a href={l.href} download>
                  {l.label}
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
