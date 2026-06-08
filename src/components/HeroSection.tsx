import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'
import type { Profile } from '@/types/portfolio'

interface Props {
  profile: Profile
  social: Profile['social']
}

export default function HeroSection({ profile, social }: Props) {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center max-w-3xl"
      >
        <div className="w-40 h-40 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center mb-8 overflow-hidden">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={`${profile.shortName} avatar`}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-4xl font-bold hero-heading">
              {profile.shortName.charAt(0)}
            </span>
          )}
        </div>

        <p className="text-sm tracking-[0.2em] text-gray-400 uppercase mb-4">
          {profile.role}
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold hero-heading leading-tight mb-6">
          Hi, I'm {profile.shortName}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          {profile.tagline}
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center mb-12">
          <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300">
            {profile.specialization}
          </span>
          <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300">
            {profile.location}
          </span>
          <span className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300">
            {profile.yearsOfExperience}+ yrs
          </span>
        </div>

        <SocialLinks social={social} className="mb-12" iconSize={22} />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToAbout}
          className="px-8 py-3 rounded-full text-sm font-medium tracking-wider text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:opacity-90 transition-opacity"
        >
          EXPLORE MY WORK
        </motion.button>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}
