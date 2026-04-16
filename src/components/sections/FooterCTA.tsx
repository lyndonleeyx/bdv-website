import AnimateIn from '../ui/AnimateIn';

const FooterCTA = () => {
  return (
    <section
      id="contact"
      className="relative h-full w-full overflow-hidden flex flex-col"
      style={{
        backgroundImage: 'url("/assets/images/decorative/cta-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Desktop overlay: strong on left for text, fades right so facade shows through */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.85) 33%, rgba(255,255,255,0.05) 100%)',
        }}
      />
      {/* Mobile overlay: strong at top for text, fades down so facade shows at bottom */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.88) 60%, rgba(255,255,255,0.15) 100%)',
        }}
      />

      {/* CTA Area */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto w-full flex-1 flex flex-col justify-center"
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
            className="text-text mb-6 md:mb-8 whitespace-nowrap"
            style={{
              fontSize: 'clamp(2.5rem, 1.8rem + 2.9vw, 5rem)',
              lineHeight: 1.1,
            }}
          >
            Let's Go Build!
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
        className="relative z-10 max-w-[1400px] mx-auto w-full"
        style={{ paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)' }}
      >
        <div className="w-full h-[1px] bg-[#d4cfc8]" />
      </div>

      {/* Footer */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto w-full"
        style={{
          paddingTop: 'clamp(2rem, 1.5rem + 1.5vw, 3rem)',
          paddingBottom: 'clamp(2rem, 1.5rem + 5vw, 7rem)',
          paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
        }}
      >
        <div className="flex flex-col gap-2">
          <p className="text-text text-[14px]">
            9 Wallich St, #5th Floor, Sofitel Singapore City Centre, Singapore
            078885
          </p>
          <p className="text-text text-[14px]">
            &copy;2026 Built Different Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
