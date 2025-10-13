import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        paddingTop: '66.8906px',
      }}
    >
      {/* Section Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/src/assets/images/decorative/website background.webp"
          alt=""
          width="3770"
          height="4583"
          className="w-full h-full object-cover"
          style={{
            objectPosition: '48.058% 12.001%'
          }}
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-white"
          style={{ opacity: 0.15 }}
        />
      </div>

      {/* Content Wrapper */}
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
            rowGap: '11px',
            columnGap: '11px',
            overflowX: 'clip'
          } as React.CSSProperties}
        >
          {/* Yellow Stroke - Z-Index 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.101695 }}
            className="fe-block yellow-stroke hidden md:block"
            style={{
              zIndex: 1
            }}
          >
            <div className="sqs-block image-block sqs-block-image sqs-stretched" style={{ height: '100%' }}>
              <div className="sqs-block-content" style={{ height: '100%', width: '100%' }}>
                <div className="image-block-outer-wrapper" style={{ height: '100%' }}>
                  <div
                    className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                    style={{
                      height: '100%',
                      transitionTimingFunction: 'ease',
                      transitionDuration: '0.65s',
                      transitionDelay: '0.101695s',
                      animationDuration: '0.65s'
                    }}
                  >
                    <div
                      className="fluid-image-container sqs-image-content"
                      style={{
                        overflow: 'hidden',
                        maskImage: '-webkit-radial-gradient(center, white, black)',
                        WebkitMaskImage: '-webkit-radial-gradient(center, white, black)',
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <div className="content-fit" style={{ height: '100%' }}>
                        <img
                          src="/src/assets/images/decorative/yellow+stroke.webp"
                          alt=""
                          width="1479"
                          height="1080"
                          style={{
                            display: 'block',
                            objectFit: 'contain',
                            objectPosition: '50% 50%',
                            height: '100%',
                            width: '100%'
                          }}
                          loading="lazy"
                        />
                        <div
                          className="fluidImageOverlay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            mixBlendMode: 'normal',
                            opacity: 0
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blue Stroke - Z-Index 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.135593 }}
            className="fe-block blue-stroke hidden md:block"
            style={{
              zIndex: 2
            }}
          >
            <div className="sqs-block image-block sqs-block-image sqs-stretched" style={{ height: '100%' }}>
              <div className="sqs-block-content" style={{ height: '100%', width: '100%' }}>
                <div className="image-block-outer-wrapper" style={{ height: '100%' }}>
                  <div
                    className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                    style={{
                      height: '100%',
                      transitionTimingFunction: 'ease',
                      transitionDuration: '0.65s',
                      transitionDelay: '0.135593s',
                      animationDuration: '0.65s'
                    }}
                  >
                    <div
                      className="fluid-image-container sqs-image-content"
                      style={{
                        overflow: 'hidden',
                        maskImage: '-webkit-radial-gradient(center, white, black)',
                        WebkitMaskImage: '-webkit-radial-gradient(center, white, black)',
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <div className="content-fit" style={{ height: '100%' }}>
                        <img
                          src="/src/assets/images/decorative/blue+stroke.webp"
                          alt=""
                          width="1640"
                          height="994"
                          style={{
                            display: 'block',
                            objectFit: 'contain',
                            objectPosition: '50% 50%',
                            height: '100%',
                            width: '100%'
                          }}
                          loading="lazy"
                        />
                        <div
                          className="fluidImageOverlay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            mixBlendMode: 'normal',
                            opacity: 0
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tagline - Z-Index 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.118644 }}
            className="fe-block tagline"
            style={{
              gridArea: '2/2/5/9',
              zIndex: 3,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-center justify-center md:items-start md:justify-start">
              <p
                className="text-[1.8rem] text-gray-700 text-center md:text-left"
                style={{
                  lineHeight: '1.3em',
                  whiteSpace: 'normal'
                }}
              >
                We're here to build—with you
              </p>
            </div>
          </motion.div>

          {/* "built:" Heading - Z-Index 4 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.152542 }}
            className="fe-block built-heading"
            style={{
              gridArea: '4/2/6/6',
              zIndex: 4,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <h1
                className="text-[4.5rem] md:text-[6.2rem] font-bold text-gray-900"
                style={{
                  lineHeight: '1.1em',
                  whiteSpace: 'pre-wrap'
                }}
              >
                built:
              </h1>
            </div>
          </motion.div>

          {/* Hero Tape - Z-Index 5 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.186441 }}
            className="fe-block hero-tape"
            style={{
              gridArea: '7/4/9/10',
              zIndex: 5
            }}
          >
            <div className="sqs-block flex items-center justify-center md:items-start md:justify-start">
              <div
                className="fluid-image-container"
                style={{
                  overflow: 'hidden',
                  maskImage: '-webkit-radial-gradient(center, white, black)',
                  WebkitMaskImage: '-webkit-radial-gradient(center, white, black)',
                  position: 'relative',
                  width: '190.112px',
                  height: '100%'
                }}
              >
                <img
                  src="/src/assets/images/decorative/hero-tape.webp"
                  alt=""
                  width="781"
                  height="304"
                  style={{
                    display: 'block',
                    objectFit: 'contain',
                    objectPosition: '47.13114754098361% 70.41050903119869%'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* "different" Heading - Z-Index 8 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.169492 }}
            className="fe-block different-heading"
            style={{
              gridArea: '6/4/8/10',
              zIndex: 8,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <h1
                className="text-[4.5rem] md:text-[6.2rem] font-bold text-gray-900"
                style={{
                  lineHeight: '1.1em',
                  whiteSpace: 'pre-wrap'
                }}
              >
                different
              </h1>
            </div>
          </motion.div>

          {/* Description - Z-Index 7 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.20339 }}
            className="fe-block description"
            style={{
              gridArea: '9/2/15/10',
              zIndex: 7
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <div style={{ borderRadius: '30px' }}>
                <p
                  className="text-[1.8rem] text-gray-900"
                  style={{
                    lineHeight: '1.3em',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  <strong>Built Different Ventures (BDV)</strong> co-builds category-defining companies with founders. We focus on complex, global service problems where AI can deliver outsized value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Grid Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          #hero .fluid-engine-grid {
            grid-template-rows: repeat(15, minmax(24px, auto));
            grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(8, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr);
          }

          @media (min-width: 768px) {
            #hero .fluid-engine-grid {
              --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
              --cell-max-width: calc((var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1))) / 24);
              --row-height-scaling-factor: 0.0215;
              --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2));

              grid-template-rows: repeat(20, minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto)) !important;
              grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(24, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr) !important;
            }

            .fe-block.yellow-stroke {
              grid-area: 1/11/21/27 !important;
            }

            .fe-block.yellow-stroke .sqs-block {
              justify-content: center;
              align-items: center;
            }

            .fe-block.blue-stroke {
              grid-area: 4/11/21/27 !important;
            }

            .fe-block.blue-stroke .sqs-block {
              justify-content: center;
              align-items: center;
            }

            .fe-block.tagline {
              grid-area: 3/2/6/9 !important;
            }

            .fe-block.tagline .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.built-heading {
              grid-area: 6/2/9/17 !important;
            }

            .fe-block.built-heading .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.hero-tape {
              grid-area: 11/7/14/13 !important;
            }

            .fe-block.hero-tape .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.different-heading {
              grid-area: 9/6/12/16 !important;
            }

            .fe-block.different-heading .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.description {
              grid-area: 15/2/20/18 !important;
            }

            .fe-block.description .sqs-block {
              justify-content: center;
              align-items: center;
            }
          }
        `}} />
      </div>
    </section>
  );
};

export default Hero;
