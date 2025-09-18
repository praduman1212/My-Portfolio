// import { HeroContent } from "@/components/sub/hero-content";

// export const Hero = () => {
//   return (
//     <div id="about-me" className="relative flex flex-col h-full w-full">
//       <video
//         autoPlay
//         muted
//         loop
//         className="rotate-180 absolute top-[-180px] sm:top-[-260px] md:top-[-340px] left-0 w-full h-full object-cover -z-20"
//       >
//         <source src="/videos/blackhole.webm" type="video/webm" />
//       </video>

//       <HeroContent />
//     </div>
//   );
// };
import dynamic from "next/dynamic";

// Lazy load the named export HeroContent
const HeroContent = dynamic(
  () => import("@/components/sub/hero-content").then(mod => mod.HeroContent),
  { ssr: false }
);

export const Hero = () => {
  return (
    <div id="about-me" className="relative flex flex-col h-full w-full">
      {/* Optimized background video */}
      <video
        autoPlay
        muted
        loop
        preload="none" // prevents heavy preloading
        poster="/images/blackhole-poster.jpg" // lightweight fallback
        className="rotate-180 absolute top-[-180px] sm:top-[-260px] md:top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Lazy-loaded HeroContent */}
      <HeroContent />
    </div>
  );
};
