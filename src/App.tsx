import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import SectionDivider from './components/sections/SectionDivider';
import Team from './components/sections/Team';
import Portfolio from './components/sections/Portfolio';
import Services from './components/sections/Services';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-[1500px] mx-auto">
        <Hero />
        <SectionDivider />
        <Team />
        <Portfolio />
        <Services />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
