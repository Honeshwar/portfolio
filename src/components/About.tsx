import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Briefcase, GraduationCap, MapPin, User } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Briefcase, label: "Experience", value: "2+ Years" },
    { icon: Code2, label: "Tech Focus", value: "React & Next.js" },
    { icon: GraduationCap, label: "Education", value: "BSc Mathematics" },
    { icon: MapPin, label: "Location", value: "India" },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">01.</span>
            About Me
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* About Text */}
            <div className="space-y-6 lg:col-span-1">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a <span className="text-primary font-semibold">Frontend Developer</span> with 
                over 2 years of professional experience building scalable, high-performance web 
                applications. I specialize in creating production-ready dashboards, data-driven 
                applications, and high-traffic platforms.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey in web development started with a passion for problem-solving and 
                creating intuitive user experiences. I'm proficient in modern JavaScript frameworks 
                and have a strong foundation in state management, API integration, and responsive 
                UI design.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently, I'm working at{" "}
                <span className="text-primary">Tailnode Technology</span>, where I develop and 
                maintain frontend interfaces using React.js and Next.js, building dashboards 
                and multi-page applications with clean, reusable components.
              </p>
            </div>

            {/* Highlights & Quick Facts */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="glass rounded-xl p-4 card-hover"
                  >
                    <item.icon className="text-primary mb-2" size={24} />
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="text-foreground font-semibold">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">Quick Facts</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    Based in Haryana, India
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    BSc in Mathematics from Govt. Degree College, Kullu
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    Passionate about clean code & performance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    Love building business-impact-driven solutions
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
