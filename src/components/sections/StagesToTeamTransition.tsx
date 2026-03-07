/**
 * StagesToTeamTransition
 *
 * Smooth scroll-linked crossfade between Stages (black) and Team (white with building5) sections.
 *
 * Animation timeline:
 * - 0-10%: Both sections static
 * - 10-40%: Crossfade (Stages fades out, Team fades in)
 * - 40-100%: Team static, fully visible
 *
 * Scroll configuration:
 * - Container height: 100vh (requires 1x viewport scroll to complete)
 * - Scrub: 2.5 (smooth lag for premium feel)
 * - Pin: Container pinned to viewport during scroll
 *
 * Visual: Black → White with building5 background
 *
 * Note: Team section is wrapped with building5.jpg background and white overlay
 * since it previously shared this background with FooterCTA in App.tsx
 *
 * @see SectionTransition for the underlying component
 * @see useScrollTransition for the GSAP logic
 */

import SectionTransition from '../ui/SectionTransition';
import Team from './Team';

const StagesToTeamTransition = () => (
  <SectionTransition
    fromSection={<></>}
    toSection={
      <div
        className="relative"
        style={{
          backgroundImage: 'url("/assets/images/decorative/building5.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* White overlay for text readability - reduced to show building5 */}
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />

        <div className="relative z-10">
          <Team />
        </div>
      </div>
    }
  />
);

export default StagesToTeamTransition;
