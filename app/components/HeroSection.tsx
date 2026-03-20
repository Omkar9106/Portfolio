"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FolderKanban, FileDown, Sparkles } from "lucide-react";
import TypewriterRole from "./TypewriterRole";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1 * i,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function HeroSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="hero-gradient hero-grid relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 pt-20 md:py-24 md:pt-28">
      {/* Animated 3D gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-[320px] w-[320px] rounded-full bg-blue-400/12 blur-[100px]"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/3 top-1/3 h-[200px] w-[200px] rounded-full bg-sky-500/10 blur-[80px]"
          animate={{
            x: [0, 15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Profile Image Area - 3D floating card */}
        <motion.div
          className="order-2 flex-shrink-0 lg:order-1"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="group relative"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.02, y: 0 }}
          >
            {/* 3D depth shadow */}
            <div
              className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500/25 via-cyan-500/25 to-sky-500/25 opacity-60 blur-xl transition-opacity group-hover:opacity-80"
              style={{ transform: "translateZ(-20px)" }}
            />
            {/* Image container with gradient border - circular */}
            <div className="relative overflow-hidden rounded-full border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:border-blue-400/30 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">
              <div className="relative aspect-square h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52">
                {!imageError ? (
                  <Image
                    src="/profile.png"
                    alt="Omkar - Developer portrait"
                    fill
                    priority
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 176px, (max-width: 1024px) 192px, 208px"
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                    <span className="text-4xl font-bold text-zinc-600">OS</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="order-1 flex flex-1 flex-col items-center text-center lg:order-2 lg:items-start lg:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="mb-5 flex items-center justify-center gap-2 lg:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/90">
              <Sparkles className="h-3.5 w-3.5" />
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-3 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl"
          >
            <span className="block">Hello, I&apos;m</span>
            <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Omkar
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-4 min-h-[2.5rem] text-lg sm:text-xl md:text-2xl"
          >
            <TypewriterRole />
          </motion.p>

          <motion.p
            variants={item}
            className="mb-10 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
           AI/ML and Full-Stack Engineer passionate about building intelligent and scalable web solutions.
           Turning ideas into impactful products through code and data.
          </motion.p>

          {/* Social Media Links */}
          <motion.div
            variants={item}
            className="mb-6 flex items-center justify-center gap-3 lg:justify-start"
          >
            <motion.a
              href="https://github.com/Omkar9106"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/50 border border-gray-600/30 backdrop-blur-sm transition-all duration-300 hover:bg-gray-700/70 hover:border-gray-500/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-4 w-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/omkar-sondage-71340a306/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-800/50 border border-blue-600/30 backdrop-blur-sm transition-all duration-300 hover:bg-blue-700/70 hover:border-blue-500/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-4 w-4 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://leetcode.com/u/Omkar_124/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-800/50 border border-orange-600/30 backdrop-blur-sm transition-all duration-300 hover:bg-orange-700/70 hover:border-orange-500/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-orange-300 font-bold text-xs">LC</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col gap-4 sm:flex-row sm:gap-4"
          >
            <a
              href="#projects"
              className="btn-3d group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-4 font-semibold text-white shadow-[0_4px_0_#1d4ed8,0_8px_20px_rgba(59,130,246,0.35)] transition-all duration-200 hover:shadow-[0_6px_0_#1d4ed8,0_12px_28px_rgba(59,130,246,0.4)]"
            >
              <FolderKanban className="h-5 w-5 transition-transform group-hover:scale-110" />
              View Projects
            </a>
            <button
              onClick={() => {
                window.open('/RESUME.pdf', '_blank');
              }}
              className="btn-3d group inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/20 bg-white/5 px-7 py-4 font-semibold text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <FileDown className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              View Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
