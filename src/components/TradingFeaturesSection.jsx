import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  ReferenceLine,
} from 'recharts';
import { useSpring, animated, easings, to as interpolate } from '@react-spring/web';
import { useTopPools } from '../hooks/useSubgraphData';
import { PartnersSparklesStrip } from './ui/partners-sparkles-strip';

/* ─────────────────────────────────────────────
   ORIGINAL ANIMATION HELPERS (unchanged logic)
   ───────────────────────────────────────────── */

const generateCurveData = () => (
  Array.from({ length: 181 }, (_, i) => {
    const x = 1 + i * 0.05;
    return { x, price: Math.log(10 / x) };
  })
);

const AnimatedDot = ({ x, y }) => {
  try {
    return (
      <animated.circle
        cx={x.to(val => `${val || 0}%`)}
        cy={y.to(val => `${(val > 60 ? val + 3 : val + 5) || 0}%`)}
        r={4}
        stroke="white"
        strokeWidth={1.5}
        fill="url(#colorPrice)"
      />
    );
  } catch (error) {
    console.warn('AnimatedDot render error:', error);
    return <circle cx="50%" cy="50%" r={4} stroke="white" strokeWidth={1.5} fill="url(#colorPrice)" />;
  }
};

const AnimatedLabel = ({ x, y, label }) => {
  try {
    return (
      <animated.div
        className="absolute text-xs text-white z-10"
        style={{
          left: x.to(val => `${(val || 0) + 7}%`),
          top: y.to(val => `${(val || 0) - 16}%`),
          transform: 'translateX(-50%)',
        }}
      >
        <div className="bg-black px-2 py-1 rounded-full border border-white/20">
          <animated.span>{label.to(val => val || '$0.00')}</animated.span>
        </div>
      </animated.div>
    );
  } catch (error) {
    console.warn('AnimatedLabel render error:', error);
    return (
      <div className="absolute text-xs text-white z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-black px-2 py-1 rounded-full border border-white/20">
          <span>$0.00</span>
        </div>
      </div>
    );
  }
};

const AnimatedLine = ({ x }) => {
  try {
    return (
      <animated.line
        x1={x.to(val => `${val || 0}%`)}
        x2={x.to(val => `${val || 0}%`)}
        y1="0"
        y2="100%"
        stroke="#ffffff"
        strokeDasharray="3 3"
        strokeOpacity={0.5}
      />
    );
  } catch (error) {
    console.warn('AnimatedLine render error:', error);
    return (
      <line
        x1="50%"
        x2="50%"
        y1="0"
        y2="100%"
        stroke="#ffffff"
        strokeDasharray="3 3"
        strokeOpacity={0.5}
      />
    );
  }
};

/* ─────────────────────────────────────────────
   ORIGINAL ScrollingTokenPrices (unchanged logic)
   ───────────────────────────────────────────── */

const ScrollingTokenPrices = ({ isMobile }) => {
  const containerRef = useRef(null);
  const { pools, loading, error } = useTopPools(10);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const tokenPairs = useMemo(() => {
    const fallbackData = [
      ['USDC-USDT', '12.737%'],
      ['WUOMI-USDC', '21.321%'],
      ['UOMI-USDC', '32.406%'],
      ['WETH-USDC', '44.223%'],
      ['BTC-USDC', '18.529%'],
      ['ETH-UOMI', '27.843%'],
      ['AVAX-USDC', '15.216%'],
      ['SOL-USDC', '24.182%'],
      ['BNB-USDC', '19.374%'],
    ];

    if (loading || error || !pools || pools.length === 0) {
      return fallbackData;
    }

    try {
      return pools.map(pool => {
        if (!pool || !pool.token0 || !pool.token1) {
          return ['TOKEN-TOKEN', '0.000%'];
        }
        const pair = `${pool.token0?.symbol || 'TOKEN0'}-${pool.token1?.symbol || 'TOKEN1'}`;
        const changePercent = ((parseFloat(pool.token0Price || 0) % 50) + 5).toFixed(3);
        return [pair, `${changePercent}%`];
      });
    } catch (err) {
      console.warn('Error processing pools data:', err);
      return fallbackData;
    }
  }, [pools, loading, error]);

  const repeatedPairs = useMemo(() => {
    return [...tokenPairs, ...tokenPairs, ...tokenPairs];
  }, [tokenPairs]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let scrollInterval;
    
    if (isClient && containerRef.current && tokenPairs.length > 0) {
      scrollInterval = setInterval(() => {
        setScrollPosition(prev => {
          const itemWidth = isMobile ? 120 : 150;
          const totalWidth = tokenPairs.length * itemWidth;
          if (prev <= -totalWidth) return 0;
          return prev - (isMobile ? 0.5 : 1);
        });
      }, isMobile ? 30 : 20);
    }

    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [tokenPairs.length, isClient, isMobile]);

  return (
    <div className="overflow-hidden w-full whitespace-nowrap relative">
      {isClient && tokenPairs.length > 0 ? (
        <div 
          ref={containerRef}
          className={`inline-flex gap-6 ${isMobile ? 'text-xs' : 'text-sm'} text-white/50`}
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {repeatedPairs.map(([pair, percent], i) => (
            <div key={`${pair}-${i}`} className={`mx-2 my-1 whitespace-nowrap ${isMobile ? 'min-w-[100px]' : 'min-w-[140px]'}`}>
              <span className="text-white/70">{pair}</span> <span className="text-emerald-400">{percent}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-8 flex items-center">
          <div className={`animate-pulse ${isMobile ? 'text-xs' : 'text-sm'} text-white/40`}>
            Loading trading pairs...
          </div>
        </div>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   NEW HELPERS — Animated counter + FadeIn
   ───────────────────────────────────────────── */

const AnimatedNumber = ({ target, prefix = '', suffix = '' }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={ref}>{prefix}{value.toLocaleString()}{suffix}</span>;
};

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

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

const TradingFeaturesSection = () => {
  // ALL original hooks — unchanged
  const data = useMemo(generateCurveData, []);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('Infra');

  const [indices] = useState({
    start1: 40,
    end1: 20,
    start2: 80,
    end2: 100,
  });

  const [springProps, api] = useSpring(() => ({
    t: 0,
    config: { duration: 1000, easing: easings.easeInOutCubic },
  }));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(prev => !prev);
      api.start({ t: isExpanded ? 0 : 1 });
    }, 3000);
    return () => clearInterval(interval);
  }, [isExpanded, api]);

  // Original getAnimatedPosition — unchanged
  const getAnimatedPosition = (startIndex, endIndex) => {
    return springProps.t.to(t => {
      try {
        const actualStartIndex = Math.min(Math.max(0, startIndex), data.length - 1);
        const actualEndIndex = Math.min(Math.max(0, endIndex), data.length - 1);
        
        const idx = actualStartIndex + (actualEndIndex - actualStartIndex) * t;
        const low = Math.floor(idx);
        const high = Math.min(Math.ceil(idx), data.length - 1);
        const weight = idx - low;

        const dLow = data[low];
        const dHigh = data[high];

        if (!dLow || !dHigh || typeof dLow.x !== 'number' || typeof dLow.price !== 'number') {
          return { x: 50, y: 50, label: '$0.00' };
        }

        const x = dLow.x + (dHigh.x - dLow.x) * weight;
        const y = dLow.price + (dHigh.price - dLow.price) * weight;

        const xPct = ((x - 1) / (10 - 1)) * 100;
        const yMin = 0;
        const yMax = Math.max(...data.map(d => d.price));
        const yPct = ((yMax - y) / (yMax - yMin)) * 100;

        return { 
          x: Math.max(0, Math.min(100, xPct)), 
          y: Math.max(0, Math.min(100, yPct)), 
          label: `$${y.toFixed(2)}` 
        };
      } catch (error) {
        console.warn('getAnimatedPosition error:', error);
        return { x: 50, y: 50, label: '$0.00' };
      }
    });
  };

  const animatedPoint1 = getAnimatedPosition(indices.start1, indices.end1);
  const animatedPoint2 = getAnimatedPosition(indices.start2, indices.end2);
  const shouldShowChart = data && data.length > 0;

  // Partner & audit data
  const partnerCategories = {
    'Infra': ['UOMI Network', 'LayerZero', 'Pyth', 'Gelato', 'RedStone', 'Chainlink'],
    'DeFi': ['Aave', 'Uniswap', 'Curve', 'Lido', 'Pendle', 'Eigenlayer'],
    'Bridges': ['Wormhole', 'Axelar', 'LayerZero', 'Stargate', 'Across'],
    'Oracles': ['Pyth', 'Chainlink', 'RedStone', 'API3', 'Band Protocol'],
  };

  const auditors = ['Immunefi', 'Chaos Labs', 'PeckShield', 'Halborn', 'Certik', 'OpenZeppelin'];

  /* Card style helper */
  const cardClass = "rounded-2xl border border-white/[0.06] bg-white/[0.02]";

  return (
    <div className="w-full bg-black text-white">

      {/* ═══════════════════════════════════════════
          SECTION 1 — METRICS
          ═══════════════════════════════════════════ */}
      <PartnersSparklesStrip />

     
          <section className="relative max-w-6xl mx-auto px-4 pb-24">
          <FadeIn>
            <div className="relative flex justify-center">
            <h2
              className="text-[clamp(80px,18vw,220px)] font-light leading-none tracking-tighter select-none text-white/[0.08]"
              style={{
                fontFamily: 'goldman, serif',
              letterSpacing: '-0.02em',
              }}
            >
              SYNTHRA
            </h2>

            <FadeIn delay={0.2} className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-full max-w-lg z-10">
              <div
              className="rounded-3xl p-8 text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(139,92,246,0.5) 0%, rgba(192,132,252,0.35) 40%, rgba(232,121,168,0.3) 100%)',
                backdropFilter: 'blur(40px)',
                border: '1px solid rgba(192,132,252,0.2)',
              }}
              >
              <div className="absolute inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at 30% 20%, rgba(168,85,247,0.3) 0%, transparent 60%)',
              }} />
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 relative z-10" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}>
                The All-in-One <span style={{ color: '#a855f7' }}>DEX</span>.
              </h3>
              <p className="text-white/60 text-sm mb-6 relative z-10 max-w-xs mx-auto">
                Spot trading, perpetuals, launchpad, bridge & API: one protocol, zero compromise.
              </p>
              <button
                className="relative z-10 bg-white text-black text-sm font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                onClick={() => window.open('https://app.synthra.org', '_blank')}
              >
                Launch App →
              </button>
              </div>
            </FadeIn>
            </div>
          </FadeIn>
          <div className="h-24 sm:h-32" />
          </section>

          {/* ═══════════════════════════════════════════
            SECTION 3 — FEATURES BENTO (original animations)
            ═══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <FadeIn>
          <h2
            className="text-center text-3xl sm:text-5xl font-semibold mb-3"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              letterSpacing: '-0.035em',
              background: 'linear-gradient(180deg, #fff 30%, rgba(255,255,255,0.4) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Built for <span style={{
              background: 'linear-gradient(135deg, #7c3aed, #44169b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}>Speed</span>.
          </h2>
          <p className="text-center text-white/40 text-sm max-w-md mx-auto mb-14">
            CEX-grade execution with full DeFi sovereignty
          </p>
        </FadeIn>

        {isMobile ? (
          /* ── MOBILE LAYOUT ── */
          <div className="flex flex-col gap-5">
            {/* Swap */}
            <FadeIn>
              <div className={`${cardClass} p-6`}>
                <h2 className="text-2xl font-semibold mb-2">Swap</h2>
                <p className="text-sm text-white/40 mb-6">
                  About $0.001 gas, 400ms TTF, no surge pricing, ~0 failure rates. One of the best swap UX across crypto
                </p>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-white/50">
                    <div>• Best-in-class execution</div>
                    <div>• Cross-chain routing</div>
                    <div>• Zero slippage protection</div>
                    <div>• MEV protection</div>
                  </div>
                </div>
                <button 
                  className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-white/90 transition-colors text-sm"
                  onClick={() => window.open('https://app.synthra.org/#/swap', '_blank')}
                >
                  Trade Now →
                </button>
              </div>
            </FadeIn>

            {/* Concentrated Liquidity — ORIGINAL chart + animations */}
            <FadeIn delay={0.05}>
              <div className={`${cardClass} p-6`}>
                <h2 className="text-lg font-semibold mb-1">Concentrated Liquidity Pools</h2>
                <p className="text-xs text-white/40 mb-3">
                  Unlock greater capital efficiency by customising your LP position
                </p>
                <div className="h-40 mt-2 relative">
                  {shouldShowChart ? (
                    <>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorPriceMobile" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                            <linearGradient id="areaColorMobile" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                              <stop offset="100%" stopColor="#ec4899" stopOpacity={0.05} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="x" hide />
                          <YAxis hide domain={['auto', 'auto']} />
                          <Tooltip
                            content={({ active, payload }) => (
                              active && payload?.length ? (
                                <div className="bg-black text-white px-2 py-1 rounded text-xs">
                                  ${payload[0].value.toFixed(2)}
                                </div>
                              ) : null
                            )}
                          />
                          <Area type="monotone" dataKey="price" stroke="none" fill="url(#areaColorMobile)" />
                          <Line
                            type="monotone"
                            dataKey="price"
                            stroke="url(#colorPriceMobile)"
                            strokeWidth={2}
                            dot={false}
                            isAnimationActive={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                      <svg className="absolute inset-0 h-full w-full pointer-events-none z-20">
                        <AnimatedLine x={animatedPoint1.to(p => p.x)} />
                        <AnimatedDot x={animatedPoint1.to(p => p.x)} y={animatedPoint1.to(p => p.y)} />
                      </svg>
                      <AnimatedLabel x={animatedPoint1.to(p => p.x)} y={animatedPoint1.to(p => p.y)} label={animatedPoint1.to(p => p.label)} />
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="animate-pulse text-white/40 text-sm">Loading chart...</div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* Routing */}
            <FadeIn delay={0.1}>
              <div className={`${cardClass} p-6`}>
                <h2 className="text-lg font-semibold mb-1">Superfast Routing & Limit Orders</h2>
                <p className="text-xs text-white/40 mb-3">
                  Access liquidity from all pools on Synthra
                </p>
                <div className="relative h-16 flex items-center justify-center">
                  <div className="w-full border-t border-dashed border-purple-400/40"></div>
                  <div className="absolute right-[15%] top-[10%]">
                    <div className="bg-white/[0.06] border border-white/10 text-white text-xs px-2 py-1 rounded-full">
                      Target
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 mx-auto w-1/2">
                    <div className="h-16 bg-gradient-to-t from-purple-700/40 to-transparent w-full rounded-b-lg"></div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Trading Pairs */}
            <FadeIn delay={0.15}>
              <div className={`${cardClass} p-6`}>
                <h2 className="text-lg font-semibold mb-1">Trading Pairs</h2>
                <p className="text-xs text-white/40 mb-3">
                  Trading data across popular token pairs
                </p>
                <div className="mt-2">
                  <ScrollingTokenPrices isMobile={isMobile} />
                </div>
              </div>
            </FadeIn>
          </div>
        ) : (
          /* ── DESKTOP LAYOUT ── */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Swap — tall left card */}
            <FadeIn className="lg:row-span-2">
              <div className={`${cardClass} p-8 flex flex-col h-full`}>
                <h2 className="text-4xl font-semibold mb-2 tracking-tight">Swap</h2>
                <p className="text-sm text-white/40 mb-8 max-w-md">
                  About $0.001 gas, 400ms TTF, no surge pricing, ~0 failure rates. One of the best swap UX across crypto
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <div className="space-y-2.5">
                    {['Best-in-class price execution', 'Intelligent cross-chain routing', 'Zero slippage protection', 'Advanced MEV protection'].map((f, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-purple-400" />
                        <span className="text-sm text-white/50">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <button 
                    className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-white/90 transition-all text-sm hover:shadow-lg hover:shadow-purple-500/10"
                    onClick={() => window.open('https://app.synthra.org/#/swap', '_blank')}
                  >
                    Trade Now →
                  </button>
                </div>
              </div>
            </FadeIn>

            {/* Concentrated Liquidity — ORIGINAL chart + animations */}
            <FadeIn delay={0.1}>
              <div className={`${cardClass} p-6 flex flex-col`}>
                <h2 className="text-xl font-semibold mb-1 tracking-tight">Concentrated Liquidity Pools</h2>
                <p className="text-sm text-white/40 mb-3">
                  Unlock greater capital efficiency by customising your LP position to the tick
                </p>
                <div className="h-48 mt-2 relative">
                  {shouldShowChart ? (
                    <>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                            <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.3} />
                              <stop offset="100%" stopColor="#ec4899" stopOpacity={0.05} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="x" hide />
                          <YAxis hide domain={['auto', 'auto']} />
                          <Tooltip
                            content={({ active, payload }) => (
                              active && payload?.length ? (
                                <div className="bg-black text-white px-3 py-1 rounded text-xs">
                                  ${payload[0].value.toFixed(2)}
                                </div>
                              ) : null
                            )}
                          />
                          <Area type="monotone" dataKey="price" stroke="none" fill="url(#areaColor)" />
                          <Line
                            type="monotone"
                            dataKey="price"
                            stroke="url(#colorPrice)"
                            strokeWidth={2.5}
                            dot={false}
                            isAnimationActive={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                      <svg className="absolute inset-0 h-full w-full pointer-events-none z-20">
                        <AnimatedLine x={animatedPoint1.to(p => p.x)} />
                        <AnimatedLine x={animatedPoint2.to(p => p.x)} />
                        <AnimatedDot x={animatedPoint1.to(p => p.x)} y={animatedPoint1.to(p => p.y)} />
                        <AnimatedDot x={animatedPoint2.to(p => p.x)} y={animatedPoint2.to(p => p.y)} />
                      </svg>
                      <AnimatedLabel x={animatedPoint1.to(p => p.x)} y={animatedPoint1.to(p => p.y)} label={animatedPoint1.to(p => p.label)} />
                      <AnimatedLabel x={animatedPoint2.to(p => p.x)} y={animatedPoint2.to(p => p.y)} label={animatedPoint2.to(p => p.label)} />
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="animate-pulse text-white/40">Loading chart...</div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>

            {/* Routing */}
            <FadeIn delay={0.15}>
              <div className={`${cardClass} p-6 flex flex-col`}>
                <h2 className="text-xl font-semibold mb-1 tracking-tight">Superfast Routing, Limit Orders for Pros</h2>
                <p className="text-sm text-white/40 mb-3">
                  Access liquidity from all pools on Synthra
                </p>
                <div className="relative h-24 mt-auto flex items-center justify-center">
                  <div className="w-full border-t border-dashed border-purple-400/40"></div>
                  <div className="absolute right-[10%] top-[20%]">
                    <div className="bg-white/[0.06] border border-white/10 text-white text-xs px-2 py-1 rounded-full">
                      Target Price
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 mx-auto w-1/2">
                    <div className="h-24 bg-gradient-to-t from-purple-700/40 to-transparent w-full rounded-b-xl"></div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Trading Pairs — full width */}
            <FadeIn delay={0.2} className="col-span-2">
              <div className={`${cardClass} p-6 flex flex-col`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">Trading Pairs</h2>
                    <p className="text-sm text-white/40">Trading data across popular token pairs</p>
                  </div>
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-40" />
                  </div>
                </div>
                <div className="mt-2">
                  <ScrollingTokenPrices isMobile={isMobile} />
                </div>
              </div>
            </FadeIn>
          </div>
        )}
      </section>

     

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default TradingFeaturesSection;
