"use client";

import ScrollReveal from "./ScrollReveal";

export default function CurrentlyBuilding() {
  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#22C55E] mb-3">
                Currently Building
              </p>
              <h2 className="text-display-lg font-bold">Knack</h2>
              <p className="text-[#A1A1AA] text-lg leading-relaxed">
                Building practical software products and engineering solutions.
                Knack is a software development brand focused on creating tools
                that solve real problems with clean, maintainable code.
              </p>
              <a
                href="https://github.com/knack-pardaz-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#22C55E] hover:text-[#16A34A] font-medium transition-colors duration-200"
              >
                View on GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <ScrollReveal delay={2}>
              <div className="bg-[#111113] border border-[#27272A] rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#27272A]/50">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3F3F46]" />
                  <span className="text-[10px] text-[#52525B] tracking-wider uppercase">
                    knack.yaml
                  </span>
                </div>
                <pre className="text-[#A1A1AA] leading-relaxed">
{`brand: Knack
type: Software Development
focus:
  - Backend Systems
  - API Engineering
  - Product Development
stack: [Python, Django, Docker]
status: Active`}
                </pre>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
