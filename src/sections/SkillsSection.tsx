import { motion } from 'framer-motion';
import { Code2, Database, Layers, Server, Wrench } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { skillCategories } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

const categoryIcons: Record<string, typeof Layers> = {
  frontend: Layers,
  programming: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export function SkillsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-20 sm:py-28 bg-[#0D1720]/35 border-t border-[rgba(34,211,238,0.12)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div id="skills-heading">
          <SectionHeader
            eyebrow="02 // Stack"
            title="Technologies & Tools"
            subtitle="Core languages, frameworks, and platforms I use to build full-stack web applications and explore intelligent systems."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="group rounded-xl bg-[#0D1720] border border-[rgba(34,211,238,0.18)] hover:border-[#22D3EE]/45 p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-[#080D13] border border-[rgba(34,211,238,0.18)] text-[#22D3EE] group-hover:border-[#22D3EE]/50 transition-colors">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#F8FAFC]">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#94A3B8] mb-5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2.5" aria-label={`${category.title} skills`}>
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3.5 py-1.5 rounded-md bg-[#080D13] border border-[rgba(34,211,238,0.18)] text-sm font-medium text-[#F8FAFC] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors duration-200 select-none"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
