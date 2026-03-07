/**
 * FocusToValueAddTransition
 *
 * Smooth scroll-linked crossfade between Focus (dark) and ValueAdd (white) sections.
 *
 * Animation timeline:
 * - 0-10%: Both sections static
 * - 10-40%: Crossfade (Focus fades out, ValueAdd fades in)
 * - 40-100%: ValueAdd static, fully visible
 *
 * Scroll configuration:
 * - Container height: 100vh (requires 1x viewport scroll to complete)
 * - Scrub: 2.5 (smooth lag for premium feel)
 * - Pin: Container pinned to viewport during scroll
 *
 * Visual: Dark (building3 with overlay) → White background
 *
 * @see SectionTransition for the underlying component
 * @see useScrollTransition for the GSAP logic
 */

import SectionTransition from '../ui/SectionTransition';
import ValueAdd from './ValueAdd';

const FocusToValueAddTransition = () => (
  <SectionTransition
    fromSection={<></>}
    toSection={<ValueAdd />}
  />
);

export default FocusToValueAddTransition;
