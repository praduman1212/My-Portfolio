import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[rgba(3,0,20,0.55)] transition hover:scale-[1.02]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
      />
      <div className="relative p-3 sm:p-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
          {title}
        </h1>
        <p className="mt-1 sm:mt-2 text-gray-300 text-sm sm:text-base">
          {description}
        </p>
      </div>
    </Link>
  );
};
