import AnimateIn from '../ui/AnimateIn';

const companies = [
  { name: 'Affirm', logo: '/assets/images/logo/affirm_logo.png', cardImage: '/assets/images/cards/affirm-carousel.png', bg: '#1a1a2e', logoW: 105, logoTop: 17 },
  { name: 'PayPal', logo: '/assets/images/logo/paypal_logo.png', cardImage: '/assets/images/cards/paypal-carousel.webp', bg: '#16213e', logoW: 125, logoTop: 16, imgPos: '75% center' },
  { name: 'RevenueWell', logo: '/assets/images/logo/revenuewell_logo.png', cardImage: '/assets/images/cards/revenuewell-carousel.png', bg: '#0f3460', logoW: 210, logoTop: 2 },
  { name: 'Club Automation', logo: '/assets/images/logo/club_automation_logo.png', cardImage: '/assets/images/cards/clubautomation-carousel.webp', bg: '#1a1a2e', logoW: 210, logoTop: 2 },
  { name: 'Flexport', logo: '/assets/images/logo/flexport_logo.png', cardImage: '/assets/images/cards/flexport-carousel.avif', bg: '#16213e', logoW: 95, logoTop: 26 },
  { name: 'Grab', logo: '/assets/images/logo/grab_logo.png', cardImage: '/assets/images/cards/grab-carousel.jpg', bg: '#0f3460', logoW: 72, logoTop: 29 },
  { name: 'Chainlink', logo: '/assets/images/logo/chainlink_logo.png', cardImage: '/assets/images/cards/chainlink-carousel.avif', bg: '#1a1a2e', logoW: 145, logoTop: 15 },
  { name: 'Terraformation', logo: '/assets/images/logo/terraformation_logo.png', cardImage: '/assets/images/cards/terraformation-carousel.webp', bg: '#16213e', logoW: 205, logoTop: 4 },
];

// Duplicate for seamless loop
const marqueeCards = [...companies, ...companies];

const PastLife = () => {
  return (
    <section
      id="past-life"
      style={{
        paddingTop: 'clamp(5rem, 4rem + 4vw, 11rem)',
        paddingBottom: 'clamp(3.5rem, 3rem + 1.5vw, 5rem)',
      }}
    >
      {/* Section heading */}
      <div
        className="max-w-[1400px] mx-auto"
        style={{ paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)' }}
      >
        <AnimateIn>
          <p
            className="text-text/40 uppercase tracking-widest mb-4"
            style={{ fontSize: '0.875rem', fontWeight: 500 }}
          >
            Past Life
          </p>
          <h2
            className="text-text mb-10 md:mb-14"
            style={{
              fontSize: 'clamp(2.5rem, 1.8rem + 2.9vw, 5rem)',
              lineHeight: 1.1,
            }}
          >
            Teams We've
            <br />
            Built & Advised
          </h2>
        </AnimateIn>
      </div>

      {/* Marquee container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 hover:[animation-play-state:paused]"
          style={{
            animation: 'marquee 55s linear infinite',
            width: 'max-content',
          }}
        >
          {marqueeCards.map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="flex-shrink-0 rounded-xl overflow-hidden relative"
              style={{
                width: 'clamp(220px, 18vw, 300px)',
                aspectRatio: '3 / 5',
                backgroundColor: company.bg,
              }}
            >
              {/* Background photo */}
              <img
                src={company.cardImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                style={company.imgPos ? { objectPosition: company.imgPos } : undefined}
              />
              {/* Dark gradient overlay for logo visibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 35%, transparent 50%)',
                }}
              />
              {/* Logo — white, top-left */}
              <img
                src={company.logo}
                alt={company.name}
                className="absolute object-contain"
                style={{
                  width: `${company.logoW}px`,
                  top: `${company.logoTop}px`,
                  left: '20px',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastLife;
