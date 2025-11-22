import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative text-white overflow-hidden min-h-screen">
      {/* Glassmorphism gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black/40" />
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />
      
      {/* Spotlight effects */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="purple"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-4 gap-8">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="uppercase tracking-widest text-xs text-blue-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Dive into my journey
          </motion.p>

          <TextGenerateEffect
            words="Transforming Concepts into reality with Suman Jana"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />

          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hi! I am Suman, a Full Stack Developer specializing in AI-powered applications 🚀
          </motion.p>
          
          <motion.div 
            className="flex gap-4 flex-wrap justify-center md:justify-start"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://drive.google.com/file/d/1j-lmjvh3lS9-ubFLzQzL81VZ9l7nz3Fv/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/project/1">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glassmorphism card effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-sm border border-white/10 shadow-2xl" />
            
            {/* Profile image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
              <Image
                src="/mine/mypic.jpg"
                alt="Suman's profile"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.6 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-blue-500/50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
