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

  // Helper function to calculate opacity for a section with hold periods
  const calculateSectionOpacity = (
    progress: number,
    index: number,
    totalSections: number,
    holdRatio: number
  ): number => {
    const transitionRatio = 1 - holdRatio; // e.g., 0.2 for 20% transition

    // Phase 1: Fade IN from previous section
    if (index > 0) {
      const fadeInStart = (index - 1) + holdRatio; // e.g., 0.8 for section 1
      const fadeInEnd = index; // e.g., 1.0 for section 1

      if (progress >= fadeInStart && progress < fadeInEnd) {
        const transitionProgress = (progress - fadeInStart) / transitionRatio;
        return transitionProgress; // 0.0 → 1.0
      }
    }

    // Phase 2: HOLD at full opacity
    const holdStart = index; // e.g., 1.0 for section 1
    const holdEnd = index + holdRatio; // e.g., 1.8 for section 1

    // Last section stays visible from holdStart onward (no fade out)
    if (index === totalSections - 1 && progress >= holdStart) {
      return 1.0;
    }

    if (progress >= holdStart && progress < holdEnd) {
      return 1.0; // HOLD at full opacity
    }

    // Phase 3: Fade OUT to next section
    if (index < totalSections - 1) {
      const fadeOutStart = index + holdRatio; // e.g., 1.8 for section 1
      const fadeOutEnd = index + 1; // e.g., 2.0 for section 1

      if (progress >= fadeOutStart && progress < fadeOutEnd) {
        const transitionProgress = (progress - fadeOutStart) / transitionRatio;
        return 1.0 - transitionProgress; // 1.0 → 0.0
      }
    }

    // Outside this section's visibility range
    return 0;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const totalSections = sections.length;

      // Each section gets 180vh (80vh hold + 100vh transition), except the last
      // which only needs to fade in and hold — no transition after it
      const maxProgress = totalSections - 1 + holdRatio; // e.g., 3.444 for 4 sections
      const scrollDistance = maxProgress * 180; // 180vh per progress unit

      // Create a single ScrollTrigger that manages all crossfades
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${scrollDistance}%`,
        pin: true,
        scrub: 2.5,
        onUpdate: (self) => {
          // Progress ranges from 0 to maxProgress (ends after last section's hold)
          const progress = self.progress * maxProgress;

          sectionRefs.current.forEach((section, index) => {
            if (!section) return;

            const opacity = calculateSectionOpacity(
              progress,
              index,
              totalSections,
              holdRatio
            );

            gsap.set(section, { opacity });
          });
        }
      });
    });

    return () => ctx.revert();
  }, [sections, holdRatio, calculateSectionOpacity]);

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
