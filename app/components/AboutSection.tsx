"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Cpu, BookOpen, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cards = [
  {
    icon: Code2,
    title: "Web Developer",
    description: "Building modern, responsive web applications with clean code and user-centric design.",
    gradient: "from-blue-500/20 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Brain,
    title: "AI/ML Enthusiast",
    description: "Interested in machine learning and artificial intelligence. Exploring models and intelligent solutions.",
    gradient: "from-violet-500/20 to-purple-500/10",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-400",
  },
  {
    icon: Cpu,
    title: "DSA Problem Solver",
    description: "Solving Data Structures & Algorithms problems in C++. Building strong foundational logic.",
    gradient: "from-emerald-500/20 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: BookOpen,
    title: "Python & Libraries",
    description: "Learning Python and its ecosystem—NumPy, Pandas, TensorFlow for data science and ML.",
    gradient: "from-amber-500/20 to-orange-500/10",
    borderColor: "border-amber-500/30",
    iconColor: "text-amber-400",
  },
];

const techStack = ["React", "Next.js", "Node.js", "C++", "Python"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden border-t border-white/5 px-4 py-24 md:py-32"
    >
      {/* Smooth gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/6 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Section Header */}
        <motion.div variants={item} className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            Get to know me
          </span>
          <h2 className="mb-4 text-4xl font-bold text-zinc-100 md:text-5xl">
            About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400">
            Passionate about building solutions that combine web development, AI/ML, and problem-solving.
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={item}
                className={`group rounded-2xl border ${card.borderColor} bg-gradient-to-br ${card.gradient} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/5`}
              >
                <div
                  className={`mb-4 inline-flex rounded-xl bg-white/5 p-3 ${card.iconColor}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-zinc-100">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Section */}
        <motion.div variants={item} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
          <h3 className="mb-6 text-center text-xl font-semibold text-zinc-100 md:text-2xl">
            Tech Stack & <span className="text-blue-400">Development</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 font-medium text-blue-200 transition-all hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-zinc-500">
            React • Next.js • Node.js for full-stack • C++ for DSA • Python for AI/ML
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
