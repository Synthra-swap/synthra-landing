import type React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export function ShinyButton({
  children,
  onClick,
  className = "",
  href,
  target,
  rel,
  ariaLabel,
}: ShinyButtonProps) {
  const Component = href ? "a" : "button";

  return (
    <>
      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-angle-offset {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-percent {
          syntax: "<percentage>";
          initial-value: 5%;
          inherits: false;
        }

        @property --gradient-shine {
          syntax: "<color>";
          initial-value: white;
          inherits: false;
        }

        .shiny-cta {
          --shiny-cta-bg: #000000;
          --shiny-cta-bg-subtle: #1a1026;
          --shiny-cta-fg: #ffffff;
          --shiny-cta-highlight: #6114f1;
          --shiny-cta-highlight-subtle: #ff45db;
          --animation: gradient-angle linear infinite;
          --duration: 3s;
          --shadow-size: 2px;
          --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);

          isolation: isolate;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: pointer;
          outline-offset: 4px;
          padding: 1rem 2rem;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 0.95rem;
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          border-radius: 360px;
          color: var(--shiny-cta-fg);
          background:
            linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg)) padding-box,
            conic-gradient(
              from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
              transparent,
              var(--shiny-cta-highlight) var(--gradient-percent),
              var(--gradient-shine) calc(var(--gradient-percent) * 2),
              var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
              transparent calc(var(--gradient-percent) * 4)
            ) border-box;
          box-shadow:
            inset 0 0 0 1px var(--shiny-cta-bg-subtle),
            0 10px 34px -20px rgba(97, 20, 241, 0.9);
          transition: var(--transition);
          transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine;
        }

        .shiny-cta.synthra-nav-shiny {
          min-height: 40px;
          padding: 0 1.05rem;
          font-size: 0.8125rem;
          letter-spacing: -0.005em;
          box-shadow:
            inset 0 0 0 1px var(--shiny-cta-bg-subtle),
            0 10px 34px -20px rgba(97, 20, 241, 0.9);
        }

        .shiny-cta.synthra-mobile-shiny {
          width: 100%;
          min-height: 46px;
          padding: 0 1rem;
          font-size: 0.9375rem;
        }

        .shiny-cta::before,
        .shiny-cta::after {
          content: "";
          pointer-events: none;
          position: absolute;
          inset-inline-start: 50%;
          inset-block-start: 50%;
          translate: -50% -50%;
          z-index: -1;
        }

        .shiny-cta:active {
          translate: 0 1px;
        }

        .shiny-cta::before {
          --size: calc(100% - var(--shadow-size) * 3);
          --position: 2px;
          --space: calc(var(--position) * 2);
          width: var(--size);
          height: var(--size);
          background: radial-gradient(
            circle at var(--position) var(--position),
            rgba(255, 255, 255, 0.86) calc(var(--position) / 4),
            transparent 0
          ) padding-box;
          background-size: var(--space) var(--space);
          background-repeat: space;
          mask-image: conic-gradient(
            from calc(var(--gradient-angle) + 45deg),
            black,
            transparent 10% 90%,
            black
          );
          border-radius: inherit;
          opacity: 0.35;
          z-index: -1;
        }

        .shiny-cta::after {
          --animation: shimmer linear infinite;
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(-50deg, transparent, var(--shiny-cta-highlight), transparent);
          mask-image: radial-gradient(circle at bottom, transparent 42%, black);
          opacity: 0.6;
        }

        .shiny-cta span {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
        }

        .shiny-cta,
        .shiny-cta::before,
        .shiny-cta::after {
          animation:
            var(--animation) var(--duration),
            var(--animation) calc(var(--duration) / 0.4) reverse paused;
          animation-composition: add;
        }

        .shiny-cta:is(:hover, :focus-visible) {
          --gradient-percent: 20%;
          --gradient-angle-offset: 95deg;
          --gradient-shine: var(--shiny-cta-highlight-subtle);
        }

        .shiny-cta:is(:hover, :focus-visible),
        .shiny-cta:is(:hover, :focus-visible)::before,
        .shiny-cta:is(:hover, :focus-visible)::after {
          animation-play-state: running;
        }


        @keyframes gradient-angle {
          to {
            --gradient-angle: 360deg;
          }
        }

        @keyframes shimmer {
          to {
            rotate: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shiny-cta,
          .shiny-cta::before,
          .shiny-cta::after {
            animation: none;
          }
        }
      `}</style>

      <Component
        className={`shiny-cta ${className}`}
        onClick={onClick}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        type={href ? undefined : "button"}
      >
        <span>{children}</span>
      </Component>
    </>
  );
}
