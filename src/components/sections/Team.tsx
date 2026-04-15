import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

interface TeamMember {
  name: string;
  title: string;
  image: string | null;
  funImage: string | null;
  bio: string;
  imageStyle?: React.CSSProperties;
}

const team: TeamMember[] = [
  {
    name: 'Huey Lin',
    title: 'Cofounder',
    image: '/assets/images/team/huey-headshot-Photoroom.png',
    funImage: null,
    bio: 'Huey brings big ideas to life and scale. Part of the original PayPal mafia, Huey was one of the first product managers at PayPal, then became the founding COO at Affirm (NASDAQ: AFRM). She later served as President of Asia at Flexport and a Venture Partner at Notable Capital (fka GGV Capital). She now serves on the boards of Hang Seng Bank, Singapore Exchange, and Nium.',
  },
  {
    name: 'Serge Longin',
    title: 'Cofounder',
    image: '/assets/images/team/serge-headshot-Photoroom.png',
    funImage: null,
    bio: 'A repeat founder who bootstrapped two US startups, RevenueWell and Club Automation, to a combined exit of over $100M. Both were acquired by private equity after becoming category leaders in dental SaaS and fitness ops. Serge runs our rigorous idea validation process and brings product, GTM, finance, and operations experience to ensure our startups find their footing.',
  },
  {
    name: 'Peter Rosberg',
    title: 'Studio CTO',
    image: '/assets/images/team/peter-headshot-Photoroom.png',
    funImage: null,
    bio: 'Full-stack technologist who has built and scaled engineering teams at multiple high-growth startups. Peter architects the technical foundation for every studio venture.',
  },
  {
    name: 'Lyndon Lee',
    title: 'CoBuilder',
    image: '/assets/images/team/lyndon-headshot-Photoroom.png',
    funImage: null,
    bio: 'Product-minded builder with expertise in AI-powered solutions for complex enterprise workflows.',
  },
  {
    name: 'Eric Le Blanc',
    title: 'CoBuilder',
    image: '/assets/images/team/eric-headshot-Photoroom.png',
    funImage: null,
    bio: 'Experienced operator and venture builder focused on bringing innovative B2B solutions from zero to one.',
  },
];

const FlipCard = ({
  member,
  onCardClick,
  isMobile,
}: {
  member: TeamMember;
  onCardClick: (member: TeamMember) => void;
  isMobile: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (isMobile) {
      if (isFlipped) {
        onCardClick(member); // Second tap opens modal
      } else {
        setIsFlipped(true); // First tap flips card
      }
    } else {
      onCardClick(member); // Desktop: click always opens modal
    }
  };

  return (
    <div
      className="group cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Image with 3D flip */}
      <div className="perspective-1000">
        <div
          className="relative aspect-square md:aspect-[3/4] flip-card-inner"
          style={isMobile && isFlipped ? { transform: 'rotateY(180deg)' } : undefined}
        >
          {/* Front face — formal headshot */}
          <div className="absolute inset-0 backface-hidden rounded-[24px] overflow-hidden bg-[#e8e3dc]">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center -8%', ...member.imageStyle }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-text text-[48px]">?</span>
              </div>
            )}
          </div>

          {/* Back face — fun photo (placeholder) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-[24px] overflow-hidden bg-[#e8e3dc]">
            {member.funImage ? (
              <img
                src={member.funImage}
                alt={`${member.name} — casual`}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center -8%' }}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-coral/20 to-lavender/30">
                <span className="text-[64px] mb-2">&#128513;</span>
                <span className="text-text text-sm font-medium">
                  Fun photo coming soon
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info — outside card */}
      <div className="mt-2 md:mt-4 text-center">
        <p
          className="text-text"
          style={{ fontSize: '1.05rem', fontWeight: 600 }}
        >
          {member.name}
        </p>
        <p className="text-text hidden md:block" style={{ fontSize: '0.9rem' }}>
          {member.title}
        </p>
      </div>
    </div>
  );
};

const TeamModal = ({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!member) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [member, onClose]);

  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [member]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-[60] bg-black/40 flex items-center justify-center"
          style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-cream rounded-[24px] max-w-2xl w-[90vw] mx-4 relative shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors text-text hover:text-text"
              aria-label="Close"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="grid md:grid-cols-[2fr_3fr]">
              {/* Left — photo */}
              <div className="bg-[#e8e3dc] aspect-[3/4] md:aspect-auto">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={member.imageStyle}
                  />
                ) : (
                  <div className="w-full h-full min-h-[240px] flex items-center justify-center">
                    <span className="text-text text-[48px]">?</span>
                  </div>
                )}
              </div>

              {/* Right — text */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <p
                  className="text-text uppercase tracking-widest mb-3"
                  style={{ fontSize: '0.75rem', fontWeight: 500 }}
                >
                  {member.title}
                </p>
                <h3
                  className="text-text mb-5"
                  style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.2 }}
                >
                  {member.name}
                </h3>

                {/* Divider */}
                <div
                  style={{
                    width: '40px',
                    height: '1px',
                    backgroundColor: '#DDDAD5',
                    marginBottom: '1.25rem',
                  }}
                />

                <p
                  className="text-text"
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {member.bio}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Team = () => {
  const isMobile = useIsMobile();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const handleClose = useCallback(() => setSelectedMember(null), []);

  return (
    <section
      id="team"
      className="relative h-full w-full overflow-hidden flex flex-col justify-center py-6 md:py-14 lg:py-20"
      style={{
        paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
        backgroundImage: 'url("/assets/images/decorative/team-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* White overlay: light wash across the section so text remains legible against the building */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/70 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        {/* Intro */}
        <div className="mb-4 md:mb-8">
          <p
            className="text-text uppercase tracking-widest mb-4 hidden md:block"
            style={{ fontSize: '0.875rem', fontWeight: 500 }}
          >
            Team
          </p>
          <h2
            className="text-text"
            style={{
              fontSize: 'clamp(2.5rem, 1.8rem + 2.9vw, 5rem)',
              lineHeight: 1.1,
            }}
          >
            Your Founding Team
          </h2>
          <p
            className="text-text mt-3 hidden md:block"
            style={{
              fontSize: 'clamp(1rem, 0.85rem + 0.6vw, 1.25rem)',
              fontWeight: 300,
            }}
          >
            Builders, operators & investors.
          </p>
        </div>

        {/* All 5 cards in a single row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-6">
          {team.map((member) => (
            <FlipCard
              key={member.name}
              member={member}
              onCardClick={setSelectedMember}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <TeamModal member={selectedMember} onClose={handleClose} />
    </section>
  );
};

export default Team;
