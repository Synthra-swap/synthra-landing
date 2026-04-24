"use client";

import React from "react";
import uomiLogo from "../../assets/UOMI_white.png";
import coinGecko from "../../assets/CG-Wordmark@2x-2.png";
import theGraph from "../../assets/theGraph.png";
import arcLogo from "../../assets/Arc_Icon_White.png";
import pythLogo from "../../assets/pyth.png";
import robinhoodLogo from "../../assets/robinhood-logo-white.png";
import { InfiniteSlider } from "./infinite-slider";
import { ProgressiveBlur } from "./progressive-blur";
import { Sparkles } from "./sparkles";

const logos = [
  { id: "uomi", src: uomiLogo, alt: "UOMI", className: "h-8 w-auto md:h-10" },
  { id: "coingecko", src: coinGecko, alt: "CoinGecko", className: "h-8 w-auto md:h-10" },
  { id: "thegraph", src: theGraph, alt: "The Graph", className: "h-8 w-auto md:h-10" },
  { id: "arc", src: arcLogo, alt: "Arc", className: "h-10 w-auto md:h-12" },
  { id: "pyth", src: pythLogo, alt: "Pyth Network", className: "h-8 w-auto md:h-10" },
  { id: "robinhood", src: robinhoodLogo, alt: "Robinhood", className: "h-8 w-auto md:h-10" },
];

export function PartnersSparklesStrip() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white md:py-28">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/35">
            Partners
          </p>
          <h2 className="text-3xl font-medium tracking-[-0.06em] text-white md:text-5xl">
            Trusted infrastructure.
            <br />
            <span className="text-white/72">Integrated where it matters.</span>
          </h2>
        </div>

        <div className="relative mt-10 h-[104px] w-full md:mt-12">
          <InfiniteSlider
            className="flex h-full w-full items-center"
            duration={18}
            durationOnHover={26}
            gap={72}
          >
            {logos.map(({ id, src, alt, className }) => (
              <div key={id} className="flex shrink-0 items-center justify-center">
                <img
                  src={src}
                  alt={alt}
                  className={`${className} shrink-0 object-contain opacity-72 transition-opacity duration-300 hover:opacity-100`}
                />
              </div>
            ))}
          </InfiniteSlider>

          <ProgressiveBlur
            className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-36"
            direction="left"
            blurIntensity={0.8}
          />
          <ProgressiveBlur
            className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-36"
            direction="right"
            blurIntensity={0.8}
          />
        </div>
      </div>

      <div className="relative -mt-16 h-72 w-full overflow-hidden [mask-image:radial-gradient(55%_55%,white,transparent)] md:-mt-10 md:h-80">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,rgba(131,80,232,0.55),transparent_68%)] before:opacity-55" />
        <div className="absolute -left-1/2 top-1/2 z-10 aspect-[1/0.72] w-[200%] rounded-[100%] border-t border-white/10 bg-black/90" />
        <Sparkles
          density={1100}
          speed={0.6}
          opacity={0.8}
          opacitySpeed={2.2}
          color="#ffffff"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </section>
  );
}
