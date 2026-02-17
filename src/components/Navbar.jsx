import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'py-3 bg-[var(--color-bg-secondary)]/70 backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm' : 'py-5'}`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors">
          <span className="text-[var(--color-accent)]">&lt;</span>
          RHP
          <span className="text-[var(--color-accent-secondary)]"> /</span>
          <span className="text-[var(--color-accent)]">&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className={`list-none flex items-center gap-2 max-md:fixed max-md:inset-0 max-md:flex-col max-md:justify-center max-md:gap-3 max-md:bg-[#0a0e1a]/97 max-md:backdrop-blur-3xl max-md:transition-transform max-md:duration-400 ${menuOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block px-5 py-2 rounded-full text-sm font-medium transition-all max-md:text-xl max-md:px-7 max-md:py-3 ${activeSection === link.href.slice(1)
                    ? 'text-[var(--color-accent)] bg-[var(--color-accent)]/10'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5'
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="max-md:hidden inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-[var(--font-heading)] font-semibold text-sm bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] text-[var(--color-bg-primary)] shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:translate-y-[-2px] hover:shadow-[0_6px_30px_rgba(6,182,212,0.5)] transition-all duration-400">
          Hire Me
        </a>

        {/* Burger */}
        <button
          className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 z-[1001]"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-[var(--color-text-primary)] rounded transition-all duration-400 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[var(--color-text-primary)] rounded transition-all duration-400 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[var(--color-text-primary)] rounded transition-all duration-400 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>
    </nav>
  )
}
