import { useState } from 'react'

const contactInfo = [
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>),
    label: 'Email',
    value: 'rakibhossainporosh@gmail.com',
    href: 'mailto:rakibhossainporosh@gmail.com',
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>),
    label: 'Phone',
    value: '+880 1735-311333',
    href: 'tel:+8801735311333',
  },
  {
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>),
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: 'https://maps.app.goo.gl/mrxBuV3yANGbYcGX7',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' }) // '', 'loading', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      // REPLACE 'mjvqrwbj' with your actual Formspree Form ID
      const response = await fetch('https://formspree.io/f/xkovbkro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent.' })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const data = await response.json()
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection.' })
    }
  }

  return (
    <section id="contact" className="py-24 md:py-28 relative overflow-hidden bg-[var(--color-bg-secondary)]">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[120px] -top-[200px] -right-[200px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[var(--color-accent-secondary)]/6 blur-[120px] -bottom-[150px] -left-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-15 fade-up">
          <span className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[3px] text-[var(--color-accent)] mb-3 block">Contact</span>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent font-[var(--font-heading)]">Let&apos;s Work Together</h2>
          <p className="text-base text-[var(--color-text-secondary)] max-w-[600px] mx-auto">Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          {/* Info */}
          <div className="fade-left">
            <div className="flex flex-col gap-4 mb-9">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5 hover:bg-[var(--color-bg-card-hover)] hover:border-[var(--color-border-glow)] hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-400"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-xl text-[var(--color-accent)] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--color-text-muted)] mb-0.5 font-medium">{item.label}</span>
                    <span className="block text-[0.95rem] text-[var(--color-text-primary)] font-medium">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="pt-2">
              <span className="block text-sm text-[var(--color-text-muted)] mb-3.5 font-medium">Find me on</span>
              <div className="flex gap-3">
                {[
                  { label: 'GitHub', url: 'https://github.com/rakibhossainporosh', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> },
                  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/rakibhossainporosh', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                  { label: 'Facebook', url: 'https://www.facebook.com/rakibhossainporosh10', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                ].map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex items-center justify-center w-11 h-11 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-glow)] hover:bg-[var(--color-accent)]/10 hover:translate-y-[-3px] transition-all duration-400">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-9 flex flex-col gap-5 hover:border-[var(--color-border-glow)] transition-all duration-400 fade-right" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3.5 bg-[var(--color-bg-primary)]/50 border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] text-sm outline-none placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3.5 bg-[var(--color-bg-primary)]/50 border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] text-sm outline-none placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Discussion" value={formData.subject} onChange={handleChange} required
                className="w-full px-4 py-3.5 bg-[var(--color-bg-primary)]/50 border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] text-sm outline-none placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-text-secondary)] mb-2">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." value={formData.message} onChange={handleChange} required
                className="w-full px-4 py-3.5 bg-[var(--color-bg-primary)]/50 border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] text-sm outline-none placeholder-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all resize-y min-h-[120px] font-[var(--font-body)]" />
            </div>
            <div className="flex flex-col gap-4">
              {status.type && (
                <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'loading' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
                  status.type === 'success' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' :
                    'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="self-start inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-[var(--font-heading)] font-semibold text-[0.95rem] bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] text-[var(--color-bg-primary)] shadow-[0_4px_20px_rgba(6,182,212,0.3)] hover:translate-y-[-2px] hover:shadow-[0_6px_30px_rgba(6,182,212,0.5)] transition-all duration-400 cursor-pointer border-none mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? (
                  <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                )}
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
