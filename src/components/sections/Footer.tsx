import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section
      id="footer"
      className="relative overflow-hidden"
      data-section-height="custom"
      style={{ minHeight: '10vh' }}
    >
      {/* Section Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/src/assets/images/decorative/website background.webp"
          alt=""
          width="612"
          height="746"
          className="w-full h-full object-cover"
          style={{ objectPosition: '49.03% 96.01%' }}
        />
        <div className="absolute inset-0 bg-white" style={{ opacity: 0.15 }} />
      </div>

      {/* Content Wrapper with Custom Padding */}
      <div className="content-wrapper px-[2vw]" style={{ paddingTop: '1vmax', paddingBottom: '1vmax' }}>
        <div className="max-w-7xl mx-auto">

          {/* Flexbox Layout: Logo Left, Email Right */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-4">

            {/* Left - BDV Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-start md:w-1/4"
            >
              <img
                src="/src/assets/images/logo/bdv logo.png"
                alt="Built Different Ventures"
                width="755"
                height="198"
                className="h-12 w-auto"
                style={{ objectFit: 'contain' }}
              />
            </motion.div>

            {/* Right - Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <h4 className="text-xl md:text-2xl text-gray-900">
                <a
                  href="mailto:hello@builtdifferent.vc"
                  className="hover:text-bdv-yellow transition-colors"
                >
                  hello@
                </a>
                builtdifferent.vc
              </h4>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
