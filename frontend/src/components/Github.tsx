"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  "Jupyter Notebook": "#DA5B0B",
};

const CACHE_KEY = "gh_repos_cache";
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

function getRelativeTime(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

export default function Github() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check cache
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          setRepos(data);
          setLoading(false);
          return;
        }
      }
    } catch {}

    fetch("https://api.github.com/users/mzulfikari/repos?sort=updated&per_page=20")
      .then((res) => res.json())
      .then((data: Repo[]) => {
        if (Array.isArray(data)) {
          setRepos(data);
          try {
            localStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ data, timestamp: Date.now() })
            );
          } catch {}
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="experience" className="section-padding bg-[#111113]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B] mb-3">
            07 / GitHub
          </p>
          <h2 className="text-display-md font-semibold mb-4">
            Open Source & GitHub
          </h2>
          <p className="text-[#71717A] mb-4 max-w-xl">
            Most of my experiments, projects and engineering work live on GitHub.
          </p>
          <p className="text-[#52525B] font-mono text-sm mb-12">
            github.com/mzulfikari
          </p>
        </ScrollReveal>

        {/* Repos */}
        {loading ? (
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#18181B] border border-[#27272A] rounded-lg p-5 animate-pulse"
              >
                <div className="h-4 bg-[#27272A] rounded w-1/3 mb-3" />
                <div className="h-3 bg-[#27272A] rounded w-2/3 mb-4" />
                <div className="flex gap-2">
                  <div className="h-3 bg-[#27272A] rounded w-12" />
                  <div className="h-3 bg-[#27272A] rounded w-12" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {repos.slice(0, 8).map((repo, i) => (
              <ScrollReveal key={repo.id} delay={Math.min((i % 2) + 1, 4)}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#18181B] border border-[#27272A] rounded-lg p-5 hover:border-[#3F3F46] transition-all duration-300 h-full"
                >
                  <h3 className="text-sm font-semibold text-[#F4F4F5] group-hover:text-[#22C55E] transition-colors duration-200 mb-1 font-mono">
                    {repo.name}
                  </h3>
                  <p className="text-xs text-[#71717A] mb-3 line-clamp-2">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {repo.language && (
                        <span className="flex items-center gap-1.5 text-xs text-[#A1A1AA]">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                LANGUAGE_COLORS[repo.language] || "#71717A",
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-[#52525B]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.782 1.4 8.171L12 19.306l-7.334 3.858 1.4-8.171L.132 9.211l8.2-1.193z" />
                          </svg>
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-[#52525B]">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="18" r="3" />
                            <circle cx="6" cy="6" r="3" />
                            <circle cx="18" cy="6" r="3" />
                            <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9M12 12v3" />
                          </svg>
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-[#52525B]">
                      {getRelativeTime(repo.updated_at)}
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        )}

        <ScrollReveal delay={1}>
          <div className="mt-8 text-center">
            <a
              href="https://github.com/mzulfikari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#27272A] text-sm text-[#A1A1AA] hover:text-[#F4F4F5] hover:border-[#3F3F46] rounded-md transition-all duration-200"
            >
              Explore GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
