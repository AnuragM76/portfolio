import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import SocialLinks from './SocialLinks'
import type { Profile } from '@/types/portfolio'

interface Props {
  profile: Profile
  social: Profile['social']
}

const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Footer({ profile, social }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!social.email) return
    try {
      await navigator.clipboard.writeText(social.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="px-6 py-16 border-t border-gray-800 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold hero-heading mb-2">{profile.shortName}</h3>
            <p className="text-gray-400 text-sm mb-1">{profile.specialization}</p>
            <p className="text-gray-500 text-sm">{profile.location}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-300 mb-4">NAVIGATE</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-gray-300 mb-4">REACH OUT</h4>
            <div className="space-y-3">
              {social.email && (
                <div className="flex items-center gap-2">
                  <a href={`mailto:${social.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {social.email}
                  </a>
                  <button
                    onClick={handleCopy}
                    aria-label="Copy email"
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>
              )}
              {social.phone && (
                <a href={`tel:${social.phone}`} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {social.phone}
                </a>
              )}
              <SocialLinks social={social} />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
