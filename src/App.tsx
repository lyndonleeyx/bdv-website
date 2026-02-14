import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import PastLife from './components/sections/PastLife';
import Focus from './components/sections/Focus';
import Stages from './components/sections/Stages';
import ValueAdd from './components/sections/ValueAdd';
import Team from './components/sections/Team';
import FooterCTA from './components/sections/FooterCTA';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="overflow-x-clip pb-24">
        <Hero />
        <PastLife />
        <Focus />
        <ValueAdd />
        <Stages />
        <Team />
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
