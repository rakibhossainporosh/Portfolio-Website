import { useEffect, useRef, useState } from 'react'

const stats = [
  { number: 1, suffix: '+', label: 'Year Experience' },
  { number: 5, suffix: '+', label: 'Projects Completed' },
]

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0
          const step = Math.ceil(target / 40)
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(start)
            }
          }, 40)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="block font-[var(--font-heading)] text-4xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent mb-2">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[var(--color-accent-secondary)]/6 blur-[120px] -bottom-[150px] -left-[150px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-15 fade-up">
          <span className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[3px] text-[var(--color-accent)] mb-3 block">About Me</span>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent font-[var(--font-heading)]">Turning Ideas Into Reality</h2>
          <p className="text-base text-[var(--color-text-secondary)] max-w-[600px] mx-auto">A passionate developer dedicated to building high-quality web solutions</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-10 items-start">
          {/* Info Card */}
          <div className="fade-left">
            <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-8 text-center hover:bg-[var(--color-bg-card-hover)] hover:border-[var(--color-border-glow)] hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-400">
              <div className="w-[120px] h-[120px] mx-auto mb-5 rounded-full overflow-hidden border-3 border-[var(--color-accent)]/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <img src="/profile.jpg" alt="Rakib Hossain Porosh" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-bold mb-1.5 font-[var(--font-heading)]">Rakib Hossain Porosh</h3>
              <p className="text-[var(--color-accent)] font-medium text-[0.95rem]">Full Stack Laravel Developer</p>
              <div className="w-15 h-[3px] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] rounded mx-auto my-5" />
              <p className="text-[var(--color-text-secondary)] text-[0.95rem] leading-relaxed mb-4 text-left">
                I&apos;m a dedicated Full Stack Developer specializing in Laravel and the PHP ecosystem.
                With years of hands-on experience, I build robust, scalable web applications
                that solve real-world problems. From RESTful APIs to complex dashboards and
                e-commerce platforms, I bring ideas to life with clean architecture
                and modern best practices.
              </p>
              <p className="text-[var(--color-text-secondary)] text-[0.95rem] leading-relaxed mb-4 text-left">
                I&apos;m passionate about writing maintainable code, optimizing database queries,
                and delivering pixel-perfect frontends. I thrive in collaborative environments
                and love taking on challenges that push the boundaries of what&apos;s possible on the web.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {['Laravel', 'PHP', 'MySQL', 'JavaScript', 'React'].map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full text-xs font-medium text-[var(--color-accent)]">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 fade-right">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-7 text-center hover:bg-[var(--color-bg-card-hover)] hover:border-[var(--color-border-glow)] hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-400">
                <Counter target={stat.number} suffix={stat.suffix} />
                <span className="text-sm text-[var(--color-text-secondary)] font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
