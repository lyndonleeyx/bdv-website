import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'built:\n   different';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowCursor(false), 500); // Hide cursor after 0.5s
      }
    }, 100); // 100ms per character

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        paddingTop: '15vh',
        paddingBottom: '2vh'
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
            overflowX: 'visible'
          } as React.CSSProperties}
        >
          {/* Yellow Stroke - Z-Index 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -20, 0]
            }}
            transition={{
              opacity: { duration: 0.65, delay: 0.101695 },
              y: { duration: 40, repeat: Infinity, ease: "easeInOut" }
            }}
            className="fe-block yellow-stroke md:block"
            style={{
              zIndex: 1
            }}
          >
            <div className="sqs-block image-block sqs-block-image sqs-stretched">
              <div className="sqs-block-content" style={{ width: '100%' }}>
                <div className="image-block-outer-wrapper">
                  <div
                    className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                    style={{
                      transitionTimingFunction: 'ease',
                      transitionDuration: '0.65s',
                      transitionDelay: '0.101695s',
                      animationDuration: '0.65s'
                    }}
                  >
                    <div
                      className="fluid-image-container sqs-image-content"
                      style={{
                        overflow: 'visible',
                        position: 'relative',
                        width: '200%',
                        marginLeft: '-50%',
                        marginTop: '-50%'
                      }}
                    >
                      <div className="content-fit">
                        <img
                          src="/src/assets/images/decorative/blue-yellow-stroke.png"
                          alt=""
                          width="2248"
                          height="2172"
                          style={{
                            display: 'block',
                            objectFit: 'contain',
                            objectPosition: '50% 50%',
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
              gridArea: '2/2/4/10',
              zIndex: 3,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <p
                className="text-[1.3rem] text-gray-700"
                style={{
                  lineHeight: '1.3em',
                  whiteSpace: 'normal'
                }}
              >
                We're here to build—with you
              </p>
            </div>
          </motion.div>

          {/* "built: different" Heading - Z-Index 4 */}
          <div
            className="fe-block combined-heading"
            style={{
              gridArea: '5/2/9/10',
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
                {displayText}
                {showCursor && <span className="typing-cursor">|</span>}
              </h1>
            </div>
          </div>

          {/* Hero Tape - Z-Index 5 */}
          <div
            className="fe-block hero-tape hidden md:flex"
            style={{
              gridArea: '10/2/11/8',
              zIndex: 5,
              marginTop: '-4rem'
            }}
          >
            <div className="sqs-block flex items-start justify-center">
              <div
                className="fluid-image-container"
                style={{
                  overflow: 'hidden',
                  maskImage: '-webkit-radial-gradient(center, white, black)',
                  WebkitMaskImage: '-webkit-radial-gradient(center, white, black)',
                  position: 'relative',
                  width: '100%',
                  maxWidth: '250px',
                  height: '100%',
                  transform: 'scale(0.8)'
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
                    objectPosition: '50% 50%',
                    width: '100%',
                    height: 'auto',
                    opacity: 0.8
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Description - Z-Index 7 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.20339 }}
            className="fe-block description"
            style={{
              gridArea: '11/2/14/10',
              zIndex: 7
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <div style={{ borderRadius: '30px', maxWidth: '560px' }}>
                <p
                  className="text-[1.26rem] text-gray-900"
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
          /* Mobile: Tighter line-height for headings */
          #hero h1 {
            line-height: 1.05em !important;
          }

          #hero .fluid-engine-grid {
            grid-template-rows: repeat(20, minmax(24px, auto));
            grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(8, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr);
          }

          /* Disable animations for users who prefer reduced motion */
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }

          .typing-cursor {
            animation: blink 1s infinite;
            margin-left: 2px;
          }

          @media (prefers-reduced-motion: reduce) {
            #hero * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }

          @media (min-width: 768px) {
            /* Desktop: Restore normal line-height */
            #hero h1 {
              line-height: 1.1em !important;
            }

            #hero .fluid-engine-grid {
              --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
              --cell-max-width: calc((var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1))) / 24);
              --row-height-scaling-factor: 0.0215;
              --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2));

              grid-template-rows: repeat(20, minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto)) !important;
              grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(24, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr) !important;
            }

            .fe-block.yellow-stroke {
              grid-area: 1/1/20/13 !important;
              transform: translateX(-15%) translateY(-10%) scale(2.5);
            }

            .fe-block.yellow-stroke .sqs-block {
              justify-content: center;
              align-items: flex-start;
            }

            .fe-block.yellow-stroke img {
              opacity: 1;
              filter: saturate(1.4) contrast(1.15);
            }

            .fe-block.tagline {
              grid-area: 2/2/4/12 !important;
            }

            .fe-block.tagline .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.combined-heading {
              grid-area: 5/14/9/26 !important;
            }

            .fe-block.combined-heading .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.hero-tape {
              grid-area: 10/17/11/25 !important;
              margin-top: -6rem !important;
            }

            .fe-block.hero-tape .sqs-block {
              justify-content: center;
              align-items: flex-start;
            }

            .fe-block.description {
              grid-area: 11/14/14/24 !important;
            }

            .fe-block.description .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }
          }
        `}} />
      </div>
    </section>
  );
};

export default Hero;
