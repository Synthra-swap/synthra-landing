import React from 'react';
import { motion } from 'framer-motion';
import { useProtocolStats, formatLargeNumber, formatTransactionCount } from '../hooks/useSubgraphData';

const StatsSection = () => {
  const { stats, loading, error } = useProtocolStats();

  // Fallback ai dati statici se c'è un errore o durante il caricamento
  const defaultStats = [
    { label: 'Total Volume', value: '$1.2B', gradient: 'from-[#6114f1] to-[#a265ff]' },
    { label: 'Transactions', value: '5.4M+', gradient: 'from-[#a265ff] to-[#c156f2]' },
    { label: 'Pools', value: '125+', gradient: 'from-[#c156f2] to-[#e656df]' },
    { label: 'Liquidity', value: '$342M', gradient: 'from-[#e656df] to-[#ff45db]' },
  ];

  // Usa i dati del subgraph se disponibili, altrimenti i valori di default
  const displayStats = stats ? [
    { 
      label: 'Total Volume', 
      value: formatLargeNumber(stats.totalVolume), 
      gradient: 'from-[#6114f1] to-[#a265ff]' 
    },
    { 
      label: 'Transactions', 
      value: formatTransactionCount(stats.totalTransactions), 
      gradient: 'from-[#a265ff] to-[#c156f2]' 
    },
    { 
      label: 'Pools', 
      value: stats.poolCount || '0', 
      gradient: 'from-[#c156f2] to-[#e656df]' 
    },
    { 
      label: 'Liquidity', 
      value: formatLargeNumber(stats.totalValueLocked), 
      gradient: 'from-[#e656df] to-[#ff45db]' 
    },
  ] : defaultStats;
  return (
    <section className="w-full bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="relative bg-gray-900/30 border border-white/10 rounded-3xl overflow-hidden backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#6114f1]/20 blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#ff45db]/20 blur-3xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 z-10 relative">
            {displayStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-sm text-white/60 mb-1">{stat.label}</div>
                <div
                  className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}
                >
                  {loading ? (
                    <div className="animate-pulse bg-white/20 h-12 w-24 mx-auto rounded"></div>
                  ) : (
                    stat.value
                  )}
                </div>
                {error && !stats && (
                  <div className="text-xs text-yellow-400 mt-1">Using demo data</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6114f1] to-[#ff45db]">
              trading
            </span>
            ?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Join thousands of traders who have already discovered the power of Synthra DEX. Fast, secure, and optimized for the best trading experience.
          </p>
          <a
            href="https://app.synthra.org"
            className="bg-gradient-to-r from-[#6114f1] to-[#ff45db] px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Launch App
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
