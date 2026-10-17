import Image from "next/image";

type DemoPhotoProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function DemoPhoto({
  src,
  alt,
  priority = false,
  className = "object-cover",
  sizes = "100vw",
}: DemoPhotoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
