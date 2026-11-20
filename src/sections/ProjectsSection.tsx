import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Info, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ProjectIllustration } from '../components/ProjectIllustration';
import { SectionHeader } from '../components/SectionHeader';
import { TiltCard } from '../components/TiltCard';
import type { ProjectItem } from '../data/portfolioData';
import { projectsData } from '../data/portfolioData';
import { useReducedMotion } from '../hooks/useReducedMotion';

export function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-20 sm:py-28 border-t border-[rgba(34,211,238,0.12)]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div id="projects-heading">
          <SectionHeader
            eyebrow="03 // Selected Work"
            title="Featured Projects"
            subtitle="Interactive applications and platform concepts built while exploring full-stack engineering and applied AI."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <TiltCard
                maxTilt={5}
                className="w-full rounded-2xl bg-[#0D1720] border border-[rgba(34,211,238,0.18)] hover:border-[#22D3EE]/50 overflow-hidden flex flex-col justify-between transition-colors duration-300"
              >
                <div>
                  {/* Custom Illustration */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[rgba(34,211,238,0.14)] bg-[#080D13]">
                    <ProjectIllustration
                      type={project.illustration}
                      title={project.title}
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#080D13]/90 border border-[rgba(34,211,238,0.25)] text-[11px] font-medium tracking-wider uppercase text-[#22D3EE]">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-[#F8FAFC] mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <ul
                      className="flex flex-wrap gap-2 mb-6"
                      aria-label={`${project.title} technology stack`}
                    >
                      {project.techStack.map((tech) => (
                        <li
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#080D13] border border-[rgba(34,211,238,0.16)] text-xs font-medium text-[#94A3B8]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#22D3EE] text-[#080D13] text-sm font-semibold hover:bg-[#06B6D4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#22D3EE] text-[#080D13] text-sm font-semibold hover:bg-[#06B6D4] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#080D13] border border-[rgba(34,211,238,0.22)] text-sm font-medium text-[#F8FAFC] hover:border-[#22D3EE] hover:text-[#22D3EE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                    >
                      <FolderGit2 className="w-4 h-4" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`${project.title} repository placeholder`}
                      title="Repository link configurable"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#080D13] border border-[rgba(34,211,238,0.18)] text-sm font-medium text-[#94A3B8] hover:border-[#22D3EE]/50 hover:text-[#F8FAFC] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                    >
                      <FolderGit2 className="w-4 h-4" aria-hidden="true" />
                      <span>GitHub</span>
                    </button>
                  )}
                </div>
              </TiltCard>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Overview / Placeholder Link Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080D13]/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-[#0D1720] border border-[rgba(34,211,238,0.28)] overflow-hidden"
            >
              <div className="relative aspect-[16/9] w-full bg-[#080D13] border-b border-[rgba(34,211,238,0.16)]">
                <ProjectIllustration
                  type={selectedProject.illustration}
                  title={selectedProject.title}
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute top-3 right-3 p-2 rounded-lg bg-[#080D13]/90 border border-[rgba(34,211,238,0.25)] text-[#F8FAFC] hover:text-[#22D3EE] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#22D3EE]">
                    {selectedProject.category}
                  </span>
                  <h3
                    id="modal-project-title"
                    className="font-display text-2xl font-semibold text-[#F8FAFC] mt-1"
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-sm text-[#94A3B8] leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#080D13] border border-[rgba(34,211,238,0.18)] text-xs text-[#F8FAFC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#080D13] border border-[rgba(34,211,238,0.2)] text-xs text-[#94A3B8]">
                  <Info className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    {selectedProject.statusNote}. Add <code className="text-[#22D3EE]">liveUrl</code> or{' '}
                    <code className="text-[#22D3EE]">githubUrl</code> when ready to publish.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
