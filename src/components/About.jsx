import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Done' },
  ];

  // Corner bracket config: [top/bottom, left/right]
  const corners = [
    { top: -12, left: -12, borderTop: true, borderLeft: true, radius: '4px 0 0 0' },
    { top: -12, right: -12, borderTop: true, borderRight: true, radius: '0 4px 0 0' },
    { bottom: -12, left: -12, borderBottom: true, borderLeft: true, radius: '0 0 0 4px' },
    { bottom: -12, right: -12, borderBottom: true, borderRight: true, radius: '0 0 4px 0' },
  ];

  const cornerColor = (i) => (i % 2 === 0 ? 'rgba(99,102,241,0.5)' : 'rgba(168,85,247,0.5)');

  const getCornerStyle = (corner, i) => {
    const base = { position: 'absolute', zIndex: 10, width: 32, height: 32, borderRadius: corner.radius };
    const color = cornerColor(i);
    if (corner.top !== undefined) base.top = corner.top;
    if (corner.bottom !== undefined) base.bottom = corner.bottom;
    if (corner.left !== undefined) base.left = corner.left;
    if (corner.right !== undefined) base.right = corner.right;
    if (corner.borderTop) base.borderTop = `2px solid ${color}`;
    if (corner.borderBottom) base.borderBottom = `2px solid ${color}`;
    if (corner.borderLeft) base.borderLeft = `2px solid ${color}`;
    if (corner.borderRight) base.borderRight = `2px solid ${color}`;
    return base;
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden"
      style={{ background: '#0a0c12', fontFamily: "'DM Sans', sans-serif", paddingTop: 120, paddingBottom: 120 }}
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-3xl" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)', top: '10%', left: '-10%', animation: 'floatA 8s ease-in-out infinite' }} />
        <div className="absolute rounded-full blur-3xl" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)', bottom: '5%', right: '-8%', animation: 'floatB 10s ease-in-out infinite' }} />
        <div className="absolute rounded-full blur-2xl" style={{ width: 250, height: 250, background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)', top: '55%', left: '45%', animation: 'floatC 7s ease-in-out infinite' }} />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`, backgroundSize: '200px 200px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Tag */}
        <div className={`flex items-center gap-3 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-semibold" style={{ color: 'rgba(99,102,241,0.7)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>01 — About</span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(99,102,241,0.3), transparent)' }} />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">

          {/* Photo (2 cols) */}
          <div className={`md:col-span-2 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative mx-auto" style={{ maxWidth: 320 }}>

              {/* Corner brackets — loop */}
              {corners.map((corner, i) => (
                <div key={i} style={getCornerStyle(corner, i)} />
              ))}

              {/* Glow behind */}
              <div className="absolute inset-0 blur-2xl" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(168,85,247,0.2))', borderRadius: 20, transform: 'scale(1.1)' }} />

              {/* Frame */}
              <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(8px)', padding: 6 }}>
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio: '3/4', background: '#1a1d27' }}>
                  <img src="/pp.png" alt="Muhammad Qishfirul Fikri" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: 'rgba(16,18,28,0.85)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', animation: 'floatBadge 3s ease-in-out infinite' }}>
                <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.5)' }} />
                <span className="text-xs font-medium text-white" style={{ letterSpacing: '0.05em' }}>Available for Work</span>
              </div>
            </div>
          </div>

          {/* Text (3 cols) */}
          <div className={`md:col-span-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="font-bold leading-tight mb-6" style={{ color: '#f1f5f9', fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem,4vw,3.6rem)' }}>
              Building digital
              <span className="block" style={{ background: 'linear-gradient(135deg, #818cf8, #a78bfa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>experiences</span>
              that matter.
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'rgba(203,213,225,0.75)', maxWidth: 520 }}>
              I'm a Full Stack Developer with <span className="text-white font-medium">3+ years</span> of hands-on experience. I enjoy building things that make a difference — whether it's a web app or a mobile application.
            </p>

            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(203,213,225,0.75)', maxWidth: 520 }}>
              I love turning complex problems into <span className="text-white font-medium">clean, intuitive products</span> that users actually enjoy using.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              {stats.map((s, i) => (
                <div key={i} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${350 + i * 120}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold" style={{ background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontFamily: "'Playfair Display', serif" }}>
                    {s.value}
                  </div>
                  <div className="text-xs mt-1 font-medium" style={{ color: 'rgba(148,163,184,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" className="inline-flex items-center gap-2 group" style={{ textDecoration: 'none' }}>
              <span className="relative overflow-hidden rounded-lg px-7 py-3.5 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 4px 24px rgba(99,102,241,0.3)', letterSpacing: '0.04em' }}>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)' }} />
                <span className="relative z-10">Let's Work Together</span>
              </span>
              <svg className="w-4 h-4 text-indigo-400 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;