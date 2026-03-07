/**
 * SectionTransition Component
 *
 * A reusable component for creating smooth scroll-linked transitions
 * between any two sections. Uses GSAP ScrollTrigger to pin the container
 * and crossfade between sections.
 *
 * @example
 * ```tsx
 * <SectionTransition
 *   fromSection={<PastLife />}
 *   toSection={<Focus />}
 *   scrollHeight="100%"
 *   scrubValue={2.5}
 * />
 * ```
 */

import React, { useEffect } from 'react';
import { useScrollTransition } from '../../hooks/useScrollTransition';
import type { SectionTransitionConfig } from '../../types/transitions';

interface SectionTransitionProps extends SectionTransitionConfig {
  /**
   * The section to fade out (appears first during scroll)
   */
  fromSection: React.ReactNode;

  /**
   * The section to fade in (appears after transition)
   */
  toSection: React.ReactNode;

  /**
   * Optional ID for the container element
   * Useful for navigation/scroll targeting
   */
  id?: string;

  /**
   * Hide the previous transition's toSection to avoid duplicates when chaining
   * Set to true when the fromSection of this transition is identical to a previous transition's toSection
   */
  hidePreviousSiblings?: boolean;
}

/**
 * Generic section transition component with crossfade effect
 *
 * Creates a pinned container that holds scroll position while
 * crossfading between two sections. Both sections are absolutely
 * positioned and overlaid for smooth opacity transitions.
 */
const SectionTransition: React.FC<SectionTransitionProps> = ({
  fromSection,
  toSection,
  scrollHeight,
  scrubValue,
  fadeStartPercent,
  fadeDurationPercent,
  id,
  hidePreviousSiblings = false,
}) => {
  const { containerRef, fromRef, toRef } = useScrollTransition({
    scrollHeight,
    scrubValue,
    fadeStartPercent,
    fadeDurationPercent,
  });

  // Hide previous transitions completely to avoid duplicates when chaining
  useEffect(() => {
    if (hidePreviousSiblings && containerRef.current) {
      // Use requestAnimationFrame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        if (!containerRef.current) return;

        const siblings = Array.from(containerRef.current.parentElement?.children || []);
        const currentIndex = siblings.indexOf(containerRef.current);

        // Find all previous SectionTransition containers and hide them entirely
        for (let i = 0; i < currentIndex; i++) {
          const sibling = siblings[i] as HTMLElement;
          if (sibling.dataset.transitionContainer) {
            // Hide the entire container, not just the toSection
            sibling.style.display = 'none';
          }
        }
      });
    }
  }, [hidePreviousSiblings, containerRef]);

  return (
    <div
      ref={containerRef}
      id={id}
      data-transition-container="true"
      style={{ position: 'relative', height: '100svh' }}
    >
      {/* "From" section - starts visible (opacity: 1), fades out */}
      <div
        ref={fromRef}
        data-from-section="true"
        className="absolute top-0 left-0 w-full"
        style={{
          height: '100svh',
          opacity: 1,
          willChange: 'opacity', // Performance hint for GPU acceleration
        }}
      >
        {fromSection}
      </div>

      {/* "To" section - starts hidden (opacity: 0), fades in */}
      <div
        ref={toRef}
        data-to-section="true"
        className="absolute top-0 left-0 w-full"
        style={{
          height: '100svh',
          opacity: 0,
          willChange: 'opacity',
        }}
      >
        {toSection}
      </div>
    </div>
  );
};

export default SectionTransition;
