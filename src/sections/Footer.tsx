import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';
import { navItems, personalInfo } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[rgba(34,211,238,0.18)] bg-[#080D13] py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-[rgba(34,211,238,0.12)]">
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="font-display text-xl font-bold text-[#F8FAFC] tracking-tight"
            >
              {personalInfo.name}
              <span className="text-[#22D3EE]">.</span>
            </a>
            <p className="mt-1.5 text-sm text-[#94A3B8]">
              {personalInfo.tagline}
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-sm text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Koushik Konkipudi GitHub"
              className="p-2.5 rounded-lg bg-[#0D1720] border border-[rgba(34,211,238,0.18)] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Koushik Konkipudi LinkedIn"
              className="p-2.5 rounded-lg bg-[#0D1720] border border-[rgba(34,211,238,0.18)] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE] transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p>Built with React, TypeScript, Tailwind CSS &amp; Three.js</p>
        </div>
      </div>
    </footer>
  );
}
