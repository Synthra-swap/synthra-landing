import React from 'react';
import { motion } from 'framer-motion';

const TradingFeaturesSection = () => {
  return (
    <section className="w-full bg-black text-white py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Title */}
        <motion.div
          className="mb-8 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-playfair tracking-wide text-center lg:text-left">
            Use Cases
          </h2>
        </motion.div>

        {/* Use Case Grid - Mobile: single column, Desktop: original layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:h-[600px]">

          {/* Swap */}
          <motion.div 
            className="lg:col-span-1 bg-black border border-gray-700/50 rounded-lg p-6 lg:p-8 flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-t-2 border-[#ff45db] w-16 lg:w-24 mb-4 lg:mb-6"></div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-6 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-sm ${
                      i % 2 === 0 ? 'bg-[#ff45db]' : 'bg-[#ff45db]/70'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-white">Token Swaps</h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Instantly swap tokens with low slippage and dynamic pricing powered by concentrated liquidity pools.
            </p>
          </motion.div>

          {/* Liquidity */}
          <motion.div 
            className="lg:col-span-1 bg-black border border-gray-700/50 rounded-lg p-6 lg:p-8 flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="border-t-2 border-[#6114f1] w-16 lg:w-24 mb-4 lg:mb-6"></div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-6 flex items-center justify-center">
              <div className="flex flex-col gap-1">
                {[0, 1, 2].map((row) => (
                  <div key={row} className="flex gap-1">
                    {[0, 1, 2].map((col) => (
                      <div
                        key={col}
                        className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-sm ${
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
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-white">Custom Liquidity</h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Provide liquidity with precise control over your price ranges and maximize capital efficiency.
            </p>
          </motion.div>

          {/* Spacing cell - solo desktop */}
          <div className="hidden lg:block"></div>

          <div className="hidden lg:block"></div>

          {/* Yield */}
          <motion.div 
            className="lg:col-span-1 bg-black border border-gray-700/50 rounded-lg p-6 lg:p-8 flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="border-t-2 border-[#ff45db] w-16 lg:w-24 mb-4 lg:mb-6"></div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-6 h-6 lg:w-8 lg:h-8 border-2 border-[#ff45db] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 lg:w-3 lg:h-3 bg-[#ff45db] rounded-full"></div>
                </div>
                <div className="absolute -top-0.5 -right-0.5 lg:-top-1 lg:-right-1 w-3 h-3 lg:w-4 lg:h-4 border border-[#ff45db] rounded-full bg-black"></div>
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-white">Incentivized Pools</h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Earn rewards through liquidity incentives, farming campaigns, and community-driven staking programs.
            </p>
          </motion.div>

          {/* Portfolio Tools */}
          <motion.div 
            className="lg:col-span-1 bg-black border border-gray-700/50 rounded-lg p-6 lg:p-8 flex flex-col relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="border-t-2 border-[#6114f1] w-16 lg:w-24 mb-4 lg:mb-6"></div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-[#6114f1] rounded-sm"></div>
                <div className="absolute top-1.5 left-1.5 lg:top-2 lg:left-2 w-3 h-3 lg:w-4 lg:h-4 border-2 border-[#6114f1] rounded-sm bg-black"></div>
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-white">Smart Positioning</h3>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Automate rebalancing, optimize returns, and manage risk with built-in DeFi portfolio tools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradingFeaturesSection;