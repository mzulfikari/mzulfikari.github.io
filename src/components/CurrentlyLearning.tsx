"use client";

import ScrollReveal from "./ScrollReveal";

const TOPICS = [
  "System Design",
  "Advanced Django",
  "PostgreSQL",
  "Redis & Celery",
  "Backend Security",
  "DevOps",
  "AI Engineering",
];

export default function CurrentlyLearning() {
  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B] mb-3">
            09 / Growth
          </p>
          <h2 className="text-display-md font-semibold mb-4">
            Currently Learning
          </h2>
          <p className="text-[#71717A] mb-12 max-w-xl">
            The path forward is always longer than the path behind.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap gap-3">
          {TOPICS.map((topic, i) => (
            <ScrollReveal key={topic} delay={Math.min((i % 5) + 1, 5)}>
              <div className="group flex items-center gap-3 px-5 py-3 bg-[#111113] border border-[#27272A] rounded-lg hover:border-[#3F3F46] transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-[#22C55E]/60 group-hover:bg-[#22C55E] transition-colors duration-300" />
                <span className="text-sm text-[#A1A1AA] group-hover:text-[#F4F4F5] transition-colors duration-300">
                  {topic}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
