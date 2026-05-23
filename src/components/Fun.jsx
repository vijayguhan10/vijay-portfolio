import React from "react";

export default function Fun() {
  return (
    <section className="mono-section" id="fun">
      <div className="mono-shell">
        <div className="mono-kicker">BEYOND WORK</div>
        <h2 className="mt-3 text-3xl sm:text-5xl mono-title">Fun.</h2>
        <p className="mt-4 mono-muted max-w-2xl">
          A small human section — keep it real, keep it simple.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mono-card p-7">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">What I enjoy</div>
              <span className="accent-dot accent-dot--yellow" aria-hidden="true" />
            </div>
            <ul className="mt-4 space-y-2 mono-muted text-sm leading-relaxed">
              <li>• Competitive programming: solving + optimizing.</li>
              <li>• Building polished UI systems (spacing + typography).</li>
              <li>• Turning messy requirements into crisp workflows.</li>
            </ul>
          </div>

          <div className="mono-card p-7">
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold">Quick prompts</div>
              <span className="accent-dot accent-dot--red" aria-hidden="true" />
            </div>
            <div className="mt-4 mono-muted text-sm leading-relaxed">
              Want this section to be more personal? Add 2–3 truths like:
              <div className="mt-3 mono-card-soft p-4">
                <div>• A habit that helps you ship.</div>
                <div>• A non-tech interest.</div>
                <div>• A principle you refuse to compromise on.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
