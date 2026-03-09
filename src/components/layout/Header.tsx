import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { scrollToSection } from '../../utils/smoothScroll';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Past Life', id: 'past-life' },
  { label: 'Principle', id: 'focus' },
  { label: 'Value Add', id: 'value-add' },
  { label: 'Process', id: 'stages' },
  { label: 'Team', id: 'team' },
  { label: 'Get In Touch', id: 'contact' },
];

// CrossfadeSequence mapping: progress ranges → nav IDs
// 4 sections, holdRatio=0.444, maxProgress=3.444, 180vh per progress unit
const crossfadeSections = [
  { id: 'hero', end: 1.444 },      // Hero + HeroDark
  { id: 'past-life', end: 2.444 },
  { id: 'focus', end: 3.444 },
];

// Sections below CrossfadeSequence — detected by DOM position
const scrollSections = ['value-add', 'stages', 'team', 'contact'];

const FloatingNav = () => {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      // CrossfadeSequence: pinned container is the first child of <main>
      // Total scroll distance = 3.444 * 1.8 * vh
      const maxProgress = 3.444;
      const totalCrossfadeScroll = maxProgress * 1.8 * vh;

      // While in the crossfade region
      if (scrollY < totalCrossfadeScroll) {
        const progress = (scrollY / totalCrossfadeScroll) * maxProgress;
        for (const section of crossfadeSections) {
          if (progress < section.end) {
            setActiveId(section.id);
            return;
          }
        }
        setActiveId('focus'); // fallback to last crossfade section
        return;
      }

      // Below crossfade: check which section is at viewport center
      const viewportCenter = vh / 2;
      for (let i = scrollSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(scrollSections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < viewportCenter) {
            setActiveId(scrollSections[i]);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 bg-[#1e1e1e]/85 backdrop-blur-md rounded-full px-2 py-2">
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => item.id === 'hero' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollToSection(item.id)}
            className={`relative text-[13px] font-medium tracking-wide uppercase px-4 py-2 rounded-full transition-colors ${
              isActive
                ? 'text-white bg-white/10'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />
            )}
          </button>
        );
      })}
    </nav>
  );
};

const Header = () => {
  return (
    <>
      {/* TopBar — sits at top of page, not fixed */}
      <header
        className="absolute top-0 left-0 right-0 z-20 w-full"
        style={{ paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)' }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-6">
          {/* Logo */}
          <img
            src="/assets/images/logo/bdv-logo-full.png"
            alt="Built Different Ventures"
            className="h-[30px] md:h-[40px] w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          {/* Right side — Contact pill + LinkedIn */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@builtdifferent.vc"
              className="hidden md:inline-flex items-center border border-[#1a1a1a]/20 rounded-full px-5 py-2 text-[13px] font-medium tracking-wide uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://www.linkedin.com/company/builtdifferentsg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[36px] h-[36px] rounded-full border border-[#1a1a1a]/20 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* FloatingNav — rendered via portal to avoid overflow clipping */}
      {createPortal(<FloatingNav />, document.body)}
    </>
  );
};

export default Header;
