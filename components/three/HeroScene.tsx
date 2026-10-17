"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import type { Group } from "three";

function Wireform({ isDark }: { isDark: boolean }) {
  const group = useRef<Group>(null);
  const { pointer } = useThree();
  const primary = isDark ? "#38bdf8" : "#1e293b";
  const ghost = isDark ? "#818cf8" : "#0d9488";

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.18;
    g.rotation.x += delta * 0.06;
    g.rotation.y += pointer.x * 0.08;
    g.rotation.x += pointer.y * 0.05;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[2.15, 1]} />
        <meshBasicMaterial color={primary} wireframe transparent opacity={0.88} />
      </mesh>
      <mesh scale={0.97} rotation={[0, Math.PI / 4, 0]}>
        <icosahedronGeometry args={[2.15, 1]} />
        <meshBasicMaterial color={ghost} wireframe transparent opacity={isDark ? 0.14 : 0.2} />
      </mesh>
    </group>
  );
}

function SceneContent({ isDark }: { isDark: boolean }) {
  const fogColor = isDark ? "#0a0d14" : "#f6f3ec";
  return (
    <>
      <fog attach="fog" args={[fogColor, 7, 15]} />
      <Wireform isDark={isDark} />
    </>
  );
}

export default function HeroScene() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!reduce);
  }, []);

  if (!enabled) return null;

  return (
    <Canvas
      key={resolvedTheme ?? "dark"}
      className="h-full w-full"
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <SceneContent isDark={isDark} />
    </Canvas>
  );
}
