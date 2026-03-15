import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React", "Flask", "FastAPI"],
  },
  {
    title: "AI & Data Science",
    skills: [
      "Machine Learning",
      "Supervised Learning",
      "Data Visualization",
      "Pandas",
      "NLP",
      "Generative AI",
      "AI Agents",
    ],
  },
  {
    title: "Technologies & Frameworks",
    skills: ["LangChain", "BERT", "T5", "Regex"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-rose-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-50 dark:bg-zinc-900/40 border border-black/5 dark:border-white/5 rounded-2xl p-8 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 transition-colors shadow-sm dark:shadow-none"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-full text-zinc-700 dark:text-zinc-300 text-sm hover:border-rose-500/50 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-default shadow-sm dark:shadow-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
