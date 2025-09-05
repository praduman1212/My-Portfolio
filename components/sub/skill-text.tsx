"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-2 sm:px-0">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[7px] sm:py-[8px] px-[6px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9]]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[8px] sm:mr-[10px] h-4 w-4 sm:h-5 sm:w-5" />
        <h1 className="Welcome-text text-[12px] sm:text-[13px]">
        Code. Engineer. Optimize. Deliver
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[22px] sm:text-[26px] md:text-[30px] text-white font-medium mt-[8px] sm:mt-[10px] text-center mb-[10px] sm:mb-[15px]"
      >
        Making apps with modern technologies.
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-[14px] sm:text-[16px] text-gray-200 mb-6 sm:mb-10 mt-[8px] sm:mt-[10px] text-center"
      >
       Frontend, Backend, Databases, Cloud, and AI — I Build It All
      </motion.div>
    </div>
  );
};
