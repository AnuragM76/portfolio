import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Experience } from '@/types/portfolio'

interface Props {
  experience: Experience[]
}

export default function ExperienceSection({ experience }: Props) {
  return (
    <section id="experience" className="px-6 py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold hero-heading mb-16"
        >
          EXPERIENCE
        </motion.h2>

        <div className="flex flex-col">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="flex gap-8">
                <div className="hidden md:block w-16 shrink-0">
                  <span className="text-3xl font-bold text-gray-600">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {exp.company} <span className="text-gray-400">— {exp.role}</span>
                    </h3>
                    <span className="inline-flex shrink-0 px-3 py-1 rounded-full border border-gray-700 text-xs font-mono text-gray-400 tracking-wider md:ml-auto">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">{exp.summary}</p>

                  <ul className="space-y-2 mb-8">
                    {exp.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-purple-400 mt-1 shrink-0">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {exp.certificateLink && (
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-4 py-2 text-sm text-white transition hover:border-gray-500 hover:text-purple-400"
                    >
                      View Certificate
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {idx < experience.length - 1 && (
                <div className="ml-0 md:ml-16 my-8 border-t border-gray-800" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
