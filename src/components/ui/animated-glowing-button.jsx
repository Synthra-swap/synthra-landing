import React from "react";

export function AnimatedGlowingButton({
  href,
  children,
  className = "",
  ...props
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex shrink-0 items-center justify-center rounded-xl ${className}`}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-xl blur-[3px]">
        <span className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rotate-[60deg] bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] transition-transform duration-[2000ms] group-hover:rotate-[-120deg]" />
      </span>

      <span className="pointer-events-none absolute inset-[1px] -z-10 overflow-hidden rounded-[11px] blur-[2px]">
        <span className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rotate-[82deg] bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] transition-transform duration-[2000ms] group-hover:rotate-[-98deg]" />
      </span>

      <span className="pointer-events-none absolute inset-[2px] -z-10 overflow-hidden rounded-[10px] blur-[1px]">
        <span className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rotate-[83deg] bg-[conic-gradient(rgba(0,0,0,0)_0%,#a099d8,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#dfa2da,rgba(0,0,0,0)_58%)] brightness-125 transition-transform duration-[2000ms] group-hover:rotate-[-97deg]" />
      </span>

      <span className="pointer-events-none absolute inset-[3px] -z-10 overflow-hidden rounded-[10px]">
        <span className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rotate-[70deg] bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)] brightness-125 transition-transform duration-[2000ms] group-hover:rotate-[-110deg]" />
      </span>

      <span className="relative inline-flex h-10 items-center rounded-[10px] border border-white/8 bg-[linear-gradient(180deg,#141319,#09090c)] px-5 text-[13px] font-semibold tracking-[-0.01em] text-white transition-colors duration-300 group-hover:bg-[linear-gradient(180deg,#191822,#0b0b10)]">
        <span className="pointer-events-none absolute left-2 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-fuchsia-500/45 blur-xl opacity-80 transition-opacity duration-500 group-hover:opacity-0" />
        <span className="relative z-10">{children}</span>
      </span>
    </a>
  );
}
