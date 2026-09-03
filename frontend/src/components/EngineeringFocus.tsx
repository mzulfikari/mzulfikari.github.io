"use client";

import ScrollReveal from "./ScrollReveal";

const FOCUS = [
  {
    title: "Backend Engineering",
    description: "Designing maintainable backend systems using Python and Django.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
      </svg>
    ),
    code: "views.py::create_reservation()",
  },
  {
    title: "API Engineering",
    description: "Building structured, secure and scalable REST APIs.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    code: "GET /api/v1/reservations/",
  },
  {
    title: "System Design",
    description: "Thinking about architecture, scalability, modularity and system boundaries.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
    code: "nginx → gunicorn → django → pg",
  },
  {
    title: "Security",
    description: "Authentication, authorization, JWT, OTP, rate limiting and secure backend workflows.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
      </svg>
    ),
    code: "JWT.verify(token, secret)",
  },
  {
    title: "Infrastructure",
    description: "Dockerized environments, Redis, Celery, Nginx and production-oriented deployment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    code: "docker compose up -d",
  },
];

export default function EngineeringFocus() {
  return (
    <section id="engineering" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B] mb-3">
            03 / Focus
          </p>
          <h2 className="text-display-md font-semibold mb-4">
            What I Care About
          </h2>
          <p className="text-[#71717A] mb-12 max-w-xl">
            Areas I focus on when building software systems.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {FOCUS.map((item, i) => (
            <ScrollReveal key={item.title} delay={Math.min(i + 1, 4)}>
              <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 bg-[#111113] border border-[#27272A] rounded-lg hover:border-[#3F3F46] transition-all duration-300">
                {/* Icon + Title */}
                <div className="flex items-center gap-4 md:w-56 shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#22C55E] group-hover:border-[#22C55E]/30 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-[#F4F4F5]">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-[#71717A] flex-1">
                  {item.description}
                </p>

                {/* Code Snippet */}
                <div className="hidden lg:block font-mono text-xs text-[#52525B] bg-[#09090B] px-3 py-1.5 rounded border border-[#27272A]/50 shrink-0">
                  {item.code}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
