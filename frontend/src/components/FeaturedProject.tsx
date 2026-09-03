"use client";

import ScrollReveal from "./ScrollReveal";

const TECH = ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Celery", "JWT", "OTP", "Docker"];

export default function FeaturedProject() {
  return (
    <section className="section-padding bg-[#111113]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#22C55E] mb-3">
            Featured
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className="space-y-6">
            <ScrollReveal delay={1}>
              <h2 className="text-display-lg font-bold">
                Salon Management
                <br />
                System
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="text-[#A1A1AA] text-lg leading-relaxed">
                A real-world reservation and management platform designed with
                a focus on clean architecture, authentication, business logic
                and scalability.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="flex flex-wrap gap-2">
                {TECH.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-[#18181B] border border-[#27272A] rounded text-sm text-[#A1A1AA] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <a
                href="https://github.com/mzulfikari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#22C55E] hover:text-[#16A34A] font-medium transition-colors duration-200 mt-4"
              >
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Architecture Preview */}
          <ScrollReveal delay={2}>
            <div className="bg-[#09090B] border border-[#27272A] rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#27272A]/50">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
                <span className="text-[10px] text-[#52525B] tracking-wider uppercase">
                  architecture.py
                </span>
              </div>
              <pre className="text-[#A1A1AA] leading-relaxed whitespace-pre">
{`                 ┌──────────────┐
                 │    Client    │
                 └──────┬───────┘
                        │
                 ┌──────▼───────┐
                 │    Nginx     │
                 └──────┬───────┘
                        │
               ┌────────▼────────┐
               │  Django / DRF   │
               └───┬─────────┬───┘
                   │         │
          ┌────────▼───┐ ┌──▼───────┐
          │ PostgreSQL │ │  Redis   │
          └────────────┘ └────┬─────┘
                              │
                        ┌─────▼─────┐
                        │  Celery   │
                        └───────────┘`}
              </pre>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
