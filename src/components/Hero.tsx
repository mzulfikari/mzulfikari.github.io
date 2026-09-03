"use client";

import { useState, useEffect } from "react";

const TERMINAL_LINES = [
  { prompt: "$ whoami", result: "morteza-zolfaghari" },
  { prompt: "$ focus", result: "backend · architecture · api · security · devops" },
  { prompt: "$ stack", result: "python · django · postgresql · redis · docker" },
];

function TerminalBlock() {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [completedLines, setCompletedLines] = useState<number[]>([]);

  useEffect(() => {
    if (currentLine >= TERMINAL_LINES.length) {
      setShowCursor(false);
      return;
    }

    const line = TERMINAL_LINES[currentLine];

    if (!showResult) {
      // Typing the prompt
      if (currentChar < line.prompt.length) {
        const timer = setTimeout(() => setCurrentChar(currentChar + 1), 40);
        return () => clearTimeout(timer);
      } else {
        // Prompt done, show result
        const timer = setTimeout(() => setShowResult(true), 300);
        return () => clearTimeout(timer);
      }
    } else {
      // Result shown, move to next line
      const timer = setTimeout(() => {
        setCompletedLines((prev) => [...prev, currentLine]);
        setCurrentLine(currentLine + 1);
        setCurrentChar(0);
        setShowResult(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, showResult]);

  return (
    <div className="bg-[#111113] border border-[#27272A] rounded-lg overflow-hidden font-mono text-sm">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272A]/50">
        <div className="w-3 h-3 rounded-full bg-[#3F3F46]" />
        <div className="w-3 h-3 rounded-full bg-[#3F3F46]" />
        <div className="w-3 h-3 rounded-full bg-[#3F3F46]" />
        <span className="ml-3 text-xs text-[#52525B]">terminal</span>
      </div>

      {/* Terminal Body */}
      <div className="p-5 space-y-4">
        {completedLines.map((lineIdx) => (
          <div key={lineIdx} className="space-y-1">
            <div className="text-[#52525B]">
              <span className="text-[#22C55E]">{TERMINAL_LINES[lineIdx].prompt.split(" ")[0]}</span>
              {" "}
              <span className="text-[#71717A]">{TERMINAL_LINES[lineIdx].prompt.split(" ").slice(1).join(" ")}</span>
            </div>
            <div className="text-[#A1A1AA] pl-0">{TERMINAL_LINES[lineIdx].result}</div>
          </div>
        ))}

        {currentLine < TERMINAL_LINES.length && (
          <div className="space-y-1">
            <div className="text-[#52525B]">
              <span className="text-[#22C55E]">
                {TERMINAL_LINES[currentLine].prompt.slice(0, currentChar)}
              </span>
              {currentChar < TERMINAL_LINES[currentLine].prompt.length && showCursor && (
                <span className="cursor-blink text-[#22C55E]">█</span>
              )}
            </div>
            {showResult && (
              <div className="text-[#A1A1AA] animate-[fadeIn_0.3s_ease-out]">
                {TERMINAL_LINES[currentLine].result}
              </div>
            )}
          </div>
        )}

        {currentLine >= TERMINAL_LINES.length && (
          <div className="text-[#52525B]">$ <span className="cursor-blink">█</span></div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 grid-bg">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09090B] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B]">
                Backend Engineer / Software Developer
              </p>
              <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.1] tracking-[-0.03em]">
                Building Backend
                <br />
                Systems That{" "}
                <span className="text-[#22C55E]">Scale.</span>
              </h1>
              <p className="text-[#A1A1AA] text-lg max-w-xl leading-relaxed">
                Backend Developer focused on Python, Django, API Engineering,
                System Design and production-ready software.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#22C55E] text-[#09090B] text-sm font-semibold rounded-md hover:bg-[#16A34A] transition-colors duration-200"
              >
                View Projects
              </a>
              <a
                href="https://github.com/mzulfikari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#27272A] text-[#A1A1AA] text-sm font-medium rounded-md hover:border-[#3F3F46] hover:text-[#F4F4F5] transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="lg:pl-8">
            <TerminalBlock />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#52525B]">
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#27272A] to-transparent" />
        </div>
      </div>
    </section>
  );
}
