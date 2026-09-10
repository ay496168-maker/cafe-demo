import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_CATEGORIES } from '../data/content';
import FadeInSection from './FadeInSection';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const active = MENU_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="menu" className="py-16 md:py-28 bg-[#FAF6F1]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <FadeInSection className="text-center mb-12">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8935A] mb-4 font-medium">
            What We Serve
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E]">Our Menu</h2>
        </FadeInSection>

        {/* Category tabs */}
        <FadeInSection delay={0.1} className="flex flex-wrap justify-center gap-2.5 mb-14">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#2C1A0E] text-white shadow-sm'
                  : 'border border-[#D4C5B0] text-[#8B7355] hover:border-[#B8935A] hover:text-[#B8935A] bg-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </FadeInSection>

        {/* Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="space-y-2"
          >
            {active?.items.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start justify-between gap-6 py-5 px-6 bg-white rounded-xl hover:bg-[#FEFCF9] transition-colors duration-200 group"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-[17px] text-[#2C1A0E] mb-1 group-hover:text-[#B8935A] transition-colors duration-200">
                    {item.name}
                  </h3>
                  <p className="text-[#8B7355] text-sm leading-relaxed">{item.description}</p>
                </div>
                {/* Price with decorative dots */}
                <div className="flex items-center gap-3 shrink-0 mt-0.5">
                  <span className="hidden sm:block flex-1 border-b border-dotted border-[#D4C5B0] w-12" aria-hidden="true" />
                  <span className="text-[#B8935A] font-medium text-sm whitespace-nowrap">&#8377;{item.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
