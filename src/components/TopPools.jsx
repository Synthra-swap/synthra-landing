import React from 'react';
import { motion } from 'framer-motion';
import { useTopPools, formatLargeNumber } from '../hooks/useSubgraphData';

const TopPools = () => {
  const { pools, loading, error } = useTopPools(6);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-lg animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                <div className="bg-white/10 h-4 w-24 rounded"></div>
              </div>
              <div className="bg-white/10 h-4 w-20 rounded"></div>
            </div>
          ))}
        </div>
      );
    }

    if (error || !pools || pools.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-white/60">
            {error ? 'Error loading pools' : 'No pools data available'}
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {pools.map((pool, index) => (
          <motion.div
            key={pool.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex justify-between items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {pool.token0?.symbol?.charAt(0) || 'T'}
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xs font-bold">
                  {pool.token1?.symbol?.charAt(0) || 'T'}
                </div>
              </div>
              
              <div>
                <div className="text-white font-medium">
                  {pool.token0?.symbol || 'TOKEN0'}/{pool.token1?.symbol || 'TOKEN1'}
                </div>
                <div className="text-white/60 text-xs">
                  Fee: {getFeeTierDisplay(pool.feeTier)}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-white font-medium">
                {formatLargeNumber(pool.totalValueLockedUSD)}
              </div>
              <div className="text-white/60 text-xs">
                Vol: {formatLargeNumber(pool.volumeUSD)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const getFeeTierDisplay = (feeTier) => {
    if (!feeTier) return '0.3%';
    const feePercent = (parseInt(feeTier) / 10000).toFixed(2);
    return `${feePercent}%`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-gray-900/30 rounded-xl p-6 border border-white/10"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Top Liquidity Pools</h3>
        <div className="text-xs text-white/60">
          Sorted by TVL
        </div>
      </div>
      
      {renderContent()}
      
      {!loading && !error && pools && pools.length > 0 && (
        <>
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex justify-between text-sm">
              <span className="text-white/60">Total Pools</span>
              <span className="text-white">{pools.length}</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <a
              href="https://info.synthra.org/pools"
              className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
            >
              View all pools →
            </a>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default TopPools;
