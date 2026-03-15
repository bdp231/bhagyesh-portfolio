import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { Sparkles, ArrowRight, Command, Network } from "lucide-react";

export function LandingPage({ onEnter }: { onEnter: () => void }) {
  const [promptText, setPromptText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const fullPrompt = "Generate profile: Bhagyesh Patil --role ML_Engineer";

  // Parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springConfig = { damping: 40, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const bg1X = useTransform(smoothX, [-1, 1], [-40, 40]);
  const bg1Y = useTransform(smoothY, [-1, 1], [-40, 40]);
  
  const bg2X = useTransform(smoothX, [-1, 1], [50, -50]);
  const bg2Y = useTransform(smoothY, [-1, 1], [50, -50]);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullPrompt.length) {
        setPromptText(fullPrompt.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        setTimeout(() => setShowResult(true), 600);
      }
    }, 60); // Typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a] text-zinc-200 overflow-hidden font-sans"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        borderBottomLeftRadius: "50%", 
        borderBottomRightRadius: "50%",
        opacity: 1
      }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Atmospheric Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div 
          style={{ x: bg1X, y: bg1Y }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div 
          style={{ x: bg2X, y: bg2Y }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] mix-blend-screen"
        />
      </motion.div>

      <div className="w-full max-w-2xl px-6 relative z-10 flex flex-col items-center">
        {/* Prompt Input UI */}
        <motion.div 
          className="w-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-4 md:p-5 shadow-2xl flex items-center gap-4 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Sparkles className="text-rose-400 shrink-0" size={24} />
          <div className="flex-1 font-mono text-sm md:text-base text-zinc-300 flex items-center min-h-[24px]">
            {promptText}
            {isTyping && (
              <motion.div 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-rose-400 ml-1"
              />
            )}
          </div>
          <div className="hidden md:flex shrink-0 px-3 py-1.5 bg-zinc-800 rounded-md text-xs font-mono text-zinc-400 items-center gap-2">
            <Command size={14} /> Enter
          </div>
        </motion.div>

        {/* Generated Result Card */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full overflow-hidden"
            >
              <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-8 md:p-12 text-center relative shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50"></div>
                
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                  className="w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-tr from-rose-500 to-orange-500 mb-6 shadow-[0_0_30px_rgba(139,92,246,0.3)] relative group"
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border-4 border-zinc-900">
                    {/* Replace the src below with your actual photo URL */}
                    <img 
                      src="picture.png" 
                      alt="Bhagyesh Patil" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback if image is not uploaded yet
                        (e.target as HTMLImageElement).src = "https://picsum.photos/seed/portrait/200/200";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-zinc-900 border border-zinc-700 rounded-full p-2 shadow-xl">
                    <Sparkles className="text-rose-400" size={14} />
                  </div>
                </motion.div>

                <motion.h1 
                  className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Bhagyesh Patil
                </motion.h1>
                
                <motion.p 
                  className="text-zinc-400 text-lg mb-10 max-w-md mx-auto leading-relaxed"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Data Science Aspirant & Future Machine Learning Engineer. Turning complex data into intelligent solutions.
                </motion.p>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <button
                    onClick={onEnter}
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute -inset-[100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f43f5e_0%,#f97316_33%,#ec4899_66%,#f43f5e_100%)]"></div>
                    </div>
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                      Access Portfolio 
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
