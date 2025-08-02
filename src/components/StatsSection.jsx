import React from 'react';
import { motion } from 'framer-motion';

const TradingFeaturesSection = () => {
  return (
    <section className="w-full bg-black text-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-light font-playfair tracking-wide">
            Use Cases
          </h2>
        </motion.div>

        {/* Use Case Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">

          {/* Swap */}
          <motion.div 
            className="lg:col-span-1 bg-gray-900/80 border border-gray-700/50 rounded-lg p-8 flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-t-2 border-[#ff45db] w-24 mb-6"></div>
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-sm ${
                      i % 2 === 0 ? 'bg-[#ff45db]' : 'bg-[#ff45db]/70'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Token Swaps</h3>
            <p className="text-gray-400 leading-relaxed">
              Instantly swap tokens with low slippage and dynamic pricing powered by concentrated liquidity pools.
            </p>
          </motion.div>

          {/* Liquidity */}
          <motion.div 
            className="lg:col-span-1 bg-black border border-gray-700/50 rounded-lg p-8 flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="border-t-2 border-[#6114f1] w-24 mb-6"></div>
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <div className="flex flex-col gap-1">
                {[0, 1, 2].map((row) => (
                  <div key={row} className="flex gap-1">
                    {[0, 1, 2].map((col) => (
                      <div
                        key={col}
                        className={`w-2 h-2 rounded-sm ${
                          row === 1 && col !== 1
                            ? 'bg-[#6114f1]/70'
                            : 'bg-[#6114f1]'
                        }`}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Custom Liquidity</h3>
            <p className="text-gray-400 leading-relaxed">
              Provide liquidity with precise control over your price ranges and maximize capital efficiency.
            </p>
          </motion.div>

          {/* Spacing cell */}
          <div className="hidden lg:block"></div>

          <div className="hidden lg:block"></div>

          {/* Yield */}
          <motion.div 
            className="lg:col-span-1 bg-gray-900/80 border border-gray-700/50 rounded-lg p-8 flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border-t-2 border-[#ff45db] w-24 mb-6"></div>
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-8 h-8 border-2 border-[#ff45db] rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#ff45db] rounded-full"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border border-[#ff45db] rounded-full bg-black"></div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Incentivized Pools</h3>
            <p className="text-gray-400 leading-relaxed">
              Earn rewards through liquidity incentives, farming campaigns, and community-driven staking programs.
            </p>
          </motion.div>

          {/* Portfolio Tools */}
          <motion.div 
            className="lg:col-span-1 bg-gray-900/80 border border-gray-700/50 rounded-lg p-8 flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="border-t-2 border-[#6114f1] w-24 mb-6"></div>
            <div className="w-12 h-12 mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-6 h-6 bg-[#6114f1] rounded-sm"></div>
                <div className="absolute top-2 left-2 w-4 h-4 border-2 border-[#6114f1] rounded-sm bg-black"></div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Smart Positioning</h3>
            <p className="text-gray-400 leading-relaxed">
              Automate rebalancing, optimize returns, and manage risk with built-in DeFi portfolio tools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradingFeaturesSection;
