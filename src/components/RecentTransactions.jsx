import React from 'react';
import { motion } from 'framer-motion';
import { useRecentTransactions, formatLargeNumber } from '../hooks/useSubgraphData';

const RecentTransactions = () => {
  const { transactions, loading, error } = useRecentTransactions(20);

  if (loading) {
    return (
      <div className="w-full bg-gray-900/30 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-white">Recent Trades</h3>
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex justify-between items-center animate-pulse">
              <div className="bg-white/10 h-4 w-24 rounded"></div>
              <div className="bg-white/10 h-4 w-16 rounded"></div>
              <div className="bg-white/10 h-4 w-20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-gray-900/30 rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-semibold mb-4 text-white">Recent Trades</h3>
        <div className="text-yellow-400 text-sm">
          Live data unavailable - using demo mode
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-900/30 rounded-xl p-6 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">Recent Trades</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs text-green-400">Live</span>
        </div>
      </div>
      
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {transactions.slice(0, 10).map((tx, index) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex justify-between items-center py-2 border-b border-white/5 last:border-b-0"
          >
            <div className="flex flex-col">
              <span className="text-white text-sm font-medium">{tx.pair}</span>
              <span className="text-white/40 text-xs">
                {tx.timestamp.toLocaleTimeString()}
              </span>
            </div>
            
            <div className="text-right">
              <div className="text-white text-sm">
                {formatLargeNumber(tx.amountUSD)}
              </div>
              <div className="text-white/40 text-xs">
                {tx.txHash?.slice(0, 8)}...
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="text-center">
          <a
            href="https://info.synthra.org/"
            className="text-purple-400 text-sm hover:text-purple-300 transition-colors"
          >
            View all transactions →
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
