"use client";

import ScrollReveal from "./ScrollReveal";

export default function Architecture() {
  return (
    <section className="section-padding bg-[#111113]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B] mb-3">
            05 / Systems
          </p>
          <h2 className="text-display-md font-semibold mb-4">
            How I Think About Systems
          </h2>
          <p className="text-[#71717A] mb-12 max-w-xl">
            I don&apos;t just write code — I design systems that are maintainable,
            scalable and production-oriented.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Architecture Diagram */}
          <ScrollReveal delay={1}>
            <div className="bg-[#09090B] border border-[#27272A] rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#27272A]/50">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
                <span className="text-[10px] text-[#52525B] tracking-wider uppercase ml-2">
                  system_architecture.txt
                </span>
              </div>
              <pre className="text-[#A1A1AA] leading-relaxed whitespace-pre text-xs sm:text-sm">
{`                    ┌──────────────┐
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
             ┌────────▼───┐ ┌──▼────────┐
             │ PostgreSQL │ │   Redis   │
             └────────────┘ └─────┬─────┘
                                  │
                            ┌─────▼─────┐
                            │  Celery   │
                            └───────────┘`}
              </pre>
            </div>
          </ScrollReveal>

          {/* Principles */}
          <ScrollReveal delay={2}>
            <div className="space-y-4">
              {[
                {
                  label: "Separation of Concerns",
                  desc: "Each layer has a single responsibility. Business logic stays out of views.",
                },
                {
                  label: "Service Layer Pattern",
                  desc: "Business logic lives in services, not in views or models. Clean and testable.",
                },
                {
                  label: "Cache-First Architecture",
                  desc: "Redis as the first stop for reads. Reduce DB load, improve response times.",
                },
                {
                  label: "Async by Default",
                  desc: "Background jobs via Celery. Email, notifications, heavy processing offloaded.",
                },
                {
                  label: "Defense in Depth",
                  desc: "JWT + OTP + RBAC + Rate Limiting. Security at every layer, not just the edge.",
                },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="p-5 bg-[#18181B] border border-[#27272A] rounded-lg hover:border-[#3F3F46] transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#22C55E] font-mono text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-semibold text-[#F4F4F5]">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-sm text-[#71717A] ml-8">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
