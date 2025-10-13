import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <section
      id="sketch-section"
      className="relative overflow-hidden"
      data-section-theme="light"
      data-section-height="custom"
    >
      {/* Section Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/src/assets/images/decorative/website background.webp"
          alt=""
          width="612"
          height="746"
          className="w-full h-full object-cover"
          style={{ objectPosition: '47.085% 32.804%' }}
        />
        <div className="absolute inset-0 bg-white" style={{ opacity: 0.15 }} />
      </div>

      {/* Content Wrapper with custom height padding (0vmax = 0) */}
      <div
        className="content-wrapper"
        style={{
          paddingTop: 'calc(0vmax / 10)',
          paddingBottom: 'calc(0vmax / 10)'
        }}
      >
        {/* Fluid Engine Grid */}
        <div
          className="fluid-engine-grid"
          style={{
            '--grid-gutter': 'calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px)',
            '--cell-max-width': 'calc((var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1))) / 8)',
            display: 'grid',
            position: 'relative',
            gridArea: '1/1/-1/-1',
            rowGap: '11px',
            columnGap: '11px',
            overflowX: 'clip'
          } as React.CSSProperties}
        >
          {/* Heading Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.220339 }}
            className="fe-block"
            style={{
              gridArea: '2/2/7/10',
              zIndex: 1,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-center justify-center">
              <h2
                className="text-4xl md:text-6xl font-normal text-gray-900"
                style={{
                  textAlign: 'center',
                  whiteSpace: 'pre-wrap'
                }}
              >
                It all starts with a{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">sketch</span>
                  {/* Jagged underline - matches Squarespace's cubic bezier pattern */}
                  <svg
                    className="absolute left-0 w-full h-3"
                    style={{
                      bottom: '-0.15em'
                    }}
                    viewBox="0 0 119 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8 c 2.84375,0 -3.65625,5.85 -4.875,7.8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8 c 2.84375,0 -3.65625,5.85 -4.875,7.8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8 c 2.84375,0 -3.65625,5.85 -4.875,7.8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8 c 2.84375,0 -3.65625,5.85 -4.875,7.8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8 c 2.84375,0 -3.65625,5.85 -4.875,7.8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8 c 2.84375,0 -3.65625,5.85 -4.875,7.8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8 c 2.84375,0 -3.65625,5.85 -4.875,7.8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8 c 2.84375,0 -3.65625,5.85 -4.875,7.8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8 c 2.84375,0 -3.65625,5.85 -4.875,7.8 c 4.0625,-1.95 13.40625,-7.8 16.25,-7.8"
                      stroke="var(--color-bdv-yellow)"
                      strokeWidth="3.5"
                      fill="none"
                      strokeLinecap="square"
                      strokeLinejoin="bevel"
                    />
                  </svg>
                </span>
                .
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Grid Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          #sketch-section .fluid-engine-grid {
            grid-template-rows: repeat(7, minmax(24px, auto));
            grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(8, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr);
          }

          @media (min-width: 768px) {
            #sketch-section .fluid-engine-grid {
              --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
              --cell-max-width: calc((var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1))) / 24);
              --row-height-scaling-factor: 0.0215;
              --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2));

              grid-template-rows: repeat(5, minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto)) !important;
              grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(24, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr) !important;
            }

            #sketch-section .fe-block {
              grid-area: 3/2/4/26 !important;
            }
          }
        `}} />
      </div>
    </section>
  );
};

export default SectionDivider;
