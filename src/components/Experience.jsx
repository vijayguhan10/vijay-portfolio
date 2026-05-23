import React from "react";
import { motion } from "framer-motion";

// Import your organization logos
const logos = {
  tnGovt: "https://www.tn.gov.in/sites/default/files/logo.png",
  justice: "https://www.moj.gov.in/sites/all/themes/moj2017/logo.png",
  vuega: "https://vuega.org/wp-content/uploads/2022/02/vuega-logo.png",
  karpagam: "https://www.karpagaresearch.com/assets/img/logo.png",
  srm: "https://www.srmist.edu.in/wp-content/uploads/2023/01/srm-logo.png",
  svce: "https://svce.ac.in/wp-content/themes/svce/assets/img/logo.png",
  sriEshwar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNrhOdasEW-nw2QGWfW8p61_zk0lGWcr-P960hBTvbvgroYQblgEQA3fyIs98GFCU6pQ&usqp=CAU",
  gilbarco:
    "https://www.gilbarco.com/us/sites/gilbarco.com.us/themes/gvr_v3_us/logo.svg",
  isaii: "https://framerusercontent.com/images/Xqva2SIUa2CAXuGIcHtb2NFUAVM.png",
};

const techStack = [
  {
    name: "C++",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
  },
  {
    name: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "PostgreSQL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Node.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Express",
    logo: "https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png",
  },
  {
    name: "React Native",
    logo: "https://cink.es/wp-content/uploads/2024/02/react-native-apps-jpg-1.webp",
  },
  {
    name: "Tailwind CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "AWS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/800px-Amazon_Web_Services_Logo.svg.png",
  },
];

const workExperience = [
  {
    role: "Software Developer (LeaveEase)",
    company: "Gilbarco Veeder-Root Pvt Ltd",
    period: "2024",
    logo: logos.gilbarco,
    description:
      "Developed a Leave Management Software that automated the entire leave cycle, from application to manager approval, ensuring efficient tracking and streamlined workflows.",
    skills: ["React.js", "MongoDB", "Node.js", "Express.js"],
  },
  {
    role: "Mobile App Developer (Isaii Ai)",
    company: "Isaii Ai",
    period: "2025",
    logo: logos.isaii,
    description:
      "Developed a feature-rich trip booking and management application using React Native, allowing users to seamlessly plan journeys, make reservations, and coordinate their trips in a unified platform.",
    skills: ["React Native", "Node.js", "Express.js", "MongoDB"],
  },
  {
    role: "Student Mentor",
    company: "Sri Eshwar College of Engineering",
    period: "Jan 2020 - Present",
    logo: logos.sriEshwar,
    description:
      "Guided students in leadership, teaching, and mentoring to help them excel academically and professionally.",
    skills: ["Leadership", "Teaching", "Mentoring"],
  },
  {
    role: "Center for International Relations - Student Lead, Student Affairs",
    company: "Sri Eshwar College of Engineering",
    period: "Jun 2021 - Present",
    logo: logos.sriEshwar,
    description:
      "Led the Center for International Relations as Student Lead, managing student affairs, organizing events, and fostering global collaborations.",
    skills: ["International Relations", "Student Affairs", "Event Organization"],
  },
];

export default function Experience() {
  return (
    <section className="mono-section">
      <div className="mono-shell">
        {/* Work Experience Timeline */}
        <div className="mt-12 sm:mt-20" id="experiences">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="mono-kicker">EXPERIENCE</div>
              <h2 className="mt-3 text-2xl sm:text-4xl mono-title">
                Work Experience
              </h2>
              <p className="mt-4 mono-muted max-w-2xl">
                Roles and responsibilities focused on shipping features, owning
                workflows, and mentoring.
              </p>
            </div>
            <span className="mono-pill">
              <span className="accent-dot accent-dot--green" aria-hidden="true" />
              Shipping
            </span>
          </div>

          <div className="relative mt-10">
            <div className="hidden md:block absolute left-6 top-0 h-full w-px bg-black/10" />
            <div className="flex flex-col gap-6">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="relative"
                >
                  <div className="absolute left-6 top-8 hidden md:block">
                    <div className="h-3 w-3 rounded-full bg-white border border-black/25" />
                  </div>

                  <div className="md:pl-16">
                    <div className="mono-glass-card p-6">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-4">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain mono-media border border-black/10 bg-white"
                          />
                          <div>
                            <h3 className="font-semibold text-base sm:text-lg">
                              {exp.role}
                            </h3>
                            <p className="text-sm sm:text-base mono-muted">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <span className="mono-pill">{exp.period}</span>
                      </div>

                      <p className="mono-muted mt-4 text-sm sm:text-base leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span key={skill} className="mono-pill">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Stack Section */}
        <div className="mt-20 sm:mt-32 mb-10 sm:mb-16" id="skills">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Headings and CTA */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl sm:text-5xl mono-title mb-4 sm:mb-6 leading-tight">
                My technical stack <br />
                includes <span className="mono-muted">various</span> <br />
                <span className="text-black/50">technologies and tools</span>
              </h2>
              <p className="text-base sm:text-lg mono-muted mb-6 sm:mb-8">
                Explore the technologies I utilize to drive innovation in my
                projects.
              </p>
              <a href="#contact" className="mono-button inline-block">
                Connect with me!
              </a>
            </div>

            {/* Right: Tech Grid */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="mono-glass-card flex flex-col items-center py-4 sm:py-6 px-2 transition"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-10 h-10 sm:w-14 sm:h-14 object-contain mb-2 sm:mb-3 mono-media"
                    />
                    <span className="text-black/80 font-semibold text-xs sm:text-base">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
