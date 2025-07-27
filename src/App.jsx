import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubgraphStatus from './components/SubgraphStatus';
import Home from './pages/Home';
import BrandAssets from './pages/BrandAssets';
import { useProtocolStats } from './hooks/useSubgraphData';

function App() {
  const { stats, error: subgraphError, refetch } = useProtocolStats();

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand-assets" element={<BrandAssets />} />
          </Routes>
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