import { motion } from 'framer-motion';

const stagger = {
  container: { hidden: {}, visible: { transition: { staggerChildren: 0.18 } } },
  item: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  },
};

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — slow scale on mount */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      >
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=85"
          alt="Bean & Bloom Café — warm interior ambience"
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
        variants={stagger.container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={stagger.item}
          className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-[#C8A882] mb-7 font-medium"
        >
          Specialty Coffee&nbsp;&nbsp;•&nbsp;&nbsp;Fresh Pastries&nbsp;&nbsp;•&nbsp;&nbsp;Good Company
        </motion.p>

        <motion.h1
          variants={stagger.item}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light leading-[1.1] mb-7"
        >
          Crafted Coffee.
          <br />
          <em className="not-italic italic text-[#C8A882]">Beautiful Moments.</em>
        </motion.h1>

        <motion.p
          variants={stagger.item}
          className="text-sm md:text-base text-white/70 max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Specialty coffee, fresh pastries and warm conversations —
          <br className="hidden sm:block" /> made with care in the heart of the city.
        </motion.p>

        <motion.div
          variants={stagger.item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('#menu')}
            className="px-9 py-3.5 bg-[#B8935A] text-white rounded-full text-sm font-medium tracking-wide
              hover:bg-[#A07B48] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore Our Menu
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-9 py-3.5 border border-white/50 text-white rounded-full text-sm font-medium tracking-wide
              hover:bg-white/10 hover:border-white/80 transition-all duration-300"
          >
            Reserve a Table
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
