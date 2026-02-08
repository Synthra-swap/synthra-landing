import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HybridSeparator = ({ 
  label = "SYSTEM_LAYER_02", 
  color = "#8b5cf6", // Il tuo viola Synthra
  subLabel = "44.02.1" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <div ref={ref} className="w-full py-20 px-6 font-mono overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto flex flex-col items-center">
        
        {/* Top Info - Molto minimale e tecnico */}
        <div className="w-full flex justify-between items-end mb-4 px-2">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 0.4, x: 0 } : {}}
            className="text-[9px] tracking-[0.3em] font-bold"
          >
            {label} // DATA_STREAM
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 0.4, x: 0 } : {}}
            className="text-[9px] tabular-nums"
          >
            LN_{subLabel}
          </motion.div>
        </div>

        {/* The Hybrid Line */}
        <div className="w-full h-px relative flex items-center justify-center">
          {/* Base Line: Gradiente che sfuma ai lati (parte "morbida") */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />
          
          {/* Animated Core: La linea solida che si espande (parte "brutalista") */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-purple-500 to-transparent relative z-10"
          >
            {/* Glow centrale per raccordare le sezioni sfumate */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-purple-600/20 blur-xl" />
          </motion.div>

          {/* Central Glyph - Il "mirino" tecnico */}
          <motion.div 
            animate={isInView ? { rotate: [0, 90], scale: [0.8, 1], opacity: 1 } : { opacity: 0 }}
            className="absolute z-20 bg-black p-1 border border-purple-500/30"
          >
            <div className="w-2 h-2 border-t border-l border-purple-500" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-purple-500" />
          </motion.div>
        </div>

        {/* Bottom Metadata - Dettagli stile console */}
        <div className="mt-6 flex gap-12 opacity-20 group-hover:opacity-100 transition-opacity">
          <div className="flex flex-col items-center">
            <div className="h-4 w-px bg-purple-900" />
            <span className="text-[7px] mt-2">MKR_01</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-4 w-px bg-purple-900" />
            <span className="text-[7px] mt-2">MKR_02</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-4 w-px bg-purple-900" />
            <span className="text-[7px] mt-2">MKR_03</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HybridSeparator;