import { Github, Instagram, Linkedin, Mail, Phone, Globe } from 'lucide-react'
import type { Social } from '@/types/portfolio'

interface Props {
  social: Social
  className?: string
  iconSize?: number
}

const socialConfig: { key: keyof Social; icon: typeof Github; label: string }[] = [
  { key: 'github', icon: Github, label: 'GitHub' },
  { key: 'instagram', icon: Instagram, label: 'Instagram' },
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'email', icon: Mail, label: 'Email' },
  { key: 'phone', icon: Phone, label: 'Phone' },
  { key: 'website', icon: Globe, label: 'Website' },
]

export default function SocialLinks({ social, className = '', iconSize = 20 }: Props) {
  const visible = socialConfig.filter(({ key }) => social[key])

  if (visible.length === 0) return null

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {visible.map(({ key, icon: Icon, label }) => {
        const value = social[key]!
        const href = key === 'email' ? `mailto:${value}` : key === 'phone' ? `tel:${value}` : value
        return (
          <a
            key={key}
            href={href}
            target={key === 'email' || key === 'phone' ? undefined : '_blank'}
            rel={key === 'email' || key === 'phone' ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Icon size={iconSize} />
          </a>
        )
      })}
    </div>
  )
}
