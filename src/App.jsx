import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import TradingFeaturesSection from './components/TradingFeaturesSection';
import StatsSection from './components/StatsSection';
import Footer from './components/Footer';
import IntegrationSection from './components/IntegrationSection';
import RecentTransactions from './components/RecentTransactions';
import VolumeChart from './components/VolumeChart';
import TopPools from './components/TopPools';
import SubgraphStatus from './components/SubgraphStatus';
import TopTokens from './components/TopTokens';
import { useProtocolStats } from './hooks/useSubgraphData';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const { stats, error: subgraphError, refetch } = useProtocolStats();

  useEffect(() => {
    // Simulate loading with a progress bar
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 600);
          return 100;
        }
        return prev + 2; // Slower progress for more elegant feel
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence mode="wait">
       
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Navbar />
            <HeroSection />
            <TradingFeaturesSection />
            <StatsSection />
            
            {/* Nuova sezione con dati dal subgraph */}
            <section className="w-full bg-[#0a071a] text-white py-24">
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
            <Footer />
          </motion.div>
      </AnimatePresence>
      
      {/* Status del subgraph */}
      <SubgraphStatus 
        isConnected={stats && !subgraphError}
        error={subgraphError}
        onRetry={refetch}
      />
    </div>
  );
}

export default App;