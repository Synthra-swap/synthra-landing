import React from 'react';
import { motion } from 'framer-motion';

const perpFeatures = [
  {
    title: 'Up to 100× Leverage',
    description:
      'Flexible leverage on synthetic perps, powered by oracle-based pricing and efficient margin management.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 6-6" />
      </svg>
    ),
  },
  {
    title: 'Oracle-Based Funding',
    description:
      'Dynamic funding rates derived from index prices to keep synthetic markets aligned with spot.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'No Expiry',
    description:
      'Perpetual contracts with no expiry, no rollover, and continuous liquidity around the clock.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-5.095-8 0-8z" />
        <path d="M5.822 8c-5.096 0-5.096 8 0 8 5.095 0 5.095-8 0-8z" />
      </svg>
    ),
  },
  {
    title: 'Low Slippage Execution',
    description:
      'Virtual liquidity and price impact controls designed to minimize slippage on large trades.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const PerpsSection = () => {
  return (
    <section className="w-full bg-black text-white py-24 relative overflow-hidden">
      {/* Subtle background glows — matching site style */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(97,20,241,0.12) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-2/3 h-2/3 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 80%, rgba(255,69,219,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-5xl font-semibold mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.2,
            }}
          >
            <span style={{
              background: 'linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>Perpetual</span>{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #44169b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>Trading</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base">
            Institutional-grade perpetual futures with deep liquidity, unified margin, and up to 100× leverage.
          </p>
        </motion.div>

        {/* Hero Card with video */}
        <motion.div
          className="rounded-3xl overflow-hidden relative mb-16"
          style={{
            background:
              'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(232,121,168,0.08) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid md:grid-cols-2 items-center">
            {/* Text content */}
            <div className="p-8 sm:p-12 relative z-10">
              <h3
                className="text-2xl sm:text-3xl font-semibold mb-4"
                style={{ lineHeight: 1.25, fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
              >
                Maximum Capital Efficiency.{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #44169b, #ff45db)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Zero Compromise.
                </span>
              </h3>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                Deep liquidity powered by an on-chain CLOB engine. Trade major
                assets with up to 50× leverage and unified margin across all positions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
                  onClick={() => window.open('https://app.synthra.org', '_blank')}
                >
                  Start Trading
                </button>
                <button
                  className="px-6 py-3 bg-transparent border border-white/[0.12] text-white font-medium rounded-full hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 text-sm"
                  onClick={() => window.open('https://docs.synthra.org', '_blank')}
                >
                  Documentation →
                </button>
              </div>
            </div>

            {/* Video element */}
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[280px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="https://framerusercontent.com/assets/l3VII6qSLYW8OducErPQZazEcO0.mp4"
                  type="video/mp4"
                />
              </video>
              {/* Gradient overlay to blend into card */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.6)] via-transparent to-transparent md:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent md:hidden" />
            </div>
          </div>
        </motion.div>

        {/* Specs Strip — compact horizontal layout instead of card grid */}
        <motion.div
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            {perpFeatures.map((feature, index) => (
              <div
                key={index}
                className="px-6 py-6 sm:py-8 text-center group hover:bg-white/[0.02] transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#6114f1] to-[#ff45db] flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {feature.title}
                </h4>
                <p className="text-white/30 text-xs leading-relaxed hidden sm:block">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerpsSection;