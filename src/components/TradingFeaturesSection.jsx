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
  y.to(val => {
    console.log('y:', val);
    return val;
  });

  return (
    <animated.circle
      cx={x.to(val => `${val}%`)}
      cy={y.to(val => `${val > 60 ? val + 3 : val + 5}%`)}
      r={4}
      stroke="white"
      strokeWidth={1.5}
      fill="url(#colorPrice)"
    />
  );
};

const AnimatedLabel = ({ x, y, label }) => (
  <animated.div
    className="absolute text-xs text-white z-10"
    style={{
      left: x.to(val => `${val + 7}%`),
      top: y.to(val => `${val - 16}%`),
      transform: 'translateX(-50%)',
    }}
  >
    <div className="bg-[#1d1833] px-2 py-1 rounded-full border border-white/20">
      <animated.span>{label}</animated.span>
    </div>
  </animated.div>
);

const AnimatedLine = ({ x }) => (
  <animated.line
    x1={x.to(val => `${val}%`)}
    x2={x.to(val => `${val}%`)}
    y1="0"
    y2="100%"
    stroke="#ffffff"
    strokeDasharray="3 3"
    strokeOpacity={0.5}
  />
);

// New component for scrolling token prices
const ScrollingTokenPrices = () => {
  const containerRef = useRef(null);
  const { pools, loading } = useTopPools(10);

  // Converti i pools in formato per il ticker
  const tokenPairs = useMemo(() => {
    if (!pools || pools.length === 0) {
      // Fallback ai dati statici se non ci sono dati dal subgraph
      return [
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
    }

    return pools.map(pool => {
      const pair = `${pool.token0?.symbol || 'TOKEN0'}-${pool.token1?.symbol || 'TOKEN1'}`;
      // Calcola la percentuale di variazione fittizia basata sui dati del pool
      const changePercent = ((parseFloat(pool.token0Price || 0) % 50) + 5).toFixed(3);
      return [pair, `${changePercent}%`];
    });
  }, [pools]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!containerRef.current) return;
      
      setScrollPosition(prev => {
        // Calcola la larghezza di un set completo di token
        const itemWidth = 150; // Larghezza approssimativa di ogni elemento
        const totalWidth = tokenPairs.length * itemWidth;
        
        // Reset quando abbiamo scrollato per un set completo
        if (prev <= -totalWidth) return 0;
        return prev - 1; // Move 1px to the left each time
      });
    }, 20);

    return () => clearInterval(scrollInterval);
  }, [tokenPairs.length]);

  // Crea più copie per garantire un loop seamless
  const repeatedPairs = [...tokenPairs, ...tokenPairs, ...tokenPairs];

  return (
    <div className="overflow-hidden w-full whitespace-nowrap relative">
      <div 
        ref={containerRef}
        className="inline-flex gap-6 text-sm text-purple-300"
        style={{ transform: `translateX(${scrollPosition}px)` }}
      >
        {repeatedPairs.map(([pair, percent], i) => (
          <div key={i} className="mx-2 my-1 whitespace-nowrap min-w-[140px]">
            {pair} <span className="text-purple-200">{percent}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TradingFeaturesSection = () => {
  const data = useMemo(generateCurveData, []);
  const [isExpanded, setIsExpanded] = useState(false);

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
    const interval = setInterval(() => {
      setIsExpanded(prev => !prev);
      api.start({ t: isExpanded ? 0 : 1 });
    }, 3000);
    return () => clearInterval(interval);
  }, [isExpanded, api]);

 const getAnimatedPosition = (startIndex, endIndex) => {
    return springProps.t.to(t => {
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

      return { x: xPct, y: yPct, label: `$${y.toFixed(2)}` };
    });
  };

  const animatedPoint1 = getAnimatedPosition(indices.start1, indices.end1);
  const animatedPoint2 = getAnimatedPosition(indices.start2, indices.end2);

  return (
    <div className="w-full bg-[#0a071a] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Swap column on the left spanning 2 rows */}
          <div className="bg-[#1b1433] rounded-xl p-8 flex flex-col lg:row-span-2">
            <h2 className="text-4xl font-semibold mb-2">Swap</h2>
            <p className="text-sm text-white/60 mb-8 max-w-md">
              About $0.001 gas, 400ms TTF, no surge pricing, ~0 failure rates. One of the best swap UX across crypto
            </p>
            
            {/* Added some extra content to fill the larger space */}
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

          {/* Right side top row with the two existing components side by side */}
          <div className="bg-[#1b1433] rounded-xl p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-1">Concentrated Liquidity Pools</h2>
            <p className="text-sm text-white/60 mb-3">
              Unlock greater capital efficiency by customising your LP position to the tick
            </p>
            <div className="h-48 mt-2 relative">
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
            </div>
          </div>

          <div className="bg-[#1b1433] rounded-xl p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-1">Superfast Routing, Limit Orders for Pros</h2>
            <p className="text-sm text-white/60 mb-3">
              Access liquidity from all pools on Synthra
            </p>
            <div className="relative h-24 mt-auto flex items-center justify-center">
              <div className="w-full border-t border-dashed border-purple-400/40"></div>
              <div className="absolute right-[10%] top-[20%]">
                <div className="bg-[#2a2154] text-white text-xs px-2 py-1 rounded-full border border-purple-500">
                  Target Price
                </div>
              </div>
              <div className="absolute left-0 right-0 mx-auto w-1/2">
                <div className="h-24 bg-gradient-to-t from-purple-700/40 to-transparent w-full rounded-b-xl"></div>
              </div>
            </div>
          </div>
          
          {/* Right side bottom row with the ScrollingTokenPrices component */}
          <div className="bg-[#1b1433] rounded-xl p-6 flex flex-col col-span-2">
            <h2 className="text-xl font-semibold mb-1">Trading Pairs</h2>
            <p className="text-sm text-white/60 mb-3">
              Trading data across popular token pairs
            </p>
            <div className="mt-2">
              <ScrollingTokenPrices />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingFeaturesSection;