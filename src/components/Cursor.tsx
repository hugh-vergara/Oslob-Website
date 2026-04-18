import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Mouse positions
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring settings for buttery smooth delay (inertia effect)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is clickable or requires interaction
      const isClickable =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;

      setIsHovering(isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 15 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative flex items-center justify-center w-12 h-12"
      >
        {/* Original Whale Shark Cursor Image */}
        <img
          src="/whale.png"
          alt="Whale Shark Cursor"
          className="w-full h-full object-contain pointer-events-none"
          style={{ 
            mixBlendMode: 'multiply', 
            filter: 'brightness(1.1) contrast(1.1)' 
          }}
        />
      </motion.div>
    </motion.div>
  );
}
