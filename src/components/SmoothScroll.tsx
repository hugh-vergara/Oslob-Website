interface SmoothScrollProps {
  children: any;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  // Disabled ReactLenis for maximum native performance
  return (
    <>
      {children}
    </>
  );
}
