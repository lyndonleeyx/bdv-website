import { motion } from 'framer-motion';

const Portfolio = () => {
  const companies = [
    { name: 'Affirm', logo: '/src/assets/images/logo/affirm_logo.png', scale: 1.0 },
    { name: 'PayPal', logo: '/src/assets/images/logo/paypal_logo.png', scale: 1.0 },
    { name: 'RevenueWell', logo: '/src/assets/images/logo/revenuewell_logo.png', scale: 1.3 },
    { name: 'ClubAutomation', logo: '/src/assets/images/logo/club_automation_logo.png', scale: 1.3 },
    { name: 'Flexport', logo: '/src/assets/images/logo/flexport_logo.png', scale: 0.9 },
    { name: 'Grab', logo: '/src/assets/images/logo/grab_logo.png', scale: 0.8 },
    { name: 'Chainlink', logo: '/src/assets/images/logo/chainlink_logo.png', scale: 1.0 },
    { name: 'Terraformation', logo: '/src/assets/images/logo/terraformation_logo.png', scale: 1.3 },
  ];

  return (
    <section id="portfolio" className="pt-14 pb-12 px-[2vw] mb-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[4rem] md:text-[6.2rem] font-bold text-gray-900" style={{ lineHeight: '1.1em' }}>
            Teams we've
            <br />
            built & advised
          </h1>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-w-full h-auto max-h-20 md:max-h-24 object-contain transition-all duration-300 hover:scale-110"
                style={{
                  transform: `scale(${company.scale})`
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
