import { scrollToSection } from '../../utils/smoothScroll';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige-100/95 backdrop-blur-sm border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/src/assets/images/logo/bdv logo.png"
            alt="BDV built:different"
            className="h-[30px] md:h-[50px]"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Team
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
