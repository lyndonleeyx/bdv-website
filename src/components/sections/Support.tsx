import {
  Lightbulb,
  Hammer,
  RocketLaunch,
  UsersThree,
  Brain,
  CurrencyDollar,
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const services: {
  icon: Icon;
  keyword: string;
  subtitle: string;
  description: string;
}[] = [
  {
    icon: Lightbulb,
    keyword: 'Validate',
    subtitle: 'Problem & Solution Validation',
    description:
      "We sit in customer conversations with you. If the problem isn't real, we find out together, fast.",
  },
  {
    icon: Hammer,
    keyword: 'Build',
    subtitle: 'Product & UX Support',
    description:
      'We build early demos with you and help shape what to ship first.',
  },
  {
    icon: RocketLaunch,
    keyword: 'Grow',
    subtitle: 'First Customers & GTM',
    description:
      'We work our network to find your first design partners and customers.',
  },
  {
    icon: UsersThree,
    keyword: 'Recruit',
    subtitle: 'Founder & Team Formation',
    description:
      "We help bring on cofounders, first engineers, and early operators we'd back ourselves.",
  },
  {
    icon: Brain,
    keyword: 'Learn',
    subtitle: 'World-Class Advisor Network',
    description:
      'We connect you with advisors from Stripe, Reddit, Coinbase, Google, PayPal, and more.',
  },
  {
    icon: CurrencyDollar,
    keyword: 'Fund',
    subtitle: 'First Check & Follow On',
    description:
      'We offer capital to get to product-market fit. Our LPs include top-tier venture firms who can back your next round.',
  },
];

const Support = () => {
  return (
    <section
      id="support"
      className="relative overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/images/decorative/support-background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        paddingBlock: 'clamp(3.5rem, 3rem + 1.5vw, 5rem)',
        paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
        marginTop: '-1px',
      }}
    >
      {/* Dark overlay matching Focus section tone */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(26, 26, 26, 0.80)' }}
      />
      {/* Darker edges vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.5) 100%)',
        }}
      />
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <p
          className="text-white/40 uppercase tracking-widest mb-4"
          style={{ fontSize: '0.875rem', fontWeight: 500 }}
        >
          Value Add
        </p>
        <h2
          className="text-white mb-12 md:mb-16"
          style={{
            fontSize: 'clamp(2.5rem, 1.8rem + 2.9vw, 5rem)',
            lineHeight: 1.1,
          }}
        >
          How We Support
          <br />
          Founders
        </h2>

        <div>
          {services.map((service) => {
              const IconComponent = service.icon;

              return (
                <div key={service.keyword}>
                  {/* Divider */}
                  <div
                    style={{
                      height: '1px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }}
                  />

                  {/* Row — desktop: 3-col grid, mobile: stacked */}
                  <div
                    className="grid md:grid-cols-[28px_300px_1fr] md:gap-8 gap-3"
                    style={{
                      padding: '1.75rem 2rem',
                      margin: '0 -2rem',
                      alignItems: 'start',
                    }}
                  >
                    <IconComponent
                      size={28}
                      weight="thin"
                      className="md:mt-1"
                      style={{
                        color: 'rgba(255, 255, 255, 0.5)',
                        flexShrink: 0,
                      }}
                    />

                    {/* Title — keyword + subtitle */}
                    <div>
                      <h3
                        style={{
                          fontSize: 'clamp(1.5rem, 1.2rem + 0.8vw, 2rem)',
                          fontWeight: 700,
                          lineHeight: 1.2,
                          color: '#FFFFFF',
                        }}
                      >
                        {service.keyword}
                      </h3>
                      <p
                        style={{
                          fontSize: '1rem',
                          fontWeight: 400,
                          lineHeight: 1.4,
                          marginTop: '0.25rem',
                          color: 'rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        {service.subtitle}
                      </p>
                    </div>

                    <p
                      style={{
                        fontSize: 'clamp(1rem, 0.85rem + 0.4vw, 1.125rem)',
                        fontWeight: 400,
                        lineHeight: 1.65,
                        color: 'rgba(255, 255, 255, 0.85)',
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Final divider */}
            <div
              style={{
                height: '1px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            />
          </div>
      </div>
    </section>
  );
};

export default Support;
