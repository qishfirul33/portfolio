import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.12 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await emailjs.send(
        'service_gyxz8z7',
        'template_czzu7yu',
        { from_name: formData.name, from_email: formData.email, message: formData.message, to_name: 'Muhammad Qishfirul Fikri' },
        '0AtnxGNJW2We3kdSW'
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { title: 'Email', value: 'qishfirul33@gmail.com', link: 'mailto:qishfirul33@gmail.com',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    { title: 'Phone', value: '+62 838 5720 3361', link: 'tel:+6283857203361',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    },
    { title: 'Location', value: 'Manchester, England', link: null,
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
  ];

  const socials = [
    { name: 'GitHub', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: '#' },
    { name: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', url: '#' },
    { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', url: 'https://instagram.com/qishfiii_' },
    { name: 'Twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', url: '#' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden"
      style={{ background: '#0a0c12', fontFamily: "'DM Sans', sans-serif", paddingTop: 120, paddingBottom: 120 }}
    >

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-3xl" style={{ width:480,height:480,background:'radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 70%)',top:'5%',right:'-8%',animation:'floatA 9s ease-in-out infinite' }} />
        <div className="absolute rounded-full blur-3xl" style={{ width:400,height:400,background:'radial-gradient(circle,rgba(168,85,247,0.12) 0%,transparent 70%)',bottom:'-10%',left:'-6%',animation:'floatB 11s ease-in-out infinite' }} />
      </div>
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-25" style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,backgroundSize:'200px 200px' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Tag */}
        <div className={`flex items-center gap-3 mb-10 transition-all duration-700 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`}>
          <span className="text-xs font-semibold" style={{ color:'rgba(99,102,241,0.7)',letterSpacing:'0.25em',textTransform:'uppercase' }}>04 — Contact</span>
          <div className="flex-1 h-px" style={{ background:'linear-gradient(90deg,rgba(99,102,241,0.3),transparent)' }} />
        </div>

        {/* Header */}
        <div className={`mb-14 transition-all duration-1000 delay-100 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-6'}`}>
          <h2 className="font-bold leading-tight mb-3" style={{ fontFamily:"'Playfair Display', serif", color:'#f1f5f9', fontSize:'clamp(2.2rem,4vw,3.2rem)' }}>
            Let's{' '}
            <span style={{ background:'linear-gradient(135deg,#818cf8,#a78bfa,#c084fc)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>Work Together</span>
          </h2>
          <p style={{ color:'rgba(148,163,184,0.65)',maxWidth:480,fontSize:'1rem',lineHeight:1.6 }}>
            Have a project in mind? I'd love to hear about it — drop me a message.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">

          {/* ── Left Info (2 cols) ── */}
          <div className={`md:col-span-2 transition-all duration-1000 delay-200 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className={`group flex items-start gap-4 p-4 rounded-xl transition-all duration-700 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${300 + idx * 100}ms`, background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 shrink-0 group-hover:scale-110" style={{ background:'rgba(99,102,241,0.12)',color:'rgba(129,140,248,0.85)' }}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold mb-0.5" style={{ color:'rgba(148,163,184,0.5)',letterSpacing:'0.12em',textTransform:'uppercase' }}>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-sm font-medium transition-colors duration-200" style={{ color:'rgba(226,232,240,0.9)',textDecoration:'none' }}
                        onMouseEnter={e => e.target.style.color='#a78bfa'} onMouseLeave={e => e.target.style.color='rgba(226,232,240,0.9)'}>{info.value}</a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color:'rgba(226,232,240,0.9)' }}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className={`mt-8 transition-all duration-1000 delay-500 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-4'}`}>
              <p className="text-xs font-semibold mb-3" style={{ color:'rgba(148,163,184,0.45)',letterSpacing:'0.15em',textTransform:'uppercase' }}>Follow Me</p>
              <div className="flex gap-2.5">
                {socials.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 group"
                    style={{ background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.08)',color:'rgba(148,163,184,0.6)' }}
                    onMouseEnter={e => { e.currentTarget.style.background='rgba(99,102,241,0.15)'; e.currentTarget.style.color='#a78bfa'; e.currentTarget.style.borderColor='rgba(99,102,241,0.3)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color='rgba(148,163,184,0.6)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right Form (3 cols) ── */}
          <div className={`md:col-span-3 transition-all duration-1000 delay-300 ${isVisible?'opacity-100 translate-y-0':'opacity-0 translate-y-8'}`}>
            <div className="rounded-2xl p-8" style={{ background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.07)',backdropFilter:'blur(6px)' }}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name + Email row on desktop */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color:'rgba(148,163,184,0.55)',letterSpacing:'0.12em',textTransform:'uppercase' }}>Your Name</label>
                    <input
                      type="text" name="name" placeholder="Name" value={formData.name} required
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent text-white placeholder-slate-600 outline-none transition-all duration-300"
                      style={{ fontSize:'0.92rem',padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,0.12)',background:'transparent' }}
                      onFocus={e => e.target.style.borderBottomColor='rgba(99,102,241,0.6)'}
                      onBlur={e => e.target.style.borderBottomColor='rgba(255,255,255,0.12)'}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color:'rgba(148,163,184,0.55)',letterSpacing:'0.12em',textTransform:'uppercase' }}>Your Email</label>
                    <input
                      type="email" name="email" placeholder="your@email.com" value={formData.email} required
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent text-white placeholder-slate-600 outline-none transition-all duration-300"
                      style={{ fontSize:'0.92rem',padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,0.12)',background:'transparent' }}
                      onFocus={e => e.target.style.borderBottomColor='rgba(99,102,241,0.6)'}
                      onBlur={e => e.target.style.borderBottomColor='rgba(255,255,255,0.12)'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color:'rgba(148,163,184,0.55)',letterSpacing:'0.12em',textTransform:'uppercase' }}>Your Message</label>
                  <textarea
                    name="message" placeholder="Tell me about your project..." rows="4" value={formData.message} required
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent text-white placeholder-slate-600 outline-none resize-none transition-all duration-300"
                    style={{ fontSize:'0.92rem',padding:'10px 0',borderBottom:'1px solid rgba(255,255,255,0.12)',background:'transparent' }}
                    onFocus={e => e.target.style.borderBottomColor='rgba(99,102,241,0.6)'}
                    onBlur={e => e.target.style.borderBottomColor='rgba(255,255,255,0.12)'}
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit" disabled={loading}
                    className="relative overflow-hidden group w-full sm:w-auto"
                    style={{ textDecoration:'none' }}
                  >
                    <span className="relative block px-8 py-3 text-sm font-semibold text-white rounded-lg transition-all duration-300" style={{ background: loading ? 'rgba(99,102,241,0.5)' : 'linear-gradient(135deg,#6366f1,#8b5cf6)',boxShadow:'0 4px 24px rgba(99,102,241,0.3)',letterSpacing:'0.04em',cursor: loading ? 'not-allowed':'pointer' }}>
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background:'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.18) 50%,transparent 60%)' }} />
                      <span className="relative z-10 flex items-center gap-2">
                        {loading ? 'Sending...' : 'Send Message'}
                        {!loading && (
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        )}
                      </span>
                    </span>
                  </button>
                </div>

                {/* Feedback */}
                {submitted && (
                  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background:'rgba(34,197,94,0.1)',border:'1px solid rgba(34,197,94,0.25)' }}>
                    <span className="w-8 h-8 flex items-center justify-center rounded-full shrink-0" style={{ background:'rgba(34,197,94,0.15)',color:'#4ade80' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <p className="text-sm" style={{ color:'rgba(134,239,172,0.9)' }}>Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}
                {error && (
                  <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background:'rgba(239,68,68,0.1)',border:'1px solid rgba(239,68,68,0.25)' }}>
                    <span className="w-8 h-8 flex items-center justify-center rounded-full shrink-0" style={{ background:'rgba(239,68,68,0.15)',color:'#f87171' }}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                    <p className="text-sm" style={{ color:'rgba(248,113,113,0.9)' }}>{error}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;