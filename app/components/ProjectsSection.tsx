"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ImageIcon } from "lucide-react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const projects = [
  {
    id: 1,
    name: "AI Career Guidance App",
    image: "/ai-career.png",
    description: [
      "AI-powered career recommendation based on skills and interests",
      "Personalized career path suggestions",
      "Skills assessment and gap analysis",
    ],
    tech: ["React", "Next.js", "Node.js", "Firebase", "Google Auth"],
    github: "https://github.com/Omkar9106/Carrier-Guidance-2",
    demo: "https://ai-carrier-guidance-7usj.vercel.app",
    cardStyle: "style-a",
  },
  {
    id: 2,
    name: "Student Attendance Tracking System",
    image: "/student.png",
    description: [
      "Digital attendance management for educational institutions",
      "Real-time tracking and reporting",
      "Admin dashboard with analytics",
    ],
    tech: ["React", "Node.js", "Firebase", "MongoDB"],
    github: "https://github.com/Omkar9106/studentattendence",
    demo: "https://studentattendence-7oc4.vercel.app",
    cardStyle: "style-b",
  },
  {
    id: 3,
    name: "AI Chatbot",
    image: "/ai chatbot.png",
    description: [
      "Intelligent conversational AI assistant",
      "Natural language processing",
      "Web-integrated chat interface",
    ],
    tech: ["React", "Next.js", "Python", "API", "AI/ML"],
    github: "https://github.com/Omkar9106/Chatbot",
    demo: "https://chatbot-eosin-eight-50.vercel.app",
    cardStyle: "style-c",
  },
  {
    id: 4,
    name: "Newspaper Web",
    image: "/News paper.png",
    description: [
      "Digital news platform with real-time updates",
      "Modern news aggregation and display",
      "Responsive news reading experience",
    ],
    tech: ["React", "Next.js", "API", "News API"],
    github: "https://github.com/Omkar9106/Newspaper1",
    demo: "https://newspaper1.vercel.app",
    cardStyle: "style-d",
  },
  {
    id: 5,
    name: "Farmer Guide Web",
    image: "/Farmer Guide.png",
    description: [
      "Agricultural guidance and crop recommendations",
      "Weather-based farming insights",
      "Resource management for farmers",
    ],
    tech: ["React", "Node.js", "Firebase", "Google API"],
    github: "https://github.com/Omkar9106/farmerguideweb",
    demo: "https://farmerguideweb.vercel.app",
    cardStyle: "style-e",
  },
];

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [imgError, setImgError] = useState(false);

  const borderStyles: Record<string, string> = {
    "style-a": "project-card-border-blue",
    "style-b": "project-card-border-violet",
    "style-c": "project-card-border-emerald",
    "style-d": "project-card-border-amber",
    "style-e": "project-card-border-rose",
  };

  return (
    <motion.article
      variants={item}
      className={`project-card ${borderStyles[project.cardStyle]} group overflow-hidden rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-white/15`}
    >
      {/* Image / Screenshot Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-900/80">
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 p-4">
            <ImageIcon className="h-12 w-12 text-zinc-500" />
            <span className="text-center text-xs text-zinc-500">
              Add {project.image.replace("/projects/", "")} to /public/projects/
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold text-zinc-100">{project.name}</h3>

        <ul className="mb-4 space-y-1 text-xs leading-relaxed text-zinc-400">
          {project.description.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400/60" />
              {point}
            </li>
          ))}
        </ul>

        {/* Tech Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Footer: GitHub + Demo */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-500/20 px-3 py-1.5 text-xs font-medium text-blue-300 transition-colors hover:bg-blue-500/30 hover:text-blue-200"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden border-t border-white/5 px-4 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 h-56 w-56 rounded-full bg-violet-500/5 blur-[80px]" />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div variants={item} className="mb-16 text-center">
          <h2 className="mb-2 text-4xl font-bold text-zinc-100 md:text-5xl">
            My <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-zinc-500">Web apps, AI solutions & full-stack builds</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
