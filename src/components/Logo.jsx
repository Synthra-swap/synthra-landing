import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/syntra-logo-no-bg.png';

const Logo = ({ size = 'md', animated = false }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
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
        
          <img src={logo} alt="Synthra Logo" className="absolute inset-0 w-full h-full object-contain" />
        </motion.div>
      ) : (
        <div className={`relative ${sizeClasses[size]}`}>
          
          <img src={logo} alt="Synthra Logo" className="absolute inset-0 w-full h-full object-contain" />
        </div>
      )}
      <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6114f1] to-[#ff45db]">
        Synthra
      </span>
    </div>
  );
};

export default Logo;
