import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Synthra-logo.png';

const Logo = ({ size = 'md', animated = false }) => {
  // Usando solo l'altezza e lasciando che la larghezza si adatti automaticamente
  // per rispettare l'aspect ratio 1152x386 (circa 3:1)
  const sizeClasses = {
    sm: 'h-8',     // ~32px di altezza, ~96px di larghezza
    md: 'h-12',    // ~48px di altezza, ~144px di larghezza  
    lg: 'h-16',    // ~64px di altezza, ~192px di larghezza
    xl: 'h-20',    // ~80px di altezza, ~240px di larghezza
    '2xl': 'h-24', // ~96px di altezza, ~288px di larghezza
  };

  return (
    <div className="flex items-center">
      {animated ? (
        <motion.div
          className={`relative ${sizeClasses[size]}`}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <img 
            src={logo} 
            alt="Synthra Logo" 
            className="h-full w-auto object-contain" 
          />
        </motion.div>
      ) : (
        <div className={`relative ${sizeClasses[size]}`}>
          <img 
            src={logo} 
            alt="Synthra Logo" 
            className="h-full w-auto object-contain" 
          />
        </div>
      )}
    </div>
  );
};

export default Logo;