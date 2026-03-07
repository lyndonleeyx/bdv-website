import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Focus = () => {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Set initial state (invisible, slightly lower)
    const elements = [labelRef.current, headingRef.current, subheadingRef.current, bodyRef.current];
    elements.forEach(el => {
      if (el) gsap.set(el, { opacity: 0, y: 60 });
    });

    // Create waterfall animation
    const tl = gsap.timeline({ paused: true });

    // Label appears first
    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0);

    // Heading appears next
    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.15);

    // Subheading appears next
    tl.to(subheadingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.30);

    // Body text appears last
    tl.to(bodyRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.45);

    // Play animation when component becomes visible
    tl.play();

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="focus"
      className="relative overflow-hidden"
      style={{
        paddingBlock: 'clamp(6rem, 8vw, 12rem)',
        paddingInline: 'clamp(2rem, 4vw, 4rem)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url("/assets/images/decorative/building3.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(26, 26, 26, 0.65)' }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Overline label */}
        <p
          ref={labelRef}
          className="text-white/30 uppercase tracking-[0.3em] mb-8"
          style={{ fontSize: '0.75rem', fontWeight: 600 }}
        >
          Principle
        </p>

        {/* Main heading - large and impactful */}
        <h2
          ref={headingRef}
          className="text-white mb-16"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 10rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            fontWeight: 700,
            maxWidth: '1200px',
          }}
        >
          We're Your
          <br />
          First Cofounder
        </h2>

        {/* Subheading - bold statement */}
        <p
          ref={subheadingRef}
          className="text-white/90 mb-12"
          style={{
            fontSize: 'clamp(1.5rem, 2vw, 2.5rem)',
            lineHeight: 1.3,
            fontWeight: 500,
            maxWidth: '900px',
          }}
        >
          We act like cofounders—because we are.
        </p>

        {/* Body text - spacious and readable */}
        <p
          ref={bodyRef}
          className="text-white/60"
          style={{
            fontSize: 'clamp(1.125rem, 1.2vw, 1.5rem)',
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: '850px',
            letterSpacing: '0.01em',
          }}
        >
          We roll up our sleeves across every phase of venture creation. Our
          focus: solving high-stakes, cross-border, B2B problems where AI
          can deliver true magic. Think trade compliance, corporate
          insurance brokerage, global commodities trading. Wherever you are,
          as long as you have a great idea, we're ready to get to work.
        </p>
      </div>
    </section>
  );
};

export default Focus;
