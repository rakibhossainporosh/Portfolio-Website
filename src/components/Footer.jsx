export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] pt-15">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 pb-10">
          {/* Brand */}
          <div className="max-md:text-center">
            <a href="#home" className="font-[var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors inline-block mb-3">
              <span className="text-[var(--color-accent)]">&lt;</span>
              Rakib
              <span className="text-[var(--color-accent-secondary)]"> /</span>
              <span className="text-[var(--color-accent)]">&gt;</span>
            </a>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-[300px] leading-relaxed max-md:mx-auto">
              Crafting exceptional web experiences with Laravel and modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="max-md:text-center">
            <h4 className="text-[0.95rem] font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">Quick Links</h4>
            <nav className="flex flex-col gap-2.5 max-md:flex-row max-md:flex-wrap max-md:justify-center max-md:gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:pl-1.5 max-md:hover:pl-0 transition-all">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="max-md:text-center">
            <h4 className="text-[0.95rem] font-semibold text-[var(--color-text-primary)] mb-4 font-[var(--font-heading)]">Connect</h4>
            <nav className="flex flex-col gap-2.5 max-md:flex-row max-md:flex-wrap max-md:justify-center max-md:gap-4">
              {[
                { label: 'GitHub', url: 'https://github.com/rakibhossainporosh' },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rakibhossainporosh' },
                { label: 'Facebook', url: 'https://www.facebook.com/rakibhossainporosh10' },
              ].map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:pl-1.5 max-md:hover:pl-0 transition-all">
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between py-6 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Rakib Hossain Porosh. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center justify-center w-10 h-10 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] cursor-pointer hover:text-[var(--color-accent)] hover:border-[var(--color-border-glow)] hover:translate-y-[-3px] transition-all duration-400"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
