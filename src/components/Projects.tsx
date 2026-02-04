import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Ecommerce Platform",
    description:
      "A responsive e-commerce platform with product browsing, selection, and cart features. Integrated Stripe for secure online payments and Strapi backend for efficient data management.",
    tech: ["ReactJS", "Redux", "Strapi", "SASS", "Stripe"],
    github: "https://github.com/Honeshwar/e-commerce-app",
    live: "https://honeshwar-store.netlify.app/",
    featured: true,
    imgUrl: "/projects/ecommerce.png",
  },
  {
    title: "Movie Hunt",
    description:
      "A responsive platform to explore trending movies and TV shows with search and movie request features. Integrated APIs for real-time movie data and dynamic content display.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    github: "https://github.com/Honeshwar/filmy123",
    live: "https://filmy123.vercel.app",
    featured: true,
    imgUrl: "/projects/movie.png",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="pb-24 lg:pt-6 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span>
            Projects
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="glass rounded-xl p-8 card-hover group"
              >
                {
                !project.imgUrl? 
                <Folder className="text-primary" size={40} />:
                <div className="relative w-100 h-100 md:w-100 md:h-100 rounded-sm overflow-hidden glass border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300">
                  <img 
                    src={project.imgUrl} 
                    alt="Honeshwar Thakur"
                    className="w-full h-full object-cover"
                  />
                </div>
                }
                  

                <div className="flex items-start justify-between mb-2 mt-6">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Honeshwar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-mono"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
