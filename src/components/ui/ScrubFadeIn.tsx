import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrubFadeInProps {
  children: ReactNode;
  fadeDistance?: string; // e.g. '100vh' — scroll distance over which opacity goes 0→1
}

/**
 * ScrubFadeIn — scroll-scrubbed opacity fade-in wrapper.
 *
 * Uses the same mechanism as CrossfadeSequence (GSAP ScrollTrigger + scrub + opacity)
 * but without pinning or 100vh sizing. The wrapped section scrolls normally; its
 * opacity tracks scroll position linearly from 0 → 1 as the top edge crosses the
 * viewport.
 *
 * Matches the feel of the hero crossfades (scrub: 2.5, ease: 'none').
 * Safe for sticky-card descendants — opacity creates a stacking context but
 * not a scrolling containing block.
 */
const ScrubFadeIn: React.FC<ScrubFadeInProps> = ({
  children,
  fadeDistance = '100vh',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: `top bottom-=${fadeDistance}`,
            scrub: 2.5,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [fadeDistance]);

  return (
    <div ref={ref} style={{ opacity: 0, willChange: 'opacity' }}>
      {children}
    </div>
  );
};

export default ScrubFadeIn;
