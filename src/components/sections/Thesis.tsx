import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Thesis = () => {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [labelRef.current, headingRef.current, subheadingRef.current, bodyRef.current];
    elements.forEach(el => {
      if (el) gsap.set(el, { opacity: 0, y: 60 });
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0);

    tl.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.15);

    tl.to(subheadingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.30);

    tl.to(bodyRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, 0.45);

    tl.play();

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="thesis"
      className="relative overflow-hidden"
      style={{
        paddingBlock: 'clamp(6rem, 8vw, 12rem)',
        paddingInline: 'clamp(2rem, 4vw, 4rem)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url("/assets/images/decorative/focus-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(26, 26, 26, 0.65)' }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <p
          ref={labelRef}
          className="text-white/30 uppercase tracking-[0.3em] mb-8"
          style={{ fontSize: '0.75rem', fontWeight: 600 }}
        >
          Thesis
        </p>

        <h2
          ref={headingRef}
          className="text-white mb-16"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            fontWeight: 700,
            maxWidth: '1200px',
          }}
        >
          High-Stakes B2B,
          <br />
          AI-Native
        </h2>

        <p
          ref={subheadingRef}
          className="text-white/90 mb-12"
          style={{
            fontSize: 'clamp(1.5rem, 2vw, 1.875rem)',
            lineHeight: 1.3,
            fontWeight: 500,
            maxWidth: '900px',
          }}
        >
          We target industries where complexity is the moat.
        </p>

        <p
          ref={bodyRef}
          className="text-white/85"
          style={{
            fontSize: 'clamp(1.125rem, 1.2vw, 1.25rem)',
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: '850px',
            letterSpacing: '0.01em',
          }}
        >
          Trade compliance, corporate insurance brokerage, global commodities
          trading — wherever regulated, cross-border B2B workflows still run on
          spreadsheets and phone calls, AI can deliver transformational value.
          We roll up our sleeves across every phase of venture creation to prove
          it.
        </p>
      </div>
    </section>
  );
};

export default Thesis;
