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
    <div className="relative  text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:50px_50px]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-xs text-blue-400 mb-4">
            Dive into my journey .
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into reality with Suman Jana "
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          />

          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Hi! I am Suman, a Full Stack Developer from earth 🌍.
          </p>
          <div className="flex gap-2">
            <a href="https://drive.google.com/file/d/1-vlbHkzL9387oOArj6-QFKfUJiAkaQLv/view?usp=sharing">
              <MagicButton
                title="Downlaod CV"
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
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
