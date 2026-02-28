'use client'

import Image from 'next/image'

const footerLinks = {
  product: [
    { label: 'AI Intelligence', href: '#intelligence' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#signup' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/docs/Qeja-Privacy-Policy.pdf', download: true },
    { label: 'Terms of Service', href: '/docs/Qeja-Terms-of-Service.pdf', download: true },
    { label: 'Data Protection', href: '/docs/Qeja-Data-Protection-Policy.pdf', download: true },
  ],
}

export default function FooterSection() {
  const scrollTo = (href: string) => {
    if (href === '#') return
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-granite-900 border-t border-granite-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/qeja-logo-sm.png"
                alt="Qeja"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-display font-bold text-lg text-granite-50">Qeja</span>
            </div>
            <p className="text-granite-400 text-sm leading-relaxed mb-4">
              AI-powered property intelligence built in Nairobi for East African property managers.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-forest-500 rounded-full" />
              <span className="text-granite-500 text-xs">Built in Nairobi</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold text-granite-200 text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-granite-400 hover:text-granite-200 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-granite-200 text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-granite-400 hover:text-granite-200 text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-granite-200 text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    download
                    className="text-granite-400 hover:text-granite-200 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-granite-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-granite-500 text-sm">
            &copy; {new Date().getFullYear()} Qeja. All rights reserved.
          </p>
          <p className="text-granite-500 text-xs">
            Real Estate Management System
          </p>
        </div>
      </div>
    </footer>
  )
}
