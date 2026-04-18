import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WhaleSharkMascot() {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Create a springy rotation when user scrolls down vs up
  const smoothY = useSpring(scrollY, { damping: 20, stiffness: 100 });
  const rotateSpring = useSpring(0, { damping: 10, stiffness: 150 });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    // Determine scroll direction/speed to rotate the shark
    const unsubscribe = scrollY.on('change', (v) => {
      setIsScrolling(true);
      const prev = smoothY.get(); // this is slightly delayed
      if (v > prev) {
        rotateSpring.set(15); // swim down
      } else {
        rotateSpring.set(-15); // swim up
      }
      
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
        rotateSpring.set(0); // level out
      }, 150);
    });
    
    return () => {
      unsubscribe();
      clearTimeout(timeout);
    };
  }, [scrollY, rotateSpring, smoothY]);

  return (
    <motion.div 
      className="fixed bottom-4 right-4 md:bottom-12 md:right-12 z-50 pointer-events-none drop-shadow-2xl"
      style={{ rotate: rotateSpring }}
      animate={{
        y: isScrolling ? [0, -10, 0] : [0, -20, 0],
      }}
      transition={{
        y: {
          duration: isScrolling ? 0.5 : 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <div className="relative">
        <img 
          src="/whale.png" 
          alt="Whale Shark Mascot" 
          className="w-32 md:w-48 transition-transform duration-300 pointer-events-auto cursor-pointer hover:scale-110"
          style={{ 
            mixBlendMode: 'multiply', 
            filter: 'brightness(1.1) contrast(1.1)' 
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
        {/* Chat Bubble if you hover */}
        <div className="absolute -top-12 -left-32 bg-white text-zinc-900 px-4 py-2 rounded-2xl shadow-fun-soft font-bold text-sm opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-auto">
          "Click me to swim to the top!"
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rotate-45"></div>
        </div>
      </div>
    </motion.div>
  );
}
