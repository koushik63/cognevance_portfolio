import { motion } from 'framer-motion';
import { BrainCircuit, Code, GraduationCap, Layers, Rocket } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { experienceJourney } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

const typeIcons = {
  education: GraduationCap,
  frontend: Layers,
  backend: Code,
  aiml: BrainCircuit,
  projects: Rocket,
};

export function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-20 sm:py-28 bg-[#0D1720]/35 border-t border-[rgba(34,211,238,0.12)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div id="experience-heading">
          <SectionHeader
            eyebrow="04 // Journey"
            title="Learning & Development Timeline"
            subtitle="My academic foundation in AI/ML and continuous progression across full-stack engineering and hands-on building."
          />
        </div>

        <div className="relative max-w-4xl">
          {/* Vertical Timeline Spine */}
          <div
            className="absolute left-5 sm:left-6 top-2 bottom-2 w-[1px] bg-[rgba(34,211,238,0.22)]"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experienceJourney.map((item, index) => {
              const Icon = typeIcons[item.type];
              return (
                <motion.div
                  key={item.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative pl-14 sm:pl-16"
                >
                  {/* Timeline Node */}
                  <div
                    className="absolute left-0 top-1 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#080D13] border border-[rgba(34,211,238,0.3)] flex items-center justify-center text-[#22D3EE]"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card */}
                  <div className="rounded-xl bg-[#0D1720] border border-[rgba(34,211,238,0.18)] hover:border-[#22D3EE]/40 p-6 transition-colors duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE]">
                        {item.period}
                      </span>
                      <span className="text-xs text-[#94A3B8]">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F8FAFC] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2.5 py-1 rounded bg-[#080D13] border border-[rgba(34,211,238,0.16)] text-xs text-[#F8FAFC]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
