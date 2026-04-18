import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CrossfadeSequenceProps {
  sections: React.ReactNode[];
  holdRatio?: number; // 0 to 1, default 0.444 (80vh hold, 100vh transition)
}

/**
 * CrossfadeSequence Component
 *
 * Renders multiple sections with smooth scroll-linked crossfade transitions.
 * Each section appears exactly once in the DOM - no duplicates.
 *
 * How it works:
 * - All sections are layered absolutely in a single container
 * - A single tall scroll area is created (sections.length * 100vh)
 * - Each section has a "hold" period where it stays at full opacity
 * - As user scrolls, sections crossfade smoothly based on scroll progress
 * - Preserves the same smooth pinned crossfade effect as SectionTransition
 *
 * Timeline (with default holdRatio = 0.444):
 * - Section fades in (100vh)
 * - Section holds at full opacity (80vh)
 * - Section fades out (100vh transition to next section)
 */
const CrossfadeSequence: React.FC<CrossfadeSequenceProps> = ({
  sections,
  holdRatio = 0.444 // Default: 44% hold, 56% transition (80vh hold, 100vh transition)
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Calculate opacity for a section based on scroll progress and hold periods
    const calculateOpacity = (
      progress: number,
      index: number,
      total: number
    ): number => {
      const transitionRatio = 1 - holdRatio;

      // Phase 1: Fade IN from previous section
      if (index > 0) {
        const fadeInStart = (index - 1) + holdRatio;
        const fadeInEnd = index;

        if (progress >= fadeInStart && progress < fadeInEnd) {
          return (progress - fadeInStart) / transitionRatio;
        }
      }

      // Phase 2: HOLD at full opacity
      const holdStart = index;
      const holdEnd = index + holdRatio;

      if (index === total - 1 && progress >= holdStart) {
        return 1.0;
      }

      if (progress >= holdStart && progress < holdEnd) {
        return 1.0;
      }

      // Phase 3: Fade OUT to next section
      if (index < total - 1) {
        const fadeOutStart = index + holdRatio;
        const fadeOutEnd = index + 1;

        if (progress >= fadeOutStart && progress < fadeOutEnd) {
          return 1.0 - (progress - fadeOutStart) / transitionRatio;
        }
      }

      return 0;
    };

    const ctx = gsap.context(() => {
      const totalSections = sections.length;

      // Each section gets 180vh (80vh hold + 100vh transition), except the last
      // which only needs to fade in and hold — no transition after it
      const maxProgress = totalSections - 1 + holdRatio;
      const scrollDistance = maxProgress * 180; // 180vh per progress unit

      // Create a single ScrollTrigger that manages all crossfades
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${scrollDistance}%`,
        pin: true,
        scrub: 2.5,
        onUpdate: (self) => {
          const progress = self.progress * maxProgress;

          sectionRefs.current.forEach((section, index) => {
            if (!section) return;

            const opacity = calculateOpacity(progress, index, totalSections);
            gsap.set(section, { opacity, pointerEvents: opacity > 0.1 ? 'auto' : 'none' });
          });
        }
      });
    });

    return () => ctx.revert();
  }, [sections, holdRatio]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        height: '100vh' // Container is viewport height (ScrollTrigger extends it)
      }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            opacity: index === 0 ? 1 : 0, // First section starts visible
            pointerEvents: index === 0 ? 'auto' : 'none',
            willChange: 'opacity',
          }}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default CrossfadeSequence;
