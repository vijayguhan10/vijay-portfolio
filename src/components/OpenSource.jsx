import React from "react";

const highlights = [
  {
    title: "GitHub",
    description: "Code, experiments, and shipped projects.",
    href: "https://github.com/vijayguhan10",
    cta: "View profile",
  },
  {
    title: "Contributions",
    description:
      "I contribute through bug-fixes, refactors, docs, and small DX improvements.",
    href: "https://github.com/vijayguhan10?tab=overview",
    cta: "See activity",
  },
  {
    title: "Engineering Snapshot",
    description:
      "React • Node • Express • MongoDB • React Native • Tailwind (monochrome-first).",
    href: "#projects",
    cta: "See projects",
  },
];

export default function OpenSource() {
  return (
    <section className="mono-section" id="open-source">
      <div className="mono-shell">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="mono-kicker">OPEN SOURCE</div>
            <h2 className="mt-3 text-3xl sm:text-5xl mono-title">
              Build in public.
            </h2>
            <p className="mt-4 mono-muted max-w-2xl">
              A clean record of what I ship, what I learn, and how I contribute.
            </p>
          </div>
          <a
            className="mono-button-outline"
            href="https://github.com/vijayguhan10"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="mono-card p-7">
              <div className="text-lg font-semibold">{h.title}</div>
              <div className="mt-2 mono-muted text-sm leading-relaxed">
                {h.description}
              </div>
              <div className="mt-5">
                <a
                  href={h.href}
                  className="mono-link text-sm font-semibold"
                  target={h.href.startsWith("http") ? "_blank" : undefined}
                  rel={h.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {h.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 mono-card-soft p-7">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-lg font-semibold">Contribution style</div>
            <div className="flex items-center gap-2">
              <span className="accent-dot accent-dot--red" aria-hidden="true" />
              <span className="accent-dot accent-dot--yellow" aria-hidden="true" />
              <span className="accent-dot accent-dot--green" aria-hidden="true" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="mono-card p-5">
              <div className="font-semibold">Small, clean PRs</div>
              <div className="mt-2 mono-muted text-sm">
                Prefer focused changes, crisp diffs, and readable reviews.
              </div>
            </div>
            <div className="mono-card p-5">
              <div className="font-semibold">DX + docs</div>
              <div className="mt-2 mono-muted text-sm">
                Developer experience is a feature: scripts, linting, and docs.
              </div>
            </div>
            <div className="mono-card p-5">
              <div className="font-semibold">Performance basics</div>
              <div className="mt-2 mono-muted text-sm">
                Measure first, optimize second, and keep it simple.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
