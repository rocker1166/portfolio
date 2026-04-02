"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaUsers,
  FaBriefcase,
  FaCalendarAlt,
} from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Lead Full Stack Developer",
    company: "FluxMap",
    period: "2024 - Present",
    description:
      "Architected and developed the full-stack platform including frontend, backend, and CI/CD pipeline. Led a critical 90K PII data cleanup migration with zero downtime. Built scalable microservices and implemented automated deployment workflows.",
    highlights: [
      "Full-stack architecture & CI/CD pipeline",
      "90K PII cleanup with zero downtime",
      "Scalable microservices design",
    ],
    icon: FaRocket,
    gradient: "from-blue-500 to-cyan-400",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20",
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "LineupX",
    period: "2023 - 2024",
    description:
      "Developed pixel-perfect UI components from Figma designs and integrated complex frontend features with backend APIs. Improved performance and user experience across the platform.",
    highlights: [
      "Pixel-perfect Figma-to-code implementations",
      "Frontend-backend API integration",
      "Performance optimization",
    ],
    icon: FaCode,
    gradient: "from-purple-500 to-pink-400",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20",
  },
  {
    id: 3,
    role: "Lead Developer & Co-founder",
    company: "LastMinuteEngineering",
    period: "2023 - Present",
    description:
      "Co-founded and built an AI-powered education platform from the ground up. Integrated AI chatbot, digital notes, and open-source study materials, driving a 20% increase in user engagement.",
    highlights: [
      "AI-powered learning platform",
      "20% increase in user engagement",
      "End-to-end product ownership",
    ],
    icon: FaUsers,
    gradient: "from-emerald-500 to-teal-400",
    border: "border-emerald-500/30",
    glow: "shadow-emerald-500/20",
  },
];

const Experience = () => {
  return (
    <section className="py-20 w-full" id="experience">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-purple">work experience</span>
      </motion.h1>

      <div className="relative mt-16 max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-emerald-500/50" />

        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={exp.id}
              className={`relative flex items-start mb-12 md:mb-16 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg ${exp.glow}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="text-white text-sm" />
                </motion.div>
              </div>

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  className={`relative group rounded-2xl border ${exp.border} bg-[rgba(4,7,29,0.8)] backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${exp.glow}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient top accent */}
                  <div
                    className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${exp.gradient} opacity-60`}
                  />

                  <div className="flex items-center gap-2 mb-1">
                    <FaCalendarAlt className="text-white/40 text-xs" />
                    <span className="text-xs text-white/40 uppercase tracking-wider font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <h3
                    className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-1`}
                  >
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <FaBriefcase className="text-white/50 text-xs" />
                    <span className="text-sm text-white/60 font-medium">
                      {exp.company}
                    </span>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} mt-1.5 shrink-0`}
                        />
                        <span className="text-white/50 text-xs">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
