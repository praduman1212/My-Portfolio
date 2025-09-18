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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 lg:bg-transparent z-10 pointer-events-none" />

      <div className="relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-20 mt-24 sm:mt-32 md:mt-40 w-full z-[20]">
        {/* Text Content */}
        <div className="h-full w-full flex flex-col gap-4 sm:gap-5 justify-center m-auto text-start">
          <div className="Welcome-box py-[7px] sm:py-[8px] px-[6px] sm:px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Praduman Sharma · Software Engineer
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-bold text-white max-w-full md:max-w-[600px] w-auto h-auto"
          >
            <span>
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                digital solutions that solve
              </span>{" "}
              real problems.
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-base sm:text-lg text-gray-400 my-3 sm:my-5 max-w-full md:max-w-[600px]"
          >
            Full Stack Engineer specializing in React, Next.js, and Node.js. I
            build responsive, high-performance applications and thrive on
            solving real-world challenges with modern tools.
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            href="/Praduman_Sharma's_Resume_9520949165.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[180px] sm:max-w-[220px] text-sm sm:text-base"
          >
            View Resume
          </motion.a>
        </div>

        {/* Hero Image - Hidden on mobile */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden sm:flex w-full h-full justify-center items-center mt-8 md:mt-0"
        >
          <Image
            src="/hero-bg.svg"
            alt="work icons"
            height={320}
            width={320}
            priority
            draggable={false}
            className="select-none w-[220px] sm:w-[320px] md:w-[400px] lg:w-[650px] h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};
