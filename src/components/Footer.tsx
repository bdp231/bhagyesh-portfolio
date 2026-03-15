export function Footer() {
  return (
    <footer className="bg-white dark:bg-black py-8 border-t border-black/10 dark:border-white/10 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Patil Bhagyesh Dinesh. All rights reserved.
        </p>
        <p className="text-zinc-400 dark:text-zinc-600 text-xs mt-2">
          Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
