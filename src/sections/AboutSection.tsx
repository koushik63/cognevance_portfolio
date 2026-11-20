import { motion } from 'framer-motion';
import { Compass, Cpu, GraduationCap, Sparkles } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { TiltCard } from '../components/TiltCard';
import { aboutCards, personalInfo } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

const iconMap = {
  compass: Compass,
  cpu: Cpu,
  sparkles: Sparkles,
};

export function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 sm:py-28 border-t border-[rgba(34,211,238,0.12)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div id="about-heading">
          <SectionHeader
            eyebrow="01 // Profile"
            title="A Little About Me"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Bio Text */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {personalInfo.aboutParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-[#94A3B8] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-3">
              <div className="inline-flex items-start gap-3 p-4 rounded-xl bg-[#0D1720] border border-[rgba(34,211,238,0.18)]">
                <GraduationCap className="w-5 h-5 text-[#22D3EE] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[#22D3EE]">
                    Education
                  </p>
                  <p className="text-sm text-[#F8FAFC] mt-0.5">
                    {personalInfo.education}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Three 3D Tilt Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {aboutCards.map((card, index) => {
              const Icon = iconMap[card.icon];
              return (
                <motion.div
                  key={card.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <TiltCard
                    maxTilt={7}
                    className="h-full rounded-xl bg-[#0D1720] border border-[rgba(34,211,238,0.18)] hover:border-[#22D3EE]/50 p-6 transition-colors duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-2.5 rounded-lg bg-[#080D13] border border-[rgba(34,211,238,0.18)] text-[#22D3EE]">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <span className="text-[11px] font-mono tracking-wider text-[#94A3B8]">
                          {card.tag}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold text-[#F8FAFC] mb-2.5">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div
                      className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#22D3EE]/40 to-transparent"
                      aria-hidden="true"
                    />
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
