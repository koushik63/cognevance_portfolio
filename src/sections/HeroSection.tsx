import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Terminal } from 'lucide-react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { HeroFallbackVisual } from '../components/HeroFallbackVisual';
import { WebGLErrorBoundary } from '../components/WebGLErrorBoundary';
import { floatingTechLabels, personalInfo } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useWebGLSupport } from '../hooks/useWebGLSupport';

const HeroScene3D = lazy(() => import('../components/HeroScene3D'));

const labelPositions = [
  'top-6 left-2 sm:left-6',
  'top-16 right-2 sm:right-4',
  'top-1/2 -translate-y-1/2 -left-1 sm:left-2',
  'top-1/2 -translate-y-1/2 -right-1 sm:right-2',
  'bottom-14 left-4 sm:left-10',
  'bottom-8 right-4 sm:right-8',
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const webGLSupported = useWebGLSupport();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.animatedRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Hero Introduction"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Subtle architectural vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(34,211,238,0.08),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Availability Indicator */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0D1720] border border-[rgba(34,211,238,0.22)] text-xs font-medium text-[#F8FAFC]"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                {!prefersReducedMotion && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
                )}
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" />
              </span>
              <span>{personalInfo.availability}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold tracking-tight text-[#F8FAFC] leading-[1.08]">
                Hi, I&apos;m{' '}
                <span className="text-[#22D3EE]">Koushik</span>.
              </h1>

              {/* Animated Role Text */}
              <div className="mt-4 h-9 sm:h-10 flex items-center gap-2.5 text-lg sm:text-xl lg:text-2xl font-display font-medium text-[#94A3B8]">
                <Terminal className="w-5 h-5 text-[#22D3EE] shrink-0" aria-hidden="true" />
                <div className="relative overflow-hidden h-full flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={personalInfo.animatedRoles[roleIndex]}
                      initial={
                        prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -14 }
                      }
                      transition={{ duration: 0.32, ease: 'easeOut' }}
                      className="text-[#F8FAFC] whitespace-nowrap"
                    >
                      {personalInfo.animatedRoles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Tagline & Intro */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="space-y-3 max-w-xl"
            >
              <p className="text-base sm:text-lg font-medium text-[#22D3EE]/90">
                {personalInfo.tagline}
              </p>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {personalInfo.introduction}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#22D3EE] text-[#080D13] font-semibold text-sm tracking-wide hover:bg-[#06B6D4] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D13]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0D1720] text-[#F8FAFC] font-medium text-sm border border-[rgba(34,211,238,0.28)] hover:border-[#22D3EE] hover:bg-[#0D1720]/80 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D13]"
              >
                <span>Let&apos;s Connect</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: 3D Abstract Developer Avatar & Floating Labels */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 relative h-[360px] sm:h-[430px] lg:h-[500px] w-full flex items-center justify-center"
          >
            {/* Subtle frame behind 3D canvas */}
            <div
              className="absolute inset-4 sm:inset-8 rounded-2xl border border-[rgba(34,211,238,0.14)] bg-[#0D1720]/30 pointer-events-none"
              aria-hidden="true"
            />

            {/* 3D Scene with Lazy Loading & WebGL Fallback */}
            <div className="relative w-full h-full z-10">
              {webGLSupported ? (
                <WebGLErrorBoundary fallback={<HeroFallbackVisual />}>
                  <Suspense fallback={<HeroFallbackVisual />}>
                    <HeroScene3D reducedMotion={prefersReducedMotion} />
                  </Suspense>
                </WebGLErrorBoundary>
              ) : (
                <HeroFallbackVisual />
              )}
            </div>

            {/* Floating Technology Labels */}
            <div className="pointer-events-none absolute inset-0 z-20 hidden sm:block">
              {floatingTechLabels.map((label, idx) => (
                <motion.div
                  key={label}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : {
                          opacity: 1,
                          y: [0, idx % 2 === 0 ? -6 : 6, 0],
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0.3 }
                      : {
                          opacity: { duration: 0.5, delay: 0.3 + idx * 0.08 },
                          y: {
                            duration: 3.5 + idx * 0.4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          },
                        }
                  }
                  className={`absolute ${labelPositions[idx % labelPositions.length]} px-3 py-1.5 rounded-md bg-[#080D13]/90 backdrop-blur-sm border border-[rgba(34,211,238,0.25)] text-xs font-display font-medium text-[#F8FAFC] tracking-wide`}
                >
                  <span className="text-[#22D3EE] mr-1.5">//</span>
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#94A3B8] hover:text-[#22D3EE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded px-2 py-1"
      >
        <span>Scroll</span>
        <motion.span
          animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#22D3EE]" />
        </motion.span>
      </motion.a>
    </section>
  );
}
