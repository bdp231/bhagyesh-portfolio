import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Operational Manager",
    company: "Shree Sai Labels",
    duration: "May 2023 – Present",
    type: "Professional Experience",
    description: [
      "Managing product manufacturing and supply operations",
      "Supervising employees and workflow management",
      "Handling design and production tools",
      "Managing printing and labeling equipment"
    ],
    tools: ["CorelDraw 11", "CorelDraw 13", "CorelDraw 15", "RDWorks"]
  },
  {
    title: "Machine Learning Intern",
    company: "Cognifyz Technologies",
    duration: "2 Months",
    type: "Internship",
    description: [
      "Developed machine learning models to generate restaurant insights",
      "Analyzed restaurant datasets for business intelligence and predictions"
    ],
    tools: ["Python", "Machine Learning", "Data Analysis"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-rose-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-black/10 dark:before:via-white/10 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-rose-600 dark:text-rose-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#fff] dark:shadow-[0_0_0_4px_#000]">
                <Briefcase size={18} />
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 p-6 rounded-2xl hover:border-rose-500/30 transition-colors shadow-sm dark:shadow-none">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-bold text-xl text-zinc-900 dark:text-white">{exp.title}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 whitespace-nowrap">
                    {exp.type}
                  </span>
                </div>
                <div className="text-zinc-600 dark:text-zinc-400 font-medium mb-4 flex items-center gap-2">
                  {exp.company} <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600"></span> 
                  <span className="flex items-center gap-1 text-sm"><Calendar size={14} /> {exp.duration}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-zinc-600 dark:text-zinc-400 text-sm flex items-start gap-2">
                      <span className="text-rose-500 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-black/5 dark:border-white/5">
                  {exp.tools.map((tool) => (
                    <span key={tool} className="text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-black/5 dark:bg-black/50 px-2 py-1 rounded border border-black/5 dark:border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
