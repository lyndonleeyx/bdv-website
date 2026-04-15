import AnimateIn from '../ui/AnimateIn';
import { useIsMobile } from '../../hooks/useIsMobile';

const stages = [
  {
    number: '1',
    title: 'Informal',
    subtitle: 'Can you articulate the idea?',
    description:
      'Write down a testable idea. Articulate your concept clearly enough to test it. This is also where we get to know each other.',
    sketch: '/assets/images/decorative/bridge-sketch.png',
    color: '#B84332',
  },
  {
    number: '2',
    title: 'Exploration',
    subtitle: 'Is the pain real?',
    description:
      'Talk to target customers until you deeply understand their problem and can complete their sentences about it.',
    sketch: '/assets/images/decorative/junction-sketch.png',
    color: '#3D5A80',
  },
  {
    number: '3',
    title: 'Entrepreneur-in-Residence',
    subtitle: 'Will customers pay, and can you build it?',
    description:
      "Confirm customers want what you're building, will pay for it, and that there's a credible path to deliver it.",
    sketch: '/assets/images/decorative/building-sketch.png',
    color: '#2A7F62',
  },
  {
    number: '4',
    title: 'Investment',
    subtitle: 'Can you reach and acquire customers?',
    description:
      'We invest. You ship the MVP, acquire your first raving fans, and prove repeatable customer acquisition.',
    sketch: '/assets/images/decorative/jetplane-sketch.png',
    color: '#C4841D',
  },
];

const Process = () => {
  const isMobile = useIsMobile();
  const CARD_OFFSET = isMobile ? 60 : 120;
  return (
    <section
      id="process"
      style={{
        backgroundColor: 'transparent'
      }}
    >
      {/* Section header */}
      <div
        style={{
          paddingTop: 'clamp(3.5rem, 3rem + 1.5vw, 5rem)',
          paddingBottom: 'clamp(2rem, 1.5rem + 1vw, 3rem)',
          paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
        }}
      >
        <div className="max-w-[1400px] mx-auto">
          <AnimateIn>
            <p
              className="uppercase tracking-widest mb-4"
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'rgba(0,0,0,0.5)'
              }}
            >
              Process
            </p>
            <h2
              className="mb-4"
              style={{
                fontSize: 'clamp(2.5rem, 1.8rem + 2.9vw, 5rem)',
                lineHeight: 1.1,
                color: '#1a1a1a'
              }}
            >
              Four Stages to Launch
            </h2>
            <p
              className="max-w-[500px]"
              style={{
                fontSize: 'clamp(1rem, 0.85rem + 0.6vw, 1.25rem)',
                lineHeight: 1.6,
                fontWeight: 300,
                color: 'rgba(0,0,0,0.65)'
              }}
            >
              Four stages from first conversation to funded company. Each one
              designed to de-risk the next.
            </p>
          </AnimateIn>
        </div>
      </div>

      {/* Stacked cards */}
      {stages.map((stage, index) => (
        <div
          key={stage.title}
          className="sticky relative"
          style={{
            top: `${index * CARD_OFFSET}px`,
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(16px) saturate(1.4)',
            WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
            borderTop: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '1.5rem 1.5rem 0 0',
            zIndex: index + 10,
            boxShadow:
              index > 0 ? '0 -4px 20px rgba(0,0,0,0.3)' : undefined,
            marginBottom: index === stages.length - 1 ? '-1px' : undefined,
          }}
        >
          <div
            className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-6 md:gap-12 items-start"
            style={{
              padding: '1.5rem clamp(1.5rem, 1rem + 3vw, 4rem)',
            }}
          >
            {/* Left column — text */}
            <div>
              <p
                className="mb-2"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'rgba(0,0,0,0.4)',
                }}
              >
                {stage.number} —
              </p>

              <h2
                className="md:whitespace-nowrap"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  color: '#1a1a1a',
                }}
              >
                {stage.title}
              </h2>

              <p
                className="mt-2"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#1a1a1a',
                }}
              >
                {stage.subtitle}
              </p>

              <p
                className="max-w-[500px] mt-4"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'rgba(0,0,0,0.65)',
                  fontWeight: 300,
                }}
              >
                {stage.description}
              </p>

              {/* Pagination dots */}
              <div className="flex gap-2 mt-6">
                {stages.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      backgroundColor:
                        dotIndex === index
                          ? '#1a1a1a'
                          : 'rgba(0,0,0,0.2)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right column — sketch */}
            <div className="flex items-start justify-end">
              <img
                src={stage.sketch}
                alt={`${stage.title} illustration`}
                className="object-contain"
                style={{
                  maxHeight: isMobile ? '180px' : '250px',
                  width: 'auto',
                  mixBlendMode: 'multiply',
                  opacity: 0.8,
                }}
              />
            </div>
          </div>
        </div>
      ))}

    </section>
  );
};

export default Process;
