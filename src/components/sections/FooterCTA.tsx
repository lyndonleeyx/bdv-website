import AnimateIn from '../ui/AnimateIn';

const FooterCTA = () => {
  return (
    <section id="contact">
      {/* CTA Area */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto"
        style={{
          paddingTop: 'clamp(3.5rem, 3rem + 1.5vw, 5rem)',
          paddingBottom: 'clamp(4rem, 3rem + 3vw, 6rem)',
          paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
        }}
      >
        <AnimateIn>
          <p
            className="text-text uppercase tracking-widest mb-4"
            style={{ fontSize: '0.875rem', fontWeight: 500 }}
          >
            Get In Touch
          </p>
          <h2
            className="text-text mb-6 md:mb-8"
            style={{
              fontSize: 'clamp(3rem, 2.2rem + 3.4vw, 6rem)',
              lineHeight: 1.05,
            }}
          >
            Let's Go
            <br />
            Build!
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.15}>
          <p
            className="text-text max-w-[500px] mb-8 md:mb-10"
            style={{
              fontSize: 'clamp(1rem, 0.85rem + 0.6vw, 1.25rem)',
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Whether you've spotted a massive pain point, are looking for the
            right cofounder, or just want to jam on an idea—we'd love to hear
            from you.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.25}>
          <div className="flex items-center gap-3">
            {/* Contact pill button */}
            <a
              href="mailto:hello@builtdifferent.vc"
              className="inline-flex items-center border border-[#1a1a1a]/20 rounded-full px-6 py-3 text-[14px] font-medium tracking-wide uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Contact Us
            </a>

            {/* LinkedIn circle */}
            <a
              href="https://www.linkedin.com/company/builtdifferentsg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[44px] h-[44px] rounded-full border border-[#1a1a1a]/20 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>

      {/* Divider */}
      <div
        className="max-w-[1400px] mx-auto"
        style={{ paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)' }}
      >
        <div className="w-full h-[1px] bg-[#d4cfc8]" />
      </div>

      {/* Footer */}
      <div
        className="max-w-[1400px] mx-auto"
        style={{
          paddingBlock: 'clamp(2rem, 1.5rem + 1.5vw, 3rem)',
          paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
        }}
      >
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <p className="text-text text-[14px]">
            &copy;2026 Built Different Ventures. All rights reserved.
          </p>
          <p className="text-text text-[14px]">
            9 Wallich St, #5th Floor, Sofitel Singapore City Centre, Singapore
            078885
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
