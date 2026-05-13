import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const projects = [
    {
      title: 'Searsip App',
      description: 'Desktop application for digital archive management with structured document storage and quick search features.',
      category: 'Full Stack',
      tags: ['Laravel', 'Flutter', 'MySQL'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Learnex App',
      description: 'Interactive learning platform with courses, quizzes, and progress tracking for enhanced learning experience.',
      category: 'Full Stack',
      tags: ['Flutter', 'Hive'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Docusensei AI',
      description: 'AI-powered document intelligence platform with OCR, smart search, and contextual AI chat.',
      category: 'Full Stack',
      tags: ['Next.js', 'FastAPI', 'Gemini AI', 'OCR'],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden"
      style={{ background: '#0a0c12', fontFamily: "'DM Sans', sans-serif", paddingTop: 120, paddingBottom: 120 }}
    >

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-3xl" style={{ width:500,height:500,background:'radial-gradient(circle,rgba(99,102,241,0.13) 0%,transparent 70%)',top:'-8%',left:'-6%',animation:'floatA 10s ease-in-out infinite' }} />
        <div className="absolute rounded-full blur-3xl" style={{ width:380,height:380,background:'radial-gradient(circle,rgba(56,189,248,0.1) 0%,transparent 70%)',bottom:'-5%',right:'-5%',animation:'floatB 12s ease-in-out infinite' }} />
      </div>
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,backgroundSize:'200px 200px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Tag */}
        <div className={`flex items-center gap-3 mb-10 transition-all duration-700 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-semibold" style={{ color:'rgba(99,102,241,0.7)',letterSpacing:'0.25em',textTransform:'uppercase' }}>03 — Projects</span>
          <div className="flex-1 h-px" style={{ background:'linear-gradient(90deg,rgba(99,102,241,0.3),transparent)' }} />
        </div>

        {/* Header */}
        <div className={`mb-10 transition-all duration-1000 delay-100 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`}>
          <h2 className="font-bold leading-tight mb-3" style={{ fontFamily:"'Playfair Display', serif", color:'#f1f5f9', fontSize:'clamp(2.2rem,4vw,3.2rem)' }}>
            Selected{' '}
            <span style={{ background:'linear-gradient(135deg,#818cf8,#a78bfa,#c084fc)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>Projects</span>
          </h2>
          <p style={{ color:'rgba(148,163,184,0.65)',maxWidth:480,fontSize:'1rem',lineHeight:1.6 }}>
            A handful of things I've built — each one a chance to learn and grow.
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap gap-2.5 mb-12 transition-all duration-800 delay-200 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-4'}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="relative overflow-hidden group transition-all duration-300"
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                background: activeFilter === filter ? 'linear-gradient(135deg,#6366f1,#8b5cf6)' : 'rgba(255,255,255,0.05)',
                border: activeFilter === filter ? 'none' : '1px solid rgba(255,255,255,0.1)',
                color: activeFilter === filter ? '#fff' : 'rgba(148,163,184,0.7)',
                fontSize: '0.82rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                boxShadow: activeFilter === filter ? '0 2px 16px rgba(99,102,241,0.35)' : 'none',
                cursor: 'pointer',
                transform: activeFilter === filter ? 'scale(1.03)' : 'scale(1)',
              }}
            >
              {activeFilter === filter && <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background:'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.15) 50%,transparent 60%)' }} />}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative transition-all duration-1000 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + idx * 140}ms` }}
            >
              <div
                className="relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2"
                style={{ background:'rgba(255,255,255,0.035)',border:'1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" style={{ background:'linear-gradient(135deg,rgba(99,102,241,0.07),transparent 60%)' }} />

                {/* Icon area */}
                <div className="relative flex items-center justify-center" style={{ height:160,background:'rgba(10,12,18,0.6)' }}>
                  {/* Dot grid */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage:'radial-gradient(circle at 2px 2px,rgba(255,255,255,0.8) 1px,transparent 0)',backgroundSize:'28px 28px' }} />
                  {/* Index number */}
                  <span className="absolute top-4 right-5 text-xs font-bold" style={{ color:'rgba(99,102,241,0.25)',fontFamily:"'Playfair Display', serif" }}>0{idx+1}</span>
                  {/* Icon */}
                  <div className="relative z-10 transition-all duration-500 group-hover:scale-110" style={{ color:'rgba(167,139,250,0.7)' }}>
                    {project.icon}
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 relative z-10">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ color:'#a78bfa',background:'rgba(99,102,241,0.12)' }}>{project.category}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors" style={{ fontFamily:"'Playfair Display', serif" }}>{project.title}</h3>
                  <p className="text-sm mb-4" style={{ color:'rgba(148,163,184,0.6)',lineHeight:1.55,display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden' }}>{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-0.5 rounded-full" style={{ background:'rgba(255,255,255,0.06)',color:'rgba(203,213,225,0.7)',border:'1px solid rgba(255,255,255,0.06)' }}>{tag}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="relative overflow-hidden group/btn flex-1 py-2 text-xs font-semibold text-white rounded-lg transition-shadow duration-300" style={{ background:'linear-gradient(135deg,#6366f1,#8b5cf6)',boxShadow:'0 2px 12px rgba(99,102,241,0.25)' }}>
                      <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-400" style={{ background:'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.18) 50%,transparent 60%)' }} />
                      <span className="relative z-10">View Demo</span>
                    </button>
                    <button className="px-3.5 py-2 rounded-lg transition-all duration-300 hover:border-indigo-500" style={{ border:'1px solid rgba(255,255,255,0.1)',color:'rgba(148,163,184,0.7)' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;