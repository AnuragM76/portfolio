export interface Social {
  github?: string
  instagram?: string
  linkedin?: string
  email?: string
  phone?: string
  website?: string
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Skills {
  categories: SkillCategory[]
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
}

export interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  stack: string[]
  role: string
  year: string
  link: string
  image: string
  highlight: boolean
}

export interface Education {
  institution: string
  degree: string
  period: string
}

export interface Testimonial {
  id: number
  quote: string
  name: string
  role: string
  avatarColor: string
}

export interface Profile {
  name: string
  shortName: string
  tagline: string
  role: string
  specialization: string
  location: string
  yearsOfExperience: number
  bio: string
  avatar: string
  social: Social
}

export interface PortfolioData {
  profile: Profile
  skills: Skills
  experience: Experience[]
  projects: Project[]
  education: Education[]
  resume: Resume
  certifications: Certification[]
  testimonials: Testimonial[]
}

export type Portfolio = PortfolioData

export interface Resume {
  title: string
  description: string
  viewLink: string
  downloadLink: string
}

export interface Certification {
  id: number
  title: string
  type: string
  issuer: string
  date: string
  description: string
  certificateLink: string
  featured: boolean
}

