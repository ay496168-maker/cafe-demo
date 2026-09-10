import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { CAFE_CONFIG } from '../data/content';

export default function FloatingMapButton() {
  if (!CAFE_CONFIG.googleMapsUrl) return null;

  return (
    <motion.a
      href={CAFE_CONFIG.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open in Google Maps"
      className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-[#2C1A0E] text-[#B8935A] rounded-full shadow-lg flex items-center justify-center hover:bg-[#B8935A] hover:text-white transition-colors duration-300 group border-[1.5px] border-[#B8935A] outline-none focus:outline-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.4, type: 'spring', stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MapPin size={24} strokeWidth={2} />
      
      {/* Tooltip */}
      <span className="absolute right-[70px] bg-white text-[#2C1A0E] text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
        Find Us on Map
      </span>
    </motion.a>
  );
}

