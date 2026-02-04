import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "Node.js"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Redux", "Redux Toolkit", "Express.js", "jQuery"],
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "SASS", "Bootstrap", "Material UI"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Figma"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem-solving", "Adaptability", "Time Management", "Team Collaboration"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="pb-24 lg:pt-6 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">04.</span>
            Skills
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <h3 className="text-lg font-semibold text-primary mb-4 font-mono">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      className="px-3 py-2 bg-secondary text-foreground text-sm rounded-lg hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "React Certification", desc: "React, Redux, Redux Toolkit" },
                { name: "Back End Certification", desc: "Node.js, Express, Mongoose, APIs" },
                { name: "Front End Certification", desc: "HTML, CSS, JavaScript, Git" },
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="glass rounded-xl p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-mono font-bold">✓</span>
                  </div>
                  <h4 className="font-semibold mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground text-sm">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
