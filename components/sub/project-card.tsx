import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

/** Renders `**like this**` in copy as highlighted technology terms. */
function renderHighlightedDescription(description: string) {
  const parts = description.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span
        key={i}
        className="font-semibold text-cyan-300 [text-shadow:0_0_12px_rgba(34,211,238,0.35)]"
      >
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

export const ProjectCard = ({ src, title, description, link }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const plainWords = description.replace(/\*\*/g, "").trim().split(/\s+/).filter(Boolean);

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.7)] transition transform hover:scale-105 hover:shadow-purple-500/40"
    >
      <div className="p-3 sm:p-4">
        {/* Project Title */}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400 mb-2">
          {title}
        </h1>

        {/* Full Image */}
        <div className="flex-1 flex items-center justify-center p-3">
          <Image
            src={src}
            alt={title}
            width={600}
            height={400}
            className="max-h-[260px] w-auto object-contain rounded-lg" // Rounded corners
            loading="lazy" // Lazy load for better performance
            placeholder="blur" // Optional: show blurred preview while loading
            blurDataURL={src} // Required if using placeholder="blur"
          />
        </div>

        {/* Description */}
        <p
          className={`mt-2 text-gray-300 text-sm sm:text-base transition-all duration-300 ${
            !isExpanded ? "line-clamp-4" : ""
          }`}
        >
          {renderHighlightedDescription(description)}
        </p>

        {/* Read More / Less Button */}
        {plainWords.length > 25 && (
          <button
            onClick={(e) => {
              e.preventDefault(); // prevent Link navigation
              setIsExpanded(!isExpanded);
            }}
            className="mt-2 text-cyan-400 text-sm hover:underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </Link>
  );
};
