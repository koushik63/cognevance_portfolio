import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 sm:py-28 border-t border-[rgba(34,211,238,0.12)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div id="contact-heading">
          <SectionHeader
            eyebrow="05 // Contact"
            title="Have an idea? Let's build it."
            subtitle="Open to interesting collaborations, learning opportunities, and conversations around full-stack development and AI/ML."
          />
        </div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          <a
            href={`mailto:${personalInfo.emailPlaceholder}`}
            className="flex items-center gap-4 p-5 rounded-xl bg-[#0D1720] border border-[rgba(34,211,238,0.18)] hover:border-[#22D3EE] transition-colors group"
          >
            <div className="p-3 rounded-lg bg-[#080D13] border border-[rgba(34,211,238,0.16)] text-[#22D3EE]">
              <Mail className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                Email (Placeholder)
              </p>
              <p className="text-sm font-medium text-[#F8FAFC] truncate group-hover:text-[#22D3EE] transition-colors mt-0.5">
                {personalInfo.emailPlaceholder}
              </p>
            </div>
          </a>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl bg-[#0D1720] border border-[rgba(34,211,238,0.18)] hover:border-[#22D3EE] transition-colors group"
          >
            <div className="p-3 rounded-lg bg-[#080D13] border border-[rgba(34,211,238,0.16)] text-[#22D3EE]">
              <GitHubIcon className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                GitHub
              </p>
              <p className="text-sm font-medium text-[#F8FAFC] truncate group-hover:text-[#22D3EE] transition-colors mt-0.5">
                github.com/koushik63
              </p>
            </div>
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl bg-[#0D1720] border border-[rgba(34,211,238,0.18)] hover:border-[#22D3EE] transition-colors group"
          >
            <div className="p-3 rounded-lg bg-[#080D13] border border-[rgba(34,211,238,0.16)] text-[#22D3EE]">
              <LinkedInIcon className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-[#94A3B8]">
                LinkedIn
              </p>
              <p className="text-sm font-medium text-[#F8FAFC] truncate group-hover:text-[#22D3EE] transition-colors mt-0.5">
                Koushik Konkipudi
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
