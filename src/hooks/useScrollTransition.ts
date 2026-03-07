/**
 * useScrollTransition Hook
 *
 * Extracts and encapsulates the GSAP ScrollTrigger pattern used for
 * scroll-linked section transitions. Creates a pinned container with
 * crossfade animation between two sections.
 *
 * Pattern extracted from PastLifeToFocusTransition.tsx
 */

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { SectionTransitionConfig } from '../types/transitions';
import { TRANSITION_DEFAULTS } from '../types/transitions';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for creating scroll-linked section transitions
 *
 * @param config - Configuration options for the transition
 * @returns Refs for the container and both sections (from/to)
 *
 * @example
 * ```tsx
 * const { containerRef, fromRef, toRef } = useScrollTransition({
 *   scrollHeight: '100%',
 *   scrubValue: 2.5,
 * });
 * ```
 */
export const useScrollTransition = (config: SectionTransitionConfig = {}) => {
  const {
    scrollHeight = TRANSITION_DEFAULTS.SCROLL_HEIGHT,
    scrubValue = TRANSITION_DEFAULTS.SCRUB_VALUE,
    fadeStartPercent = TRANSITION_DEFAULTS.FADE_START_PERCENT,
    fadeDurationPercent = TRANSITION_DEFAULTS.FADE_DURATION_PERCENT,
  } = config;

  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !fromRef.current || !toRef.current) return;

    const ctx = gsap.context(() => {
      // Create timeline for coordinated crossfade animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',              // Pin when container reaches top of viewport
          end: `+=${scrollHeight}`,      // Unpin after scrollHeight amount of scroll
          pin: true,                      // Pin the container during scroll
          scrub: scrubValue,              // Smooth lag between scroll and animation
        }
      });

      // Animation 1: Fade out "from" section
      // Starts at fadeStartPercent (e.g., 10%), completes at fadeStartPercent + fadeDurationPercent (e.g., 40%)
      tl.to(
        fromRef.current,
        {
          opacity: 0,
          duration: fadeDurationPercent,  // Duration as percentage of timeline
          ease: TRANSITION_DEFAULTS.EASE  // Linear for smooth bidirectional scroll
        },
        fadeStartPercent  // Position in timeline (percentage)
      );

      // Animation 2: Fade in "to" section
      // Runs simultaneously with fade out for crossfade effect
      tl.fromTo(
        toRef.current,
        { opacity: 0 },     // Start: fully transparent
        {
          opacity: 1,       // End: fully visible
          duration: fadeDurationPercent,
          ease: TRANSITION_DEFAULTS.EASE
        },
        fadeStartPercent  // Same start position = simultaneous crossfade
      );
    });

    // Cleanup: revert all GSAP animations and ScrollTriggers
    return () => ctx.revert();
  }, [scrollHeight, scrubValue, fadeStartPercent, fadeDurationPercent]);

  return { containerRef, fromRef, toRef };
};
