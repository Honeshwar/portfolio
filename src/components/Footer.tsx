import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <motion.a
              href="https://github.com/Honeshwar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/honeshwar-thakur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:honeshwarthakur@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -3 }}
            >
              <Mail size={20} />
            </motion.a>
          </div>

          <p className="text-muted-foreground text-sm font-mono flex items-center gap-2">
            Built with <Heart size={14} className="text-red-500" /> by Honeshwar Thakur
          </p>

          <p className="text-muted-foreground/60 text-xs font-mono">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
