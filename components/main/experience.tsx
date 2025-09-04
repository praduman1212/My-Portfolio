"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const experiences = [
  {
    company: "CYBERCLIPPER SOLUTIONS LLP",
    role: "Software Engineer",
    date: "Jan 2025 – Present",
    points: [
      "Led a cross-functional team delivering scalable, high-performance web apps.",
      "Owned platform integrations: REST APIs, payment gateways, and third-party services.",
      "Hired and mentored developers; improved interview loops and onboarding.",
      "Drove project planning and delivery to align software outcomes with business goals.",
      "Improved web visibility using Search Console, Analytics, and SEO best practices.",
    ],
  },
  {
    company: "NEXOCIDE",
    role: "Full Stack Developer Intern",
    date: "Aug 2024 – Sep 2024",
    points: [
      "Built end-to-end features with Next.js, Tailwind CSS, and Firebase; +15% engagement.",
      "Designed REST APIs and optimized database queries; reduced response time by 20%.",
    ],
  },
  {
    company: "SKYNET E-SOLUTION PVT LTD",
    role: "Software Developer Intern",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Improved page load speeds by 25% using PHP, JavaScript, HTML5, CSS3, Bootstrap.",
      "Contributed to CI/CD pipelines; delivered zero-downtime launches and smoother releases.",
    ],
  },
];

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Orb follows scroll progress (0 → top, 1 → bottom)
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* === 3D Animated Background === */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={2} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.6}
          />
          {/* Floating glowing orb */}
          <Sphere visible args={[1, 100, 200]} scale={3}>
            <MeshDistortMaterial
              color="#9333ea"
              distort={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.6}
            />
          </Sphere>
        </Canvas>
      </div>

      {/* Heading */}
      <h2 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
        Experience
      </h2>

      {/* Timeline */}
      <div className="relative w-full max-w-6xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-purple-500 via-pink-400 to-cyan-500 shadow-[0_0_15px_rgba(147,51,234,0.7)]" />

        {/* Dynamic moving orb */}
        <motion.div
          style={{ top: orbY }}
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-[0_0_25px_rgba(34,211,238,0.9)]"
        />

        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, type: "spring" }}
              viewport={{ once: true }}
              className={`relative flex ${
                i % 2 === 0 ? "justify-start pr-12" : "justify-end pl-12"
              }`}
            >
             

              {/* Experience Card */}
              <div className="w-[85%] md:w-[46%] p-6 rounded-2xl bg-[rgba(3,0,20,0.55)] border border-[#2A0E61] shadow-md hover:shadow-cyan-500/40 transition">
                {/* Top row: company | role | duration */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-lg font-bold text-purple-300">
                      {exp.company}
                    </div>
                    <div className="text-sm text-gray-300">{exp.role}</div>
                  </div>
                  <div className="text-xs text-gray-400 whitespace-nowrap">
                    {exp.date}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
