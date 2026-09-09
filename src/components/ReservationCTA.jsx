import { motion } from 'framer-motion';
import FadeInSection from './FadeInSection';

export default function ReservationCTA() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background with slow scale */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 6, ease: 'easeOut' }}
      >
        <img
          src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&q=80"
          alt="Café ambience at Bean & Bloom"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2C1A0E]/72" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <FadeInSection>
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#C8A882] mb-5 font-medium">
            We're Ready For You
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-tight mb-10">
            Your Table
            <br />
            <em className="not-italic italic text-[#C8A882]">Is Waiting.</em>
          </h2>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-10 py-4 bg-[#B8935A] text-white rounded-full text-sm font-medium tracking-wide
              hover:bg-[#A07B48] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
          >
            Reserve Your Table
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}
