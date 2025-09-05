"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-black/70 lg:bg-transparent z-10 pointer-events-none" />
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-20 mt-24 sm:mt-32 md:mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-4 sm:gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[7px] sm:py-[8px] px-[6px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9]]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Praduman Sharma · Software Engineer
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
          >
            <span>
            Engineering  {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              digital solutions that solve
              </span>{" "}
              real problems.
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-base sm:text-lg text-gray-400 my-3 sm:my-5 max-w-full md:max-w-[600px]"
          >
           Full Stack Engineer specializing in React, Next.js, and Node.js. I build responsive, high-performance applications and thrive on solving real-world challenges with modern tools.
          </motion.p>

          <motion.a
            variants={slideInFromLeft(1)}
            href="/Praduman Sharma's Resume_9520949165.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] sm:max-w-[220px] text-sm sm:text-base"
          >
            View Resume
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center mt-8 md:mt-0"
        >
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={320}
            width={320}
            draggable={false}
            className="select-none w-[220px] sm:w-[320px] md:w-[400px] lg:w-[650px] h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
