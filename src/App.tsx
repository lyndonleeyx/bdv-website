import Header from './components/layout/Header';
import CrossfadeSequence from './components/ui/CrossfadeSequence';
import Hero from './components/sections/Hero';
import HeroDark from './components/sections/HeroDark';
import PastLife from './components/sections/PastLife';
import Focus from './components/sections/Focus';
import ValueAdd from './components/sections/ValueAdd';
import Stages from './components/sections/Stages';
import Team from './components/sections/Team';
import FooterCTA from './components/sections/FooterCTA';

function App() {
  return (
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

        <ValueAdd />

        {/* Building5 image for Stages + Team + Footer */}
        <div
          className="relative"
          style={{
            backgroundImage: 'url("/assets/images/decorative/building5.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 70%',
            backgroundRepeat: 'no-repeat',
            marginTop: '-1px',
          }}
        >
          {/* Uniform white overlay for text readability over building5 */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-white/60" />

          <div className="relative z-10">
            <Stages />
            <Team />
            <FooterCTA />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
