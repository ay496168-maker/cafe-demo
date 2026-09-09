import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, CAFE_CONFIG } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkColor = scrolled ? 'text-[#2C1A0E] hover:text-[#B8935A]' : 'text-white/85 hover:text-white';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#FAF6F1]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[70px]">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex flex-col leading-none shrink-0"
        >
          <span className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-[#2C1A0E]' : 'text-white'
          }`}>
            {CAFE_CONFIG.name}
          </span>
          <span className={`text-[9px] tracking-[0.3em] uppercase transition-colors duration-300 ${
            scrolled ? 'text-[#B8935A]' : 'text-[#C8A882]'
          }`}>
            {CAFE_CONFIG.tagline}
          </span>
        </a>

        {/* Desktop — centered links */}
        <ul className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[13px] tracking-wide transition-colors duration-300 ${linkColor}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Reserve CTA — desktop */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={`hidden lg:inline-flex items-center px-5 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300
              ${scrolled
                ? 'bg-[#2C1A0E] text-white hover:bg-[#B8935A]'
                : 'bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:border-white/60'
              }`}
          >
            Reserve a Table
          </a>

          {/* Tablet — md only */}
          <ul className="hidden md:flex lg:hidden items-center gap-5">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[13px] tracking-wide transition-colors duration-300 ${linkColor}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}
            className={`hidden md:inline-flex lg:hidden items-center px-4 py-2 rounded-full text-[13px] font-medium tracking-wide transition-all duration-300
              ${scrolled ? 'bg-[#2C1A0E] text-white hover:bg-[#B8935A]' : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'}`}>
            Reserve
          </a>

          {/* Hamburger — mobile */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 ${
              scrolled ? 'text-[#2C1A0E]' : 'text-white'
            }`}
          >
            <span className={`block h-0.5 w-6 bg-current origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden bg-[#FAF6F1] border-t border-[#EAE0D5] overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-5 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-[#2C1A0E] text-base py-2.5 border-b border-[#F0E8DE] last:border-0 hover:text-[#B8935A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block w-full text-center py-3 bg-[#2C1A0E] text-white rounded-full text-sm font-medium tracking-wide hover:bg-[#B8935A] transition-all duration-300"
                >
                  Reserve a Table
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
