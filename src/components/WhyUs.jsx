import { motion } from 'framer-motion';
import { Coffee, ChefHat, Leaf, Flame } from 'lucide-react';
import { FEATURES } from '../data/content';
import FadeInSection from './FadeInSection';

const ICON_MAP = { Coffee, ChefHat, Leaf, Flame };

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-[#2C1A0E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeInSection className="text-center mb-20">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8935A] mb-4 font-medium">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            The Bean &amp; Bloom Difference
          </h2>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {FEATURES.map((f, i) => {
            const Icon = ICON_MAP[f.icon] || Coffee;
            return (
              <motion.div
                key={i}
                className="group text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Icon ring */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#B8935A]/30 text-[#B8935A] mb-7 group-hover:border-[#B8935A]/60 transition-colors duration-300">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
