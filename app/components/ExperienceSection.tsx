"use client";

import { motion } from "framer-motion";
import { 
  Cpu, 
  Brain, 
  Database, 
  Cloud,
  Calendar,
  Building
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const experiences = [
  {
    title: "AI/ML Virtual Internship",
    company: "EduSkills",
    period: "2024",
    description: "Comprehensive virtual internship focusing on AI/ML fundamentals with hands-on projects.",
    gradient: "from-violet-600/20 via-purple-500/10 to-violet-600/20",
    borderColor: "border-violet-500/40",
    iconColor: "text-violet-300",
    tools: ["Python", "TensorFlow", "Scikit-learn", "Jupyter", "NumPy", "Pandas"],
    icon: Brain,
    accentBar: "bg-gradient-to-r from-violet-400 via-pink-400 to-purple-500",
    glow: "group-hover:shadow-[0_0_30px_-8px_rgba(168,85,247,0.4)]",
    borderAnimation: "animated-border-violet",
  },
  {
    title: "AI/ML with Data Science",
    company: "YBI Foundation",
    period: "2024",
    description: "Specialized internship combining AI, ML, and data science with real datasets.",
    gradient: "from-blue-600/20 via-cyan-500/10 to-blue-600/20",
    borderColor: "border-blue-500/40",
    iconColor: "text-blue-300",
    tools: ["Python", "Machine Learning", "Data Analysis", "Deep Learning", "Statistics"],
    icon: Database,
    accentBar: "bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-500",
    glow: "group-hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.4)]",
    borderAnimation: "animated-border-blue",
  },
  {
    title: "Introduction to AI Program",
    company: "SimpliLearn",
    period: "2024",
    description: "Foundational program covering AI concepts and emerging technologies.",
    gradient: "from-emerald-600/20 via-teal-500/10 to-emerald-600/20",
    borderColor: "border-emerald-500/40",
    iconColor: "text-emerald-300",
    tools: ["AI Concepts", "Neural Networks", "NLP", "Computer Vision", "AI Ethics"],
    icon: Cpu,
    accentBar: "bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500",
    glow: "group-hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.4)]",
    borderAnimation: "animated-border-emerald",
  },
  {
    title: "IoT Based Programs",
    company: "Various Training",
    period: "2023-2024",
    description: "Multiple IoT programs focusing on embedded systems and smart devices.",
    gradient: "from-amber-600/20 via-orange-500/10 to-amber-600/20",
    borderColor: "border-amber-500/40",
    iconColor: "text-amber-300",
    tools: ["Arduino", "Raspberry Pi", "IoT Protocols", "Sensor Integration", "C/C++"],
    icon: Cloud,
    accentBar: "bg-gradient-to-r from-amber-400 via-orange-400 to-red-500",
    glow: "group-hover:shadow-[0_0_30px_-8px_rgba(245,158,11,0.4)]",
    borderAnimation: "animated-border-amber",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden border-t border-white/5 px-4 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 h-56 w-56 rounded-full bg-violet-500/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey through various internships and training programs in AI, ML, and IoT
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2 lg:gap-6"
        >
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  y: -2,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`relative group overflow-hidden rounded-lg border ${exp.borderColor} bg-gradient-to-br ${exp.gradient} backdrop-blur-sm transition-all duration-300 ${exp.glow} ${exp.borderAnimation}`}
                style={{
                  background: `linear-gradient(135deg, transparent, transparent), linear-gradient(135deg, ${exp.borderColor.replace('border-', '').replace('/40', '')}20, ${exp.borderColor.replace('border-', '').replace('/40', '')}10)`,
                  backgroundClip: 'padding-box, border-box',
                  backgroundOrigin: 'padding-box, border-box',
                }}
              >
                {/* Animated border effect */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${exp.accentBar} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Animated accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${exp.accentBar} animate-pulse`} />
                
                {/* Card content */}
                <div className="relative p-4">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-md ${exp.borderColor} bg-slate-800/60 backdrop-blur-sm`}>
                      <IconComponent className={`w-5 h-5 ${exp.iconColor}`} />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Title and Company */}
                  <div className="mb-2">
                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-300">
                      <Building className="w-3 h-3" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2">
                    {exp.description}
                  </p>

                  {/* Tools */}
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-semibold text-gray-300 uppercase tracking-wider opacity-70">
                      Tools
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {exp.tools.slice(0, 3).map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className={`px-1.5 py-0.5 text-[10px] font-medium rounded-full ${exp.borderColor} ${exp.iconColor} bg-slate-800/60 backdrop-blur-sm`}
                        >
                          {tool}
                        </span>
                      ))}
                      {exp.tools.length > 3 && (
                        <span className={`px-1.5 py-0.5 text-[10px] font-medium rounded-full ${exp.borderColor} ${exp.iconColor} bg-slate-800/60 backdrop-blur-sm`}>
                          +{exp.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated corner accents */}
                <div className={`absolute top-0 left-0 w-2 h-2 ${exp.accentBar} rounded-br-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute top-0 right-0 w-2 h-2 ${exp.accentBar} rounded-bl-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
