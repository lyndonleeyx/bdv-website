import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const values = [
  'We put founders first.',
  'We play long games.',
  'We say the hard thing early and out loud. Always.',
  "We use AI, we don't just talk about it.",
  'We grow the pie.',
];

const gradientTextStyle = {
  background: 'linear-gradient(135deg, #7EC8D4 0%, #C49A7C 50%, #D4A8A0 100%)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
  backgroundClip: 'text' as const,
  color: 'transparent',
};

const Values = () => {
  const containerRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const valueRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const label = labelRef.current;
    const heading = headingRef.current;
    const items = valueRefs.current.filter(Boolean);

    const elements = [label, heading, ...items].filter(
      (el): el is HTMLElement => el !== null
    );

    elements.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 60 });
    });

    const tl = gsap.timeline({ paused: true });

    if (label) {
      tl.to(label, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0);
    }
    if (heading) {
      tl.to(heading, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.15);
    }
    items.forEach((el, i) => {
      tl.to(
        el,
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        0.3 + i * 0.12
      );
    });

    // Monitor wrapper opacity (set by CrossfadeSequence)
    const wrapper = containerRef.current?.parentElement;
    let hasTriggered = false;
    let rafId = 0;

    const checkOpacity = () => {
      if (!wrapper) return;
      const opacity = parseFloat(getComputedStyle(wrapper).opacity);
      if (opacity > 0.8 && !hasTriggered) {
        hasTriggered = true;
        tl.play();
        return;
      }
      rafId = requestAnimationFrame(checkOpacity);
    };

    rafId = requestAnimationFrame(checkOpacity);

    return () => {
      tl.kill();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="values"
      className="relative h-full w-full overflow-hidden flex items-center"
      style={{
        backgroundImage: 'url("/assets/images/decorative/values-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        paddingBlock: 'clamp(3.5rem, 3rem + 1.5vw, 5rem)',
        paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(26, 26, 26, 0.65)' }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Intro */}
        <div className="mb-10 md:mb-16">
          <p
            ref={labelRef}
            className="text-white/50 uppercase mb-4"
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
            }}
          >
            Values
          </p>
          <h2
            ref={headingRef}
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              fontWeight: 700,
              ...gradientTextStyle,
            }}
          >
            What We Stand For
          </h2>
        </div>

        {/* Values grid — no numbers, no dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-16 md:gap-y-12">
          {values.map((value, i) => (
            <p
              key={value}
              ref={(el) => {
                if (el) valueRefs.current[i] = el;
              }}
              className="text-white"
              style={{
                fontSize: 'clamp(1.25rem, 0.9rem + 1.6vw, 2.25rem)',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: '-0.01em',
              }}
            >
              {value}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
