import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.15 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      num: '01',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Flutter', level: 95 },
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Backend',
      num: '02',
      skills: [
        { name: 'Python', level: 88 },
        { name: 'Laravel', level: 85 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 90 },
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Tools & Others',
      num: '03',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 75 },
        { name: 'Postman', level: 95 },
        { name: 'Figma', level: 85 },
      ],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden"
      style={{ background: '#0a0c12', fontFamily: "'DM Sans', sans-serif", paddingTop: 120, paddingBottom: 120 }}
    >

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-3xl" style={{ width:450,height:450,background:'radial-gradient(circle,rgba(168,85,247,0.14) 0%,transparent 70%)',top:'5%',right:'-10%',animation:'floatA 9s ease-in-out infinite' }} />
        <div className="absolute rounded-full blur-3xl" style={{ width:350,height:350,background:'radial-gradient(circle,rgba(99,102,241,0.13) 0%,transparent 70%)',bottom:'0%',left:'-8%',animation:'floatB 11s ease-in-out infinite' }} />
      </div>
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,backgroundSize:'200px 200px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Section Tag ── */}
        <div className={`flex items-center gap-3 mb-10 transition-all duration-700 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-semibold" style={{ color:'rgba(99,102,241,0.7)',letterSpacing:'0.25em',textTransform:'uppercase' }}>02 — Skills</span>
          <div className="flex-1 h-px" style={{ background:'linear-gradient(90deg,rgba(99,102,241,0.3),transparent)' }} />
        </div>

        {/* ── Header ── */}
        <div className={`mb-16 transition-all duration-1000 delay-100 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`}>
          <h2 className="font-bold leading-tight mb-3" style={{ fontFamily:"'Playfair Display', serif", color:'#f1f5f9', fontSize:'clamp(2.2rem,4vw,3.2rem)' }}>
            Skills &{' '}
            <span style={{ background:'linear-gradient(135deg,#818cf8,#a78bfa,#c084fc)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>Expertise</span>
          </h2>
          <p style={{ color:'rgba(148,163,184,0.65)',maxWidth:480,fontSize:'1rem',lineHeight:1.6 }}>
            Technologies and tools I work with day-to-day to ship quality products.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`relative group transition-all duration-1000 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + idx * 140}ms` }}
            >
              {/* Card */}
              <div
                className="relative rounded-2xl p-7 transition-all duration-500 group-hover:-translate-y-1"
                style={{ background:'rgba(255,255,255,0.035)',border:'1px solid rgba(255,255,255,0.07)',backdropFilter:'blur(6px)' }}
              >
                {/* Shimmer on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background:'linear-gradient(135deg,rgba(99,102,241,0.06),transparent 60%)' }} />

                {/* Header row */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl" style={{ background:'linear-gradient(135deg,rgba(99,102,241,0.2),rgba(168,85,247,0.2))',color:'#a78bfa' }}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <span className="text-xs font-bold" style={{ color:'rgba(99,102,241,0.35)',fontFamily:"'Playfair Display', serif" }}>{category.num}</span>
                </div>

                {/* Skills */}
                <div className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium" style={{ color:'rgba(226,232,240,0.9)' }}>{skill.name}</span>
                        <span className="text-xs font-semibold" style={{ color:'rgba(129,140,248,0.8)' }}>{skill.level}%</span>
                      </div>
                      {/* Bar track */}
                      <div className="w-full rounded-full overflow-hidden" style={{ height:3,background:'rgba(255,255,255,0.07)' }}>
                        <div
                          className="h-full rounded-full transition-all duration-1200 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${450 + idx * 140 + skillIdx * 90}ms`,
                            transitionDuration: '1200ms',
                            background: 'linear-gradient(90deg,#6366f1,#a78bfa)',
                            boxShadow: isVisible ? '0 0 8px rgba(167,139,250,0.45)' : 'none',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;