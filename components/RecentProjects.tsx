"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import { motion } from "framer-motion";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <motion.h1 
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, index) => (
          <motion.div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PinContainer title={item.title} href="https://twitter.com/suman">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl backdrop-blur-sm"
                  style={{ 
                    backgroundColor: "rgba(19, 22, 45, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)"
                  }}
                >
                  <img src="/bg.png" alt="Background" className="opacity-50" />
                </div>

                <motion.img
                  src={item.img}
                  alt="Cover"
                  className="z-10 absolute bottom-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                <Link href={item.link}> {item.title}</Link>
              </h1>

              <p
                className="lg:text-xl lg:font-normal hover:text-blue-400 transition-colors duration-300 font-light text-sm line-clamp-2"
                style={{
                  margin: "1vh 0",
                }}
              >
                <Link href={item.link}> {item.des}</Link>
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <motion.div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black/50 backdrop-blur-sm lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="flex justify-center items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    <Link href={item.link}> Check Live Site</Link>
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </motion.div>
              </div>
            </PinContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
