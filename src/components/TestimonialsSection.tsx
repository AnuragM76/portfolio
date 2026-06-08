import type { Testimonial } from '@/types/portfolio'

interface Props {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: Props) {
  if (testimonials.length === 0) return null

  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="px-6 py-24 bg-[#080808] overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold hero-heading">
          TESTIMONIALS
        </h2>
      </div>

      <div
        className="marquee-content flex gap-6"
        style={{
          animation: 'marquee 40s linear infinite',
          width: 'fit-content',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = 'running'
        }}
      >
        {doubled.map((t, idx) => (
          <div
            key={`${t.id}-${idx}`}
            className="w-[380px] shrink-0 p-6 rounded-xl border border-gray-800 bg-dark/60 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-2 mb-4">
                <span className="text-lg">💬</span>
                <span className="text-lg">✨</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{ backgroundColor: t.avatarColor }}
              >
                {t.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-white text-xs font-semibold uppercase tracking-wider truncate">
                  {t.name}
                </p>
                <p className="text-gray-500 text-xs truncate">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
