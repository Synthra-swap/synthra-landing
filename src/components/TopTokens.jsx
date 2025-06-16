import React from 'react';
import { motion } from 'framer-motion';
import { useTopTokens, formatLargeNumber } from '../hooks/useSubgraphData';

const TopTokens = () => {
  const { tokens, loading, error } = useTopTokens(8);

  if (loading) {
    return (
      <div className="w-full bg-[#1b1433] rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-white">Top Tokens by Volume</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full"></div>
                <div className="bg-white/10 h-4 w-16 rounded"></div>
              </div>
              <div className="bg-white/10 h-4 w-20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !tokens || tokens.length === 0) {
    return (
      <div className="w-full bg-[#1b1433] rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-white">Top Tokens by Volume</h3>
        <div className="text-yellow-400 text-sm">
          Token data unavailable - check connection to subgraph
        </div>
      </div>
    );
  }

  const getTokenSymbolStyle = (symbol) => {
    // Associa colori specifici a token noti
    const knownTokens = {
      'ETH': 'from-blue-400 to-blue-600',
      'WETH': 'from-blue-400 to-blue-600',
      'USDC': 'from-blue-500 to-cyan-500',
      'USDT': 'from-green-400 to-green-600',
      'DAI': 'from-yellow-400 to-orange-500',
      'WBTC': 'from-orange-400 to-yellow-500',
      'UNI': 'from-pink-400 to-purple-600',
      'LINK': 'from-blue-600 to-purple-600',
      'UOMI': 'from-purple-500 to-pink-500',
      'WUOMI': 'from-purple-500 to-pink-500'
    };
    
    return knownTokens[symbol] || 'from-gray-400 to-gray-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full bg-[#1b1433] rounded-xl p-6 border border-white/10"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Top Tokens by Volume</h3>
        <div className="text-xs text-white/60">
          24h Volume
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tokens.map((token, index) => (
          <motion.div
            key={token.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 bg-gradient-to-br ${getTokenSymbolStyle(token.symbol)} rounded-full flex items-center justify-center text-xs font-bold text-white`}>
                {token.symbol?.charAt(0) || 'T'}
              </div>
              
              <div>
                <div className="text-white font-medium text-sm">
                  {token.symbol || 'UNKNOWN'}
                </div>
                <div className="text-white/60 text-xs truncate max-w-20">
                  {token.name || 'Unknown Token'}
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-white font-medium text-sm">
                {formatLargeNumber(token.volumeUSD)}
              </div>
              <div className="text-white/60 text-xs">
                TVL: {formatLargeNumber(token.totalValueLockedUSD)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex justify-between text-sm">
          <span className="text-white/60">Tokens Shown</span>
          <span className="text-white">{tokens.length}</span>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <a
          href="https://info.synthra.org/tokens"
          className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
        >
          View all tokens →
        </a>
      </div>
    </motion.div>
  );
};

export default TopTokens;
