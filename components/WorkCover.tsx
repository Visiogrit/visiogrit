import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";

type WorkCoverProps = {
  study: CaseStudy;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function WorkCover({
  study,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
}: WorkCoverProps) {
  return (
    <Image
      src={study.coverImage}
      alt={study.coverImageAlt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] ${className}`}
    />
  );
}
