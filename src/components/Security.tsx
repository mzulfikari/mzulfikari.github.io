"use client";

import ScrollReveal from "./ScrollReveal";

const SECURITY_ITEMS = [
  {
    icon: "🔐",
    title: "JWT Authentication",
    detail: "Token-based auth with refresh rotation and blacklisting",
  },
  {
    icon: "📱",
    title: "OTP Authentication",
    detail: "Time-based one-time passwords for second-factor verification",
  },
  {
    icon: "⏱",
    title: "Rate Limiting",
    detail: "Redis-based throttling per-user, per-endpoint, per-IP",
  },
  {
    icon: "🛡",
    title: "RBAC",
    detail: "Role-based access control with granular permission sets",
  },
  {
    icon: "🔒",
    title: "Secure Password Handling",
    detail: "bcrypt hashing, password policies and secure reset flows",
  },
  {
    icon: "✅",
    title: "Request Validation",
    detail: "Serializer-level validation with detailed error responses",
  },
  {
    icon: "🌐",
    title: "API Security",
    detail: "CORS, CSRF protection, content-type enforcement and more",
  },
  {
    icon: "🔑",
    title: "Permission Systems",
    detail: "Object-level and field-level permissions with DRF guardrails",
  },
];

export default function Security() {
  return (
    <section className="section-padding">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <ScrollReveal>
          <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#52525B] mb-3">
            06 / Security
          </p>
          <h2 className="text-display-md font-semibold mb-4">
            Backend Security
          </h2>
          <p className="text-[#71717A] mb-12 max-w-xl">
            Security is not an afterthought — it&apos;s built into every layer of the system.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECURITY_ITEMS.map((item, i) => (
            <ScrollReveal key={item.title} delay={Math.min((i % 4) + 1, 4)}>
              <div className="bg-[#111113] border border-[#27272A] rounded-lg p-5 hover:border-[#3F3F46] transition-colors duration-300 h-full">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="text-sm font-semibold text-[#F4F4F5] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#71717A] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
