import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const getLenis = () => (window as unknown as { __lenis?: { scrollTo: (target: number | string | HTMLElement, options?: { duration?: number; offset?: number }) => void } }).__lenis;

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Track Record', id: 'track-record' },
  { label: 'Thesis', id: 'thesis' },
  { label: 'Process', id: 'process' },
  { label: 'Support', id: 'support' },
  { label: 'Values', id: 'values' },
  { label: 'Team', id: 'team' },
];

// CrossfadeSequence: 3 sections [Hero, TrackRecord, Thesis]
// holdRatio=0.444, maxProgress=2.444, 180vh per progress unit
const crossfadeSections = [
  { id: 'hero', end: 1 },
  { id: 'track-record', end: 2 },
  { id: 'thesis', end: 2.444 },
];

const crossfadeScrollTargets: Record<string, number> = {
  'hero': 0,
  'track-record': 1,
  'thesis': 2,
};

const scrollSections = ['process', 'support', 'values', 'team'];

const FloatingNav = () => {
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;

      const maxProgress = 2.444;
      const totalCrossfadeScroll = maxProgress * 1.8 * vh;

      if (scrollY < totalCrossfadeScroll) {
        const progress = (scrollY / totalCrossfadeScroll) * maxProgress;
        for (const section of crossfadeSections) {
          if (progress < section.end) {
            setActiveId(section.id);
            return;
          }
        }
        setActiveId('thesis');
        return;
      }

      // Regular scroll sections
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const lenis = getLenis();
    if (id === 'hero') {
      if (lenis) lenis.scrollTo(0, { duration: 1.5 });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id in crossfadeScrollTargets) {
      const vh = window.innerHeight;
      const maxProgress = 2.444;
      const totalScroll = maxProgress * 1.8 * vh;
      const targetProgress = crossfadeScrollTargets[id];
      const targetScroll = (targetProgress / maxProgress) * totalScroll;
      if (lenis) lenis.scrollTo(targetScroll, { duration: 2 });
      else window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        if (lenis) lenis.scrollTo(el, { duration: 1.5 });
        else el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 bg-[#1e1e1e]/85 backdrop-blur-md rounded-full px-2 py-2">
      {navItems.map((item) => {
        const isActive = activeId === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
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

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (id: string) => {
    onClose();
    // Small delay to let the menu close animation start
    setTimeout(() => {
      const lenis = getLenis();
      if (id === 'hero') {
        if (lenis) lenis.scrollTo(0, { duration: 1.5 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (id in crossfadeScrollTargets) {
        const vh = window.innerHeight;
        const maxProgress = 2.444;
        const totalScroll = maxProgress * 1.8 * vh;
        const targetProgress = crossfadeScrollTargets[id];
        const targetScroll = (targetProgress / maxProgress) * totalScroll;
        if (lenis) lenis.scrollTo(targetScroll, { duration: 2 });
        else window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) {
          if (lenis) lenis.scrollTo(el, { duration: 1.5 });
          else el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 150);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-md flex flex-col items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white"
        aria-label="Close menu"
        style={{ paddingRight: 'clamp(1.5rem, 1rem + 3vw, 4rem)' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <nav className="flex flex-col items-center gap-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={(e) => {
              e.stopPropagation();
              handleNavClick(item.id);
            }}
            className="text-white/80 hover:text-white text-[18px] font-medium tracking-wide uppercase transition-colors"
          >
            {item.label}
          </button>
        ))}
        <a
          href="mailto:lyndon@bdv.team"
          className="mt-4 inline-flex items-center border border-white/30 rounded-full px-6 py-3 text-[14px] font-medium tracking-wide uppercase text-white hover:bg-white hover:text-[#1a1a1a] transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          Contact Us
        </a>
      </nav>
    </div>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{ paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)' }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-6">
          {/* Logo with drop-shadow for readability on dark backgrounds */}
          <img
            src="/assets/images/logo/bdv-logo-full.png"
            alt="Built Different Ventures"
            className="h-[30px] md:h-[40px] w-auto cursor-pointer"
            style={{
              filter: 'drop-shadow(0 1px 8px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 2px rgba(255, 255, 255, 0.4))',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          <div className="flex items-center gap-3">
            <a
              href="mailto:lyndon@bdv.team"
              className="hidden md:inline-flex items-center border border-white/30 rounded-full px-5 py-2 text-[13px] font-medium tracking-wide uppercase text-white hover:bg-white hover:text-[#1a1a1a] transition-colors"
              style={{
                textShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
              }}
            >
              Contact Us
            </a>
            <a
              href="https://www.linkedin.com/company/builtdifferentsg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[36px] h-[36px] rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#1a1a1a] transition-colors"
              style={{
                filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.3))',
              }}
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-[36px] h-[36px] flex items-center justify-center text-white"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              style={{
                filter: 'drop-shadow(0 1px 4px rgba(0, 0, 0, 0.3))',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* FloatingNav — rendered via portal to avoid overflow clipping */}
      {createPortal(<FloatingNav />, document.body)}
    </>
  );
};

export default Header;
