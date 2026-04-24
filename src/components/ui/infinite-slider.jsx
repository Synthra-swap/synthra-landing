"use client";

import { cn } from "../../lib/utils";

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}) {
  const axisClass =
    direction === "horizontal" ? "flex-row" : "flex-col";
  const animationName =
    direction === "horizontal"
      ? reverse
        ? "marquee-horizontal-reverse"
        : "marquee-horizontal"
      : reverse
        ? "marquee-vertical-reverse"
        : "marquee-vertical";

  return (
    <>
      <style>{`
        @keyframes marquee-horizontal {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(calc(-50% - var(--marquee-gap) / 2), 0, 0); }
        }

        @keyframes marquee-horizontal-reverse {
          from { transform: translate3d(calc(-50% - var(--marquee-gap) / 2), 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        @keyframes marquee-vertical {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, calc(-50% - var(--marquee-gap) / 2), 0); }
        }

        @keyframes marquee-vertical-reverse {
          from { transform: translate3d(0, calc(-50% - var(--marquee-gap) / 2), 0); }
          to { transform: translate3d(0, 0, 0); }
        }
      `}</style>

      <div
        className={cn("overflow-hidden", className)}
        style={{
          ["--marquee-gap"]: `${gap}px`,
          ["--marquee-duration"]: `${duration}s`,
          ["--marquee-duration-hover"]: durationOnHover
            ? `${durationOnHover}s`
            : `${duration}s`,
        }}
      >
        <div
          className={cn("flex w-max will-change-transform", axisClass)}
          style={{
            gap: "var(--marquee-gap)",
            animation: `${animationName} var(--marquee-duration) linear infinite`,
            animationPlayState: "running",
          }}
          onMouseEnter={(event) => {
            if (!durationOnHover) return;
            event.currentTarget.style.animationDuration =
              "var(--marquee-duration-hover)";
          }}
          onMouseLeave={(event) => {
            if (!durationOnHover) return;
            event.currentTarget.style.animationDuration =
              "var(--marquee-duration)";
          }}
        >
          <div className={cn("flex shrink-0", axisClass)} style={{ gap: "var(--marquee-gap)" }}>
            {children}
          </div>
          <div
            aria-hidden="true"
            className={cn("flex shrink-0", axisClass)}
            style={{ gap: "var(--marquee-gap)" }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
