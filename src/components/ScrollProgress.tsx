import { motion, useScroll, useSpring } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="h-full origin-left bg-[#22D3EE]"
        style={{ scaleX: prefersReducedMotion ? scrollYProgress : scaleX }}
      />
    </div>
  );
}
