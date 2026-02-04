import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg border border-border bg-card/50 flex items-center justify-center hover:border-primary/50 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Moon className="text-primary" size={18} />
        ) : (
          <Sun className="text-primary" size={18} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
