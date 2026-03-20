"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Server, Bot, Database, Wrench, Users } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    cardClass: "skill-card-amber",
    accentBar: "bg-gradient-to-b from-amber-400 to-orange-500",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.25)]",
    skills: [
      "Python – Machine Learning, data analysis, automation",
      "C++ – Data Structures & Algorithms",
      "JavaScript (ES6+) – Modern web development",
      "HTML5 & CSS3 – Responsive, accessible UI",
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    cardClass: "skill-card-blue",
    accentBar: "bg-gradient-to-b from-blue-400 to-cyan-500",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.25)]",
    skills: [
      "React.js – Component-based UI development",
      "Next.js – App Router, SSR, SEO-friendly apps",
      "Tailwind CSS – Utility-first, modern styling",
      "Framer Motion – Smooth animations & transitions",
      "Responsive Design – Mobile-first layouts",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    cardClass: "skill-card-emerald",
    accentBar: "bg-gradient-to-b from-emerald-400 to-teal-500",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)]",
    skills: [
      "Node.js – Scalable backend services",
      "API Integration – Third-party & custom APIs",
      "Authentication & Authorization – Basic JWT & session handling",
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: Bot,
    cardClass: "skill-card-violet",
    accentBar: "bg-gradient-to-b from-violet-400 to-purple-500",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.25)]",
    skills: [
      "Data Science – Data preprocessing, analysis & visualization",
      "AI Chatbots – Python-based and web-integrated bots",
      "Model Integration – AI models with web applications",
    ],
  },
  {
    title: "Databases & Data",
    icon: Database,
    cardClass: "skill-card-rose",
    accentBar: "bg-gradient-to-b from-rose-400 to-pink-500",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.25)]",
    skills: [
      "SQL – Queries, joins, normalization",
      "Data Engineering – ETL concepts & pipelines",
      "Firebase",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    cardClass: "skill-card-sky",
    accentBar: "bg-gradient-to-b from-sky-400 to-indigo-500",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.25)]",
    skills: [
      "Git & GitHub – Version control & collaboration",
      "VS Code / Cursor AI – Development & AI-assisted coding",
      "Chrome Extensions – Security-focused tools",
      "Vercel – Deployment & hosting",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    cardClass: "skill-card-lime",
    accentBar: "bg-gradient-to-b from-lime-400 to-green-500",
    iconBg: "bg-lime-500/15",
    iconColor: "text-lime-400",
    glow: "group-hover:shadow-[0_0_30px_-5px_rgba(132,204,22,0.25)]",
    skills: [
      "Problem-solving mindset",
      "Strong analytical thinking",
      "Team collaboration",
      "Fast learner & adaptable",
      "Clear technical communication",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden border-t border-white/5 px-4 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-violet-500/6 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={item} className="mb-16 text-center">
          <h2 className="mb-2 text-4xl font-bold text-zinc-100 md:text-5xl">
            My <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Skills</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={item}
                className={`group relative overflow-hidden rounded-[1.25rem] ${category.cardClass} p-6 backdrop-blur-sm shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${category.glow}`}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 h-full w-1 rounded-l-[1.25rem] ${category.accentBar} opacity-80`} />
                <div className="relative pl-1">
                  <div className={`mb-4 inline-flex rounded-xl ${category.iconBg} border border-white/5 p-3 ${category.iconColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-lg font-semibold text-zinc-100">
                    {category.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-start gap-2.5 text-sm text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-zinc-500" />
                        <span className="leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
