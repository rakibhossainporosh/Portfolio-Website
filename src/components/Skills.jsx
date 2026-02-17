const skillCategories = [
  {
    title: 'Backend',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>),
    skills: [
      { name: 'Laravel', level: 95 },
      { name: 'PHP', level: 92 },
      { name: 'REST API', level: 60 },
    ],
  },
  {
    title: 'Frontend',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
    skills: [
      { name: 'HTML/CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Bootstrap', level: 87 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'React', level: 66 },
    ],
  },
  {
    title: 'Database',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>),
    skills: [
      { name: 'MySQL', level: 92 },
      { name: 'SQLite', level: 65 },
    ],
  },
  {
    title: 'Tools',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>),
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Postman', level: 75 },
      { name: 'Linux/Server', level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-28 relative overflow-hidden bg-[var(--color-bg-secondary)]">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[var(--color-accent)]/8 blur-[120px] -top-[200px] -right-[200px] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-15 fade-up">
          <span className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[3px] text-[var(--color-accent)] mb-3 block">My Skills</span>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent font-[var(--font-heading)]">Technologies I Work With</h2>
          <p className="text-base text-[var(--color-text-secondary)] max-w-[600px] mx-auto">Proficient across the full stack with a focus on Laravel and modern web ecosystems</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-8 hover:bg-[var(--color-bg-card-hover)] hover:border-[var(--color-border-glow)] hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-400 fade-up"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-7">
                <div className="flex items-center justify-center w-[52px] h-[52px] bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-xl text-[var(--color-accent)] shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold font-[var(--font-heading)]">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-[18px]">
                {cat.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">{skill.name}</span>
                      <span className="text-xs text-[var(--color-accent)] font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill"
                        style={{ '--skill-level': `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
