import { useEffect, useState } from 'react';

interface ScrollState {
  progress: number;
  isScrolled: boolean;
  activeSection: string;
}

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export function useScrollProgress(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    progress: 0,
    isScrolled: false,
    activeSection: 'home',
  });

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      const isScrolled = scrollTop > 32;

      let activeSection = 'home';
      const offset = window.innerHeight * 0.35;

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            activeSection = id;
          }
        }
      }

      setState({ progress, isScrolled, activeSection });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
}
