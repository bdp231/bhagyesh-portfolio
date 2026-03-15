import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Linkedin, Github, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-rose-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities as a Machine Learning Engineer or Data Scientist. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Email</h3>
                  <a href="mailto:bdp.0231@gmail.com" className="text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-sm px-1 -ml-1">
                    bdp.0231@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Phone</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">+91 9099710734</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">Location</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">Vadodara, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-black/10 dark:border-white/10">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/bhagyesh-patil-477544321"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-black/50 border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:border-transparent dark:hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  aria-label="LinkedIn Profile"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-[100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f43f5e_0%,#f97316_33%,#ec4899_66%,#f43f5e_100%)]"></div>
                  </div>
                  <Linkedin size={22} className="relative z-10 text-zinc-500 dark:text-zinc-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </a>
                <a
                  href="https://github.com/bdp231"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-black/50 border border-black/5 dark:border-white/5 overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:border-transparent dark:hover:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                  aria-label="GitHub Profile"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-[100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f43f5e_0%,#f97316_33%,#ec4899_66%,#f43f5e_100%)]"></div>
                  </div>
                  <Github size={22} className="relative z-10 text-zinc-500 dark:text-zinc-400 group-hover:text-white dark:group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 p-8 rounded-2xl shadow-sm dark:shadow-none"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Send a Message</h3>
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-[300px] text-center space-y-4"
              >
                <CheckCircle className="text-rose-500 w-16 h-16" />
                <p className="text-xl font-medium text-zinc-900 dark:text-white">Message Sent!</p>
                <p className="text-zinc-600 dark:text-zinc-400">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full bg-zinc-50 dark:bg-black/50 border ${errors.name ? 'border-red-500' : 'border-black/10 dark:border-white/10'} rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors`}
                    placeholder="Your Name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-zinc-50 dark:bg-black/50 border ${errors.email ? 'border-red-500' : 'border-black/10 dark:border-white/10'} rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors`}
                    placeholder="your.email@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-zinc-50 dark:bg-black/50 border ${errors.message ? 'border-red-500' : 'border-black/10 dark:border-white/10'} rounded-xl px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors resize-none`}
                    placeholder="Your message..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1.5">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="group relative w-full flex items-center justify-center gap-2 py-4 font-bold text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_8px_rgba(244,63,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 mt-2"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-[100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f43f5e_0%,#f97316_33%,#ec4899_66%,#f43f5e_100%)]"></div>
                  </div>
                  <span className="relative z-10 flex items-center gap-2 text-white dark:text-zinc-900 group-hover:text-white dark:group-hover:text-white transition-colors duration-300">
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
