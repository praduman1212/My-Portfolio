"use client";

import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";


const stats = [
  { label: "Available Immediately", value: null, gradient: "bg-gradient-purple-cyan" },
  { label: "Open for Freelance Work", value: null, gradient: "bg-gradient-cyan-blue" },
  { label: "Years of Experience", value: 1, gradient: "bg-gradient-yellow-orange" },
  { label: "Projects Delivered", value: 15, gradient: "bg-gradient-green-teal" },
];

type StatCardProps = {
  stat: typeof stats[0];
  delay: number;
};

const StatCard: React.FC<StatCardProps> = ({ stat, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [playCount, setPlayCount] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative backdrop-blur-lg bg-card/10 border border-border/20 rounded-2xl p-6 w-64 shadow-2xl flex flex-col items-center justify-center hover:scale-105 transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, delay }}
      onAnimationComplete={() => {
        if (isInView) setPlayCount(true);
      }}
    >
     
      <div className={`absolute inset-0 ${stat.gradient} opacity-5 rounded-2xl`} />
      
      {stat.value !== null ? (
        <motion.h2
          className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent ${stat.gradient} relative z-10`}
        >
          {playCount && (
            <CountUp
              start={0}
              end={stat.value}
              duration={2}
              suffix="+"
              redraw={true}
            />
          )}
        </motion.h2>
      ) : (
        <h2
          className={`text-2xl md:text-3xl font-semibold bg-clip-text text-transparent ${stat.gradient} text-center relative z-10`}
        >
          {stat.label}
        </h2>
      )}

      {stat.value !== null && (
        <p className="mt-2 text-muted-foreground text-center text-lg relative z-10">
          {stat.label}
        </p>
      )}
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 ${stat.gradient} opacity-0 hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`} />
    </motion.div>
  );
};

const StatsPage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
     <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url(/tech-bg.jpg)" }}
/>


      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Floating Background Element */}
     <div
  className="absolute top-10 right-10 w-96 h-64 bg-cover bg-center rounded-3xl opacity-20 blur-md"
  style={{ backgroundImage: "url(/dev-workspace.jpg)" }}
/>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Section - Left Aligned */}
        <div className="flex-1 flex items-center px-8 lg:px-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-purple-cyan">
                  Software Developer
                </span>
                <br />
               
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                From concept to click, I handle it all.
Let’s shape your next digital experience together.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="px-8 lg:px-16 pb-16">
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
