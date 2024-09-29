"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { Badge } from "@/components/ui/badge";
import { Code, Video, HopOff, Pen } from "lucide-react";
import * as THREE from "three";
import { BiMovie } from "react-icons/bi";

const skills = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "TypeScript", color: "#007ACC" },
  { name: "Next js", color: "#000000" },
  { name: "MongoDB", color: "#47A248" },
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Tailwind", color: "#38B2AC" },
  { name: "Python", color: "#3776AB" },
  { name: "LangChain", color: "#6A0DAD" },
  { name: "AI Integration", color: "#FF6347" },
  { name: "SQL", color: "#4479A1" },
  { name: "Vercel", color: "#000000" },
  { name: "WordPress", color: "#21759B" },
  { name: "Bootstrap", color: "#7952B3" },
];

const interests = [
  { name: "AI & Machine Learning", icon: <Code size={18} /> },
  { name: "Video Editing", icon: <Video size={18} /> },
  { name: "Spirituality", icon: <HopOff size={18} /> },
  { name: "Watching Movies", icon: <BiMovie size={18} /> },
  { name: "Writing Books", icon: <Pen size={18} /> },
];

function FloatingSkillSphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial />
    </mesh>
  );
}

function ParallaxText({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouse = (event: React.MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      style={{
        perspective: 2000,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      className="w-full h-full flex items-center justify-center"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="text-6xl font-bold text-transparent bg-clip-text "
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function AdvancedPortfolioHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    cardControls.start({
      x: mousePosition.x / 50,
      y: -mousePosition.y / 50,
      rotateX: mousePosition.y / 20,
      rotateY: -mousePosition.x / 20,
    });
  }, [mousePosition, cardControls]);

  return (
    <section className="w-full min-h-screen  text-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 py-20">
        <motion.div
          className="mt-16 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm py-2 px-3"
                  style={{ backgroundColor: skill.color, color: "#fff" }}
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-4">Interests & Hobbies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-purple-300">{interest.icon}</span>
                <span>{interest.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
