import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BlurOrb } from '../ui/BlurOrb';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useIsNarrow } from '../../hooks/useIsNarrow';

/* ── Word-by-word reveal helper ── */
const WordReveal = ({
  words,
  baseDelay,
  wordStagger,
  style,
}: {
  words: string[];
  baseDelay: number;
  wordStagger: number;
  style?: React.CSSProperties;
}) => (
  <>
    {words.map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 42 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: baseDelay + i * wordStagger,
          duration: 0.64,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ display: 'inline-block', ...style }}
      >
        {word}
        {i < words.length - 1 && '\u00A0'}
      </motion.span>
    ))}
  </>
);

const GHOST_COLOR = 'rgba(255,255,255,0.25)';

const Hero = () => {
  const isMobile = useIsMobile();
  const isNarrow = useIsNarrow();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isShrunken, setIsShrunken] = useState(false);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const [headlineWidth, setHeadlineWidth] = useState(0);

  useEffect(() => {
    if (isMobile) return;
    const handleMouse = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [isMobile]);

  // Collapse struck text wrapper after shrink animation completes
  useEffect(() => {
    const timer = setTimeout(() => setIsShrunken(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  // Track main headline width so paragraph can match it
  useEffect(() => {
    if (!headlineRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setHeadlineWidth(entries[0].contentRect.width);
    });
    observer.observe(headlineRef.current);
    return () => observer.disconnect();
  }, []);

  const headlineFontSize = 'clamp(4.25rem, 8.5vw, 9.5rem)';

  return (
    <motion.section
      id="hero-light"
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url("/assets/images/decorative/hero-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)', zIndex: 0 }}
      />

      <div
        className="hero-content"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: isNarrow ? '100px 24px 80px' : '100px 56px 100px 120px',
        }}
      >
        {/* Floating blur orbs */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BlurOrb
            color="rgb(170, 199, 223)"
            blur={isMobile ? 100 : 300}
            size={isMobile ? 300 : 700}
            position={{ top: '-10%', right: '5%' }}
            opacity={0.15}
          />
        </motion.div>

        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <BlurOrb
            color="rgb(180, 170, 210)"
            blur={isMobile ? 80 : 250}
            size={isMobile ? 250 : 600}
            position={{ bottom: '10%', left: '5%' }}
            opacity={0.1}
          />
        </motion.div>

        {/* Cursor-follow radial gradient */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle 240px at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(255, 255, 255, 0.18) 0%,
              rgba(255, 255, 255, 0.08) 40%,
              transparent 100%
            )`,
            transition: 'background 0.15s ease-out',
            zIndex: 1,
            mixBlendMode: 'screen',
          }}
        />

        {/* ═══ HEADLINE GROUP ═══ */}
        <div style={{ position: 'relative', zIndex: 10 }}>

          {/* STRUCK HEADLINE WRAPPER —
              In flow so the text is visible on screen during the initial animation.
              After shrink completes, height collapses to just fit the tiny label,
              pulling the main headline up into position. transformOrigin 'top left'
              keeps the shrunk text pinned at the top-left (no visual jump). */}
          <div
            style={{
              overflow: 'visible',
              height: isShrunken
                ? `calc(2 * 0.315 * ${headlineFontSize})`
                : 'auto',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: [null, 1, 1, 0.3],
                color: ['#FFFFFF', '#FFFFFF', '#FFFFFF', GHOST_COLOR],
              }}
              transition={{
                opacity: { duration: 0.8 },
                y: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
                scale: {
                  times: [0, 0.45, 0.65, 1],
                  duration: 3.2,
                  ease: 'easeInOut',
                },
                color: {
                  times: [0, 0.45, 0.65, 1],
                  duration: 3.2,
                },
              }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: headlineFontSize,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                margin: 0,
                transformOrigin: 'top left',
              }}
            >
              <motion.span
                initial={{ textDecorationColor: 'rgba(255,255,255,0)' }}
                animate={{
                  textDecorationColor: [
                    'rgba(255,255,255,0)',
                    'rgba(255,255,255,0)',
                    '#FFFFFF',
                    '#FFFFFF',
                    GHOST_COLOR,
                  ],
                }}
                transition={{
                  textDecorationColor: {
                    duration: 3.3,
                    times: [0, 0.545, 0.667, 0.788, 1],
                  },
                }}
                style={{
                  textDecoration: 'line-through',
                  textDecorationThickness: '3px',
                }}
              >
                Building can be lonely.
              </motion.span>
            </motion.h1>
          </div>

          {/* MAIN HEADLINE + TAGLINE — stacked vertically */}
          <div>
            <motion.h1
              ref={headlineRef}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: headlineFontSize,
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#FFFFFF',
                margin: 0,
                textShadow:
                  '0 1px 0 rgba(0,0,0,0.4), 0 2px 0 rgba(0,0,0,0.35), 0 3px 0 rgba(0,0,0,0.3), 0 4px 0 rgba(0,0,0,0.25), 0 5px 0 rgba(0,0,0,0.2), 0 6px 12px rgba(0,0,0,0.4), 0 12px 40px rgba(0,0,0,0.3)',
                WebkitTextStroke: '0.5px rgba(255,255,255,0.15)',
                width: 'fit-content',
              }}
            >
              <span style={{ display: 'block' }}>
                <WordReveal
                  words={['BDV', 'is']}
                  baseDelay={3.3}
                  wordStagger={0.09}
                />
              </span>
              <span style={{ display: 'block' }}>
                <WordReveal
                  words={['Your', 'First']}
                  baseDelay={3.48}
                  wordStagger={0.09}
                />
              </span>
              <span style={{ display: 'block' }}>
                <WordReveal
                  words={['Cofounder']}
                  baseDelay={3.66}
                  wordStagger={0.09}
                />
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: [0, 1.3, 1] }}
                  transition={{ delay: 4.2, duration: 0.3, ease: 'easeOut' }}
                  style={{ display: 'inline-block' }}
                >
                  .
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 4.4,
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              style={{
                fontSize: '19px',
                lineHeight: 1.55,
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.92)',
                maxWidth: headlineWidth > 0 ? `${headlineWidth}px` : undefined,
                margin: 0,
                marginTop: '24px',
                letterSpacing: '0.005em',
                textAlign: 'left',
              }}
            >
              We co-build AI-native B2B companies
              in regulated, cross-border industries. We bring the conviction,
              capital, and team to back you before anyone else will.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
