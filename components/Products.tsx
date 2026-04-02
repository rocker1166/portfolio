"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaBookOpen, FaRobot } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Deksie",
    tagline: "AI-Powered Desk Companion",
    description:
      "A smart productivity tool that uses AI to help you organize tasks, manage workflows, and stay on top of your work. Built for developers and creators who want to ship faster.",
    icon: FaRobot,
    gradient: "from-violet-500 to-fuchsia-500",
    border: "border-violet-500/20",
    glow: "hover:shadow-violet-500/10",
    link: "#",
    tags: ["AI", "Productivity", "SaaS"],
  },
  {
    id: 2,
    name: "LastMinuteEngineering",
    tagline: "Learn Engineering, the Smart Way",
    description:
      "An AI-powered education platform with an intelligent chatbot, digital notes, and curated open-source study materials. Helping students learn faster with personalized AI assistance.",
    icon: FaBookOpen,
    gradient: "from-amber-500 to-orange-500",
    border: "border-amber-500/20",
    glow: "hover:shadow-amber-500/10",
    link: "#",
    tags: ["EdTech", "AI Chatbot", "Open Source"],
  },
];

const Products = () => {
  return (
    <section className="py-20 w-full" id="products">
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Products &amp; <span className="text-purple">Blog</span>
      </motion.h1>

      <p className="text-center text-white/50 mt-4 max-w-xl mx-auto text-sm">
        Things I&apos;ve built and shipped as side projects and ventures.
      </p>

      <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {products.map((product, index) => {
          const Icon = product.icon;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                className={`relative group rounded-2xl border ${product.border} bg-[rgba(4,7,29,0.8)] backdrop-blur-md p-8 h-full transition-all duration-300 hover:shadow-xl ${product.glow}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${product.gradient} opacity-50`}
                />

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} shadow-lg mb-5`}
                >
                  <Icon className="text-white text-lg" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-1">
                  {product.name}
                </h3>
                <p
                  className={`text-sm font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}
                >
                  {product.tagline}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/50 bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Visit Product <FaExternalLinkAlt className="text-xs text-purple-400" />
                </motion.a>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
