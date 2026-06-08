import { motion } from 'framer-motion'
import { Eye, Download } from 'lucide-react'
import { usePortfolio } from '@/hooks/usePortfolio'

export default function ResumeSection() {
  const { resume } = usePortfolio()

  return (
    <section id="resume" className="px-6 py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold hero-heading mb-16"
        >
          RESUME
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#111111] border border-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl">
            <span className="text-purple-400 uppercase tracking-[0.2em] text-xs">
              PROFESSIONAL PROFILE
            </span>

            <h3 className="text-3xl font-semibold text-white mt-4 mb-4">
              Resume & Career Overview
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              {resume.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={resume.viewLink}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
              >
                <Eye size={18} />
                View Resume
              </a>

              <a
                href={resume.downloadLink}
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl text-white hover:border-gray-500 transition"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
