import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'
      }`}
    >
      <div
        className={`inline-flex items-center gap-2.5 text-xs font-medium tracking-[0.2em] uppercase text-[#22D3EE] mb-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="h-[1px] w-6 bg-[#22D3EE]/60" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#F8FAFC] leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
