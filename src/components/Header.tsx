import { motion } from 'framer-motion';

export default function Header() {
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
      <div className="bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-fun-soft border-2 border-oslob-blue/10 flex gap-6 md:gap-10 pointer-events-auto overflow-x-auto max-w-[90vw] no-scrollbar">
        {['History', 'Attractions', 'Culture', 'Plan', 'FAQ', 'Contact'].map((item) => (
          <button 
            key={item}
            onClick={() => handleScroll(item.toLowerCase())}
            className="font-bold text-oslob-blue hover:text-oslob-pink transition-colors uppercase tracking-widest text-[10px] md:text-xs whitespace-nowrap"
          >
            {item}
          </button>
        ))}
      </div>
    </motion.header>
  );
}
