import React from "react";
import { motion } from "framer-motion";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <motion.h1 
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-purple">work experience</span>
      </motion.h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <motion.div
            key={card.id}
            className="h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Button
              //   random duration will be fun , I think , may be not
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgba(4,7,29,0.8)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,0.9) 0%, rgba(12,14,35,0.9) 100%)",
                borderRadius: `calc(1.75rem* 0.96)`,
                backdropFilter: "blur(10px)",
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 h-full"
            >
              <motion.div 
                className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
