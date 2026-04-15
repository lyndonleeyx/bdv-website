import Header from './components/layout/Header';
import CrossfadeSequence from './components/ui/CrossfadeSequence';
import ErrorBoundary from './components/ui/ErrorBoundary';
import ScrubFadeIn from './components/ui/ScrubFadeIn';
import Hero from './components/sections/Hero';
import HeroDark from './components/sections/HeroDark';
import PastLife from './components/sections/PastLife';
import Focus from './components/sections/Focus';
import Support from './components/sections/Support';
import Process from './components/sections/Process';
import Team from './components/sections/Team';
import Values from './components/sections/Values';
import FooterCTA from './components/sections/FooterCTA';

function App() {
  return (
    <ErrorBoundary>
    <div className="min-h-screen">
      <Header />
      <main className="overflow-x-clip">
        {/* Single CrossfadeSequence with all hero/intro sections - no duplicates */}
        <CrossfadeSequence
          sections={[
            <Hero key="hero" />,
            <HeroDark key="hero-dark" />,
            <PastLife key="past-life" />,
            <Focus key="focus" />,
          ]}
        />

        <Support />

        {/* Process-background image for Process only */}
        <ScrubFadeIn>
          <div className="relative" style={{ marginTop: '-1px' }}>
            {/* Flipped background image */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url("/assets/images/decorative/process-background.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'scaleX(-1)',
              }}
            />
            {/* Uniform white overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/55 to-white/80" />

            <div className="relative z-10">
              <Process />
            </div>
          </div>
        </ScrubFadeIn>

        {/* Team → Values → FooterCTA crossfade sequence */}
        <div id="footer-crossfade-wrapper">
          <CrossfadeSequence
            sections={[
              <Team key="team" />,
              <Values key="values" />,
              <FooterCTA key="footer-cta" />,
            ]}
          />
        </div>
      </main>
    </div>
    </ErrorBoundary>
  );
}

export default App;
