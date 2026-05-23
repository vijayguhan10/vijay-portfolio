import React from "react";
import {
  FaMedal,
  FaTrophy,
  FaCrown,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileAlt,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <FaFileAlt className="text-3xl text-black" />,
    title: "Published 2* Patents",
    subtitle: "Software Development under SDG goals",
    desc: "Published two patents in software development, contributing to the United Nations Sustainable Development Goals.",
  },
  {
    icon: <FaTrophy className="text-3xl text-black" />,
    title: "Best Innovator – International Startup TN Hackathon",
    subtitle: "Awarded for Groundbreaking Solutions",
    desc: "Recognized as Best Innovator at the International Startup TN Hackathon for delivering impactful and innovative solutions.",
  },
  {
    icon: <FaCrown className="text-3xl text-black" />,
    title: "Youngest Entrepreneur & Top Software Developer",
    subtitle: "Excellence in Technology & Innovation",
    desc: "Honored as the Youngest Entrepreneur and Top Software Developer for outstanding achievements in technology and innovation.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-black" />,
    title: "Mentored 300+ Students",
    subtitle: "MERN Stack Development",
    desc: "Mentored over 300 students in MERN stack development, empowering the next generation of developers.",
  },
  {
    icon: <FaMedal className="text-3xl text-black" />,
    title: "Dr. APJ Abdul Kalam Silver Innovator – 2024",
    subtitle: "National Recognition",
    desc: "Received the Dr. APJ Abdul Kalam Silver Innovator award in 2024 for exceptional innovation.",
  },
  {
    icon: <FaUserGraduate className="text-3xl text-black" />,
    title: "Best Student Researcher – 2023",
    subtitle: "Academic Excellence",
    desc: "Honored as the Best Student Researcher of 2023 for outstanding research contributions.",
  },
  {
    icon: <FaTrophy className="text-3xl text-black" />,
    title: "Winner of 3+ Hackathons",
    subtitle: "National Competitions (2023 & 2024)",
    desc: "Achieved top positions in more than four hackathons and internationally recognized Competetions.",
  },
  {
    icon: <FaStar className="text-3xl text-black" />,
    title: "Best Frontend Developer",
    subtitle: "24-hour Hackathon",
    desc: "Winner of Best Frontend Developer for exceptional UI/UX expertise at a 24-hour hackathon.",
  },
];

export default function Achievements() {
  return (
    <section className="mono-section" id="achievements">
      <div className="mono-shell">
        <h2 className="text-3xl sm:text-5xl mono-title">Achievements.</h2>
        <p className="mt-4 mono-muted mb-12 max-w-3xl">
        My journey is marked by innovation, leadership, and a passion for
        empowering others through technology and education.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mono-card p-7"
            >
              <div className="mb-4">{ach.icon}</div>
              <div className="font-semibold text-lg mb-1 whitespace-pre-line">
                {ach.title}
              </div>
              <div className="font-semibold text-black/70 mb-2 whitespace-pre-line">
                {ach.subtitle}
              </div>
              <div className="mono-muted text-sm leading-relaxed">{ach.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
