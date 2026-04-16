import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BlurOrb } from '../ui/BlurOrb';
import { useIsMobile } from '../../hooks/useIsMobile';

const Hero = () => {
  const isMobile = useIsMobile();
  // Maven11-style cursor-follow gradient
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (isMobile) return; // Skip mouse tracking on mobile
    const handleMouse = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [isMobile]);

  return (
    <motion.section
      id="hero-light"
      className="relative overflow-hidden"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 'clamp(2rem, 4vw, 4rem)',
        paddingTop: 'clamp(6rem, 8vw, 10rem)',
        backgroundImage: 'url("/assets/images/decorative/hero-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
      }}
    >
        {/* Dark overlay for better text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            zIndex: 0,
          }}
        />

        {/* Wrap all content for fade-out animation */}
        <div className="hero-content">
          {/* Floating blur orbs */}
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
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
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
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

          {/* HUGE Maven11-style cursor-follow radial gradient */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(
                circle 800px at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(170, 199, 223, 0.2) 0%,
                rgba(180, 170, 210, 0.12) 25%,
                rgba(230, 180, 200, 0.08) 50%,
                transparent 100%
              )`,
              transition: 'background 0.15s ease-out',
              zIndex: 1,
              mixBlendMode: 'screen',
            }}
          />

          {/* Content container */}
          <div className="relative z-10 w-full mx-auto text-center px-4">
            {/* LIQUID TEXT ENTRANCE - "Built Different" */}
            <h1
              className="uppercase"
              style={{
                fontSize: 'clamp(6rem, 18vw, 16rem)',
                lineHeight: 0.85,
                letterSpacing: '-0.03em',
                fontWeight: 700,
                marginBottom: 'clamp(2rem, 3vw, 3rem)',
                width: '100%',
                color: '#FFFFFF',
                textShadow: '0 2px 30px rgba(0, 0, 0, 0.3), 0 0 60px rgba(170, 199, 223, 0.2)',
              }}
            >
              {['Built', 'Different'].map((word, i) => (
                <motion.span
                  key={i}
                  style={{ display: 'block' }}
                  initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0.8,
                    filter: isMobile ? 'none' : 'blur(20px)'
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)'
                  }}
                  transition={{
                    delay: i * 0.2,
                    duration: 1.5,
                    ease: [0.34, 1.56, 0.64, 1], // Elastic easing with overshoot
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* FLOWING DESCRIPTION - slides from left with blur */}
            <motion.p
              className="max-w-[800px] mx-auto"
              initial={{
                opacity: 0,
                y: 40,
                filter: isMobile ? 'none' : 'blur(15px)'
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: 'blur(0px)'
              }}
              transition={{
                delay: 0.5,
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              style={{
                fontSize: 'clamp(1.25rem, 1rem + 0.5vw, 1.75rem)',
                lineHeight: 1.6,
                fontWeight: 300,
                color: '#FFFFFF',
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.4)',
              }}
            >
              Built Different Ventures co-builds category-defining companies
              with founders. We're your first cofounder.
            </motion.p>
          </div>
        </div>
      </motion.section>
  );
};

export default Hero;
