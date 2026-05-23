import React, { useState } from "react";

const posts = [
  {
    title: "Shipping ERP-style features without chaos",
    date: "2026-05",
    minutes: 6,
    excerpt:
      "Notes on keeping scope tight, interfaces clean, and releases predictable.",
    content:
      "This is a lightweight placeholder post. Replace this with your real write-up (design decisions, tradeoffs, screenshots, and learnings).",
  },
  {
    title: "Leave management systems: data + workflow modeling",
    date: "2026-05",
    minutes: 8,
    excerpt:
      "How I think about requests, approvals, status transitions, and auditability.",
    content:
      "This is a lightweight placeholder post. Add your domain model, DB schema choices, and why you designed it that way.",
  },
  {
    title: "Monochrome UI: typography first",
    date: "2026-05",
    minutes: 5,
    excerpt:
      "A Notion-like visual system where spacing, hierarchy, and borders do the work.",
    content:
      "This is a lightweight placeholder post. Add your UI rules: spacing scale, contrast, and component patterns.",
  },
];

export default function Blog() {
  const [openIndex, setOpenIndex] = useState(null);
  const openPost = openIndex !== null ? posts[openIndex] : null;

  return (
    <section className="mono-section" id="blog">
      <div className="mono-shell">
        <div className="mono-kicker">WRITING</div>
        <h2 className="mt-3 text-3xl sm:text-5xl mono-title">Blog.</h2>
        <p className="mt-4 mono-muted max-w-2xl">
          Short, practical notes: systems, software craft, and the decisions
          behind shipped work.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <button
              key={p.title}
              type="button"
              className="mono-card p-7 text-left hover:bg-black/[0.02] transition"
              onClick={() => setOpenIndex(i)}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold text-black/60">{p.date}</div>
                <div className="text-sm font-semibold text-black/60">
                  {p.minutes} min
                </div>
              </div>
              <div className="mt-3 text-lg font-semibold leading-snug">
                {p.title}
              </div>
              <div className="mt-2 mono-muted text-sm leading-relaxed">
                {p.excerpt}
              </div>
              <div className="mt-5 text-sm font-semibold mono-link inline-block">
                Read
              </div>
            </button>
          ))}
        </div>

        {openPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="mono-card w-[92vw] max-w-2xl p-7 relative">
              <button
                className="absolute top-4 right-5 text-black/60 hover:text-black text-2xl font-bold"
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="mono-pill">{openPost.date}</span>
                <span className="mono-pill">{openPost.minutes} min read</span>
                <span className="mono-pill">
                  <span className="accent-dot accent-dot--green" aria-hidden="true" />
                  Draft
                </span>
              </div>
              <h3 className="mt-4 text-2xl sm:text-3xl mono-title">
                {openPost.title}
              </h3>
              <p className="mt-4 mono-muted leading-relaxed">{openPost.content}</p>
              <div className="mt-6 mono-muted text-sm">
                Replace these with real posts when ready.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
