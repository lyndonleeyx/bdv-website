/**
 * HeroDarkEndState
 *
 * Static representation of the Hero section's dark end state.
 * This component shows what the Hero looks like after the light-to-dark
 * transition completes: "We Like Different" with gradient text on a dark background.
 *
 * Used in HeroToPastLifeTransition as the "fromSection" to create a smooth
 * crossfade from the Hero's ending to PastLife's beginning.
 */

const HeroDarkEndState = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#1a1a1a]"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="relative z-10 max-w-[1400px] w-full mx-auto h-full flex items-center"
        style={{ padding: 'clamp(2rem, 4vw, 4rem)' }}
      >
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 w-full items-center">
          {/* Left column - "We Like Different" - much bigger */}
          <h2
            className="gradient-text"
            style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              fontWeight: 800,
              background:
                'linear-gradient(135deg, #AAC7DF 0%, #B4AAD2 50%, #E6B4C8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            We Like Different
          </h2>

          {/* Right column - "different people ideas superpowers" */}
          <div className="flex flex-col gap-3 md:gap-4">
            <h3
              className="gradient-text"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                fontWeight: 600,
                background:
                  'linear-gradient(135deg, #AAC7DF 0%, #B4AAD2 50%, #E6B4C8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              different people
            </h3>

            <h3
              className="gradient-text"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                fontWeight: 600,
                background:
                  'linear-gradient(135deg, #AAC7DF 0%, #B4AAD2 50%, #E6B4C8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              different ideas
            </h3>

            <h3
              className="gradient-text"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                fontWeight: 600,
                background:
                  'linear-gradient(135deg, #AAC7DF 0%, #B4AAD2 50%, #E6B4C8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              different superpowers
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDarkEndState;
