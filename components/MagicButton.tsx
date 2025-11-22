import React from "react";
import { motion } from "framer-motion";

/**
 *  UI: border magic from tailwind css btns with enhanced micro-interactions
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <motion.button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <motion.span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 transition-all duration-300 group-hover:bg-slate-900 ${otherClasses}`}
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0.9 }}
      >
        {position === "left" && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: -3 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
        {title}
        {position === "right" && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
        )}
      </motion.span>
    </motion.button>
  );
};

export default MagicButton;
