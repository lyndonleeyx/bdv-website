import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import CrossfadeSequence from './components/ui/CrossfadeSequence';
import ErrorBoundary from './components/ui/ErrorBoundary';
import ScrubFadeIn from './components/ui/ScrubFadeIn';
import Hero from './components/sections/Hero';
import TrackRecord from './components/sections/TrackRecord';
import Thesis from './components/sections/Thesis';
import Support from './components/sections/Support';
import Process from './components/sections/Process';
import Team from './components/sections/Team';
import Values from './components/sections/Values';
import DisclaimerPage from './pages/DisclaimerPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="overflow-x-clip">
        <CrossfadeSequence
          sections={[
            <Hero key="hero" />,
            <TrackRecord key="track-record" />,
            <Thesis key="thesis" />,
          ]}
        />

        {/* Process — dark background (was Support's) */}
        <div
          className="relative"
          style={{ marginTop: '-1px' }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/assets/images/decorative/support-background.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(26, 26, 26, 0.80)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.5) 100%)',
            }}
          />
          <div className="relative z-10">
            <Process />
          </div>
        </div>

        {/* Support — light background (was Process's) */}
        <ScrubFadeIn>
          <div className="relative" style={{ marginTop: '-1px' }}>
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
            <div className="absolute inset-0 bg-gradient-to-b from-white/55 to-white/80" />
            <div className="relative z-10">
              <Support />
            </div>
          </div>
        </ScrubFadeIn>

        <ScrubFadeIn>
          <Values />
        </ScrubFadeIn>

        <ScrubFadeIn>
          <Team />
        </ScrubFadeIn>
      </main>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
