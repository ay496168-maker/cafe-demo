import FadeInSection from './FadeInSection';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Image column */}
          <FadeInSection direction="right">
            <div className="relative mb-6 sm:mb-0">
              <div className="overflow-hidden rounded-2xl aspect-[4/5] max-w-sm mx-auto lg:max-w-none">
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=960&q=80"
                  alt="Bean & Bloom Café — warm and welcoming interior"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              {/* Floating badge — tucked inside on mobile to avoid overflow */}
              <div className="absolute bottom-4 right-4 sm:-bottom-5 sm:-right-5 bg-[#B8935A] text-white rounded-2xl px-6 py-4 shadow-xl">
                <p className="font-serif text-3xl font-light leading-none">12+</p>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1 text-white/80">Years of Craft</p>
              </div>
            </div>
          </FadeInSection>

          {/* Content column */}
          <FadeInSection direction="left" delay={0.2}>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8935A] mb-5 font-medium">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E] leading-tight mb-7">
              More Than Coffee —
              <br />
              <em className="not-italic italic">A Place to Belong</em>
            </h2>
            <p className="text-[#8B7355] leading-relaxed mb-5 text-[15px]">
              Bean &amp; Bloom was born in 2012 from a simple conviction: that a great cup of coffee deserves
              equally great company. We opened our first café on Blossom Lane with four tables, a
              hand-painted chalkboard menu and a secondhand espresso machine that we still have on display.
            </p>
            <p className="text-[#8B7355] leading-relaxed mb-10 text-[15px]">
              Today we source our beans directly from family farms across Ethiopia, Colombia and Guatemala —
              building relationships that span seasons and harvests. Everything on our menu is made from
              scratch, every single day, by a team who genuinely loves what they do.
            </p>
            <a
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 text-[#B8935A] text-sm font-medium tracking-wide group"
            >
              Discover Our Menu
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
