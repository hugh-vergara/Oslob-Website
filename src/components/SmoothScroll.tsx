import { ReactLenis } from '@studio-freight/react-lenis';

interface SmoothScrollProps {
  children: any;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
