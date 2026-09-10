import { motion } from 'framer-motion';
import { FEATURED_COFFEES } from '../data/content';
import FadeInSection from './FadeInSection';

function CoffeeCard({ item, index }) {
  return (
    <motion.article
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.65, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden h-52 sm:h-60 lg:h-64 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-serif text-xl text-[#2C1A0E] leading-snug">{item.name}</h3>
          <span className="text-[#B8935A] font-medium text-sm shrink-0 mt-0.5">&#8377;{item.price}</span>
        </div>
        <p className="text-[#8B7355] text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.article>
  );
}

export default function FeaturedCoffee() {
  return (
    <section className="py-16 md:py-28 bg-[#FAF6F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeInSection className="text-center mb-12 md:mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8935A] mb-4 font-medium">
            Signature Drinks
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E]">Our Favourite Cups</h2>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {FEATURED_COFFEES.map((item, i) => (
            <CoffeeCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
