import React from "react";
import screen from "../assets/screen.png";
import { ContainerScroll } from "./ui/container-scroll-animation";

export default function ScrollShowcase({
  title = "A new standard for ",
  highlightedWord = "DECENTRALISED",
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div className="relative overflow-hidden bg-black">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-80"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(147,51,234,0.2), transparent 62%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.14), transparent 22%, transparent 74%, rgba(0,0,0,0.82))",
          }}
        />

        <ContainerScroll
          titleComponent={
            <div
              className="mx-auto max-w-4xl px-4 text-white"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/38">
                Synthra infrastructure
              </p>
              <h2 className="text-[2rem] font-medium leading-[0.96] tracking-[-0.07em] text-white sm:text-[2.75rem] md:text-[4.5rem] font-[Playfair_Display] italic">
                {title}
                <span className="font-semibold text-fuchsia-200 font-[Syne] italic">
                  {" "}
                  {highlightedWord}{" "}
                </span><br />
                exchange
              </h2>
            </div>
          }
        >
          <img
            src={screen}
            alt="Synthra app interface"
            className="h-full w-full object-cover object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
  );
}
