"use client";

import ScrollReveal from "./ScrollReveal";

const PHILOSOPHY = [
  "Simple before complex.",
  "Understand before abstracting.",
  "Readable before clever.",
  "Design before scaling.",
  "Build for real problems.",
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B] mb-3">
            01 / About
          </p>
          <h2 className="text-display-md font-semibold mb-12">About Me</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <ScrollReveal delay={1}>
              <p className="text-[#A1A1AA] text-lg leading-relaxed">
                I&apos;m a software developer focused on backend engineering, API
                development and real-world systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="text-[#A1A1AA] text-lg leading-relaxed">
                My main stack is Python and Django, with a strong interest in
                system design, software architecture, backend security and
                scalable infrastructure.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <p className="text-[#A1A1AA] text-lg leading-relaxed">
                I enjoy turning real-world problems into maintainable, modular
                and production-oriented software.
              </p>
            </ScrollReveal>
          </div>

          {/* Engineering Philosophy */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={2}>
              <div className="bg-[#111113] border border-[#27272A] rounded-lg p-6">
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#52525B] mb-5">
                  Engineering Philosophy
                </p>
                <div className="space-y-3">
                  {PHILOSOPHY.map((line, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-[#A1A1AA] text-sm"
                    >
                      <span className="text-[#22C55E] font-mono text-xs mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
