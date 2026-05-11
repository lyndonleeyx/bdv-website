import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimateIn from '../ui/AnimateIn';


interface TeamMember {
  name: string;
  title: string;
  image: string | null;
  funImage: string | null;
  bio: string;
  linkedin?: string;
  imageStyle?: React.CSSProperties;
}

const leadership: TeamMember[] = [
  {
    name: 'Serge Longin',
    title: 'Co-Founder',
    image: '/assets/images/team/serge-headshot-Photoroom.png',
    funImage: null,
    bio: 'A repeat founder who bootstrapped two US startups, RevenueWell and Club Automation, to a combined exit of over $100M. Both were acquired by private equity after becoming category leaders in dental SaaS and fitness ops. Serge runs our rigorous idea validation process and brings product, GTM, finance, and operations experience to ensure our startups find their footing.',
    linkedin: 'https://www.linkedin.com/in/sergelongin/',
  },
  {
    name: 'Huey Lin',
    title: 'Co-Founder',
    image: '/assets/images/team/huey-headshot-Photoroom.png',
    funImage: null,
    bio: 'Huey brings big ideas to life and scale. Part of the original PayPal mafia, Huey was one of the first product managers at PayPal, then became the founding COO at Affirm (NASDAQ: AFRM). She later served as President of Asia at Flexport and a Venture Partner at Notable Capital (fka GGV Capital). She now serves on the boards of Hang Seng Bank, Singapore Exchange, and Nium.',
    linkedin: 'https://www.linkedin.com/in/hueyrulin/',
  },
  {
    name: 'Peter Rosberg',
    title: 'CTO',
    image: '/assets/images/team/peter-headshot-Photoroom.png',
    funImage: null,
    bio: 'Full-stack technologist who has built and scaled engineering teams at multiple high-growth startups. Peter architects the technical foundation for every studio venture.',
    linkedin: 'https://www.linkedin.com/in/peterrosberg',
  },
];

const operationsTeam: TeamMember[] = [
  {
    name: 'Lyndon Lee',
    title: 'Venture Builder',
    image: '/assets/images/team/lyndon-headshot-Photoroom.png',
    funImage: null,
    bio: 'Product-minded builder with expertise in AI-powered solutions for complex enterprise workflows.',
    linkedin: 'https://www.linkedin.com/in/lyndonleeyx/',
  },
  {
    name: 'Eric Leblanc',
    title: 'Venture Builder',
    image: '/assets/images/team/eric-headshot-Photoroom.png',
    funImage: null,
    bio: 'Experienced operator and venture builder focused on bringing innovative B2B solutions from zero to one.',
    linkedin: 'https://www.linkedin.com/in/eric--leblanc/',
  },
];

const FlipCard = ({
  member,
  onCardClick,
}: {
  member: TeamMember;
  onCardClick: (member: TeamMember) => void;
}) => {
  const handleClick = () => {
    if (member.linkedin) {
      window.open(member.linkedin, '_blank', 'noopener,noreferrer');
      return;
    }
    onCardClick(member);
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
      <div className="relative aspect-square md:aspect-[3/4] rounded-[24px] overflow-hidden bg-white">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 5%', ...member.imageStyle }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-text text-[48px]">?</span>
          </div>
        )}
      </div>

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
              <div className="bg-white aspect-[3/4] md:aspect-auto">
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
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const handleClose = useCallback(() => setSelectedMember(null), []);

  return (
    <section
      id="team"
      className="relative w-full overflow-hidden flex flex-col"
      style={{
        backgroundImage: 'url("/assets/images/decorative/team-background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/70 pointer-events-none" />

      {/* Team cards area */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto w-full"
        style={{
          paddingTop: 'clamp(3rem, 2rem + 3vw, 5rem)',
          paddingBottom: 'clamp(2rem, 1.5rem + 2vw, 4rem)',
          paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
        }}
      >
        {/* "Team" section label */}
        <p
          className="text-text uppercase tracking-widest mb-8 hidden md:block"
          style={{ fontSize: '0.875rem', fontWeight: 500 }}
        >
          Team
        </p>

        {/* Side-by-side: Leadership | Operations Team */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 md:gap-10 lg:gap-16 items-start">
          {/* Section A — Leadership */}
          <div>
            <h2
              className="text-text mb-2 md:mb-3"
              style={{
                fontSize: 'clamp(1.8rem, 1.4rem + 1.6vw, 3rem)',
                lineHeight: 1.1,
              }}
            >
              Leadership
            </h2>
            {/* Spacer to match the "BDV Opco Pte. Ltd. · Singapore" subtitle in the Operations column */}
            <div
              className="mb-6 md:mb-8"
              style={{ fontSize: '0.9rem', lineHeight: 1.4 }}
            >
              &nbsp;
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-5 lg:gap-6">
              {leadership.map((member) => (
                <FlipCard
                  key={`leadership-${member.name}`}
                  member={member}
                  onCardClick={setSelectedMember}
                />
              ))}
            </div>
          </div>

          {/* Section B — Operations Team */}
          <div>
            <h3
              className="text-text mb-2 md:mb-3"
              style={{
                fontSize: 'clamp(1.5rem, 1.2rem + 1.2vw, 2.5rem)',
                lineHeight: 1.2,
                fontWeight: 600,
              }}
            >
              Operations Team
            </h3>
            <p
              className="text-text/60 mb-6 md:mb-8"
              style={{ fontSize: '0.9rem', fontWeight: 400 }}
            >
              BDV Opco Pte. Ltd. &middot; Singapore
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-5 lg:gap-6 max-w-[66.67%] md:max-w-none">
              {operationsTeam.map((member) => (
                <FlipCard
                  key={`ops-${member.name}`}
                  member={member}
                  onCardClick={setSelectedMember}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Build With Us CTA */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto w-full"
        style={{
          paddingTop: 'clamp(3rem, 2rem + 2vw, 5rem)',
          paddingBottom: 'clamp(3rem, 2rem + 2vw, 5rem)',
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
            Build With Us
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
            <a
              href="mailto:lyndon@bdv.team"
              className="inline-flex items-center border border-[#1a1a1a]/20 rounded-full px-6 py-3 text-[14px] font-medium tracking-wide uppercase text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors"
            >
              Contact Us
            </a>
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

      {/* Footer bar */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto w-full"
        style={{
          paddingTop: 'clamp(2rem, 1.5rem + 1.5vw, 3rem)',
          paddingBottom: 'clamp(2rem, 1.5rem + 3vw, 5rem)',
          paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
        }}
      >
        <div className="flex flex-wrap items-center gap-x-2 text-[13px] text-text/50 mb-4">
          <span>&copy;{new Date().getFullYear()} BDV CoBuilder Ops, Inc.</span>
          <span className="hidden sm:inline">&middot;</span>
          <div className="flex items-center gap-x-2">
            <Link to="/disclaimer" className="hover:text-text transition-colors">Disclaimer</Link>
            <span>&middot;</span>
            <Link to="/privacy" className="hover:text-text transition-colors">Privacy</Link>
            <span>&middot;</span>
            <Link to="/terms" className="hover:text-text transition-colors">Terms</Link>
          </div>
        </div>
        <p
          className="text-text/30"
          style={{
            fontSize: '0.7rem',
            lineHeight: 1.7,
            maxWidth: '800px',
          }}
        >
          BDV Opco Pte. Ltd. (&ldquo;BDV SG&rdquo;) provides business consulting and
          venture-building services to BDV CoBuilder Ops, Inc. under a Master
          Services Agreement. BDV SG does not provide fund management,
          securities dealing, investment advisory, or corporate finance
          advisory services. BDV SG does not manage, operate, or make
          investment decisions for any fund.
        </p>
      </div>

      <TeamModal member={selectedMember} onClose={handleClose} />
    </section>
  );
};

export default Team;
