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
      <Separator className="mx-auto max-w-6xl" />
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-4 py-8">
        <div className="flex min-w-72 max-w-sm items-center gap-2">
          <Logo size={20} />
          <Muted>© 2025 Qeja Real Estate Property Management.</Muted>
        </div>
        <ul className="flex flex-wrap gap-2 md:justify-end">
          {legal.map((l) => (
            <li key={l.href}>
              <Button asChild variant="link" size="sm">
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
