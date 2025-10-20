import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden mb-32"
      data-section-height="small"
    >
      {/* Section Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/decorative/website background.webp"
          alt=""
          width="612"
          height="746"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 79.2%' }}
        />
        <div className="absolute inset-0 bg-white" style={{ opacity: 0.15 }} />
      </div>

      {/* Content Wrapper */}
      <div className="content-wrapper px-[2vw]">
        <div className="max-w-7xl mx-auto">

        {/* Marquee - Full Width at Top with Padding */}
        <div style={{ paddingTop: '3%', paddingBottom: '3%' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full overflow-hidden"
          >
            <motion.div
              className="font-bold text-gray-900 whitespace-nowrap flex text-[5rem] md:text-[8rem]"
              style={{ lineHeight: '1.4' }}
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span style={{ marginRight: '1.4em' }}>Let's Build!</span>
              <span style={{ marginRight: '1.4em' }}>Let's Build!</span>
              <span style={{ marginRight: '1.4em' }}>Let's Build!</span>
              <span style={{ marginRight: '1.4em' }}>Let's Build!</span>
              <span style={{ marginRight: '1.4em' }}>Let's Build!</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Content Container - 3 Column Layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left - CTA Scribble */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-start md:w-1/6"
          >
            <img
              src="/assets/images/decorative/cta-scribble.webp"
              alt=""
              width="545"
              height="324"
              className="w-32 md:w-full h-auto"
              style={{ objectFit: 'contain', objectPosition: '50% 50%' }}
            />
          </motion.div>

          {/* Center - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-left md:w-1/2"
          >
            <p className="text-[1.8rem] text-gray-700" style={{ lineHeight: '1.3em' }}>
              Whether you've spotted a massive pain point, are looking for the right cofounder, or just want to jam on an idea—we'd love to hear from you.
            </p>
          </motion.div>

          {/* Right - Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center md:justify-end md:w-1/3"
          >
            <a
              href="mailto:serge@builtdifferent.vc"
              className="inline-block px-8 py-4 bg-black text-white text-[1.5rem] font-medium hover:bg-gray-800 transition-colors"
              style={{ lineHeight: '1.3em' }}
            >
              Learn more
            </a>
          </motion.div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
