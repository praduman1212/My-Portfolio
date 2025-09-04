"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          <Sphere visible args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial
              color="#9333ea"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.6}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Heading */}
      <h2 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16 z-10">
        Education & Certifications
      </h2>

      {/* Timeline Layout */}
      <div className="relative w-full max-w-5xl px-8">
        <div className="border-l-2 border-gradient-to-b from-purple-500 to-cyan-500 absolute h-full left-6 top-0"></div>
        <div className="space-y-12">
          {/* Education Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative ml-16 p-6 rounded-2xl bg-[rgba(3,0,20,0.55)] border border-[#2A0E61] shadow-lg hover:shadow-purple-500/50"
          >
            <span className="absolute -left-10 top-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
            <div className="text-2xl font-semibold text-white">Uttaranchal University</div>
            <div className="text-sm text-gray-400">Dehradun, Uttarakhand</div>
            <div className="text-sm text-gray-400">Sep 2021 – May 2025</div>
            <p className="mt-3 text-gray-200">B.Tech in Computer Science and Engineering</p>
            <p className="text-gray-300">CGPA: 9.36</p>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative ml-16 p-6 rounded-2xl bg-[rgba(3,0,20,0.55)] border border-[#2A0E61] shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="absolute -left-10 top-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></span>
            <div className="text-xl font-semibold text-white mb-4">Certifications</div>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
              <li>Full Stack Web Development • 8 Weeks • Internshala</li>
              <li>Web Development • 8 Weeks • Brillica Services</li>
              <li>Introduction to JavaScript • 3 Hours • Great Learning</li>
              <li>Automated Feature Extraction from High-Resolution Images • 7.5 Hours • IIRS</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
