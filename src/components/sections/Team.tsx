import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden mb-5"
      data-section-theme="light"
      data-section-height="large"
    >
      {/* Section Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/src/assets/images/decorative/website background.webp"
          alt=""
          width="612"
          height="746"
          className="w-full h-full object-cover"
          style={{
            objectPosition: '50% 33.602%'
          }}
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-white"
          style={{ opacity: 0.15 }}
        />
      </div>

      {/* Content Wrapper - padding applied via CSS section-height--large class */}
      <div className="content-wrapper">
        {/* Fluid Engine Grid */}
        <div
          className="fluid-engine-grid"
          style={{
            '--grid-gutter': 'calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px)',
            '--cell-max-width': 'calc((var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1))) / 8)',
            display: 'grid',
            position: 'relative',
            gridTemplateRows: 'repeat(36, minmax(24px, auto))',
            gridTemplateColumns: 'minmax(var(--grid-gutter), 1fr) repeat(8, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr)',
            rowGap: '11px',
            columnGap: '11px',
            overflowX: 'clip'
          } as React.CSSProperties}
        >
          {/* Background Scribble/Vector - Z-Index 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.237288 }}
            className="fe-block background-scribble hidden md:block"
            style={{
              gridArea: '3/4/15/11',
              zIndex: 1
            }}
          >
            <div className="sqs-block image-block sqs-block-image sqs-stretched" style={{ height: '100%' }}>
              <div className="sqs-block-content" style={{ height: '100%', width: '100%' }}>
                <div className="image-block-outer-wrapper" style={{ height: '100%' }}>
                  <div
                    className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                    style={{ height: '100%' }}
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
                          src="/src/assets/images/decorative/team-scribble.webp"
                          alt=""
                          width="771"
                          height="500"
                          style={{
                            display: 'block',
                            objectFit: 'contain',
                            objectPosition: '50% 50%',
                            height: '100%',
                            width: '100%'
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* "We are Builders" Heading - Z-Index 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.254237 }}
            className="fe-block heading"
            style={{
              gridArea: '1/2/5/10',
              zIndex: 3,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <h1
                className="text-[4.5rem] md:text-[6.2rem] font-bold text-center md:text-center"
                style={{
                  lineHeight: '1.1em',
                  whiteSpace: 'pre-wrap'
                }}
              >
                We are <span className="text-bdv-yellow">Builders</span>
              </h1>
            </div>
          </motion.div>

          {/* Huey's Photo - Z-Index 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.271186 }}
            className="fe-block huey-photo"
            style={{
              gridArea: '5/2/15/7',
              zIndex: 2
            }}
          >
            <div className="sqs-block image-block sqs-block-image sqs-stretched" style={{ height: '100%' }}>
              <div className="sqs-block-content" style={{ height: '100%', width: '100%' }}>
                <div className="image-block-outer-wrapper" style={{ height: '100%' }}>
                  <div
                    className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                    style={{ height: '100%' }}
                  >
                    <div
                      className="fluid-image-container sqs-image-content"
                      style={{
                        overflow: 'hidden',
                        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <div className="content-fill" style={{ height: '100%' }}>
                        <img
                          src="/src/assets/images/team/huey_headshot.webp"
                          alt="Huey Lin"
                          width="1280"
                          height="853"
                          style={{
                            display: 'block',
                            objectFit: 'cover',
                            objectPosition: '50% 50%',
                            height: '100%',
                            width: '100%'
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Huey's Name - Z-Index 5 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.305085 }}
            className="fe-block huey-name"
            style={{
              gridArea: '15/2/16/5',
              zIndex: 5,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <h3
                className="text-[1.8rem] font-bold text-bdv-blue"
                style={{
                  lineHeight: '1.1em',
                  whiteSpace: 'pre-wrap'
                }}
              >
                Huey Lin
              </h3>
            </div>
          </motion.div>

          {/* Huey's Title - Z-Index 6 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.288136 }}
            className="fe-block huey-title"
            style={{
              gridArea: '15/5/16/10',
              zIndex: 6,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-end justify-end md:items-start md:justify-start">
              <h4
                className="text-[1.5rem] font-bold text-gray-900"
                style={{
                  lineHeight: '1.1em',
                  whiteSpace: 'pre-wrap'
                }}
              >
                <strong>Cofounder &amp; GP</strong>
              </h4>
            </div>
          </motion.div>

          {/* Huey's Bio - Z-Index 8 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.322034 }}
            className="fe-block huey-bio"
            style={{
              gridArea: '16/2/22/10',
              zIndex: 10,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <p
                className="text-[18px] text-gray-900"
                style={{
                  lineHeight: '1.3em',
                  whiteSpace: 'pre-wrap'
                }}
              >
                Huey brings big ideas to life and scale. Part of the original PayPal mafia, Huey was one of the first product managers at PayPal, then became the founding COO at Affirm (NASDAQ: AFRM). She later served as President of Asia at Flexport and a Venture Partner at Notable Capital (fka GGV Capital). She now serves on the boards of Hang Seng Bank, Singapore Exchange, and Nium.
              </p>
            </div>
          </motion.div>

          {/* Serge's Photo - Z-Index 4 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.338983 }}
            className="fe-block serge-photo"
            style={{
              gridArea: '22/5/29/10',
              zIndex: 4
            }}
          >
            <div className="sqs-block image-block sqs-block-image sqs-stretched" style={{ height: '100%' }}>
              <div className="sqs-block-content" style={{ height: '100%', width: '100%' }}>
                <div className="image-block-outer-wrapper" style={{ height: '100%' }}>
                  <div
                    className="fluid-image-animation-wrapper sqs-image sqs-block-alignment-wrapper"
                    style={{ height: '100%' }}
                  >
                    <div
                      className="fluid-image-container sqs-image-content"
                      style={{
                        overflow: 'hidden',
                        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                        position: 'relative',
                        width: '100%',
                        height: '100%'
                      }}
                    >
                      <div className="content-fill" style={{ height: '100%' }}>
                        <img
                          src="/src/assets/images/team/serge_headshot.webp"
                          alt="Serge Longin"
                          width="1000"
                          height="852"
                          style={{
                            display: 'block',
                            objectFit: 'cover',
                            objectPosition: '50% 50%',
                            height: '100%',
                            width: '100%'
                          }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Serge's Title - Z-Index 9 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.389831 }}
            className="fe-block serge-title"
            style={{
              gridArea: '29/2/30/6',
              zIndex: 9,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-end justify-end md:items-start md:justify-start">
              <h4
                className="text-[1.5rem] font-bold text-gray-900"
                style={{
                  lineHeight: '1.1em',
                  whiteSpace: 'pre-wrap'
                }}
              >
                <strong>Cofounder &amp; GP</strong>
              </h4>
            </div>
          </motion.div>

          {/* Serge's Name - Z-Index 8 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.372881 }}
            className="fe-block serge-name"
            style={{
              gridArea: '29/6/31/10',
              zIndex: 8,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <h3
                className="text-[1.8rem] font-bold text-bdv-blue"
                style={{
                  lineHeight: '1.1em',
                  whiteSpace: 'pre-wrap'
                }}
              >
                Serge Longin
              </h3>
            </div>
          </motion.div>

          {/* Serge's Bio - Z-Index 7 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.355932 }}
            className="fe-block serge-bio"
            style={{
              gridArea: '30/2/36/10',
              zIndex: 7,
              mixBlendMode: 'normal'
            }}
          >
            <div className="sqs-block flex items-start justify-start">
              <p
                className="text-[18px] text-gray-900"
                style={{
                  lineHeight: '1.3em',
                  whiteSpace: 'pre-wrap'
                }}
              >
                A repeat founder who bootstrapped two US startups—RevenueWell and Club Automation—to a combined exit of over $100M. Both were acquired by private equity after becoming category leaders in dental SaaS and fitness ops. Serge runs our rigorous idea validation process and brings product, GTM, finance, and operations experience to ensure our startups find their footing.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Desktop Grid Overrides */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 768px) {
            .fluid-engine-grid {
              --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
              --cell-max-width: calc((var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1))) / 24);
              --row-height-scaling-factor: 0.0215;
              --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2));

              grid-template-rows: repeat(38, minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto)) !important;
              grid-template-columns: minmax(var(--grid-gutter), 1fr) repeat(24, minmax(0, var(--cell-max-width))) minmax(var(--grid-gutter), 1fr) !important;
            }

            .fe-block.background-scribble {
              grid-area: 1/8/32/27 !important;
            }

            .fe-block.background-scribble .sqs-block {
              justify-content: center;
              align-items: center;
            }

            .fe-block.heading {
              grid-area: 1/9/7/19 !important;
            }

            .fe-block.heading .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.huey-photo {
              grid-area: 6/5/24/15 !important;
            }

            .fe-block.huey-photo .sqs-block {
              justify-content: center;
              align-items: center;
            }

            .fe-block.huey-name {
              grid-area: 24/5/26/11 !important;
            }

            .fe-block.huey-name .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.huey-title {
              grid-area: 25/5/26/12 !important;
            }

            .fe-block.huey-title .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.huey-bio {
              grid-area: 26/5/35/13 !important;
              z-index: 8 !important;
            }

            .fe-block.huey-bio .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.serge-photo {
              grid-area: 12/13/30/23 !important;
            }

            .fe-block.serge-photo .sqs-block {
              justify-content: center;
              align-items: center;
            }

            .fe-block.serge-name {
              grid-area: 30/13/32/19 !important;
              z-index: 6 !important;
            }

            .fe-block.serge-name .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.serge-title {
              grid-area: 31/13/32/20 !important;
              z-index: 7 !important;
            }

            .fe-block.serge-title .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }

            .fe-block.serge-bio {
              grid-area: 32/13/38/23 !important;
            }

            .fe-block.serge-bio .sqs-block {
              justify-content: flex-start;
              align-items: flex-start;
            }
          }
        `}} />
      </div>
    </section>
  );
};

export default Team;
