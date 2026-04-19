import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Mouse positions - raw motion values for zero latency
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 15 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="relative flex items-center justify-center w-12 h-12"
      >
        <img
          src="/whale.png"
          alt="Whale Shark Cursor"
          className="w-full h-full object-contain pointer-events-none"
          style={{ 
            willChange: 'transform'
          }}
        />
      </motion.div>
    </motion.div>
  );
}
