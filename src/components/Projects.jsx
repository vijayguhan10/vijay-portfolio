import React from "react";
import { FaReact, FaPython, FaJs, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiFlask, SiMongodb, SiArduino } from "react-icons/si";

// Placeholder images (replace with your actual project images later)
const placeholderImage1 =
  "https://i.pinimg.com/736x/ec/e4/bd/ece4bdfd9057b860407ec58bdb866d57.jpg";
const placeholderImage2 =
  "https://i.pinimg.com/736x/ec/e4/bd/ece4bdfd9057b860407ec58bdb866d57.jpg";
const placeholderImage3 =
  "https://i.pinimg.com/736x/ec/e4/bd/ece4bdfd9057b860407ec58bdb866d57.jpg";
const placeholderImage4 =
  "https://i.pinimg.com/736x/ec/e4/bd/ece4bdfd9057b860407ec58bdb866d57.jpg";
const placeholderImage5 =
  "https://i.pinimg.com/736x/ec/e4/bd/ece4bdfd9057b860407ec58bdb866d57.jpg";
const placeholderImage6 =
  "https://i.pinimg.com/736x/ec/e4/bd/ece4bdfd9057b860407ec58bdb866d57.jpg";

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
};

const Projects = () => {
  const projectsData = [
    {
      title: "ONCULUS DETECTA",
      description:
        "The AI-driven system analyzes 10,000+ pathological images, identifying cancerous lesions with 85% accuracy and enhancing diagnostic efficiency. This empowers healthcare professionals with timely insights, improving patient care by enabling 30% faster decision-making in diagnosis and treatment.",
      image: placeholderImage1,
      techs: ["Python", "TensorFlow", "React", "Flask"],
      link: "/projects/onculus-detecta",
    },
    {
      title: "ANIDER (ECO-WATCH)",
      description:
        "Developed a nonlethal animal monitoring and deterrent system that secured 1st place at the National Hackathon hosted by the Tamil Nadu Government, showcasing expertise in sustainable farming practices and contributing to a greener agricultural future.",
      image: placeholderImage2,
      techs: ["Python", "TensorFlow", "Arduino"],
      link: "/projects/anider-eco-watch",
    },
    {
      title: "FLORA X",
      description:
        "Created an AI-driven botanical app that transformed plant management by providing precise identification, cultivation guidance, and disease diagnosis for over 1,500 plant species.",
      image: placeholderImage3,
      techs: ["React", "TensorFlow", "Flask"],
      link: "/projects/flora-x",
    },
    {
      title: "ADHIKAAR",
      description:
        "Integrated advanced reporting tools for real-time insights into contract statuses, improving efficiency. Launched a mobile app for users to access contract information and procurement updates instantly.",
      image: placeholderImage4,
      techs: ["React", "JS", "Node", "MongoDB"],
      link: "/projects/adhikaar",
    },
    {
      title: "NPM Package kayal",
      description:
        "A personal NPM package showcasing my projects and skills, enabling easy integration of my work into any development environment. Perfect for developers looking to leverage innovative solutions and expertise in AI and ML.",
      image: placeholderImage5,
      techs: ["JS"],
      link: "/projects/npm-package-kayal",
    },
    {
      title: "THC - MEDUSA",
      description:
        "An AI-powered medical chatbot using Grog, providing real-time symptom analysis and personalized health advice to empower informed healthcare decisions.",
      image: placeholderImage6,
      techs: ["Python", "TensorFlow"],
      link: "/projects/thc-medusa",
    },
  ];

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
              className="rounded-lg overflow-hidden shadowxl bg-black relative group"
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
                  <h2 className="text-white text-2xl font-bold mb-2 transform transition-transform group-hover:translate-x-2">
                    {project.title}
                  </h2>
                  <p className="text-white text-sm transform transition-all group-hover:translate-x-1">
                    {project.description}
                  </p>
                </div>
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
                  className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-md transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

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
