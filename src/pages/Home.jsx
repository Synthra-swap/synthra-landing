import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TradingFeaturesSection from '../components/TradingFeaturesSection';
import StatsSection from '../components/StatsSection';
import IntegrationSection from '../components/IntegrationSection';
import RecentTransactions from '../components/RecentTransactions';
import VolumeChart from '../components/VolumeChart';
import TopPools from '../components/TopPools';
import TopTokens from '../components/TopTokens';

const Home = () => {

  return (
    <>
      <HeroSection />
      <TradingFeaturesSection />
      <StatsSection />
      
      {/* Sezione con dati dal subgraph */}
      <section className="w-full bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-time{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6114f1] to-[#ff45db]">
                Analytics
              </span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Live data from the Synthra protocol powered by The Graph subgraph technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <VolumeChart />
            <RecentTransactions />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <TopPools />
            <TopTokens />
          </div>
        </div>
      </section>
      
      <IntegrationSection />
    </>
  );
};

export default Home;
