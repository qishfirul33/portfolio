import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const services = ['Web Development', 'UI/UX Design', 'Mobile Apps'];

  const contactItems = [
    { label: 'qishfirul33@gmail.com', link: 'mailto:qishfirul33@gmail.com',
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    { label: '+62 838 5720 3361', link: 'tel:+6283857203361',
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    },
    { label: 'Manchester, England', link: null,
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    { label: 'Available for freelance', link: null,
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
  ];

  const socials = [
    { name: 'GitHub', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: '#' },
    { name: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', url: '#' },
    { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', url: 'https://instagram.com/qishfiii_' },
    { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', url: '#' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0a0c12', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg,transparent 0%,rgba(99,102,241,0.35) 30%,rgba(168,85,247,0.35) 70%,transparent 100%)' }} />

      {/* Subtle grain */}
      <div className="absolute inset-0 pointer-events-none opacity-15" style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,backgroundSize:'200px 200px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10">

          {/* ── Brand (5 cols) ── */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily:"'Playfair Display', serif", color:'#f1f5f9' }}>
              Qish<span style={{ background:'linear-gradient(135deg,#818cf8,#c084fc)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>firul</span>
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color:'rgba(148,163,184,0.55)',maxWidth:340 }}>
              Building modern web and mobile applications with passion and craftsmanship.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5">
              {socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300"
                  style={{ background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.07)',color:'rgba(148,163,184,0.5)' }}
                  onMouseEnter={e => { e.currentTarget.style.background='rgba(99,102,241,0.15)'; e.currentTarget.style.color='#a78bfa'; e.currentTarget.style.borderColor='rgba(99,102,241,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='rgba(148,163,184,0.5)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links (2 cols) ── */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-xs font-semibold mb-4" style={{ color:'rgba(148,163,184,0.45)',letterSpacing:'0.18em',textTransform:'uppercase' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm transition-colors duration-200" style={{ color:'rgba(148,163,184,0.55)',textDecoration:'none' }}
                    onMouseEnter={e => e.target.style.color='#a78bfa'} onMouseLeave={e => e.target.style.color='rgba(148,163,184,0.55)'}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services (2 cols) ── */}
          <div className="md:col-span-2 md:col-start-9">
            <h4 className="text-xs font-semibold mb-4" style={{ color:'rgba(148,163,184,0.45)',letterSpacing:'0.18em',textTransform:'uppercase' }}>Services</h4>
            <ul className="space-y-2.5">
              {services.map((s, i) => (
                <li key={i}>
                  <a href="#" className="text-sm transition-colors duration-200" style={{ color:'rgba(148,163,184,0.55)',textDecoration:'none' }}
                    onMouseEnter={e => e.target.style.color='#a78bfa'} onMouseLeave={e => e.target.style.color='rgba(148,163,184,0.55)'}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact (3 cols) ── */}
          <div className="md:col-span-3 md:col-start-11">
            <h4 className="text-xs font-semibold mb-4" style={{ color:'rgba(148,163,184,0.45)',letterSpacing:'0.18em',textTransform:'uppercase' }}>Get In Touch</h4>
            <ul className="space-y-3">
              {contactItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0" style={{ color:'rgba(129,140,248,0.6)' }}>{item.icon}</span>
                  {item.link ? (
                    <a href={item.link} className="text-xs transition-colors duration-200" style={{ color:'rgba(148,163,184,0.55)',textDecoration:'none' }}
                      onMouseEnter={e => e.target.style.color='#a78bfa'} onMouseLeave={e => e.target.style.color='rgba(148,163,184,0.55)'}>{item.label}</a>
                  ) : (
                    <span className="text-xs" style={{ color:'rgba(148,163,184,0.55)' }}>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
            {/* CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="relative overflow-hidden group mt-5"
            >
              <span className="relative block px-5 py-2 text-xs font-semibold text-white rounded-lg" style={{ background:'linear-gradient(135deg,#6366f1,#8b5cf6)',boxShadow:'0 2px 14px rgba(99,102,241,0.3)',letterSpacing:'0.05em',cursor:'pointer' }}>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background:'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.18) 50%,transparent 60%)' }} />
                <span className="relative z-10">Let's Work Together</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10" style={{ borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs" style={{ color:'rgba(148,163,184,0.4)' }}>
              © {currentYear} Muhammad Qishfirul Fikri. All rights reserved.
            </p>
            <div className="flex gap-5">
              {['Privacy Policy','Terms of Service','Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="text-xs transition-colors duration-200" style={{ color:'rgba(148,163,184,0.4)',textDecoration:'none' }}
                  onMouseEnter={e => e.target.style.color='#a78bfa'} onMouseLeave={e => e.target.style.color='rgba(148,163,184,0.4)'}>{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;