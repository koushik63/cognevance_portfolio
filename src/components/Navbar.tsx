import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navItems, personalInfo } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useScrollProgress } from '../hooks/useScrollProgress';

export function Navbar() {
  const { isScrolled, activeSection } = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080D13]/85 backdrop-blur-md border-b border-[rgba(34,211,238,0.18)] py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between"
      >
        {/* Custom Logo: K. */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#home');
          }}
          className="group inline-flex items-center gap-1.5 font-display text-2xl font-bold tracking-tight text-[#F8FAFC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] rounded-md px-1"
          aria-label="Koushik Konkipudi Home"
        >
          <span>{personalInfo.logoText.replace('.', '')}</span>
          <span className="text-[#22D3EE] transition-transform duration-300 group-hover:scale-125">
            .
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] ${
                    isActive
                      ? 'text-[#22D3EE]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#22D3EE] rounded-full"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#contact');
            }}
            className="px-4 py-2 text-xs font-medium tracking-wider uppercase rounded-md border border-[rgba(34,211,238,0.3)] text-[#22D3EE] bg-[#0D1720]/70 hover:bg-[#22D3EE]/10 hover:border-[#22D3EE] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
          >
            Let&apos;s Connect
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden p-2 rounded-md border border-[rgba(34,211,238,0.18)] bg-[#0D1720]/80 text-[#F8FAFC] hover:border-[#22D3EE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#080D13]/98 backdrop-blur-xl border-t border-[rgba(34,211,238,0.18)] px-6 py-8 flex flex-col justify-between z-40"
          >
            <ul className="space-y-2">
              {navItems.map((item) => {
                const id = item.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(item.href);
                      }}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium border transition-colors ${
                        isActive
                          ? 'bg-[#0D1720] border-[rgba(34,211,238,0.35)] text-[#22D3EE]'
                          : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0D1720]/50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-mono text-[#22D3EE]/60">
                        0{navItems.indexOf(item) + 1}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-6 border-t border-[rgba(34,211,238,0.18)]">
              <p className="text-xs uppercase tracking-widest text-[#94A3B8] mb-3">
                {personalInfo.availability}
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="block w-full text-center py-3 rounded-lg bg-[#22D3EE] text-[#080D13] font-semibold text-sm hover:bg-[#06B6D4] transition-colors"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
