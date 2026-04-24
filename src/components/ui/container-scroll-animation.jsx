"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center start"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.9, 0.985] : [1.015, 1],
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, -54]);

  return (
    <section
      ref={containerRef}
      className="relative flex h-[44rem] items-start justify-center overflow-hidden px-4 pb-10 pt-20 md:h-[64rem] md:px-8 md:pt-24"
    >
      <div
        className="relative w-full max-w-7xl"
        style={{ perspective: "1100px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </section>
  );
}

function Header({ translate, titleComponent }) {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="relative z-10 mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
}

function Card({ rotate, scale, children }) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 0 rgba(0,0,0,0), 0 18px 40px rgba(0,0,0,0.28), 0 60px 90px rgba(76,29,149,0.18)",
      }}
      className="mx-auto mt-8 h-[18rem] w-full max-w-6xl rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-2 backdrop-blur-sm md:mt-12 md:h-[38rem] md:rounded-[34px] md:p-4"
    >
      <div className="h-full w-full overflow-hidden rounded-[22px] border border-white/8 bg-[#050505] md:rounded-[26px]">
        {children}
      </div>
    </motion.div>
  );
}
