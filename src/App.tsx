import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { CustomCursor } from "./components/CustomCursor";
import { LandingPage } from "./components/LandingPage";

export default function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <CustomCursor />
      <AnimatePresence>
        {showLanding && (
          <LandingPage key="landing" onEnter={() => setShowLanding(false)} />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {!showLanding && (
          <>
            <motion.div
              key="curtain-1"
              initial={{ y: "0%", borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" }}
              animate={{ y: "-100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              className="fixed inset-0 z-[45] bg-zinc-200 dark:bg-zinc-800 shadow-[0_10px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.5)]"
            />
            <motion.div
              key="curtain-2"
              initial={{ y: "0%", borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" }}
              animate={{ y: "-100%", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="fixed inset-0 z-[40] bg-zinc-100 dark:bg-zinc-900 shadow-[0_10px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_50px_rgba(0,0,0,0.5)]"
            />
          </>
        )}
      </AnimatePresence>

      {!showLanding && (
        <motion.div 
          key="portfolio"
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          className="bg-white dark:bg-black min-h-screen text-zinc-900 dark:text-white font-sans selection:bg-rose-500/30 selection:text-rose-900 dark:selection:text-rose-200 transition-colors duration-300 relative z-10"
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </ThemeProvider>
  );
}
