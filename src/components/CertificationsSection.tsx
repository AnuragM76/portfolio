import { motion } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import { usePortfolio } from '@/hooks/usePortfolio'

export default function CertificationsSection() {
  const { certifications } = usePortfolio()

  const visibleCertifications = certifications.filter((cert) => cert.featured)
  const getAccentClass = (index: number) => (index % 2 === 0 ? 'text-purple-400' : 'text-green-400')

  return (
    <section id="certifications" className="px-6 py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold hero-heading mb-16"
        >
          CERTIFICATIONS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {visibleCertifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all"
            >
              {(() => {
                const accent = getAccentClass(idx)
                return (
                  <>
                    <Award className={`w-8 h-8 mb-6 ${accent}`} />

                    <span className={`text-xs uppercase tracking-[0.2em] ${accent}`}>
                      {cert.type}
                    </span>

                    <h3 className="text-2xl font-semibold text-white mt-3 mb-3">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-4">
                      {cert.issuer}
                      {cert.date ? ` • ${cert.date}` : ''}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      {cert.description}
                    </p>

                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
                    >
                      View Certificate
                      <ExternalLink size={16} />
                    </a>
                  </>
                )
              })()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
