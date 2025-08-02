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
import Separator from '../components/Separetor';

const Home = () => {
  return (
    <>
      <style jsx global>{`
        .bg-gradient-to-br { background: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
        .bg-gradient-to-t { background: linear-gradient(to top, var(--tw-gradient-stops)); }
        .bg-gradient-to-l { background: linear-gradient(to left, var(--tw-gradient-stops)); }
        .bg-gradient-to-tl { background: linear-gradient(to top left, var(--tw-gradient-stops)); }
      `}</style>
      <HeroSection />
      <Separator direction="right" color='rgb(201, 53, 235)' marginY="8rem" />
      <TradingFeaturesSection />
        <Separator direction="left" color='rgb(201, 53, 235)' marginY="8rem" />
      <StatsSection />

        <Separator direction="right" color='rgb(201, 53, 235)' marginY="8rem" />
      
      {/* Networks Section */}
      <section className="w-full bg-black text-white py-24 relative overflow-hidden">
        {/* Background gradient light */}
        <div className="absolute bottom-0 left-0 w-full h-2/3" style={{background: 'linear-gradient(to top, rgba(255, 69, 219, 0.25), rgba(255, 69, 219, 0.1), transparent)'}}></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-full" style={{background: 'linear-gradient(to left, rgba(255, 69, 219, 0.2), rgba(255, 69, 219, 0.05), transparent)'}}></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center items-center gap-16 mb-12">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 relative">
                    {/* Pink striped icon */}
                    <div className="absolute inset-0 flex flex-col justify-center gap-1">
                      <div className="h-1 bg-[#ff45db] rounded"></div>
                      <div className="h-1 bg-[#ff45db]/70 rounded"></div>
                      <div className="h-1 bg-[#ff45db] rounded"></div>
                      <div className="h-1 bg-[#ff45db]/50 rounded"></div>
                      <div className="h-1 bg-[#ff45db] rounded"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-white/70">Concentrated Liquidity</h3>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 relative">
                    {/* Pink triangle/pyramid icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-[#ff45db]"></div>
                        <div className="w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-[#ff45db]/70 absolute top-2 left-1/2 transform -translate-x-1/2"></div>
                        <div className="w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-[#ff45db]/50 absolute top-4 left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-white/70">Dynamic Pricing</h3>
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 relative">
                    {/* Pink grid/modular icon */}
                    <div className="absolute inset-0 grid grid-cols-4 gap-1 p-2">
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db]/70 rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db]/70 rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-medium text-white/70">Modular Design</h3>
              </motion.div>
            </div>

            <motion.h2 className="text-5xl md:text-6xl font-playfair font-light mb-8 tracking-wide">
  Ecosystem Integrations
</motion.h2>

<motion.p className="text-white/50 max-w-lg mx-auto mb-16 text-lg">
  Designed to connect with a wide range of protocols, apps,<br />
  and financial layers across multiple chains.
</motion.p>

            <motion.div 
              className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                 <h3 className="text-xl font-medium text-white mb-2">
  Want to launch incentives, test new mechanics,
</h3>
<p className="text-xl font-medium text-white/80">
  or connect with active liquidity providers?
</p>
                </div>
                <button className="bg-white/15 hover:bg-white/25 border border-white/30 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 whitespace-nowrap backdrop-blur-sm"
                onClick={() => window.open('https://discord.gg/eesEKPRDtd', '_blank')}>
                 Join the Ecosystem
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
 
      {/* Features Section */}
      <section className="w-full bg-black text-white py-48 relative overflow-hidden">
        <div className="absolute top-0  w-full h-1/2" style={{background: 'linear-gradient(to bottom, rgba(255, 69, 219, 0.1), rgba(255, 69, 219, 0.05), transparent)'}}></div>
        {/* Background gradient light */}
      
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-light font-playfair mb-16 tracking-wide"

            >
              Features
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div 
              className="flex items-center gap-8 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    {/* Pink multiasset icon */}
                    <div className="absolute inset-0 grid grid-cols-2 gap-1">
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db]/70 rounded-sm"></div>
                      <div className="bg-[#ff45db]/50 rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Multi-token Support</h3>
<p className="text-white/60 text-lg">
  Seamlessly integrate stablecoins, volatile tokens,<br />
  and custom assets within any pool.
</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-8 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/20 ml-16"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    {/* Pink logic icon */}
                    <div className="absolute inset-0 grid grid-cols-3 gap-0.5">
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db]/60 rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db]/60 rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                      <div className="bg-[#ff45db] rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Fee Tier Customization</h3>
<p className="text-white/60 text-lg">
  Adapt fee models to match volatility, token type,<br />
  and trading behavior.
</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-8 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/20 ml-32"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="w-8 h-8 relative">
                    {/* Pink modularity icon */}
                    <div className="absolute inset-0 flex flex-col gap-0.5">
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-[#ff45db] rounded-sm"></div>
                        <div className="w-2 h-2 bg-[#ff45db] rounded-sm"></div>
                        <div className="w-2 h-2 bg-[#ff45db] rounded-sm"></div>
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-[#ff45db] rounded-sm"></div>
                        <div className="w-2 h-2 bg-[#ff45db] rounded-sm"></div>
                        <div className="w-2 h-2 bg-[#ff45db] rounded-sm"></div>
                      </div>
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-[#ff45db] rounded-sm"></div>
                        <div className="w-2 h-2 bg-[#ff45db] rounded-sm"></div>
                        <div className="w-2 h-2 bg-[#ff45db] rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
               <h3 className="text-xl font-medium text-white mb-2">Liquidity Layer Modularity</h3>
<p className="text-white/60 text-lg">
  Use pools as building blocks to create<br />
  AMM extensions, vaults or structured products.
</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
     <Separator direction="left" color='rgb(151, 53, 235)' marginY="8rem" />
      
      <IntegrationSection />
    </>
  );
};

export default Home;