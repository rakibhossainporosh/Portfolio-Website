const projects = [
  {
    title: 'SUB Admission System v1.0',
    description: 'A complete student admission management platform for the State University of Bangladesh. Designed as a group project to handle student enrollment workflows, fee slip tracking, course registration, and PDF report creation.',
    tags: ['Laravel 12', 'React', 'Inertia.js', 'MySQL', 'Fortify', 'Dompdf'],
    color: '#10b981',
    githubUrl: 'https://github.com/rxasan-rakib/SUB_Admission_System_v1.0',
    liveUrl: null,
  },
  {
    title: 'Laravel AI SDK Resume Analyzer',
    description: 'An AI-powered recruitment utility that parses PDF resumes and evaluates qualifications using the Laravel AI SDK. Automatically scores matches and generates structured feedback.',
    tags: ['Laravel 13', 'Laravel AI SDK', 'PDF Parser', 'PHP 8.3', 'MySQL', 'Pest'],
    color: '#8b5cf6',
    githubUrl: 'https://github.com/rakibhossainporosh/Laravel-Ai-SDK-Resume-Analyzer',
    liveUrl: null,
  },
  {
    title: 'Study Abroad Portal',
    description: 'A clean, responsive landing page and information directory designed for study abroad consultancies. Utilizes modern typography, web fonts, and custom CSS effects.',
    tags: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    color: '#06b6d4',
    githubUrl: 'https://github.com/rakibhossainporosh/Study-Abroad-with-Bootstrap',
    liveUrl: null,
  },
  {
    title: 'Laravel 12 Admin Panel',
    description: 'A robust, customizable admin dashboard template utilizing Laravel 12 and Inertia React. Features role-based auth, secure middleware, and file uploading/resizing modules.',
    tags: ['Laravel 12', 'React', 'Inertia.js', 'Fortify', 'MySQL', 'Intervention Image'],
    color: '#f59e0b',
    githubUrl: 'https://github.com/rakibhossainporosh/Admin-Panel-Laravel-12-MySQL-',
    liveUrl: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-28 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-15 fade-up">
          <span className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[3px] text-[var(--color-accent)] mb-3 block">My Work</span>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] font-bold mb-4 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent font-[var(--font-heading)]">Featured Projects</h2>
          <p className="text-base text-[var(--color-text-secondary)] max-w-[600px] mx-auto">A selection of projects I&apos;ve crafted with passion and precision</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:bg-[var(--color-bg-card-hover)] hover:border-[var(--color-border-glow)] hover:translate-y-[-4px] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-400 fade-up"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Accent Bar */}
              <div className="h-1 w-full opacity-80" style={{ background: project.color }} />

              {/* Content */}
              <div className="p-7">
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl border bg-white/[0.02] mb-5"
                  style={{ color: project.color, borderColor: `${project.color}33` }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>

                <h3 className="text-lg font-bold mb-3 text-[var(--color-text-primary)] font-[var(--font-heading)]">{project.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 border rounded-full text-[0.72rem] font-semibold tracking-wide"
                      style={{ borderColor: `${project.color}40`, color: project.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5 pt-4 border-t border-[var(--color-border)]">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[0.82rem] font-semibold hover:opacity-70 transition-opacity" style={{ color: project.color }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[0.82rem] font-semibold hover:opacity-70 transition-opacity" style={{ color: project.color }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
