import { motion } from 'framer-motion'
import { Brain, Layout, Cloud, Database } from 'lucide-react'

const services = [
{
number: '01',
title: 'Full-Stack Development',
description:
'Building modern web applications using React, TypeScript, Node.js, FastAPI, MongoDB, PostgreSQL, and REST APIs with a focus on scalability and user experience.',
icon: Layout,
},
{
number: '02',
title: 'AI & Machine Learning',
description:
'Developing AI-powered applications using Google Gemini API, LangChain, TensorFlow, Scikit-learn, LLM fine-tuning, intelligent recommendation systems, and automation workflows.',
icon: Brain,
},
{
number: '03',
title: 'Data Engineering & Analytics',
description:
'Designing ETL pipelines, real-time data processing systems, Apache Spark workflows, cloud-native data platforms, and analytics solutions for large-scale datasets.',
icon: Database,
},
{
number: '04',
title: 'Cloud & DevOps',
description:
'Deploying applications using Docker, AWS, Azure, Linux, Git, CI/CD pipelines, and cloud infrastructure with performance, reliability, and cost optimization in mind.',
icon: Cloud,
},
]

export default function ServicesSection() {
  return (
    <section id="skills" className="px-6 py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold hero-heading mb-16"
        >
          SERVICES
          {/* TODO: Move service data to portfolio.json */}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 rounded-xl border border-gray-800 bg-dark/50 hover:border-gray-600 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bold text-gray-600 shrink-0">{svc.number}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={20} className="text-purple-400 shrink-0" />
                      <h3 className="text-lg font-semibold text-white">{svc.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{svc.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
