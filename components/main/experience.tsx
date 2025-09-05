"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useRef } from "react";

const EarthBall = () => {
  const meshRef = useRef<any>();
  const texture = useLoader(
    TextureLoader,
    "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg" // realistic earth texture
  );

  // Rotate continuously
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={meshRef} scale={1.4}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
};

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

  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* === Background Orb === */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 5, 2]} intensity={1.2} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate />
          <Sphere visible args={[1, 100, 200]} scale={3}>
            <meshStandardMaterial color="#32165a" metalness={0.6} roughness={0.3} />
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

        {/* Interactive Earth Ball */}
<motion.div
  style={{ top: orbY }}
  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] rounded-full overflow-hidden shadow-[0_0_25px_rgba(34,211,238,0.9)]"
>
  <Canvas camera={{ position: [0, 0, 3] }}>
    <ambientLight intensity={0.8} />
    <directionalLight position={[5, 3, 2]} />
    <EarthBall />
  </Canvas>
</motion.div>


        {/* Timeline Cards */}
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
              <div className="w-[85%] md:w-[46%] p-6 rounded-2xl bg-[rgba(3,0,20,0.55)] border border-[#2A0E61] shadow-md hover:shadow-cyan-500/40 transition">
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
