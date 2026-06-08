import { useEffect, useState } from 'react'
import { usePortfolio } from '@/hooks/usePortfolio'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'
import ResumeSection from '@/components/ResumeSection'
import CertificationsSection from '@/components/CertificationsSection'
import ResumePage from '@/app/resume/page'

export default function App() {
  const { profile, experience, projects, testimonials } = usePortfolio()
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  if (pathname === '/resume') {
    return <ResumePage />
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <HeroSection profile={profile} social={profile.social} />
      <AboutSection profile={profile} />
      <ExperienceSection experience={experience} />
      <ResumeSection />
      <CertificationsSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <TestimonialsSection testimonials={testimonials} />
      <Footer profile={profile} social={profile.social} />
    </div>
  )
}
