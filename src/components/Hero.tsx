import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#00C2FF] via-[#0085FF] to-[#0A2463]">
      
      {/* Performance Optimized CSS Animations */}
      <style>{`
        @keyframes swim {
          from { transform: translate3d(-30vw, 0, 0); }
          to { transform: translate3d(130vw, 0, 0); }
        }
        @keyframes swim-reverse {
          from { transform: translate3d(130vw, 0, 0); }
          to { transform: translate3d(-30vw, 0, 0); }
        }
        @keyframes bubbleUp {
          0% { transform: translate3d(0, 110vh, 0); opacity: 0; }
          20% { opacity: 0.4; }
          80% { opacity: 0.4; }
          100% { transform: translate3d(0, -20vh, 0); opacity: 0; }
        }
        .fish-school {
          position: absolute;
          z-index: 10;
          pointer-events: none;
          opacity: 0.35;
          display: flex;
          gap: 1.5rem;
          will-change: transform;
        }
        .swim-right {
          animation: swim linear infinite;
        }
        .swim-right span {
          display: inline-block;
          transform: scaleX(-1);
        }
        .swim-left {
          animation: swim-reverse linear infinite;
        }
        .swim-left span {
          display: inline-block;
        }
        .bubble {
          position: absolute;
          z-index: 5;
          pointer-events: none;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.15);
          animation: bubbleUp linear infinite;
          will-change: transform;
        }
      `}</style>

      {/* Bidirectional Fish Schools - 4 moving right, 4 moving left */}
      <div className="fish-school swim-right" style={{ top: '10%', animationDuration: '28s', animationDelay: '0s' }}>
        <span className="text-xl">🐟</span> <span className="text-xl mt-4">🐠</span>
      </div>
      <div className="fish-school swim-left hidden md:flex" style={{ top: '20%', animationDuration: '22s', animationDelay: '10s' }}>
        <span className="text-xl">🐡</span> <span className="text-xl -mt-4">🐟</span>
      </div>
      <div className="fish-school swim-right" style={{ top: '35%', animationDuration: '35s', animationDelay: '5s' }}>
        <span className="text-xl">🐠</span> <span className="text-xl mt-2">🐟</span>
      </div>
      <div className="fish-school swim-left hidden lg:flex" style={{ top: '45%', animationDuration: '25s', animationDelay: '15s' }}>
        <span className="text-xl">🐟</span> <span className="text-xl mt-3">🐠</span>
      </div>
      <div className="fish-school swim-right" style={{ top: '55%', animationDuration: '30s', animationDelay: '3s' }}>
        <span className="text-xl">🐡</span> <span className="text-xl mt-1">🐟</span>
      </div>
      <div className="fish-school swim-left hidden md:flex" style={{ top: '65%', animationDuration: '20s', animationDelay: '12s' }}>
        <span className="text-xl">🐠</span> <span className="text-xl -mt-2">🐟</span>
      </div>
      <div className="fish-school swim-right" style={{ top: '75%', animationDuration: '40s', animationDelay: '7s' }}>
        <span className="text-xl">🐟</span> <span className="text-xl mt-4">🐡</span>
      </div>
      <div className="fish-school swim-left hidden lg:flex" style={{ top: '90%', animationDuration: '18s', animationDelay: '1s' }}>
        <span className="text-xl">🐠</span> <span className="text-xl">🐟</span>
      </div>

      {/* Doubled Bubbles - Total 12 bubbles */}
      <div className="bubble w-4 h-4" style={{ left: '5%', animationDuration: '12s', animationDelay: '0s' }}></div>
      <div className="bubble w-2 h-2" style={{ left: '15%', animationDuration: '15s', animationDelay: '4s' }}></div>
      <div className="bubble w-6 h-6" style={{ left: '25%', animationDuration: '11s', animationDelay: '2s' }}></div>
      <div className="bubble w-3 h-3" style={{ left: '35%', animationDuration: '14s', animationDelay: '7s' }}></div>
      <div className="bubble w-5 h-5" style={{ left: '45%', animationDuration: '13s', animationDelay: '1s' }}></div>
      <div className="bubble w-2 h-2" style={{ left: '55%', animationDuration: '16s', animationDelay: '5s' }}></div>
      <div className="bubble w-4 h-4" style={{ left: '65%', animationDuration: '10s', animationDelay: '3s' }}></div>
      <div className="bubble w-3 h-3" style={{ left: '72%', animationDuration: '17s', animationDelay: '8s' }}></div>
      <div className="bubble w-5 h-5" style={{ left: '80%', animationDuration: '12s', animationDelay: '0s' }}></div>
      <div className="bubble w-2 h-2" style={{ left: '88%', animationDuration: '14s', animationDelay: '6s' }}></div>
      <div className="bubble w-6 h-6" style={{ left: '94%', animationDuration: '11s', animationDelay: '2s' }}></div>
      <div className="bubble w-3 h-3" style={{ left: '98%', animationDuration: '13s', animationDelay: '4s' }}></div>

      {/* Light Rays - REMOVED blurs for performance */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-full bg-white/20 transform -skew-x-12" />
        <div className="absolute top-0 right-1/4 w-24 h-full bg-white/20 transform -rotate-12" />
      </div>

      {/* Whale Shark Silhouette in Background - Pure animation, no scroll dependency */}
      <motion.div 
        animate={{ 
          x: [-40, 40, -40],
          y: [0, 15, 0],
          rotate: [-6, -4, -6]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-1/4 left-0 w-full flex justify-center opacity-10 pointer-events-none z-0"
        style={{ willChange: 'transform' }}
      >
        <img 
          src="/whale.png" 
          alt="" 
          className="w-[110%] max-w-none brightness-0"
        />
      </motion.div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 mb-20">
        
        {/* Yellow Badge */}
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
           className="mb-8 px-8 py-3 bg-[#FFDE00] text-[#0A2463] font-black rounded-full shadow-lg flex items-center gap-2 transform -rotate-1 border-4 border-[#0A2463]"
        >
          <span className="text-xl">🌴</span>
          <span className="uppercase tracking-wider text-sm md:text-base">Welcome to the Tropics</span>
        </motion.div>

        <div className="overflow-hidden p-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1, delay: 0.2 }}
            className="text-8xl md:text-[12rem] font-display font-black text-[#0A2463] tracking-tighter uppercase"
            style={{ textShadow: '4px 4px 0px rgba(255,255,255,0.2)' }}
          >
            OSLOB
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-2">
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.9, delay: 0.4 }}
            className="text-2xl md:text-5xl text-white font-black tracking-tight"
            style={{ textShadow: '3px 3px 0 #0A2463' }}
          >
            A Fun Adventure in Cebu!
          </motion.p>
        </div>
      </div>

      {/* Bottom Stats Summary Bar - No blur, solid semi-transparent background */}
      <div className="absolute bottom-0 w-full bg-[#0A2463]/70 border-t border-white/20 py-8 md:py-12 z-30">
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
      </div>
    </section>
  );
}