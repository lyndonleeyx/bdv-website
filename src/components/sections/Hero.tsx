import AnimateIn from '../ui/AnimateIn';

const Hero = () => {

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateRows: '1fr auto',
        height: '100svh',
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/video/endless-background-smooth.mp4"
      />

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/70" />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: '150px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.85))',
        }}
      />

      {/* "DIFFERENT" + subtitle — centered vertically */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <AnimateIn>
          <h1
            className="text-text uppercase text-center w-full"
            style={{
              fontSize: '18vw',
              lineHeight: 0.85,
              letterSpacing: '-0.04em',
            }}
          >
            Different
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p
            className="text-text text-center max-w-[500px] mx-auto mt-6 md:mt-10"
            style={{
              fontSize: 'clamp(1rem, 0.8rem + 0.5vw, 1.35rem)',
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            Built Different Ventures co-builds
            <br />
            category-defining companies with founders.
            <br />
            We're your first cofounder.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Hero;
