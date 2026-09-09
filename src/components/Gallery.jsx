import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/content';
import FadeInSection from './FadeInSection';

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-5 right-5 z-10 text-white/70 hover:text-white transition-colors p-2"
      >
        <X size={24} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors p-2 z-10"
      >
        <ChevronLeft size={32} />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
        className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors p-2 z-10"
      >
        <ChevronRight size={32} />
      </button>

      {/* Counter */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-widest">
        {current + 1} / {images.length}
      </p>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      <section id="gallery" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8935A] mb-4 font-medium">
              A Glimpse Inside
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E]">Life at the Café</h2>
          </FadeInSection>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.button
                key={img.id}
                className="break-inside-avoid w-full overflow-hidden rounded-xl group relative block cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8935A]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] block"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#2C1A0E]/0 group-hover:bg-[#2C1A0E]/20 transition-colors duration-400 rounded-xl" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={GALLERY_IMAGES}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
