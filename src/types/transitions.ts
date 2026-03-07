/**
 * Section Transition Type Definitions
 *
 * Defines the configuration interface and default values for scroll-linked
 * section transitions using GSAP ScrollTrigger.
 */

/**
 * Configuration options for section transitions
 */
export interface SectionTransitionConfig {
  /**
   * Scroll height for the pinned container
   * @default '100%' - Requires 1x viewport height of scroll to complete
   * @example '200%' - Requires 2x viewport height (like Hero light→dark)
   */
  scrollHeight?: string;

  /**
   * Scrub value for scroll lag (creates smooth premium feel)
   * Higher values = more lag/smoothness
   * @default 2.5 - Matches existing Hero and PastLifeToFocus transitions
   */
  scrubValue?: number;

  /**
   * When the crossfade starts (as percentage of timeline, 0-1)
   * @default 0.1 - Starts at 10% of scroll timeline
   */
  fadeStartPercent?: number;

  /**
   * Duration of the crossfade (as percentage of timeline, 0-1)
   * @default 0.3 - Lasts 30% of timeline (e.g., 10% → 40%)
   */
  fadeDurationPercent?: number;
}

/**
 * Default configuration values for all section transitions
 *
 * These values match the existing Hero and PastLifeToFocus transitions
 * to maintain consistency across the site.
 */
export const TRANSITION_DEFAULTS = {
  /**
   * Default scroll height: 100% of viewport
   * Most transitions require 1x viewport scroll to complete
   */
  SCROLL_HEIGHT: '100%',

  /**
   * Default scrub value: 2.5
   * Provides smooth lag between scroll and animation
   */
  SCRUB_VALUE: 2.5,

  /**
   * Default fade start: 10% of timeline
   * Small buffer before crossfade begins
   */
  FADE_START_PERCENT: 0.1,

  /**
   * Default fade duration: 30% of timeline
   * Crossfade completes at 40% (0.1 + 0.3)
   */
  FADE_DURATION_PERCENT: 0.3,

  /**
   * Default easing: 'none' (linear)
   * Essential for smooth bidirectional scrolling
   */
  EASE: 'none',
} as const;
