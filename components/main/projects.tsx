"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/sub/project-card";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useTypewriter } from "react-simple-typewriter";

export const Projects = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: isMobile ? -320 : -650, // adjust scroll size
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: isMobile ? 320 : 650,
        behavior: "smooth",
      });
    }
  };

  const [text] = useTypewriter({
    words: ["My Projects", "Things I’ve Built", "Showcase 🚀"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Three.js Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 2]} />
          <Sphere args={[1.8, 64, 64]} scale={2}>
            <MeshDistortMaterial
              color="#9333EA"
              distort={0.4}
              speed={1.5}
              roughness={0.2}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Section Title with Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10"
      >
        {text}
      </motion.h1>

      {/* Slider Container */}
      <div className="relative w-full max-w-6xl">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 text-white p-4 rounded-full z-10 shadow-xl transition-transform hover:scale-110"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 text-white p-4 rounded-full z-10 shadow-xl transition-transform hover:scale-110"
        >
          ▶
        </button>

        {/* Scrollable Cards */}
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden gap-6 px-12 py-4 snap-x snap-mandatory scroll-smooth"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex-shrink-0 ${
                isMobile ? "w-full" : "w-[calc(50%-12px)]"
              } snap-center`}
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* More Projects Button */}
      <div className="mt-10">
        <a
          href="https://github.com/praduman1212"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          More Projects →
        </a>
      </div>
    </section>
  );
};
