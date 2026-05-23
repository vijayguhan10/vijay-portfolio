import React from "react";
import { FaLinkedin, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import profileImage from "../assets/vijay personal.jpg";

const AboutMe = () => {
  return (
    <section className="mono-section" id="about">
      <div className="mono-shell flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 lg:pr-16 mb-10 lg:mb-0 z-10">
          <h2 className="text-3xl sm:text-5xl mono-title">
            Welcome to my world of{" "}
            <span className="underline decoration-black/20 underline-offset-8">
              innovation
            </span>{" "}
            and <span className="mono-muted">craft</span>.
          </h2>

          <p className="mono-muted mt-7 leading-relaxed">
            I am Vijay Guhan K M, a passionate software developer with hands-on
            experience in building ERP solutions and microservices
            architectures. As the Lead for CIR International Relations, I
            actively mentor and guide over 200 junior students, helping them
            grow in their careers and technical skills. I am dedicated to
            creating impactful software solutions and fostering a collaborative
            learning environment within my teams and the wider tech community.
          </p>

          <div className="mt-7 flex gap-5">
            <a
              href="https://www.linkedin.com/in/vijay-guhan-728299283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/70 hover:text-black transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vijayguhan10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/70 hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/70 hover:text-black transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/70 hover:text-black transition"
            >
              <FaInstagram />
            </a>
          </div>

          <a href="#contact" className="mt-8 inline-block mono-button">
            Get in touch
          </a>
        </div>

        {/* Right image section - responsive */}
        {/* <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-64 sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden flex items-center justify-center mono-card">
            <img
              src={profileImage}
              alt="Vijay Guhan"
              className="mono-media rounded-br-[10%] rounded-tl-[10%] w-[70%] h-full"
            />
          </div>
        </div> */}
      </div>

      <div className="mono-shell pb-8">
        <div className="text-sm mono-muted">🖤 Built in black & white.</div>
      </div>
    </section>
  );
};

export default AboutMe;
