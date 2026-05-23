import React, { useState } from "react";

const projectsData = [
  {
    title: "InvoTrack",
    description:
      "Developed an in-house billing management software that automates billing, tracks customers, manages inventory, enables email marketing, and supports secure online transactions for seamless business operations.",
    // image: placeholderImages[0],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/yourusername/invotrack",
    sample: null,
    highlights: [
      "Automates billing + inventory workflows",
      "Designed for speed and day-to-day operations",
    ],
  },
  {
    title: "EventSync",
    description:
      "End-to-end event management software that streamlines the entire event lifecycle, from planning to execution. Includes forms for event details, amenities, communication, transport, branding, and guest room booking.",
    // image: placeholderImages[1],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://event-management-8q6c.vercel.app/",
    sample: [
      { label: "Email", value: "eaniqac1@sece.ac.in" },
      { label: "Password", value: "sece" },
    ],
    highlights: [
      "End-to-end event lifecycle workflows",
      "Operational forms + orchestration in one place",
    ],
  },
  {
    title: "LeadFlow CRM",
    description:
      "Lead Management System to streamline lead marketing, tracking, and follow-up. Features lead categorization, WhatsApp marketing, file upload via Cloudinary, and role-specific access for Super Admin, Admin, and Telecallers.",
    // image: placeholderImages[2],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://acs-lead.vercel.app/",
    sample: [
      { label: "Super Admin Email", value: "vijayguhan10@gmail.com" },
      { label: "Password", value: "1234" },
      { label: "Admin Email", value: "manish10@gmail.com" },
      { label: "Password", value: "1234" },
    ],
    highlights: [
      "Role-based access: Super Admin / Admin / Telecaller",
      "Lead tracking + WhatsApp-driven follow ups",
    ],
  },
  {
    title: "LeaveEase",
    description:
      "Leave Management Software for Gilbarco Veeder-Root Pvt Ltd, automating the leave cycle from application to approval. Features real-time status tracking and WhatsApp integration.",
    // image: placeholderImages[3],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://lms-frontend-ten-hazel.vercel.app/",
    sample: [
      { label: "Admin Username", value: "24GVRADMIN001" },
      { label: "Password", value: "1234" },
      { label: "Manager Username", value: "24Gilbarco002" },
      { label: "Password", value: "123" },
      { label: "Employee Username", value: "24Gilbarco003" },
      { label: "Password", value: "user@123" },
    ],
    highlights: [
      "Workflow automation: request → approval → audit",
      "Real-time status + notification integrations",
    ],
  },
  {
    title: "Revozen - Tyre Fitment Center",
    description:
      "Comprehensive tyre management and fitment center software for inventory, customer tracking, and service scheduling, streamlining operations for automotive businesses.",
    // image: placeholderImages[4],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://revozen-partner.vercel.app",
    sample: [
      { label: "Admin Panel", value: "https://revozen-admin1.vercel.app" },
      { label: "Admin Email", value: "pavithran@gmail.com" },
      { label: "Admin Password", value: "1234" },
      { label: "Fitment Panel", value: "https://revozen-partner.vercel.app" },
      { label: "Fitment Email", value: "ram@gmail.com" },
      { label: "Fitment Password", value: "1234" },
      { label: "Individual User Email", value: "manishrahul1705@gmail.com" },
      { label: "Individual Password", value: "1234567890" },
    ],
    highlights: [
      "Inventory + service scheduling flows",
      "Multi-surface ops (admin + partner panels)",
    ],
  },
  {
    title: "4Trip - Trip Booking App",
    description:
      "Feature-rich trip booking and management application. Plan journeys, make reservations, and coordinate trips in a unified platform. Available on Google Play.",
    // image: placeholderImages[5],
    techs: ["React Native", "Node", "Express", "MongoDB"],
    link: "https://play.google.com/store/apps/details?id=com.vijayguhan.fourtrip",
    sample: [
      { label: "Sample User ID", value: "67d5b997b32740bf20d6d15f" },
      { label: "Name", value: "Sasi" },
    ],
    highlights: [
      "Mobile-first booking and coordination",
      "Backend APIs for a unified trip workflow",
    ],
  },
];

const Projects = () => {
  const [sampleOpen, setSampleOpen] = useState({
    open: false,
    data: null,
    title: "",
  });

  return (
    <section className="mono-section" id="projects">
      <div className="mono-shell">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="mono-kicker">SELECTED WORK</div>
            <h1 className="mt-3 text-3xl sm:text-5xl mono-title">Projects.</h1>
            <p className="mt-4 mono-muted max-w-4xl">
          Explore some of my notable projects, showcasing innovations in
          technology and leadership. These initiatives reflect my commitment to
          harnessing advanced techniques for impactful solutions in various
          fields. Join me in discovering how I've combined creativity and
          technical expertise to drive positive change.
            </p>
          </div>
          <a
            href="#open-source"
            className="mono-button-outline"
          >
            Open source →
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="mono-card relative overflow-hidden"
            >
              {/* Gradient overlay for card, no image */}
              <div className="min-h-64 relative flex flex-col justify-between px-6 py-6">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">
                  {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed mono-muted">{project.description}</p>

                  {Array.isArray(project.highlights) && project.highlights.length > 0 && (
                    <ul className="mt-4 space-y-1 text-sm text-black/70">
                      {project.highlights.slice(0, 2).map((h) => (
                        <li key={h}>• {h}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Show Sample Login button if sample exists */}
                {project.sample && (
                  <button
                    type="button"
                    className="absolute top-4 right-4 mono-button-outline text-xs px-3 py-1"
                    onClick={() =>
                      setSampleOpen({
                        open: true,
                        data: project.sample,
                        title: project.title,
                      })
                    }
                  >
                    Sample Login
                  </button>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span key={tech} className="mono-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono-link text-sm font-semibold"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 mono-card-soft p-7">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="text-lg font-semibold">How I build</div>
            <span className="mono-pill">
              <span className="accent-dot accent-dot--yellow" aria-hidden="true" />
              Craft
            </span>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="mono-card p-5">
              <div className="font-semibold">Product thinking</div>
              <div className="mt-2 mono-muted text-sm">
                Design flows that reduce friction for real users.
              </div>
            </div>
            <div className="mono-card p-5">
              <div className="font-semibold">Engineering hygiene</div>
              <div className="mt-2 mono-muted text-sm">
                Naming, boundaries, and consistent patterns across the app.
              </div>
            </div>
            <div className="mono-card p-5">
              <div className="font-semibold">Delivery</div>
              <div className="mt-2 mono-muted text-sm">
                Ship iteratively with confidence and clear change sets.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sample Login Modal */}
      {sampleOpen.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="mono-card p-7 w-full max-w-sm relative flex flex-col items-center">
            <button
              className="absolute top-3 right-4 text-black/60 hover:text-black text-2xl font-bold transition"
              onClick={() =>
                setSampleOpen({ open: false, data: null, title: "" })
              }
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-xl font-semibold mb-2 text-center">
              {sampleOpen.title}
            </div>
            <div className="text-sm mb-4 font-semibold text-center mono-muted">
              Sample Login / Info
            </div>
            <div className="text-sm space-y-2 w-full">
              {sampleOpen.data.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center mono-card-soft rounded-xl px-3 py-2"
                >
                  <span className="font-semibold">{item.label}:</span>
                  <span className="font-mono break-all">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
