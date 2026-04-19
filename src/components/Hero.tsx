import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Helper for randomizing bubble/fish properties
const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const yStats = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const whaleScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const whaleXScroll = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  // Generate some bubbles
  const bubbleCount = 20;
  const bubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
    id: i,
    size: randomRange(5, 15),
    left: randomRange(0, 100),
    delay: randomRange(0, 10),
    duration: randomRange(5, 10),
  }));

  // Generate some schools of fish
  const fishSchools = [
    { id: 1, top: '20%', duration: 15, delay: 0, scale: 0.8 },
    { id: 2, top: '45%', duration: 10, delay: 5, scale: 1.2 },
    { id: 3, top: '70%', duration: 18, delay: 2, scale: 0.6 },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#00C2FF] via-[#0085FF] to-[#0A2463]"
    >
      {/* Underwater Rays / Light Streaks */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-full bg-white/30 blur-3xl transform -skew-x-12 animate-pulse" />
        <div className="absolute top-0 left-1/2 w-48 h-full bg-white/20 blur-3xl transform rotate-12" />
        <div className="absolute top-0 right-1/4 w-24 h-full bg-white/40 blur-3xl transform -rotate-12 animate-pulse duration-[4000ms]" />
      </div>

      {/* Bubbles Animation */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            initial={{ y: '110vh', opacity: 0 }}
            animate={{ 
              y: '-20vh', 
              opacity: [0, 0.5, 0],
              x: [0, 20, -20, 0] 
            }}
            transition={{ 
              duration: b.duration, 
              repeat: Infinity, 
              delay: b.delay,
              ease: "linear"
            }}
            style={{ 
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
            }}
            className="absolute rounded-full bg-white/40 border border-white/20"
          />
        ))}
      </div>

      {/* Swimming Schools of Fish */}
      {fishSchools.map((s) => (
        <motion.div
          key={s.id}
          initial={{ x: '-20vw' }}
          animate={{ x: '120vw' }}
          transition={{ 
            duration: s.duration, 
            repeat: Infinity, 
            delay: s.delay,
            ease: "linear"
          }}
          style={{ top: s.top, scale: s.scale }}
          className="absolute z-10 opacity-40 flex gap-4 pointer-events-none"
        >
          <span className="text-xl">🐟</span>
          <span className="text-xl mt-4">🐠</span>
          <span className="text-xl -mt-4">🐟</span>
          <span className="text-xl">🐡</span>
        </motion.div>
      ))}

      {/* Gliding Whale Shark Animation */}
      <motion.div 
        style={{ scale: whaleScale, x: whaleXScroll }}
        className="absolute bottom-1/4 left-0 w-full flex justify-center opacity-10 pointer-events-none z-0"
      >
        <motion.div
           animate={{ 
             x: [-50, 50, -50],
             y: [0, 20, 0],
             rotate: [-6, -4, -6]
           }}
           transition={{ 
             duration: 20, 
             repeat: Infinity, 
             ease: "easeInOut" 
           }}
        >
          <img 
            src="/whale.png" 
            alt="Whale Shark Silhouette" 
            className="w-[120%] max-w-none brightness-0"
          />
        </motion.div>
      </motion.div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 mb-20">
        
        {/* Yellow Bubbly Badge */}
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ type: "spring", bounce: 0.5, duration: 1 }}
           className="mb-8 px-8 py-3 bg-[#FFDE00] text-[#0A2463] font-black rounded-full shadow-fun flex items-center gap-2 transform -rotate-1 border-4 border-[#0A2463]"
        >
          <span className="text-xl">🌴</span>
          <span className="uppercase tracking-wider text-sm md:text-base">Welcome to the Tropics</span>
        </motion.div>

        <div className="overflow-hidden p-4">
          <motion.h1
            initial={{ y: '100%', rotate: 5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.2, delay: 0.2 }}
            className="text-8xl md:text-[12rem] font-display font-black text-[#0A2463] tracking-tighter uppercase"
            style={{ y: yText, textShadow: '6px 6px 0px rgba(255,255,255,0.2)' }}
          >
            OSLOB
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-2">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.2, duration: 1, delay: 0.4 }}
            className="text-2xl md:text-5xl text-white font-black tracking-tight drop-shadow-lg"
            style={{ textShadow: '3px 3px 0 #0A2463' }}
          >
            A Fun Adventure in Cebu!
          </motion.p>
        </div>
      </div>

      {/* Bottom Stats Summary Bar (Glassmorphism) */}
      <motion.div 
        style={{ y: yStats }}
        className="absolute bottom-0 w-full bg-white/10 backdrop-blur-2xl border-t border-white/20 py-8 md:py-12 z-30"
      >
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🦈</span>
              <span className="text-2xl md:text-4xl font-black text-[#FFDE00]">#1</span>
            </div>
            <p className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-90">Whale Shark Spot</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-4xl font-black text-[#FFDE00] mb-1">4hrs</span>
            <p className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-90">From Cebu City</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-4xl font-black text-[#FFDE00] mb-1">500+</span>
            <p className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-90">Visitors Daily</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">⭐</span>
              <span className="text-2xl md:text-4xl font-black text-[#FFDE00]">4.9</span>
            </div>
            <p className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs opacity-90">Traveler Rating</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
