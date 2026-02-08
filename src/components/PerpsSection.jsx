import React from 'react';
import { motion } from 'framer-motion';

const PerpsTradingTechnical = () => {
  // Metadati tecnici in stile console (come nel lato destro dell'immagine)
  const systemLog = [
    { label: "PROTOCOL_STATE", val: "ACTIVE_V1", code: "SYS" },
    { label: "MARKET_INDEX", val: "AGGREGATED_ORACLE", code: "PRC" },
    { label: "LIQUIDATION_ENGINE", val: "STABLE", code: "SAFE" },
    { label: "UPTIME_SINCE_BOOT", val: "128:14:02:44", code: "T+0" },
  ];

  const perpModules = [
    { id: "M_01", title: "LEVERAGE", val: "50X", desc: "Cross and isolated margin modes with sub-millisecond execution.", status: "OPTIMIZED" },
    { id: "M_02", title: "FUNDING", val: "DYNAMIC", desc: "Peer-to-peer funding rates designed to track index price closely.", status: "LIVE" },
    { id: "M_03", title: "EXPIRY", val: "∞", desc: "No rollover fees. No settlement dates. True perpetual liquidity.", status: "STABLE" },
    { id: "M_04", title: "IMPACT", val: "0.00%", desc: "Advanced order matching ensures near-zero slippage on large orders.", status: "SECURE" },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6 font-mono relative overflow-hidden">
      {/* Blueprint Grid - Sottile ma visibile */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#8b5cf6 0.5px, transparent 0.5) shadow-2xl`, backgroundSize: '30px 30px' }} 
      />

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 border-b border-purple-900/30 pb-12">
          <div className="relative group">
            {/* Corner Markers (stile NADO) */}
            <div className="absolute -top-4 -left-4 w-6 h-6 border-t border-l border-purple-500" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b border-r border-purple-500 opacity-30" />
            
            <h2 className="text-7xl md:text-[100px] font-black tracking-tighter leading-none uppercase">
              PERPS<br />TRADING
            </h2>
          </div>

          <div className="mt-12 md:mt-0 text-right">
            <div className="inline-block bg-purple-600 text-black text-xs font-bold px-4 py-1 mb-8 uppercase tracking-[0.2em]">
              Launch Terminal
            </div>
            <div className="space-y-4">
              {systemLog.map((log, i) => (
                <div key={i} className="flex flex-col items-end border-r-2 border-purple-900/50 pr-4">
                  <span className="text-[10px] text-purple-400 opacity-60 uppercase">{log.label}</span>
                  <span className="text-sm font-bold tabular-nums">{log.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center mb-40">
          <div className="lg:col-span-7 relative">
            {/* Corner Mark centrali */}
            <div className="absolute -top-10 -left-6 w-2 h-2 bg-purple-600" />
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Maximum Capital Efficiency.<br />
                <span className="text-purple-500">Zero Compromise.</span>
              </h3>
              
              <p className="text-lg text-white/50 max-w-2xl leading-relaxed">
                Experience institutional-grade perpetual futures. Deep liquidity 
                powered by an on-chain CLOB engine. Trade major assets with up to 50x leverage 
                and unified margin across all positions.
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <button className="bg-purple-600 text-black px-12 py-5 font-black text-sm hover:bg-purple-400 transition-all uppercase shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)] active:shadow-none active:translate-x-1 active:translate-y-1">
                  Start Trading
                </button>
                <button className="border border-white/10 px-12 py-5 font-bold text-sm hover:border-purple-500 transition-all uppercase tracking-widest text-white/40 hover:text-white">
                  [ Documentation ]
                </button>
              </div>
            </motion.div>
          </div>

          {/* Graphic Element - Video con filtro viola */}
          <div className="lg:col-span-5 relative group">
            <div className="aspect-square bg-purple-900/10 border border-purple-500/20 rounded-sm flex items-center justify-center relative overflow-hidden">
               {/* Video Background */}
               <video 
                 autoPlay 
                 loop 
                 muted 
                 playsInline
                 className="absolute inset-0 w-full h-full object-cover"
               >
                 <source src="https://framerusercontent.com/assets/l3VII6qSLYW8OducErPQZazEcO0.mp4" type="video/mp4" />
               </video>
               
               {/* Filtro viola scuro */}
               {/* <div className="absolute inset-0 bg-purple-900/60 mix-blend-multiply" />
               <div className="absolute inset-0 bg-purple-950/40" /> */}
               
               <span className="text-[10px] text-purple-500 absolute bottom-6 right-6 font-bold tracking-widest z-10">VISUAL_DATA_LINK</span>
               
               {/* Focus brackets */}
               <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white z-10" />
               <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white z-10" />
            </div>
          </div>
        </div>

        {/* Feature Matrix */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-purple-900/20 border border-purple-900/20">
          {perpModules.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: 'rgba(139, 92, 246, 0.05)' }}
              className="bg-black p-10 transition-colors relative"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] text-purple-600 font-black">[{m.id}]</span>
                <span className="text-[9px] border border-purple-900 px-2 py-0.5 opacity-40 uppercase">{m.status}</span>
              </div>
              <h4 className="text-xs font-bold text-white/40 mb-2 uppercase tracking-widest">{m.title}</h4>
              <div className="text-5xl font-black mb-6 tracking-tighter uppercase">{m.val}</div>
              <p className="text-sm leading-relaxed text-white/40 group-hover:text-white/70 transition-colors">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* System Footer */}
        <div className="mt-20 flex flex-wrap justify-between items-center text-[10px] text-white/20 uppercase font-black tracking-[0.3em] border-t border-white/5 pt-10">
          <span>Synthra_Core_Alpha_0.2</span>
          <span className="hidden md:block">Region: EU_FRANKFURT_NODE_01</span>
          <div className="flex gap-8">
            <span>Lat: 1.42ms</span>
            <span className="text-purple-500 animate-pulse">● Live_Feed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerpsTradingTechnical;