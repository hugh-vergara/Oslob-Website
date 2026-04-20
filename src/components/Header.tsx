import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isLightBg, setIsLightBg] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section, [data-header-theme]');
    
    const checkTheme = () => {
      // Check the point exactly where the header sits (around 50px from top)
      const elements = document.elementsFromPoint(window.innerWidth / 2, 50);
      const section = elements.find(el => el.hasAttribute('data-header-theme') || el.tagName === 'SECTION');
      
      if (section) {
        const theme = section.getAttribute('data-header-theme');
        setIsLightBg(theme === 'dark');
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-header-theme');
          setIsLightBg(theme === 'dark');
        }
      });
    }, {
      rootMargin: '-50px 0px -90% 0px',
      threshold: 0
    });

    sections.forEach(s => observer.observe(s));
    
    // Initial and scroll-based check for precision
    checkTheme();
    window.addEventListener('scroll', checkTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', checkTheme);
    };
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0.4, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none"
    >
      <div className={`
        backdrop-blur-2xl px-10 py-4 rounded-full border shadow-xl flex gap-8 md:gap-12 pointer-events-auto overflow-x-auto max-w-[95vw] no-scrollbar transition-all duration-500
        ${isLightBg 
          ? 'bg-white/90 border-oslob-blue/20 shadow-oslob-blue/10' 
          : 'bg-oslob-blue/20 border-white/20 shadow-black/10'}
      `}>
        {['History', 'Attractions', 'Culture', 'Plan', 'FAQ', 'Contact'].map((item) => (
          <button 
            key={item}
            onClick={() => handleScroll(item.toLowerCase())}
            className={`
              font-bold transition-all duration-300 uppercase tracking-[0.2em] text-[10px] md:text-sm whitespace-nowrap
              ${isLightBg ? 'text-oslob-blue' : 'text-white'}
              hover:text-oslob-yellow
            `}
            style={{ 
              textShadow: isLightBg 
                ? '0 0 8px rgba(255,255,255,1)' // Strong white glow to protect blue text over dark background details
                : '0 2px 4px rgba(0,0,0,0.3)'    // Dark shadow to protect white text on light backgrounds
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </motion.header>
  );
}
