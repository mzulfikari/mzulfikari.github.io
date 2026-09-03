"use client";

import ScrollReveal from "./ScrollReveal";

const PROJECTS = [
  {
    name: "Blog Django",
    description: "A full-featured blog platform built with Django.",
    tech: ["Python", "Django"],
    url: "https://github.com/mzulfikari?tab=repositories",
    status: "Complete",
  },
  {
    name: "REST API Django",
    description: "RESTful API service using Django REST Framework.",
    tech: ["Python", "DRF"],
    url: "https://github.com/mzulfikari?tab=repositories",
    status: "Complete",
  },
  {
    name: "Lumira Django",
    description: "Django-based web application with custom business logic.",
    tech: ["Python", "Django"],
    url: "https://github.com/mzulfikari?tab=repositories",
    status: "Active",
  },
  {
    name: "Goemart Shop",
    description: "E-commerce platform with product management and cart system.",
    tech: ["Python", "Django", "E-commerce"],
    url: "https://github.com/mzulfikari?tab=repositories",
    status: "Active",
  },
  {
    name: "Maktabkhooneh Blog",
    description: "Blog application for an online learning platform.",
    tech: ["Python", "Django"],
    url: "https://github.com/mzulfikari?tab=repositories",
    status: "Complete",
  },
  {
    name: "Dynamic Plugin Framework",
    description: "Extensible plugin architecture for modular Django applications.",
    tech: ["Python", "Architecture"],
    url: "https://github.com/mzulfikari?tab=repositories",
    status: "Experimental",
  },
  {
    name: "Word Analytics",
    description: "Text analysis tool for word frequency and statistics.",
    tech: ["JavaScript"],
    url: "https://github.com/mzulfikari?tab=repositories",
    status: "Complete",
  },
  {
    name: "Comment System",
    description: "Modular comment system with nested replies and moderation.",
    tech: ["JavaScript"],
    url: "https://github.com/mzulfikari?tab=repositories",
    status: "Complete",
  },
];

const STATUS_COLORS: Record<string, string> = {
  Active: "text-[#22C55E] bg-[#22C55E]/10",
  Complete: "text-[#A1A1AA] bg-[#A1A1AA]/10",
  Experimental: "text-[#EAB308] bg-[#EAB308]/10",
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B] mb-3">
            04 / Work
          </p>
          <h2 className="text-display-md font-semibold mb-4">Projects</h2>
          <p className="text-[#71717A] mb-12 max-w-xl">
            Selected repositories and engineering work.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.name} delay={Math.min((i % 2) + 1, 4)}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#111113] border border-[#27272A] rounded-lg p-6 hover:border-[#3F3F46] transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#52525B]">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="text-sm font-semibold text-[#F4F4F5] group-hover:text-[#22C55E] transition-colors duration-200">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-medium tracking-wide px-2 py-0.5 rounded ${
                      STATUS_COLORS[project.status] || STATUS_COLORS.Complete
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-[#71717A] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-[#52525B] bg-[#09090B] border border-[#27272A]/50 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
