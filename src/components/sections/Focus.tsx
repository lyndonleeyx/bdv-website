import AnimateIn from '../ui/AnimateIn';

const photos = [
  '/assets/images/collage/collage-pic-1.png',
  '/assets/images/collage/collage-pic-5.jpeg',
  '/assets/images/collage/collage-pic-3.jpg',
  '/assets/images/collage/collage-pic-4.jpg',
  '/assets/images/collage/collage-pic-2.png',
  '/assets/images/collage/collage-pic-6.jpeg',
];

const Focus = () => {

  return (
    <section
      id="focus"
      style={{
        paddingBlock: 'clamp(3.5rem, 3rem + 1.5vw, 5rem)',
        paddingInline: 'clamp(1.5rem, 1rem + 3vw, 4rem)',
      }}
    >
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left — text */}
        <div>
          <AnimateIn>
            <p
              className="text-text/40 uppercase tracking-widest mb-4"
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
            >
              Principle
            </p>
            <h2
              className="text-text mb-10 md:mb-14"
              style={{
                fontSize: 'clamp(2.5rem, 1.8rem + 2.9vw, 5rem)',
                lineHeight: 1.1,
              }}
            >
              We're Your First Cofounder
            </h2>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <div>
              <p
                className="text-text mb-6"
                style={{
                  fontSize: 'clamp(1.125rem, 0.9rem + 0.8vw, 1.5rem)',
                  lineHeight: 1.5,
                  fontWeight: 400,
                }}
              >
                We act like cofounders—because we are.
              </p>
              <p
                className="text-muted"
                style={{
                  fontSize: 'clamp(1rem, 0.85rem + 0.6vw, 1.25rem)',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                We roll up our sleeves across every phase of venture creation. Our
                focus: solving high-stakes, cross-border, B2B problems where AI
                can deliver true magic. Think trade compliance, corporate
                insurance brokerage, global commodities trading. Wherever you are,
                as long as you have a great idea, we're ready to get to work.
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Right — mosaic grid */}
        <AnimateIn delay={0.2}>
          <div
            className="grid grid-cols-3 grid-rows-3 gap-2"
            style={{ height: '630px' }}
          >
            <img
              src={photos[0]}
              alt=""
              className="col-span-2 w-full h-full object-cover rounded-xl"
            />
            <img
              src={photos[1]}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
            <img
              src={photos[2]}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
            <img
              src={photos[3]}
              alt=""
              className="col-span-2 w-full h-full object-cover rounded-xl"
            />
            <img
              src={photos[4]}
              alt=""
              className="col-span-2 w-full h-full object-cover rounded-xl"
            />
            <img
              src={photos[5]}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};

export default Focus;
