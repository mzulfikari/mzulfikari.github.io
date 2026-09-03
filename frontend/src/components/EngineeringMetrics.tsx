"use client";

import ScrollReveal from "./ScrollReveal";

const AREAS = [
  "Backend Engineering",
  "API Development",
  "System Design",
  "Software Architecture",
  "DevOps",
  "Security",
];

export default function EngineeringMetrics() {
  return (
    <section className="relative py-16 border-y border-[#27272A]/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {AREAS.map((area, i) => (
              <span
                key={area}
                className={`text-[13px] tracking-wide ${
                  i < AREAS.length - 1
                    ? "text-[#52525B] after:content-['·'] after:ml-10 after:text-[#27272A]"
                    : "text-[#52525B]"
                }`}
              >
                {area}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
