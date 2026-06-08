import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, FileText, Github, Globe, Mail, MapPin, Phone } from 'lucide-react'
import { usePortfolio } from '@/hooks/usePortfolio'

const RESUME_PDF = '/resume/AnuragMahajan.pdf'

function getPdfUrlStatus(url: string) {
  return fetch(url, { method: 'HEAD' })
    .then((response) => {
      if (!response.ok) return false
      const contentType = response.headers.get('content-type') ?? ''
      return contentType.includes('pdf') || contentType.includes('octet-stream')
    })
    .catch(() => false)
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h2 className="text-lg font-semibold tracking-wide text-white mb-4">{title}</h2>
      {children}
    </section>
  )
}

export default function ResumePage() {
  const { profile, skills, experience, education, certifications } = usePortfolio()
  const [pdfReady, setPdfReady] = useState<boolean | null>(null)

  useEffect(() => {
    let mounted = true
    getPdfUrlStatus(RESUME_PDF).then((ok) => {
      if (mounted) setPdfReady(ok)
    })
    return () => {
      mounted = false
    }
  }, [])

  const achievements = useMemo(
    () =>
      certifications
        .filter((item) => item.featured)
        .map((item) => item.title),
    [certifications],
  )

  return (
    <main className="min-h-screen bg-[#0b0b0d] text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-slate-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:border-white/20 hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>

          <a
            href={RESUME_PDF}
            download
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-md"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-gray-400">Resume</span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
              {profile.bio}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Role</p>
                <p className="mt-2 text-sm text-white">{profile.role}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Location</p>
                <p className="mt-2 text-sm text-white">{profile.location}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Experience</p>
                <p className="mt-2 text-sm text-white">{profile.yearsOfExperience}+ years</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Specialization</p>
                <p className="mt-2 text-sm text-white">{profile.specialization}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-gray-200" href={`mailto:${profile.social.email}`}>
                <Mail size={16} /> {profile.social.email}
              </a>
              <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-gray-200" href={profile.social.github}>
                <Github size={16} /> GitHub
              </a>
              <a className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-gray-200" href={profile.social.linkedin}>
                <Globe size={16} /> LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-gray-200">
                <MapPin size={16} /> {profile.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-gray-200">
                <Phone size={16} /> {profile.social.phone}
              </span>
            </div>
          </motion.section>

          <div className="grid gap-6">
            <Section title="Resume Preview">
              {pdfReady === null ? (
                <div className="flex min-h-[24rem] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-black/20 text-sm text-gray-400">
                  Checking PDF availability...
                </div>
              ) : pdfReady ? (
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <iframe
                    title="Resume PDF Preview"
                    src={RESUME_PDF}
                    className="h-[36rem] w-full"
                  />
                </div>
              ) : (
                <div className="space-y-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-white/10 p-2">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-white">PDF preview unavailable</p>
                      <p className="mt-1 text-sm text-gray-400">
                        The PDF could not be fetched, so this page is showing a structured HTML resume instead.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p>{profile.bio}</p>
                    <p>Download the PDF version using the button above if your deployment serves static assets correctly.</p>
                  </div>
                </div>
              )}
            </Section>

            <Section title="Skills">
              <div className="space-y-4">
                {skills.categories.map((category) => (
                  <div key={category.name}>
                    <p className="text-sm font-medium text-white">{category.name}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Experience">
              <div className="space-y-5">
                {experience.map((job) => (
                  <div key={`${job.company}-${job.role}`} className="border-l border-white/10 pl-4">
                    <p className="text-sm font-medium text-white">{job.role}</p>
                    <p className="text-sm text-gray-300">{job.company}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{job.period} · {job.location}</p>
                    <p className="mt-2 text-sm text-gray-400">{job.summary}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Education & Achievements">
              <div className="space-y-4">
                <div className="space-y-3">
                  {education.map((item) => (
                    <div key={`${item.institution}-${item.degree}`}>
                      <p className="text-sm font-medium text-white">{item.degree}</p>
                      <p className="text-sm text-gray-300">{item.institution}</p>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{item.period}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-white">Publications and Achievements</p>
                  {achievements.map((item) => (
                    <p key={item} className="text-sm text-gray-300">{item}</p>
                  ))}
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </main>
  )
}
