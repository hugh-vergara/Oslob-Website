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
      <div className="bg-white/10 backdrop-blur-xl px-10 py-4 rounded-full border border-white/20 shadow-xl flex gap-8 md:gap-12 pointer-events-auto overflow-x-auto max-w-[95vw] no-scrollbar">
        {['History', 'Attractions', 'Culture', 'Plan', 'FAQ', 'Contact'].map((item) => (
          <button 
            key={item}
            onClick={() => handleScroll(item.toLowerCase())}
            className="font-bold text-white hover:text-oslob-yellow transition-colors uppercase tracking-[0.2em] text-[10px] md:text-sm whitespace-nowrap"
          >
            {item}
          </button>
        ))}
      </div>
    </motion.header>
  );
}
