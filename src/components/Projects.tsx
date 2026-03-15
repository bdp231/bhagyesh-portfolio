import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { SpotlightCard } from "./reactbits/SpotlightCard";

const projects = [
  {
    title: "SugarShield – Health Insights for Diabetes",
    description: "A machine learning-based health analysis system designed to predict organs that may be at risk due to diabetes.",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    features: [
      "Predicts organs at risk due to diabetes",
      "Provides precautionary health measures",
      "User-friendly web interface"
    ]
  },
  {
    title: "ChAI Mate – CHARUSAT Chatbot",
    description: "An intelligent chatbot designed to help students, faculty, and visitors explore information about CHARUSAT.",
    tech: ["React", "TypeScript", "Flask", "Python", "Regex"],
    features: [
      "Chatbot for university information",
      "Separate dashboards for students, faculty, and visitors",
      "Structured information retrieval system"
    ]
  },
  {
    title: "LiterSage – Literature Mastered",
    description: "An AI-powered document analysis platform that extracts meaningful insights from uploaded documents.",
    tech: ["React", "FastAPI", "Python", "T5", "BERT", "LangChain"],
    features: [
      "Automatic document summarization",
      "Title suggestions for documents",
      "Extraction of key points and pain points",
      "Text rephrasing and enhancement"
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-rose-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="h-full"
            >
              <SpotlightCard className="group bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden hover:border-rose-500/30 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-rose-500/10 transition-all duration-300 flex flex-col h-full shadow-sm dark:shadow-none" spotlightColor="rgba(244, 63, 94, 0.15)">
                <div className="p-8 flex-grow flex flex-col relative z-10">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3 uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-zinc-600 dark:text-zinc-400 text-sm flex items-start gap-2">
                          <span className="text-rose-500 mt-1">•</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-mono text-rose-600 dark:text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
