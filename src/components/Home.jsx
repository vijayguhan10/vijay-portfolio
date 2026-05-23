import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Home = () => {
  const typewriterRef = useRef(null);
  const roles = [
    "A Full Stack Developer",
    "A Software Architect",
    "A Problem Solver",
  ];

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typewriterRef.current.innerText = currentRole.substring(
          0,
          charIndex - 1
        );
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriterRef.current.innerText = currentRole.substring(
          0,
          charIndex + 1
        );
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next
      }

      setTimeout(type, typingSpeed);
    };

    setTimeout(type, 1000);
  }, []);

  return (
    <section className="mono-section" id="home">
      <div className="mono-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <div className="mono-kicker flex items-center gap-3">
              <span>LET'S BUILD SOMETHING TOGETHER</span>
              <span className="hidden sm:inline-flex items-center gap-1.5" aria-hidden="true">
                <span className="accent-dot accent-dot--red" />
                <span className="accent-dot accent-dot--yellow" />
                <span className="accent-dot accent-dot--green" />
              </span>
            </div>

            <h1 className="mt-5 text-4xl sm:text-6xl mono-title leading-[1.05]">
              Vijay Guhan.
              <span className="block mt-3 text-black/70 font-semibold text-2xl sm:text-3xl">
                Full-stack engineer who ships.
              </span>
            </h1>

            <div className="mt-6">
              <div className="text-sm font-semibold text-black/60">Currently</div>
              <div className="mt-2 inline-flex items-center gap-2 mono-card-soft px-4 py-3">
                <span className="text-black/60">→</span>
                <span
                  ref={typewriterRef}
                  className="text-sm sm:text-base font-semibold tracking-wide border-r-2 border-black/50 pr-2 min-h-[24px]"
                >
                  A T
                </span>
              </div>
            </div>

            <p className="mt-7 mono-lead">
              As a competitive programming enthusiast, I enjoy dissecting algorithms and optimizing performance — while architecting reliable back-end systems and clean UI that feel effortless to use.
            </p>

            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <a
                href="#projects"
                className="mono-button"
              >
                View work
              </a>
              <a
                href="#contact"
                className="mono-button-outline"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1qOYVSDADpW8gxs-Tn4iUebMsVdVW9KIC"
                className="mono-link text-sm font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-2xl" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mono-card p-7">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">Portfolio principles</div>
                <span className="mono-pill">
                  <span className="accent-dot accent-dot--green" aria-hidden="true" />
                  Shipping
                </span>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3">
                <div className="mono-card-soft p-4">
                  <div className="font-semibold">Clarity over noise</div>
                  <div className="mt-1 text-sm mono-muted">
                    Monochrome UI where hierarchy does the heavy lifting.
                  </div>
                </div>
                <div className="mono-card-soft p-4">
                  <div className="font-semibold">Systems mindset</div>
                  <div className="mt-1 text-sm mono-muted">
                    Workflows, data models, and operational reliability.
                  </div>
                </div>
                <div className="mono-card-soft p-4">
                  <div className="font-semibold">Craft</div>
                  <div className="mt-1 text-sm mono-muted">
                    Clean code, readable components, and consistent UX.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
