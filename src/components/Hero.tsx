import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { BlurText } from "./reactbits/BlurText";
import { Magnet } from "./reactbits/Magnet";
import { AntigravityBackground } from "./AntigravityBackground";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <AntigravityBackground />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-sm font-medium mb-6">
            Data Science Aspirant
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500 dark:from-rose-400 dark:to-orange-400">
              Bhagyesh Patil
            </span>
          </h1>
          <BlurText 
            text="Diver in the Ocean of Information Technology. Future ML Engineer & AI Enthusiast."
            delay={50}
            animateBy="words"
            direction="bottom"
            className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg"
          />
          
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById("contact");
                if (elem) {
                  const offset = 80;
                  const elementPosition = elem.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -inset-[100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f43f5e_0%,#f97316_33%,#ec4899_66%,#f43f5e_100%)]"></div>
              </div>
              <span className="relative z-10 flex items-center gap-2 text-white dark:text-zinc-900 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                Get in touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <div className="flex items-center gap-4 px-4">
              <Magnet padding={50} disabled={false} magnetStrength={5}>
                <a href="https://github.com/bdp231" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-[100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f43f5e_0%,#f97316_33%,#ec4899_66%,#f43f5e_100%)]"></div>
                  </div>
                  <Github size={22} className="relative z-10 text-zinc-600 dark:text-zinc-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </a>
              </Magnet>
              <Magnet padding={50} disabled={false} magnetStrength={5}>
                <a href="https://linkedin.com/in/bhagyesh-patil-477544321" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-[100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f43f5e_0%,#f97316_33%,#ec4899_66%,#f43f5e_100%)]"></div>
                  </div>
                  <Linkedin size={22} className="relative z-10 text-zinc-600 dark:text-zinc-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </a>
              </Magnet>
              <Magnet padding={50} disabled={false} magnetStrength={5}>
                <a href="mailto:bdp.0231@gmail.com" aria-label="Email Me" className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-[100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f43f5e_0%,#f97316_33%,#ec4899_66%,#f43f5e_100%)]"></div>
                  </div>
                  <Mail size={22} className="relative z-10 text-zinc-600 dark:text-zinc-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </a>
              </Magnet>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[300px] sm:h-[400px] md:h-[500px] w-full flex items-center justify-center"
        >
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[1, 2, 3]} intensity={2} />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <Sphere args={[1, 100, 200]} scale={2.8}>
              <MeshDistortMaterial
                color="#f43f5e"
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
