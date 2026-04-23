"use client";

import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export function ShaderBackground({ children }) {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <svg className="absolute inset-0 h-0 w-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.004" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.35" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.03
                      0 1 0 0 0.01
                      0 0 1 0 0.07
                      0 0 0 0.92 0"
              result="tint"
            />
          </filter>
        </defs>
      </svg>

      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={["#07030F", "#2A0F52", "#5B21B6", "#A21CAF", "#11061F"]}
        speed={0.22}
        backgroundColor="#030106"
      />

      <MeshGradient
        className="absolute inset-0 h-full w-full opacity-45"
        colors={["#12051F", "#E879F9", "#6D28D9", "#0F0717"]}
        speed={0.14}
        wireframe="true"
        backgroundColor="transparent"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.18),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(168,85,247,0.22),transparent_24%),radial-gradient(circle_at_50%_78%,rgba(91,33,182,0.24),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/28 via-black/8 to-black" />

      <motion.div
        className="pointer-events-none absolute left-[8%] top-[18%] h-40 w-40 rounded-full bg-fuchsia-500/16 blur-3xl"
        animate={{
          opacity: isActive ? 0.95 : 0.55,
          scale: isActive ? 1.1 : 0.92,
          x: isActive ? 18 : 0,
          y: isActive ? -10 : 0,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-[12%] right-[10%] h-48 w-48 rounded-full bg-violet-500/18 blur-3xl"
        animate={{
          opacity: isActive ? 0.9 : 0.45,
          scale: isActive ? 1.08 : 0.96,
          x: isActive ? -16 : 0,
          y: isActive ? 10 : 0,
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {children}
    </section>
  );
}

export function HeroOrbitalBadge() {
  return (
    <div className="pointer-events-none absolute bottom-7 right-6 z-20 hidden md:block lg:right-10">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <PulsingBorder
          colors={["#F5D0FE", "#E879F9", "#C084FC", "#8B5CF6", "#7C3AED"]}
          colorBack="#00000000"
          speed={1.25}
          roundness={1}
          thickness={0.12}
          softness={0.25}
          intensity={4.5}
          spotsPerColor={4}
          spotSize={0.11}
          pulse={0.14}
          smoke={0.45}
          smokeSize={4}
          scale={0.72}
          rotation={0}
          frame={9161408.251009725}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
          <ArrowUpRight className="h-4 w-4 text-white/80" />
        </div>

        <motion.svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ transform: "scale(1.55)" }}
        >
          <defs>
            <path
              id="hero-circle"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text className="fill-white/70 text-[10px] tracking-[0.28em] uppercase">
            <textPath href="#hero-circle" startOffset="0%">
              synthra • liquidity • synthra • liquidity •
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  );
}
