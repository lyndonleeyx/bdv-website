import { motion } from 'framer-motion';
import AccordionItem from '../ui/Accordion';

const Services = () => {
  const services = [
    {
      title: 'Dream: Problem & Solution Validation',
      content: "We run deep customer discovery and pressure-test ideas against real-world pain. If we can't build a defensible model, we don't move forward.",
    },
    {
      title: 'Build: Product & UX Support',
      content: 'Our product and design experts turn insights into MVPs customers actually want to use.',
    },
    {
      title: 'Grow: First Customers & GTM',
      content: 'We unlock our global network in fintech, healthcare, logistics and more to secure your earliest design partners.',
    },
    {
      title: 'Recruit: Founder & Team Formation',
      content: "We help bring on world-class cofounders and early operators—people we'd back ourselves.",
    },
    {
      title: 'Learn: World-Class Advisor Network',
      content: 'You get access to a bench of proven operators—from Stripe, Reddit, Coinbase, Google, PayPal, and more—ready to unblock and guide you.',
    },
    {
      title: 'Fund: First Check & Follow On',
      content: "For ideas and founders we believe in, we invest up to $1M in initial capital to get you to product-market fit. We're backed by top-tier venture firms across the US, Europe, and Asia—partners who can also support your next round when you're ready to scale.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden mb-16"
      data-section-height="medium"
    >
      {/* Section Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/src/assets/images/decorative/website background.webp"
          alt=""
          width="612"
          height="746"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 74.4%' }}
        />
        <div className="absolute inset-0 bg-white" style={{ opacity: 0.15 }} />
      </div>

      {/* Background decorative scribble on right */}
      <img
        src="/src/assets/images/decorative/services-scribble.webp"
        alt=""
        width="1505"
        height="1636"
        className="absolute right-0 pointer-events-none hidden lg:block"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(300px, 33vw, 500px)',
          height: 'auto',
          objectFit: 'contain',
          objectPosition: '50% 50%',
          zIndex: 1
        }}
      />

      {/* Content Wrapper */}
      <div className="content-wrapper px-[2vw]">
        <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-[1.8rem] text-gray-600 mb-4" style={{ lineHeight: '1.1em' }}>
            How We Partner
          </h2>
          <h1 className="text-[4rem] md:text-[6.2rem] font-bold mb-3" style={{ lineHeight: '1.1em' }}>
            <span className="text-gray-900">We're your first </span>
            <span className="text-bdv-yellow">cofounder</span>
          </h1>
          <p className="text-[1.5rem] text-gray-700 mb-2" style={{ lineHeight: '1.3em' }}>
            We act like cofounders—because we are.
          </p>
          <p className="text-[1.5rem] text-gray-700" style={{ lineHeight: '1.3em' }}>
            We roll up our sleeves across every phase of venture creation.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-0"
        >
          {services.map((service, index) => (
            <AccordionItem
              key={service.title}
              title={service.title}
              content={service.content}
              defaultOpen={index === 0}
            />
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
