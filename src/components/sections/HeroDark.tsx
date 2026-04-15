/**
 * HeroDark Component
 *
 * Dark section with "We Like Different" heading and gradient text.
 * Extracted from Hero.tsx to enable clean crossfade transitions.
 *
 * Features waterfall text animation: heading appears first, then
 * subheadings cascade in with staggered timing (floating up + fade in).
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroDark = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const subheader1Ref = useRef<HTMLHeadingElement>(null);
  const subheader2Ref = useRef<HTMLHeadingElement>(null);
  const subheader3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Set initial state (invisible, slightly lower)
    const elements = [headerRef.current, subheader1Ref.current, subheader2Ref.current, subheader3Ref.current];
    elements.forEach(el => {
      if (el) gsap.set(el, { opacity: 0, y: 60 });
    });

    // Create waterfall animation with staggered timing
    const tl = gsap.timeline({ paused: true });

    // Main header appears first
    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0);

    // Subheaders cascade in sequence with 0.15s stagger
    tl.to(subheader1Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.15);

    tl.to(subheader2Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.30);

    tl.to(subheader3Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.45);

    // Monitor wrapper div's opacity to detect when HeroDark is visible
    const wrapper = containerRef.current?.parentElement;
    if (!wrapper) return;

    let hasTriggered = false;
    let rafId: number;

    const checkOpacity = () => {
      const opacity = parseFloat(getComputedStyle(wrapper).opacity);

      // Trigger animation when wrapper is mostly visible
      if (opacity > 0.8 && !hasTriggered) {
        hasTriggered = true;
        tl.play();
        return; // Stop checking once triggered
      }

      // Continue checking
      rafId = requestAnimationFrame(checkOpacity);
    };

    // Start checking
    rafId = requestAnimationFrame(checkOpacity);

    return () => {
      tl.kill();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero-dark"
      className="relative overflow-hidden bg-[#1a1a1a]"
      style={{
        minHeight: '100vh',
      }}
    >
      <div className="relative z-10 max-w-[1400px] w-full mx-auto h-full flex items-center" style={{ padding: 'clamp(2rem, 4vw, 4rem)', minHeight: '100vh' }}>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 w-full items-center">
          {/* Left column - "We Like Different" - much bigger */}
          <h2
            ref={headerRef}
            className="gradient-text"
            style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #7EC8D4 0%, #C49A7C 50%, #D4A8A0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            We Like Different
          </h2>

          {/* Right column - "different people ideas superpowers" */}
          <div className="flex flex-col gap-3 md:gap-4">
            <h3
              ref={subheader1Ref}
              className="gradient-text"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #7EC8D4 0%, #C49A7C 50%, #D4A8A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              different people
            </h3>

            <h3
              ref={subheader2Ref}
              className="gradient-text"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #7EC8D4 0%, #C49A7C 50%, #D4A8A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              different ideas
            </h3>

            <h3
              ref={subheader3Ref}
              className="gradient-text md:whitespace-nowrap"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #7EC8D4 0%, #C49A7C 50%, #D4A8A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              different superpowers
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDark;
