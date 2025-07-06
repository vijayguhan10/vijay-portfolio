import React from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import profileImage from "../assets/vijay personal.jpg";

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background subtle elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:pr-16 mb-10 lg:mb-0 z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Welcome to My World of{" "}
            <span className="text-amber-700">Innovation</span>{" "}
            <span className="text-gray-800">and</span>{" "}
            <span className="text-gray-500">Creativity!</span>
          </h2>

          <p className="text-gray-600 mt-8 leading-relaxed">
            I am Kayal Ennian A G, passionate about AI and ML technologies. As a
            leader in my college's CSE (AI & ML) department and President of our
            AI and ML club, I am dedicated to fostering innovation and
            knowledge-sharing. My journey includes multiple patents, awards in
            hackathons, and a commitment to leveraging AI for impactful
            innovation in technology.
          </p>

          <div className="mt-8 flex space-x-4">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] text-2xl hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-2xl hover:scale-110 transition-transform"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fd5949] text-2xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
          </div>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300 transform hover:scale-105">
            Get Connect
          </button>
        </div>

        {/* Right image section - responsive */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-64 sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden flex items-center justify-center">
            <img
              src={profileImage}
              alt="Kayal Ennian A G"
              className="rounded-br-[10%] rounded-tl-[10%] w-[70%] h-full "
            />
            <div className="absolute inset-0 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Heart icon */}
      <div className="fixed left-4 sm:left-8 bottom-4 sm:bottom-8 text-[2rem] sm:text-[2.5rem] select-none">
        <span role="img" aria-label="heart" className="text-pink-500">
          ❤️
        </span>
      </div>

      {/* Scroll to top button */}
      <div className="fixed right-4 sm:right-8 bottom-4 sm:bottom-8">
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

export default AboutMe;
