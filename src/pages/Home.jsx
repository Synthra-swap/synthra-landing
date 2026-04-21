
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';

import TradingFeaturesSection from '../components/TradingFeaturesSection';

import PerpsSection from '../components/PerpsSection';

import ScrollShowcase from '../components/ScrollShowcase';

import Puprle from '../components/purpleSection';
import WhySynthraSection from '../components/WhySynthraSection';
import React, { useState, useEffect, useRef } from 'react';


const FadeIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const cardClass = "rounded-2xl border border-white/[0.06] bg-white/[0.02]";


  const pillars = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
          <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 6-6" />
        </svg>
      ),
      label: 'Concentrated Liquidity',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
          <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
      ),
      label: 'Dynamic Pricing',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-purple-400">
          <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      label: 'Modular Design',
    },
  ];

  const features = [
    {
      title: 'Multi-token Support',
      desc: 'Stablecoins, volatile tokens, and custom assets within any pool.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400">
          <circle cx="8" cy="8" r="6" /><circle cx="16" cy="16" r="6" />
        </svg>
      ),
    },
    {
      title: 'Fee Tier Customization',
      desc: 'Adapt fee models to match volatility, token type, and behavior.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400">
          <path d="M12 2v20M2 12h20" /><path d="M17 7l-5 5-5-5" />
        </svg>
      ),
    },
    {
      title: 'Liquidity Layer Modularity',
      desc: 'Use pools as building blocks for vaults, extensions, or structured products.',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400">
          <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2" />
        </svg>
      ),
    },
  ];


const Home = () => {
  return (
    <div style={{overflowX: 'clip'}} >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&display=swap');
        .bg-gradient-to-br { background: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
        .bg-gradient-to-t { background: linear-gradient(to top, var(--tw-gradient-stops)); }
        .bg-gradient-to-l { background: linear-gradient(to left, var(--tw-gradient-stops)); }
        .bg-gradient-to-tl { background: linear-gradient(to top left, var(--tw-gradient-stops)); }
      `}</style>
      <SEO
        title="Synthra — All-in-One DEX on Arc, Robinhood & Emerging EVM Chains"
        description="Synthra is the all-in-one decentralized exchange for Arc, Robinhood and emerging EVM chains. Swap, perpetuals up to 100x leverage, cross-chain bridge, token launchpad & developer API — low fees, deep liquidity, one protocol."
        path="/"
        faq={[
          {
            question: 'What is Synthra?',
            answer: 'Synthra is an all-in-one decentralized exchange (DEX) built for emerging EVM chains like Arc and Robinhood. It combines spot trading with concentrated liquidity, perpetual futures with up to 100x leverage, a cross-chain bridge, token launchpad, and developer API into a single protocol.',
          },
          {
            question: 'Which blockchains does Synthra support?',
            answer: 'Synthra is live on Arc (by Circle) and Robinhood chain, with plans to expand to additional emerging EVM-compatible networks. The protocol is designed specifically for new and underserved chains where deep liquidity is needed most.',
          },
          {
            question: 'What can I do on Synthra?',
            answer: 'You can swap tokens with concentrated liquidity pools, trade perpetual futures with up to 100x leverage, bridge assets across chains, launch tokens via the launchpad, and build on top of Synthra using its API. All with low gas fees (~$0.001) and fast execution (~400ms).',
          },
          {
            question: 'Is Synthra the best DEX on Arc?',
            answer: 'Synthra is the leading decentralized exchange on Arc blockchain, offering the deepest liquidity, lowest fees, and the most complete feature set including spot, perps, bridge, and launchpad — all in one protocol.',
          },
          {
            question: 'Does Synthra have a token?',
            answer: 'Synthra currently does not have a native token. The protocol focuses on building the best trading infrastructure first. Follow @Synthra_swap on Twitter for updates.',
          },
        ]}
      />
      <HeroSection />

            <ScrollShowcase />
      {/* <Separator direction="right" color='rgb(201, 53, 235)' marginY="8rem" /> */}

      
      <div style={{ position: 'relative', zIndex: 10, marginTop: '-60px' }}>
      <TradingFeaturesSection />

          <Puprle />
      
      <PerpsSection />

  

      </div>{/* close position:relative div */}

      {/* ═══════════════════════════════════════════
          WHY SYNTHRA — scroll-activated 2-column
          (must be outside overflow/position containers for sticky to work)
          ═══════════════════════════════════════════ */}
      <WhySynthraSection />

      {/* ═══════════════════════════════════════════
          CLOSING SECTION — Ecosystem + Final CTA
          ═══════════════════════════════════════════ */}

   <div className="w-full bg-black text-white relative overflow-hidden">

      {/* Background glows */}
      <div
        className="absolute bottom-0 left-0 w-full h-2/3 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(232,121,168,0.18), rgba(168,85,247,0.08), transparent)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-2/3 h-full pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(232,121,168,0.14), rgba(168,85,247,0.05), transparent)',
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.1) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-64 pointer-events-none z-30"
        style={{
          background: 'linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.3) 30%, transparent 100%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-30"
        style={{
          background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
        }}
      />

      <section className="max-w-6xl mx-auto px-4 py-24 relative z-10">
        {/* Heading */}
       
      </section>

    </div>
  
  
    </div>
  );
};

export default Home;