import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(10,12,18,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}
          >
            Qish<span style={{ background: 'linear-gradient(135deg, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>firul</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative group transition-colors duration-300"
                style={{
                  color: activeSection === item.id ? '#fff' : 'rgba(148,163,184,0.7)',
                  fontSize: '0.82rem',
                  fontWeight: activeSection === item.id ? 600 : 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {item.name}
                {/* Active dot */}
                <span
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #818cf8, #c084fc)',
                    opacity: activeSection === item.id ? 1 : 0,
                    transform: `translateX(-50%) scale(${activeSection === item.id ? 1 : 0})`,
                  }}
                />
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span className="block w-5 h-0.5 rounded-full transition-all duration-300" style={{ background: '#fff', transform: mobileMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <span className="block w-5 h-0.5 rounded-full transition-all duration-300" style={{ background: '#fff', opacity: mobileMenuOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 rounded-full transition-all duration-300" style={{ background: '#fff', transform: mobileMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: mobileMenuOpen ? 320 : 0 }}
      >
        <div className="px-6 pb-6 pt-2" style={{ background: 'rgba(10,12,18,0.95)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 py-3 transition-colors duration-200"
              style={{ color: activeSection === item.id ? '#fff' : 'rgba(148,163,184,0.6)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full transition-all duration-300" style={{ background: activeSection === item.id ? 'linear-gradient(135deg,#818cf8,#c084fc)' : 'rgba(148,163,184,0.3)' }} />
              <span style={{ fontSize: '0.88rem', fontWeight: 500, letterSpacing: '0.04em' }}>{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;