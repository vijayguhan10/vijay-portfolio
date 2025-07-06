import React from "react";
import {
  FaMedal,
  FaTrophy,
  FaCrown,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <FaMedal className="text-3xl text-amber-500" />,
    title: "Top 6 at Smart India Hackathon",
    subtitle: "Cloud and Mobile App Innovative Solutions",
    desc: "Recognized for developing a cutting-edge solution during a national hackathon.",
  },
  {
    icon: <FaTrophy className="text-3xl text-yellow-500" />,
    title: "1st Place in National Agricultural Hackathon",
    subtitle: "AI in Agriculture\nMachine Learning Innovations",
    desc: "Created a machine learning solution for smart agriculture.",
  },
  {
    icon: <FaCrown className="text-3xl text-yellow-400" />,
    title: "Best Student Researcher 2023",
    subtitle: "SECE Awards\nResearch Excellence",
    desc: "Awarded for outstanding research contributions in the field of AI and ML.",
  },
  {
    icon: <FaFileAlt className="text-3xl text-gray-600" />,
    title: "Best Paper at 15th International Conference",
    subtitle: "Cancer Detection\nUzbekistan 2023",
    desc: "Presented pioneering research on using ML techniques for cancer detection.",
  },
  {
    icon: <FaTrophy className="text-3xl text-pink-400" />,
    title: "1st Place in National Cancer Hackathon",
    subtitle: "Innovative Cancer Solutions",
    desc: "Developed a novel approach for cancer detection using AI.",
  },
  {
    icon: <FaCrown className="text-3xl text-yellow-400" />,
    title: "President of CSE (AI & ML) Department",
    subtitle: "Leadership Role",
    desc: "Led the department, organized events, and mentored students.",
  },
];

export default function Achievements() {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-white min-h-screen">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
        Achievements.
      </h2>
      <p className="text-lg text-gray-700 mb-12 max-w-3xl">
        I have earned multiple accolades in AI and ML competitions. My
        achievements showcase my dedication to pushing the boundaries of
        technology and delivering impactful solutions.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              y: -18,
              scale: 1.06,
              boxShadow:
                "0 8px 32px 0 rgba(255, 193, 7, 0.25), 0 1.5px 16px 0 rgba(0,0,0,0.10)",
              border: "2px solid #FFD700",
              transition: { duration: 0.35, type: "spring", stiffness: 250 },
            }}
            className="relative bg-white/60 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 flex flex-col min-h-[250px] group transition-all duration-300"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.18, rotate: [0, 8, -8, 0] }}
              transition={{ duration: 0.5, type: "spring" }}
              className="mb-4 self-start"
            >
              {ach.icon}
            </motion.div>
            <div className="font-black text-2xl mb-1 text-gray-900 whitespace-pre-line drop-shadow">
              {ach.title}
            </div>
            <div className="font-semibold text-gray-700 mb-2 whitespace-pre-line">
              {ach.subtitle}
            </div>
            <div className="text-gray-600 mb-3">{ach.desc}</div>
            {ach.link && (
              <a
                href={ach.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-semibold text-gray-900 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full px-4 py-2 shadow group-hover:bg-yellow-100 transition"
              >
                <FaFileAlt className="text-xl" />
                {ach.linkText}
              </a>
            )}
            {/* Glowing border effect */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                boxShadow: "0 0 0 4px #ffe066, 0 0 32px 0 #ffd70066",
                border: "2px solid #FFD700",
                zIndex: 1,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
