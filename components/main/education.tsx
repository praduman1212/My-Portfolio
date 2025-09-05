"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-10 sm:py-20 overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Sphere args={[1, 100, 200]} scale={2.7}>
            <MeshDistortMaterial
              color="#9333ea"
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.6}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-10 sm:mb-16 z-10 drop-shadow-lg"
      >
        Education & Certifications
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-full sm:max-w-2xl md:max-w-5xl px-2 sm:px-4 md:px-8">
        {/* Vertical glowing line */}
        <div className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-500 via-pink-400 to-cyan-500 shadow-[0_0_20px_rgba(147,51,234,0.7)] animate-pulse" />

        <div className="space-y-8 sm:space-y-14">
          {/* Education Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative ml-8 sm:ml-16 md:ml-20 p-4 sm:p-6 md:p-8 rounded-2xl 
              bg-[rgba(255,255,255,0.05)] backdrop-blur-md 
              border border-[rgba(147,51,234,0.3)] 
              shadow-lg hover:shadow-purple-500/40 transition-all"
          >
            {/* Glowing dot */}
            <span className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.9)] animate-ping" />
            <span className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />

            <div className="text-2xl md:text-3xl font-semibold text-white">
              Uttaranchal University
            </div>
            <div className="text-sm text-gray-400">Dehradun, Uttarakhand</div>
            <div className="text-sm text-gray-400">Sep 2021 – May 2025</div>
            <p className="mt-3 text-gray-200 text-base md:text-lg">
              B.Tech in Computer Science and Engineering
            </p>
            <p className="text-gray-300 text-sm md:text-base">CGPA: 9.36</p>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative ml-8 sm:ml-16 md:ml-20 p-4 sm:p-6 md:p-8 rounded-2xl 
              bg-[rgba(255,255,255,0.05)] backdrop-blur-md 
              border border-[rgba(34,211,238,0.3)] 
              shadow-lg hover:shadow-cyan-500/40 transition-all"
          >
            {/* Glowing dot */}
            <span className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.9)] animate-ping" />
            <span className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />

            <div className="text-xl md:text-2xl font-semibold text-white mb-4">
              Certifications
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm md:text-base">
              <li>Full Stack Web Development • 8 Weeks • Internshala</li>
              <li>Web Development • 8 Weeks • Brillica Services</li>
              <li>Introduction to JavaScript • 3 Hours • Great Learning</li>
              <li>
                Automated Feature Extraction from High-Resolution Images • 7.5
                Hours • IIRS
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
