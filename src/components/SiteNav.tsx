import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Large } from '@/components/ui/typography'
import Logo from '@/components/Logo'

const links = [
  { label: 'Product', href: '#why-qeja' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function SiteNav() {
  return (
    <header className="px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2" aria-label="Qeja home">
          <Logo size={32} />
          <Large>Qeja</Large>
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Button asChild variant="ghost" className="font-medium">
                  <a href={l.href}>{l.label}</a>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild>
          <a href="#sign-up">Ask a question</a>
        </Button>
      </div>
      <Separator />
    </header>
  )
}
