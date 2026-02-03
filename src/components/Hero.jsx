import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0a0c12', fontFamily: "'DM Sans', sans-serif" }}
    >

      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-3xl" style={{ width:560,height:560,background:'radial-gradient(circle,rgba(99,102,241,0.2) 0%,transparent 70%)',top:'-5%',left:'-8%',animation:'floatA 9s ease-in-out infinite' }} />
        <div className="absolute rounded-full blur-3xl" style={{ width:420,height:420,background:'radial-gradient(circle,rgba(168,85,247,0.15) 0%,transparent 70%)',bottom:'10%',right:'-6%',animation:'floatB 11s ease-in-out infinite' }} />
        <div className="absolute rounded-full blur-2xl" style={{ width:260,height:260,background:'radial-gradient(circle,rgba(56,189,248,0.1) 0%,transparent 70%)',top:'60%',left:'50%',animation:'floatC 7s ease-in-out infinite' }} />
      </div>

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,backgroundSize:'200px 200px' }} />

      {/* Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg,transparent 0%,rgba(99,102,241,0.4) 40%,rgba(168,85,247,0.4) 60%,transparent 100%)' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* ── Left Text (3 cols) ── */}
          <div className="md:col-span-3">
            {/* Role badge */}
            <div className={`inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full transition-all duration-700 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-4'}`} style={{ background:'rgba(99,102,241,0.12)',border:'1px solid rgba(99,102,241,0.25)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background:'#22c55e',boxShadow:'0 0 6px rgba(34,197,94,0.5)' }} />
              <span className="text-xs font-medium" style={{ color:'rgba(148,163,184,0.9)',letterSpacing:'0.12em',textTransform:'uppercase' }}>Available for work</span>
            </div>

            {/* Headline */}
            <h1
              className={`font-bold leading-tight mb-5 transition-all duration-1000 delay-100 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`}
              style={{ fontFamily:"'Playfair Display', serif", color:'#f1f5f9', fontSize:'clamp(2.6rem,5.5vw,4.2rem)' }}
            >
              Hi, I'm{' '}
              <span className="block" style={{ background:'linear-gradient(135deg,#818cf8,#a78bfa,#c084fc)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
                Muhammad
              </span>
              <span className="block" style={{ background:'linear-gradient(135deg,#818cf8,#a78bfa,#c084fc)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
                Qishfirul Fikri
              </span>
            </h1>

            {/* Sub */}
            <p className={`text-lg md:text-xl mb-3 font-medium transition-all duration-1000 delay-200 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`} style={{ color:'#e2e8f0' }}>
              Full Stack & Mobile Developer
            </p>
            <p className={`text-base leading-relaxed mb-8 transition-all duration-1000 delay-300 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`} style={{ color:'rgba(148,163,184,0.75)',maxWidth:440 }}>
              I craft modern web and mobile applications — from concept to production.
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-400 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`}>
              <a href="#contact" className="relative overflow-hidden group" style={{ textDecoration:'none' }}>
                <span className="relative block px-7 py-3 text-sm font-semibold text-white rounded-lg transition-shadow duration-300" style={{ background:'linear-gradient(135deg,#6366f1,#8b5cf6)',boxShadow:'0 4px 24px rgba(99,102,241,0.3)',letterSpacing:'0.04em' }}>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background:'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.18) 50%,transparent 60%)' }} />
                  <span className="relative z-10">Contact Me</span>
                </span>
              </a>
              <a href="#projects" className="flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:border-indigo-500" style={{ border:'1px solid rgba(255,255,255,0.12)',color:'#cbd5e1',textDecoration:'none' }}>
                View Work
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>

          {/* ── Right Photo (2 cols) ── */}
          <div className={`md:col-span-2 transition-all duration-1000 delay-200 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
            <div className="relative mx-auto" style={{ maxWidth:300 }}>
              {/* Corner brackets */}
              <div className="absolute z-10" style={{ top:-12,left:-12,width:32,height:32,borderTop:'2px solid rgba(99,102,241,0.5)',borderLeft:'2px solid rgba(99,102,241,0.5)',borderRadius:'4px 0 0 0' }} />
              <div className="absolute z-10" style={{ top:-12,right:-12,width:32,height:32,borderTop:'2px solid rgba(168,85,247,0.5)',borderRight:'2px solid rgba(168,85,247,0.5)',borderRadius:'0 4px 0 0' }} />
              <div className="absolute z-10" style={{ bottom:-12,left:-12,width:32,height:32,borderBottom:'2px solid rgba(168,85,247,0.5)',borderLeft:'2px solid rgba(168,85,247,0.5)',borderRadius:'0 0 0 4px' }} />
              <div className="absolute z-10" style={{ bottom:-12,right:-12,width:32,height:32,borderBottom:'2px solid rgba(99,102,241,0.5)',borderRight:'2px solid rgba(99,102,241,0.5)',borderRadius:'0 0 4px 0' }} />

              {/* Glow */}
              <div className="absolute inset-0 blur-2xl" style={{ background:'linear-gradient(135deg,rgba(99,102,241,0.25),rgba(168,85,247,0.2))',borderRadius:20,transform:'scale(1.1)' }} />

              {/* Frame */}
              <div className="relative rounded-2xl overflow-hidden" style={{ border:'1px solid rgba(255,255,255,0.08)',background:'rgba(255,255,255,0.03)',backdropFilter:'blur(8px)',padding:6 }}>
                <div className="rounded-xl overflow-hidden" style={{ aspectRatio:'3/4',background:'#1a1d27' }}>
                  <img src="/pp.png" alt="Muhammad Qishfirul Fikri" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 z-20 flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background:'rgba(16,18,28,0.85)',backdropFilter:'blur(12px)',border:'1px solid rgba(255,255,255,0.1)',animation:'floatBadge 3s ease-in-out infinite' }}>
                <span className="text-xs font-medium text-white" style={{ letterSpacing:'0.05em' }}>📍 Manchester, England</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium" style={{ color:'rgba(148,163,184,0.4)',letterSpacing:'0.2em',textTransform:'uppercase' }}>Scroll</span>
        <svg className="w-4 h-4" style={{ color:'rgba(99,102,241,0.6)',animation:'scrollPulse 2s ease-in-out infinite' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;