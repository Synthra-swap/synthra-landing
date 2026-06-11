import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BrandAssets from './pages/BrandAssets';
import Research from './pages/Research';
import ArcTestnetReport from './pages/ArcTestnetReport';
import ArcTestnet200Report from './pages/ArcTestnet200Report';
import RobinhoodTestnetReport from './pages/RobinhoodTestnetReport';
import NotFound from './pages/NotFound';

function App() {
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
            <Route path="/research" element={<Research />} />
            <Route path="/research/arc-testnet-100-days" element={<ArcTestnetReport />} />
            <Route path="/research/arc-testnet-200-days" element={<ArcTestnet200Report />} />
            <Route path="/research/robinhood-chain-70-days" element={<RobinhoodTestnetReport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </motion.div>
      </AnimatePresence>

    </div>
  );
}

export default App;
