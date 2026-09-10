import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/content';
import FadeInSection from './FadeInSection';

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#B8935A]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeInSection className="text-center mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8935A] mb-4 font-medium">
            Guest Reviews
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E]">
            Loved by Our Guests
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.id}
              className="bg-white rounded-2xl p-8 shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            >
              <Stars />
              <blockquote className="flex-1 text-[#5C4A38] leading-relaxed mt-5 mb-7 text-sm">
                "{t.text}"
              </blockquote>
              <footer className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="font-medium text-[#2C1A0E] text-sm">{t.name}</p>
                  <p className="text-[#B8935A] text-xs">{t.role}</p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
