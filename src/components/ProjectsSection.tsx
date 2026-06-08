import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import type { Project } from '@/types/portfolio'

interface Props {
  projects: Project[]
}

export default function ProjectsSection({ projects }: Props) {
  const sorted = [...projects].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1
    if (!a.highlight && b.highlight) return 1
    return a.id - b.id
  })

  return (
    <section id="projects" className="px-6 py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold hero-heading mb-16"
        >
          PROJECTS
        </motion.h2>

        <div className="flex flex-col gap-8">
          {sorted.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
