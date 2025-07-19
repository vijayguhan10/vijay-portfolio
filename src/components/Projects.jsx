import React, { useState } from "react";
import { FaReact, FaPython, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiFlask, SiMongodb, SiArduino } from "react-icons/si";

// Unique placeholder images for each project (replace with your own if available)
const placeholderImages = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=600&q=80",
];

// Tech stack icon mapping
const techIcons = {
  React: FaReact,
  Python: FaPython,
  JS: FaJs,
  TensorFlow: SiTensorflow,
  Flask: SiFlask,
  Node: FaNodeJs,
  MongoDB: SiMongodb,
  Arduino: SiArduino,
  Express: FaNodeJs,                    
};

const projectsData = [
  {
    title: "InvoTrack",
    description:
      "Developed an in-house billing management software that automates billing, tracks customers, manages inventory, enables email marketing, and supports secure online transactions for seamless business operations.",
    image: placeholderImages[0],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://github.com/yourusername/invotrack",
    sample: null,
  },
  {
    title: "EventSync",
    description:
      "End-to-end event management software that streamlines the entire event lifecycle, from planning to execution. Includes forms for event details, amenities, communication, transport, branding, and guest room booking.",
    image: placeholderImages[1],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://event-management-8q6c.vercel.app/",
    sample: [
      { label: "Email", value: "eaniqac1@sece.ac.in" },
      { label: "Password", value: "sece" },
    ],
  },
  {
    title: "LeadFlow CRM",
    description:
      "Lead Management System to streamline lead marketing, tracking, and follow-up. Features lead categorization, WhatsApp marketing, file upload via Cloudinary, and role-specific access for Super Admin, Admin, and Telecallers.",
    image: placeholderImages[2],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://lead-management-s-5s9p.vercel.app/",
    sample: [
      { label: "Super Admin Email", value: "vijayguhan10@gmail.com" },
      { label: "Password", value: "1234" },
      { label: "Admin Email", value: "manish10@gmail.com" },
      { label: "Password", value: "1234" },
    ],
  },
  {
    title: "LeaveEase",
    description:
      "Leave Management Software for Gilbarco Veeder-Root Pvt Ltd, automating the leave cycle from application to approval. Features real-time status tracking and WhatsApp integration.",
    image: placeholderImages[3],
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
  },
  {
    title: "Revozen - Tyre Fitment Center",
    description:
      "Comprehensive tyre management and fitment center software for inventory, customer tracking, and service scheduling, streamlining operations for automotive businesses.",
    image: placeholderImages[4],
    techs: ["React", "Node", "Express", "MongoDB"],
    link: "https://revozen-partner.vercel.app",
    sample: [
      { label: "Admin Panel", value: "https://revozen-admin1.vercel.app" },
      { label: "Admin Email", value: "pavithran@gmail.com" },
      { label: "Admin Password", value: "1234" },
      { label: "Carwash Panel", value: "https://revozen-carwash.vercel.app" },
      { label: "Carwash Email", value: "Ishan@gmail.com" },
      { label: "Carwash Password", value: "1234" },
      { label: "Fitment Panel", value: "https://revozen-partner.vercel.app" },
      { label: "Fitment Email", value: "ram@gmail.com" },
      { label: "Fitment Password", value: "1234" },
      { label: "Enterprise User Email", value: "vijayguhan@gmail.com" },
      { label: "Enterprise Password", value: "1234" },
      { label: "Individual User Email", value: "manishrahul1705@gmail.com" },
      { label: "Individual Password", value: "1234567890" },
    ],
  },
  {
    title: "4Trip - Trip Booking App",
    description:
      "Feature-rich trip booking and management application. Plan journeys, make reservations, and coordinate trips in a unified platform. Available on Google Play.",
    image: placeholderImages[5],
    techs: ["React Native", "Node", "Express", "MongoDB"],
    link: "https://play.google.com/store/apps/details?id=com.vijayguhan.fourtrip",
    sample: [
      { label: "Sample User ID", value: "67d5b997b32740bf20d6d15f" },
      { label: "Name", value: "Sasi" },
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
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Projects.
        </h1>
        <p className="text-gray-600 mb-12 max-w-4xl">
          Explore some of my notable projects, showcasing innovations in
          technology and leadership. These initiatives reflect my commitment to
          harnessing advanced techniques for impactful solutions in various
          fields. Join me in discovering how I've combined creativity and
          technical expertise to drive positive change.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-xl bg-black relative group"
            >
              {/* Project image with light mask overlay */}
              <div className="h-64 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-700 
      group-hover:scale-105 ${
        index === 0
          ? "group-hover:rotate-1"
          : index === 1
          ? "group-hover:rotate-2"
          : index === 2
          ? "group-hover:rotate-3"
          : index === 3
          ? "group-hover:-rotate-1"
          : index === 4
          ? "group-hover:-rotate-2"
          : "group-hover:-rotate-3"
      }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 flex flex-col justify-center px-6 py-4">
                  <h2 className="text-white text-2xl font-bold mb-2">
                    {project.title}
                  </h2>
                  <p className="text-white text-sm">{project.description}</p>
                </div>
                {/* Show Sample Login button if sample exists */}
                {project.sample && (
                  <button
                    type="button"
                    className="absolute top-4 right-4 bg-[#ffd700] text-black text-xs font-bold px-3 py-1 rounded-full shadow hover:bg-yellow-400 transition z-20"
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
              </div>
              {/* Tech stack icons using react-icons */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {project.techs.map((tech, techIndex) => {
                  const IconComponent = techIcons[tech];
                  const bgColor =
                    tech === "Python"
                      ? "bg-blue-500"
                      : tech === "JS"
                      ? "bg-yellow-400"
                      : tech === "React"
                      ? "bg-cyan-400"
                      : tech === "TensorFlow"
                      ? "bg-orange-500"
                      : tech === "Flask"
                      ? "bg-gray-700"
                      : tech === "Node"
                      ? "bg-green-500"
                      : tech === "MongoDB"
                      ? "bg-green-700"
                      : tech === "Arduino"
                      ? "bg-teal-500"
                      : tech === "Express"
                      ? "bg-gray-800"
                      : "bg-gray-500";

                  return (
                    <span
                      key={techIndex}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${bgColor} transition-transform transform hover:scale-110`}
                      title={tech}
                    >
                      {IconComponent && (
                        <IconComponent className="text-white text-sm" />
                      )}
                    </span>
                  );
                })}
              </div>
              {/* View project button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-md transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sample Login Modal */}
      {sampleOpen.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xs relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() =>
                setSampleOpen({ open: false, data: null, title: "" })
              }
              aria-label="Close"
            >
              ×
            </button>
            <div className="text-lg font-bold text-gray-900 mb-2 text-center">
              {sampleOpen.title} <br />
              <span className="text-[#ffd700] text-base">
                Sample Login / Info
              </span>
            </div>
            <div className="text-gray-700 text-sm space-y-1 text-left">
              {sampleOpen.data.map((item, i) => (
                <div key={i}>
                  <span className="font-semibold">{item.label}:</span>{" "}
                  <span className="font-mono">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Scroll to top button */}
      <div className="fixed right-8 bottom-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Projects;
