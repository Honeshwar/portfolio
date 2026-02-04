import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Tailnode Technology",
    location: "Haryana, India",
    period: "Aug 2024 – Present",
    description: [
      "Developed and maintained frontend interfaces using React.js and Next.js, building dashboards and multi-page applications with clean, reusable components.",
      "Integrated frontend applications with RESTful APIs using Node.js, Express, and Strapi, ensuring efficient data flow and secure backend communication.",
      "Built data-driven features including charts, dashboards, file uploads, and PDF generation using Redux and API integrations.",
      "Delivered responsive, performance-optimized web applications while collaborating with senior developers on live projects.",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux", "Node.js", "REST APIs"],
  },
  {
    title: "Frontend Developer Intern",
    company: "Tailnode Technology",
    location: "Haryana, India",
    period: "Jan 2024 – July 2024",
    description: [
      "Utilized HTML, CSS, and JavaScript to create responsive and visually appealing web interfaces.",
      "Collaborated with senior developers to integrate RESTful APIs, ensuring seamless data exchange.",
      "Improved performance and load times by 50% to 90% by transitioning sites from plain HTML/CSS/JS to Next.js.",
      "Contributed to building and deploying multiple client websites with a team of developers.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Next.js", "REST APIs"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="pb-24 lg:pt-6  relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">02.</span>
            Experience
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            {/* Tabs */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left font-mono text-sm whitespace-nowrap transition-all rounded-lg ${
                    activeTab === index
                      ? "text-primary bg-primary/10 border-l-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-xl p-8"
            >
              <h3 className="text-xl font-semibold mb-2">
                {experiences[activeTab].title}{" "}
                <span className="text-primary">@ {experiences[activeTab].company}</span>
              </h3>

              <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-6">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  {experiences[activeTab].period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  {experiences[activeTab].location}
                </span>
              </div>

              <ul className="space-y-4 mb-6">
                {experiences[activeTab].description.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-3 text-muted-foreground"
                  >
                    <ChevronRight className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experiences[activeTab].tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-mono rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
