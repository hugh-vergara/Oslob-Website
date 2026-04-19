import { motion } from 'framer-motion';

export default function WhaleSharkMascot() {
  return (
    <motion.div 
      className="fixed bottom-4 right-4 md:bottom-12 md:right-12 z-50 pointer-events-none drop-shadow-2xl"
      style={{ 
        translateZ: 0,
        backfaceVisibility: 'hidden'
      }}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="relative">
        <motion.img 
          src="/whale.png" 
          alt="Whale Shark Mascot" 
          className="w-32 md:w-48 transition-transform duration-500 pointer-events-auto cursor-pointer"
          style={{ 
            willChange: 'transform'
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
        />
        
        {/* Chat Bubble if you hover */}
        <div className="absolute -top-12 -left-32 bg-white text-zinc-900 px-4 py-2 rounded-2xl shadow-lg border border-zinc-100 font-bold text-sm opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-auto">
          "Click me to swim to the top!"
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rotate-45 border-r border-b border-zinc-100"></div>
        </div>
      </div>
    </motion.div>
  );
}
