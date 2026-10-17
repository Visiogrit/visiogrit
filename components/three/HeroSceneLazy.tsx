"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-radial-glow bg-grid opacity-50" aria-hidden />
  ),
});

export function HeroSceneLazy() {
  const [show3d, setShow3d] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShow3d(!reduce);
  }, []);

  if (!show3d) {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-radial-glow bg-grid opacity-55"
      />
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_72%)]"
    >
      <HeroScene />
    </div>
  );
}
