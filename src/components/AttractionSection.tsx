import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../utils';

interface AttractionProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
  color?: 'pink' | 'blue' | 'yellow' | 'green';
}

export default function AttractionSection({ title, description, imageUrl, reverse = false, color = 'blue' }: AttractionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const colorClasses = {
    pink: "bg-oslob-pink text-white border-oslob-blue",
    blue: "bg-oslob-cyan text-oslob-blue border-oslob-blue",
    yellow: "bg-oslob-yellow text-oslob-blue border-oslob-blue",
    green: "bg-oslob-green text-white border-oslob-blue",
  };

  const badgeColor = colorClasses[color];

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[70vh] flex items-center py-20 overflow-hidden bg-oslob-sand"
    >
      <div className={cn(
        "container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-20",
        reverse ? "md:flex-row-reverse" : ""
      )}>
        
        {/* Image Container with Fun Bouncy effect */}
        <div className="w-full md:w-1/2 relative group">
          {/* Decorative Blob Behind Image */}
          <motion.div 
            className={cn("absolute -inset-4 md:-inset-8 rounded-[4rem] z-0 opacity-50 rotate-6", badgeColor)}
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1, rotate: reverse ? -6 : 6 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            viewport={{ once: true }}
          />

          <motion.div 
            className="w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-3xl relative z-10 border-4 border-oslob-blue shadow-fun bg-white"
            style={{ rotate: rotateImg }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.img 
              style={{ y: imageY }}
              src={imageUrl} 
              alt={title}
              className="w-[120%] h-[120%] absolute top-[-10%] left-[-10%] object-cover block"
            />
          </motion.div>
        </div>

        {/* Text Container */}
        <div className="w-full md:w-1/2 flex flex-col justify-center relative z-20">
          <motion.div
             initial={{ scale: 0, rotate: -10 }}
             whileInView={{ scale: 1, rotate: 0 }}
             transition={{ type: "spring", bounce: 0.6, delay: 0.1 }}
             viewport={{ once: true }}
             className={cn("inline-block px-4 py-1 font-bold uppercase tracking-wider text-sm rounded-full mb-6 self-start border-2 shadow-fun-soft transform -rotate-2", badgeColor)}
          >
            Must Visit
          </motion.div>

          <div className="overflow-hidden mb-4">
             <motion.h2 
               initial={{ y: '100%' }}
               whileInView={{ y: 0 }}
               transition={{ type: "spring", bounce: 0.2, duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
               className="text-5xl md:text-7xl font-display font-black tracking-tight text-oslob-blue mb-2"
               style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
             >
               {title}
             </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-zinc-700 font-medium leading-relaxed max-w-lg bg-white p-6 rounded-2xl shadow-fun-soft border-2 border-oslob-blue/10"
          >
            {description}
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ type: "spring", bounce: 0.5, delay: 0.6 }}
             viewport={{ once: true }}
             className="mt-8 self-start"
          >
             <button className={cn(
                "px-8 py-3 rounded-full font-bold uppercase tracking-wide border-2 hover:-translate-y-1 hover:shadow-fun transition-all duration-200", 
                badgeColor
             )}>
               Let's Go!
             </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
