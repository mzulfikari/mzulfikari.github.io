"use client";

import ScrollReveal from "./ScrollReveal";

const PRINCIPLES = [
  { num: "01", text: "Simple before complex." },
  { num: "02", text: "Understand before abstracting." },
  { num: "03", text: "Readable before clever." },
  { num: "04", text: "Design before scaling." },
  { num: "05", text: "Build for real problems." },
];

export default function EngineeringPrinciples() {
  return (
    <section className="section-padding bg-[#111113]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B] mb-3">
            08 / Principles
          </p>
          <h2 className="text-display-md font-semibold mb-12">
            Engineering Principles
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl">
          {PRINCIPLES.map((p, i) => (
            <ScrollReveal key={p.num} delay={Math.min(i + 1, 5)}>
              <div className="flex items-center gap-6 py-5 border-b border-[#27272A]/50 last:border-0">
                <span className="text-[#22C55E] font-mono text-sm font-semibold shrink-0">
                  {p.num}
                </span>
                <span className="text-lg text-[#A1A1AA]">{p.text}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
