import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Volume', value: '$1.2B', gradient: 'from-[#6114f1] to-[#a265ff]' },
  { label: 'Transactions', value: '5.4M+', gradient: 'from-[#a265ff] to-[#c156f2]' },
  { label: 'Users', value: '125K+', gradient: 'from-[#c156f2] to-[#e656df]' },
  { label: 'Liquidity', value: '$342M', gradient: 'from-[#e656df] to-[#ff45db]' },
];

const features = [
  {
    title: 'Lowest Fees',
    description: 'Our optimized algorithm ensures the most efficient swaps with minimal fees.',
    icon: '💰',
  },
  {
    title: 'Fastest Swaps',
    description: 'Lightning-fast transactions with minimal slippage thanks to our advanced routing.',
    icon: '⚡',
  },
  {
    title: 'Multi-chain Support',
    description: 'Swap tokens across multiple blockchains with our seamless bridge integration.',
    icon: '🔄',
  },
  {
    title: 'Secure & Audited',
    description: 'All smart contracts are rigorously audited by top security firms in the industry.',
    icon: '🔒',
  },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="mt-32 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6114f1] to-[#ff45db]">
              Synthra
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A next-generation DEX built for speed, security, and the best possible trading experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/30 border border-white/10 backdrop-blur rounded-2xl p-6 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6114f1] to-[#ff45db] flex items-center justify-center mb-4 text-xl">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;