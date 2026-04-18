import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Fun, bouncy parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-oslob-cyan rounded-b-[4rem] md:rounded-b-[8rem] border-b-8 border-oslob-blue/10"
    >
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-full opacity-30"
      >
        {/* Fun wavy background pattern or sun rays */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent animate-spin-slow duration-[30000ms]" />
      </motion.div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
        
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ type: "spring", bounce: 0.5, duration: 1 }}
           className="mb-6 px-6 py-2 bg-oslob-yellow text-oslob-blue font-bold rounded-full shadow-fun transform -rotate-3 border-4 border-oslob-blue"
        >
          Welcome to the Tropics
        </motion.div>

        <div className="overflow-hidden p-4">
          <motion.h1
            initial={{ y: '100%', rotate: 5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2, delay: 0.2 }}
            className="text-7xl md:text-9xl font-display font-black text-oslob-blue tracking-tighter uppercase drop-shadow-md"
            style={{ y: yText, textShadow: '4px 4px 0 #FFF' }}
          >
            OSLOB
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-4">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.2, duration: 1, delay: 0.4 }}
            className="text-2xl md:text-4xl text-white font-bold tracking-wide"
            style={{ textShadow: '2px 2px 0 #0A2463' }}
          >
            A Fun Adventure in Cebu!
          </motion.p>
        </div>
        
      </div>
      
      {/* Decorative Wave at the bottom */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-oslob-sand fill-current">
          <path d="M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,197.3C672,181,768,171,864,181.3C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
