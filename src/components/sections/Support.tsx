import {
  Lightbulb,
  UsersThree,
  RocketLaunch,
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
    keyword: 'Process',
    subtitle: 'Problem & Solution Validation',
    description:
      "We sit in customer conversations with you. If the problem isn't real, we find out together, fast. We build early demos with you and help shape what to ship first.",
  },
  {
    icon: UsersThree,
    keyword: 'Network',
    subtitle: 'Talent & Advisors',
    description:
      "We help bring on cofounders, first engineers, and early operators. We connect you with advisors from Stripe, Reddit, Coinbase, Google, PayPal, and more.",
  },
  {
    icon: RocketLaunch,
    keyword: 'Customers',
    subtitle: 'Validation & Signing',
    description:
      'We work our network to find your first design partners and customers. We help turn conversations into signed contracts.',
  },
  {
    icon: CurrencyDollar,
    keyword: 'Capital',
    subtitle: 'First Check & Follow On',
    description:
      "BDV Holding I, LLC leads the first check and supports portfolio companies through follow-on rounds. Holding's LPs include top-tier venture firms.",
  },
];

const Support = () => {
  return (
    <section
      id="support"
      style={{
        backgroundColor: 'transparent',
        paddingBlock: 'clamp(3.5rem, 3rem + 1.5vw, 5rem)',
        paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <p
          className="uppercase tracking-widest mb-4"
          style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(0,0,0,0.5)' }}
        >
          Value Add
        </p>
        <h2
          className="mb-12 md:mb-16"
          style={{
            fontSize: 'clamp(2.5rem, 1.8rem + 2.9vw, 5rem)',
            lineHeight: 1.1,
            color: '#1a1a1a',
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
                  <div
                    style={{
                      height: '1px',
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    }}
                  />

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
                        color: 'rgba(0, 0, 0, 0.4)',
                        flexShrink: 0,
                      }}
                    />

                    <div>
                      <h3
                        style={{
                          fontSize: 'clamp(1.5rem, 1.2rem + 0.8vw, 2rem)',
                          fontWeight: 700,
                          lineHeight: 1.2,
                          color: '#1a1a1a',
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
                          color: 'rgba(0, 0, 0, 0.5)',
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
                        color: 'rgba(0, 0, 0, 0.65)',
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div
              style={{
                height: '1px',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
      </div>
    </section>
  );
};

export default Support;
