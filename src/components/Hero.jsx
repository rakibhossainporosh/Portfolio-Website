import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Laravel Developer',
  'Backend Architecture Expert',
  'PHP & JavaScript Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout
    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timeout = setTimeout(() => setText(currentRole.slice(0, text.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/12 blur-[100px] -top-[200px] -right-[100px] animate-[orb-float_8s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-[var(--color-accent-secondary)]/10 blur-[100px] -bottom-[100px] -left-[100px] animate-[orb-float_8s_ease-in-out_infinite_-3s]" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[var(--color-accent-tertiary)]/8 blur-[100px] top-[40%] left-1/2 animate-[orb-float_8s_ease-in-out_infinite_-5s]" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }} />
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-15 relative z-10">
        {/* Text */}
        <div className="animate-[fade-in_1s_ease_forwards] order-2 md:order-1 text-center md:text-left">
          <span className="inline-block text-base text-[var(--color-accent)] font-medium mb-4 px-4 py-1.5 bg-[var(--color-accent)]/10 rounded-full border border-[var(--color-accent)]/20">
            👋 Hello, I&apos;m
          </span>
          <h1 className="font-[var(--font-heading)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-5 text-[var(--color-text-primary)]">
            Rakib Hossain<br />
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">Porosh</span>
          </h1>
          <div className="flex items-center font-[var(--font-heading)] text-xl text-[var(--color-accent-tertiary)] mb-6 min-h-[36px] justify-center md:justify-start">
            <span>{text}</span>
            <span className="animate-[blink_1s_step-end_infinite] ml-0.5 font-light">|</span>
          </div>
          <p className="text-base text-[var(--color-text-secondary)] max-w-[520px] mb-9 leading-relaxed mx-auto md:mx-0">
            I craft elegant, scalable web applications with Laravel, PHP, and modern
            JavaScript. Passionate about clean code and delivering
            exceptional digital experiences.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-[var(--font-heading)] font-semibold text-[0.95rem] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] text-[var(--color-bg-primary)] shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:translate-y-[-2px] hover:shadow-[0_6px_30px_rgba(6,182,212,0.5)] transition-all duration-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-[var(--font-heading)] font-semibold text-[0.95rem] bg-transparent text-[var(--color-text-primary)] border-2 border-[var(--color-border-glow)] hover:bg-[var(--color-accent)]/10 hover:border-[var(--color-accent)] hover:translate-y-[-2px] hover:text-[var(--color-accent)] transition-all duration-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center items-center animate-[fade-in_1s_0.3s_ease_both] order-1 md:order-2">
          <div className="absolute w-[380px] h-[380px] max-md:w-[280px] max-md:h-[280px] rounded-full border-2 border-dashed border-[var(--color-accent)]/20 animate-[ring-rotate_20s_linear_infinite]" />
          <div className="absolute w-[420px] h-[420px] max-md:w-[310px] max-md:h-[310px] rounded-full border-2 border-dashed border-[var(--color-accent-secondary)]/15 animate-[ring-rotate_30s_linear_infinite_reverse]" />
          <img
            src="/profile.jpg"
            alt="Rakib Hossain Porosh"
            className="w-[350px] h-[350px] max-md:w-[250px] max-md:h-[250px] rounded-full object-cover object-top relative z-2 border-4 border-[var(--color-accent)]/30 shadow-[0_0_60px_rgba(6,182,212,0.15)]"
          />
          <div className="absolute z-3 top-[30px] right-[10px] max-md:right-[-10px] max-md:top-[10px] flex items-center gap-2.5 px-4 py-2.5 bg-[var(--color-bg-secondary)]/70 backdrop-blur-xl rounded-full border border-[var(--color-border)] text-[0.85rem] font-semibold text-[var(--color-text-primary)] shadow-lg animate-[badge-float_3s_ease-in-out_infinite]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for work</span>
          </div>
          {/* <div className="absolute z-3 bottom-[40px] left-[10px] max-md:left-[-10px] max-md:bottom-[20px] flex items-center gap-2 px-4 py-2.5 bg-[var(--color-bg-secondary)]/70 backdrop-blur-xl rounded-full border border-[var(--color-border)] text-sm font-semibold text-[var(--color-text-primary)] shadow-lg animate-[badge-float_3s_ease-in-out_infinite_-1.5s]">
            <span className="text-lg">⚡</span>
            <span>Years of Exp.</span>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] text-xs tracking-widest uppercase max-md:hidden">
        <span>Scroll Down</span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--color-accent)] to-transparent animate-[scroll-pulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  )
}
