import { motion } from 'framer-motion'
import type { Profile } from '@/types/portfolio'

interface Props {
  profile: Profile
}

export default function AboutSection({ profile }: Props) {
  return (
    <section id="about" className="px-6 py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold hero-heading mb-12"
        >
          ABOUT
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed" style={{ overflowWrap: 'normal', wordBreak: 'normal' }}>
            {profile.bio}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
