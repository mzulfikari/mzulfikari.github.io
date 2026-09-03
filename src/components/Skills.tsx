"use client";

import ScrollReveal from "./ScrollReveal";

const STACK = [
  {
    category: "Backend",
    items: ["Python", "Django", "DRF", "FastAPI", "REST API", "JWT", "OTP", "RBAC"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Docker Compose", "Nginx", "Gunicorn", "Linux"],
  },
  {
    category: "Distributed",
    items: ["Redis", "Celery", "Celery Beat", "Caching", "Background Jobs"],
  },
  {
    category: "Development",
    items: ["Git", "GitHub", "VS Code", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#111113]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B] mb-3">
            02 / Stack
          </p>
          <h2 className="text-display-md font-semibold mb-12">Technical Stack</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STACK.map((group, i) => (
            <ScrollReveal key={group.category} delay={(i % 3) + 1}>
              <div className="bg-[#18181B] border border-[#27272A] rounded-lg p-6 h-full hover:border-[#3F3F46] transition-colors duration-300">
                <h3 className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#52525B] mb-5">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-[#09090B] border border-[#27272A] rounded text-sm text-[#A1A1AA] font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
