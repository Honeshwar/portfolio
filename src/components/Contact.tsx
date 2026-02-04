import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "honeshwarthakur@gmail.com",
      href: "mailto:honeshwarthakur@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8580538585",
      href: "tel:+918580538585",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "honeshwar-thakur",
      href: "https://linkedin.com/in/honeshwar-thakur",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Honeshwar",
      href: "https://github.com/Honeshwar",
    },
  ];

  return (
    <section id="contact" className="pb-24 lg:pt-6 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <p className="text-primary font-mono mb-4">05. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just
              want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Links */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== "Email" && link.label !== "Phone" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="glass rounded-xl p-6 card-hover flex items-center gap-4 text-left group"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <link.icon className="text-primary" size={24} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground text-sm">{link.label}</p>
                      <p className="font-semibold group-hover:text-primary transition-colors text-ellipsis overflow-hidden" title={link.value}>
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-primary">Prefer Email?</h3>
                <p className="text-muted-foreground mb-4">
                  You can also reach me directly at my email. I typically respond within 24 hours.
                </p>
                <a
                  href="mailto:honeshwarthakur@gmail.com"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <Mail size={18} />
                  honeshwarthakur@gmail.com
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <ContactForm isInView={isInView} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
