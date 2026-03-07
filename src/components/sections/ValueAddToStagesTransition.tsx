/**
 * ValueAddToStagesTransition
 *
 * Smooth scroll-linked crossfade between ValueAdd (white) and Stages (black) sections.
 *
 * Animation timeline:
 * - 0-10%: Both sections static
 * - 10-40%: Crossfade (ValueAdd fades out, Stages fades in)
 * - 40-100%: Stages static, fully visible
 *
 * Scroll configuration:
 * - Container height: 100vh (requires 1x viewport scroll to complete)
 * - Scrub: 2.5 (smooth lag for premium feel)
 * - Pin: Container pinned to viewport during scroll
 *
 * Visual: White → Black background (most dramatic color shift in the site)
 *
 * @see SectionTransition for the underlying component
 * @see useScrollTransition for the GSAP logic
 */

import SectionTransition from '../ui/SectionTransition';
import ValueAdd from './ValueAdd';
import Stages from './Stages';

const ValueAddToStagesTransition = () => (
  <SectionTransition
    fromSection={<></>}
    toSection={<Stages />}
  />
);

export default ValueAddToStagesTransition;
