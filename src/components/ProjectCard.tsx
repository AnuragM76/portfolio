import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Project } from '@/types/portfolio'

interface Props {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group sticky top-24 rounded-xl border border-gray-800 bg-[#111] overflow-hidden hover:border-gray-600 transition-colors duration-300"
    >
      <div className="md:flex">
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="text-sm text-gray-500 font-mono tracking-wider">
              {String(project.id).padStart(2, '0')}
            </span>
            <h3 className="text-2xl font-bold text-white mt-2 mb-1">{project.title}</h3>
            <p className="text-purple-400 text-sm mb-4">{project.subtitle}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-gray-700 text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
              <span>{project.role}</span>
              <span>{project.year}</span>
            </div>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:opacity-90 transition-opacity w-fit"
            >
              <ExternalLink size={16} />
              LIVE PROJECT
            </a>
          )}
        </div>

        <div className="md:w-1/2 min-h-[200px] md:min-h-[300px]">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full min-h-[200px] md:min-h-[300px] bg-gray-900 flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-800">{project.title}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
