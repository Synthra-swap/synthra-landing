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

// Fixed ScrollingTokenPrices component
const ScrollingTokenPrices = ({ isMobile }) => {
  // TUTTI gli hook devono essere chiamati sempre - mai condizionali!
  const containerRef = useRef(null);
  const { pools, loading, error } = useTopPools(10);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Converti i pools in formato per il ticker
  const tokenPairs = useMemo(() => {
    // Sempre usa i dati statici di fallback per maggiore stabilità
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
        // Calcola la percentuale di variazione fittizia basata sui dati del pool
        const changePercent = ((parseFloat(pool.token0Price || 0) % 50) + 5).toFixed(3);
        return [pair, `${changePercent}%`];
      });
    } catch (err) {
      console.warn('Error processing pools data:', err);
      return fallbackData;
    }
  }, [pools, loading, error]);

  // Crea più copie per garantire un loop seamless - sempre calcolato
  const repeatedPairs = useMemo(() => {
    return [...tokenPairs, ...tokenPairs, ...tokenPairs];
  }, [tokenPairs]);

  // Verifica che siamo nel browser per evitare problemi di hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  // IMPORTANTE: Questo useEffect deve sempre essere chiamato
  useEffect(() => {
    let scrollInterval;
    
    if (isClient && containerRef.current && tokenPairs.length > 0) {
      scrollInterval = setInterval(() => {
        setScrollPosition(prev => {
          // Calcola la larghezza di un set completo di token - ottimizzata per mobile
          const itemWidth = isMobile ? 120 : 150;
          const totalWidth = tokenPairs.length * itemWidth;
          
          // Reset quando abbiamo scrollato per un set completo
          if (prev <= -totalWidth) return 0;
          return prev - (isMobile ? 0.5 : 1); // Più lento su mobile
        });
      }, isMobile ? 30 : 20); // Intervallo più lento su mobile
    }

    // Cleanup function deve sempre essere ritornata
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
          className={`inline-flex gap-6 ${isMobile ? 'text-xs' : 'text-sm'} text-purple-300`}
          style={{ transform: `translateX(${scrollPosition}px)` }}
        >
          {repeatedPairs.map(([pair, percent], i) => (
            <div key={`${pair}-${i}`} className={`mx-2 my-1 whitespace-nowrap ${isMobile ? 'min-w-[100px]' : 'min-w-[140px]'}`}>
              {pair} <span className="text-purple-200">{percent}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-8 flex items-center">
          <div className={`animate-pulse ${isMobile ? 'text-xs' : 'text-sm'} text-purple-300`}>
            Loading trading pairs...
          </div>
        </div>
      )}
    </div>
  );
};

const TradingFeaturesSection = () => {
  // TUTTI gli hook devono essere chiamati sempre
  const data = useMemo(generateCurveData, []);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Check mobile state
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

  const getAnimatedPosition = (startIndex, endIndex) => {
    return springProps.t.to(t => {
      try {
        // Make sure we're using indices that are within bounds of our data array
        const actualStartIndex = Math.min(Math.max(0, startIndex), data.length - 1);
        const actualEndIndex = Math.min(Math.max(0, endIndex), data.length - 1);
        
        const idx = actualStartIndex + (actualEndIndex - actualStartIndex) * t;
        const low = Math.floor(idx);
        const high = Math.min(Math.ceil(idx), data.length - 1);
        const weight = idx - low;

        // Ensure we have valid data points
        const dLow = data[low];
        const dHigh = data[high];

        if (!dLow || !dHigh || typeof dLow.x !== 'number' || typeof dLow.price !== 'number') {
          return { x: 50, y: 50, label: '$0.00' };
        }

        // Calculate interpolated position
        const x = dLow.x + (dHigh.x - dLow.x) * weight;
        const y = dLow.price + (dHigh.price - dLow.price) * weight;

        // Convert to percentage positions
        const xPct = ((x - 1) / (10 - 1)) * 100;
        
        // For y percentage, we need to make sure higher prices are at the top
        // and lower prices are at the bottom
        const yMin = 0; // Minimum price value (use 0 as base)
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

  // Rendering condizionale solo per il contenuto, non per l'intero componente
  const shouldShowChart = data && data.length > 0;

  return (
    <div className="w-full bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Layout completamente diverso per mobile vs desktop */}
        {isMobile ? (
          // MOBILE LAYOUT - Stack verticale
          <div className="flex flex-col gap-6">
            {/* Swap section - più compatta su mobile */}
            <div className="bg-purple-900/20 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-2">Swap</h2>
              <p className="text-sm text-white/60 mb-6">
                About $0.001 gas, 400ms TTF, no surge pricing, ~0 failure rates. One of the best swap UX across crypto
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                  <div>• Best-in-class execution</div>
                  <div>• Cross-chain routing</div>
                  <div>• Zero slippage protection</div>
                  <div>• MEV protection</div>
                </div>
              </div>
              
              <button 
                className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-white/80 transition-colors"
                onClick={() => window.open('https://app.synthra.org/#/swap', '_blank')}
              >
                Trade Now →
              </button>
            </div>

            {/* Concentrated Liquidity Pools */}
            <div className="bg-purple-900/20 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-1">Concentrated Liquidity Pools</h2>
              <p className="text-xs text-white/60 mb-3">
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
                    {/* Animazioni semplificate su mobile */}
                    <svg className="absolute inset-0 h-full w-full pointer-events-none z-20">
                      <AnimatedLine x={animatedPoint1.to(p => p.x)} />
                      <AnimatedDot x={animatedPoint1.to(p => p.x)} y={animatedPoint1.to(p => p.y)} />
                    </svg>
                    <AnimatedLabel x={animatedPoint1.to(p => p.x)} y={animatedPoint1.to(p => p.y)} label={animatedPoint1.to(p => p.label)} />
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-pulse text-purple-300 text-sm">Loading chart...</div>
                  </div>
                )}
              </div>
            </div>

            {/* Routing section - semplificata */}
            <div className="bg-purple-900/20 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-1">Superfast Routing & Limit Orders</h2>
              <p className="text-xs text-white/60 mb-3">
                Access liquidity from all pools on Synthra
              </p>
              <div className="relative h-16 flex items-center justify-center">
                <div className="w-full border-t border-dashed border-purple-400/40"></div>
                <div className="absolute right-[15%] top-[10%]">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full border border-purple-500">
                    Target
                  </div>
                </div>
                <div className="absolute left-0 right-0 mx-auto w-1/2">
                  <div className="h-16 bg-gradient-to-t from-purple-700/40 to-transparent w-full rounded-b-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Trading Pairs - ottimizzata per mobile */}
            <div className="bg-purple-900/20 rounded-xl p-6">
              <h2 className="text-lg font-semibold mb-1">Trading Pairs</h2>
              <p className="text-xs text-white/60 mb-3">
                Trading data across popular token pairs
              </p>
              <div className="mt-2">
                <ScrollingTokenPrices isMobile={isMobile} />
              </div>
            </div>
          </div>
        ) : (
          // DESKTOP LAYOUT - Layout originale
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Swap column on the left spanning 2 rows */}
            <div className="bg-purple-900/20 rounded-xl p-8 flex flex-col lg:row-span-2">
              <h2 className="text-4xl font-semibold mb-2">Swap</h2>
              <p className="text-sm text-white/60 mb-8 max-w-md">
                About $0.001 gas, 400ms TTF, no surge pricing, ~0 failure rates. One of the best swap UX across crypto
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Key Features</h3>
                <ul className="text-sm text-white/80">
                  <li className="mb-2">• Best-in-class price execution</li>
                  <li className="mb-2">• Intelligent cross-chain routing</li>
                  <li className="mb-2">• Zero slippage protection</li>
                  <li className="mb-2">• Advanced MEV protection</li>
                </ul>
              </div>
              
              <div className="mt-auto">
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium shadow-md hover:bg-white/80 transition-colors border border-purple-300"
                onClick={() => window.open('https://app.synthra.org/#/swap', '_blank')}
                >
                  Trade Now →
                </button>
              </div>
            </div>

            {/* Right side top row */}
            <div className="bg-purple-900/20 rounded-xl p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-1">Concentrated Liquidity Pools</h2>
              <p className="text-sm text-white/60 mb-3">
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
                    <div className="animate-pulse text-purple-300">Loading chart...</div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-purple-900/20 rounded-xl p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-1">Superfast Routing, Limit Orders for Pros</h2>
              <p className="text-sm text-white/60 mb-3">
                Access liquidity from all pools on Synthra
              </p>
              <div className="relative h-24 mt-auto flex items-center justify-center">
                <div className="w-full border-t border-dashed border-purple-400/40"></div>
                <div className="absolute right-[10%] top-[20%]">
                  <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full border border-purple-500">
                    Target Price
                  </div>
                </div>
                <div className="absolute left-0 right-0 mx-auto w-1/2">
                  <div className="h-24 bg-gradient-to-t from-purple-700/40 to-transparent w-full rounded-b-xl"></div>
                </div>
              </div>
            </div>
            
            {/* Right side bottom row */}
            <div className="bg-purple-900/20 rounded-xl p-6 flex flex-col col-span-2">
              <h2 className="text-xl font-semibold mb-1">Trading Pairs</h2>
              <p className="text-sm text-white/60 mb-3">
                Trading data across popular token pairs
              </p>
              <div className="mt-2">
                <ScrollingTokenPrices isMobile={isMobile} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingFeaturesSection;