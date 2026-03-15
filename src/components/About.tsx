import { motion } from "motion/react";
import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-rose-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed"
          >
            <p>
              Dedicated and skilled Information Technology engineering student with a strong interest in Artificial Intelligence, Machine Learning, and Data Science. I am passionate about exploring intelligent systems that solve real-world problems using data-driven approaches.
            </p>
            <p>
              I am currently pursuing B.Tech in Information Technology and continuously building projects related to machine learning, AI applications, and web-based systems.
            </p>
            <p>
              Along with my technical skills, I also have around two years of experience in graphic designing, which helps me combine technical knowledge with creative design thinking.
            </p>
            <p className="text-rose-600 dark:text-rose-400 font-medium">
              I aspire to work as a Machine Learning Engineer or Data Scientist, contributing to innovative technologies and impactful AI solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none rounded-2xl p-8 transition-colors">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <GraduationCap className="text-rose-500" /> Education
              </h3>
              <div className="space-y-2">
                <h4 className="text-lg font-medium text-zinc-800 dark:text-zinc-200">B.Tech in Information Technology</h4>
                <p className="text-zinc-600 dark:text-zinc-400">Charotar University of Science and Technology (CHARUSAT)</p>
                <div className="flex justify-between items-center pt-4 border-t border-black/10 dark:border-white/10 mt-4">
                  <span className="text-sm text-zinc-500">Expected Graduation: 2027</span>
                  <span className="text-rose-600 dark:text-rose-400 font-mono font-medium bg-rose-500/10 px-3 py-1 rounded-full">CGPA: 8.81</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none rounded-2xl p-6 flex items-start gap-4 transition-colors">
                <MapPin className="text-rose-500 shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">Location</h4>
                  <p className="text-zinc-800 dark:text-zinc-200">Vadodara, India</p>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none rounded-2xl p-6 flex items-start gap-4 transition-colors">
                <Mail className="text-rose-500 shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">Email</h4>
                  <a href="mailto:bdp.0231@gmail.com" className="text-zinc-800 dark:text-zinc-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-sm px-1 -ml-1">bdp.0231@gmail.com</a>
                </div>
              </div>
              <div className="bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 shadow-sm dark:shadow-none rounded-2xl p-6 flex items-start gap-4 sm:col-span-2 transition-colors">
                <Phone className="text-rose-500 shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">Phone</h4>
                  <p className="text-zinc-800 dark:text-zinc-200">+91 9099710734</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
