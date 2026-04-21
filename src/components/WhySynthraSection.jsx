import React, { useState, useEffect, useRef } from 'react';

const features = [
  {
    title: 'Spot Trading',
    description:
      'Swap any token with concentrated liquidity, smart routing, and near-zero gas. The fastest, cheapest swap UX on emerging chains.',
    stat: '~$0.001 gas',
  },
  {
    title: 'Perpetual Futures',
    description:
      'Trade synthetic perps with up to 100× leverage, oracle-based funding rates, and unified margin — no expiry, no rollover.',
    stat: 'Up to 100×',
  },
  {
    title: 'Cross-Chain Bridge',
    description:
      'Move assets between chains seamlessly. Powered by trusted messaging layers for secure, fast bridging without leaving the protocol.',
    stat: 'Multi-chain',
  },
  {
    title: 'Curated Launchpad',
    description:
      'Launch tokens with built-in liquidity bootstrapping, fair distribution mechanics, and instant trading on Synthra pools.',
    stat: 'Fair launch',
  },
  {
    title: 'Developer API',
    description:
      'REST and WebSocket endpoints for quotes, execution, pool data, and analytics. Build bots, dashboards, or integrations in minutes.',
    stat: 'Full access',
  },
  {
    title: 'Concentrated Liquidity',
    description:
      'Provide liquidity within custom price ranges for maximum capital efficiency. Earn more fees with less capital deployed.',
    stat: 'Capital efficient',
  },
];

const WhySynthraSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionH = rect.height;
      const viewH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (sectionH - viewH)));
      const newIndex = Math.min(features.length - 1, Math.floor(progress * features.length));
      setActiveIndex(newIndex);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const active = features[activeIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@300;400&display=swap');

        .ws-section { font-family: 'Syne', sans-serif; }
        .ws-mono { font-family: 'DM Mono', monospace; }

        .ws-feat-title {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          line-height: 1.0;
          letter-spacing: -0.04em;
          white-space: nowrap;
          cursor: default;
          user-select: none;
        }

        .ws-desc-anim {
          animation: wsFadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes wsFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .ws-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.5);
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 12px 22px;
          cursor: pointer;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .ws-cta:hover {
          border-color: rgba(255,255,255,0.3);
          color: #fff;
          background: rgba(255,255,255,0.03);
        }
        .ws-cta:hover .ws-arrow { transform: translateX(4px); }
        .ws-arrow { transition: transform 0.3s ease; display: inline-block; }
      `}</style>

      <section
        ref={sectionRef}
        className="ws-section w-full bg-black text-white relative"
        style={{ minHeight: `${Math.max(100, features.length * 65)}vh` }}
      >
        <div style={{
          position: 'absolute',
          top: '35%',
          right: '20%',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(97,20,241,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
          transform: 'translate(50%, -50%)',
        }} />

        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 64px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '160px',
            alignItems: 'center',
          }}>

            {/* LEFT */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p className="ws-mono" style={{
                color: 'rgba(255,255,255,0.18)',
                fontSize: '10px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                margin: '0 0 40px',
              }}>
                Why Synthra
              </p>

              <div className="ws-desc-anim" key={`desc-${activeIndex}`}>
                <p className="ws-mono" style={{
                  color: 'rgba(168,85,247,0.7)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  margin: '0 0 16px',
                }}>
                  {active.stat}
                </p>

                <p style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  fontWeight: 400,
                  margin: '0 0 36px',
                  maxWidth: '280px',
                }}>
                  {active.description}
                </p>

                <button className="ws-cta" onClick={() => window.open('https://app.synthra.org', '_blank')}>
                  Launch App <span className="ws-arrow">→</span>
                </button>
              </div>
            </div>

            {/* RIGHT: big stacked titles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {features.map((feature, index) => {
                const isActive = index === activeIndex;
                const distance = Math.abs(index - activeIndex);
                const opacity = isActive ? 1 : Math.max(0.07, 0.20 - distance * 0.04);
                const fontSize = isActive
                  ? 'clamp(32px, 3.8vw, 52px)'
                  : distance === 1
                  ? 'clamp(24px, 2.8vw, 38px)'
                  : 'clamp(18px, 2vw, 28px)';

                return (
                  <div
                    key={index}
                    className="ws-feat-title"
                    style={{
                      fontSize,
                      color: isActive ? '#fff' : 'rgba(255,255,255,1)',
                      opacity,
                      whiteSpace: 'nowrap',
                      transform: isActive ? 'translateX(8px)' : 'translateX(0)',
                      transition: 'font-size 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease, transform 0.6s ease',
                    }}
                  >
                    {feature.title}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WhySynthraSection;