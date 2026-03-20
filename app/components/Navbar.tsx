"use client";

import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed right-0 top-0 z-50 flex items-center gap-1 p-4 md:gap-2 md:p-6">
      <div className="flex flex-wrap items-center justify-end gap-1 md:gap-2">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-blue-300 md:px-4 md:text-base"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </nav>
  );
}
