import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile for certain effects
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  // Grid for Apple-style effect
  const gridSize = 15;
  const gridElements = Array.from({ length: gridSize * gridSize });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080410] text-white"
    >
      {/* Enhanced background with subtle color layers */}
      <div className="absolute inset-0">
        {/* Base texture */}
        <div className="absolute inset-0 bg-[url('/noise-pattern.png')] opacity-[0.03]"></div>
        
        {/* Subtle light gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="absolute top-0 right-0 w-3/4 h-2/3 bg-gradient-to-bl from-indigo-800/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-tr from-fuchsia-900/5 via-transparent to-transparent"></div>
        
        {/* Light beams */}
        <motion.div 
          className="absolute -top-20 left-1/4 w-px h-[300px] bg-gradient-to-b from-purple-300/0 via-purple-300/10 to-purple-300/0"
          animate={{ 
            height: ["300px", "400px", "300px"],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute -top-20 right-1/3 w-px h-[400px] bg-gradient-to-b from-blue-300/0 via-blue-300/10 to-blue-300/0"
          animate={{ 
            height: ["400px", "500px", "400px"],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="grid grid-cols-15 grid-rows-15 h-full w-full">
          {gridElements.map((_, index) => (
            <motion.div
              key={index}
              className="border-[0.5px] border-white/[0.04]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.01 * index,
                ease: "easeOut" 
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Enhanced glass panels with subtle animation */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/15 to-transparent blur-3xl"
        style={{ 
          x: useTransform(() => mousePosition.x * -30),
          y: useTransform(() => mousePosition.y * -30),
        }}
      />
      
      <motion.div 
        className="absolute right-0 bottom-0 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-fuchsia-600/15 to-indigo-600/5 blur-3xl"
        style={{ 
          x: useTransform(() => mousePosition.x * 30),
          y: useTransform(() => mousePosition.y * 30),
        }}
      />
      
      <motion.div 
        className="absolute left-1/4 top-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl"
        style={{ 
          x: useTransform(() => mousePosition.x * 20),
          y: useTransform(() => mousePosition.y * 20),
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!isMobile && (
          <>
            <motion.div
              className="absolute w-16 h-16 rounded-lg backdrop-blur-lg bg-white/5 border border-white/10"
              style={{ 
                x: useTransform(() => 100 + mousePosition.x * -40),
                y: useTransform(() => 100 + mousePosition.y * -40),
                rotateZ: useTransform(() => mousePosition.x * 10),
              }}
            />
            
            <motion.div
              className="absolute right-32 top-32 w-24 h-24 rounded-full backdrop-blur-lg bg-white/5 border border-white/10"
              style={{ 
                x: useTransform(() => mousePosition.x * 50),
                y: useTransform(() => mousePosition.y * 50),
                rotateZ: useTransform(() => mousePosition.y * -10),
              }}
            />
            
            <motion.div
              className="absolute right-64 bottom-32 w-20 h-20 rounded-lg backdrop-blur-lg bg-white/5 border border-white/10"
              style={{ 
                x: useTransform(() => mousePosition.x * 30),
                y: useTransform(() => mousePosition.y * 30),
                rotateZ: useTransform(() => mousePosition.x * 20),
              }}
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div 
          style={{ y, opacity, scale }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-3"
          >
            <span className="px-4 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white/80">
              Introducing Synthra
            </span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-7xl font-bold mb-6 text-center leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Trade with</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
              confidence<span className="text-purple-500">.</span>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-center text-white/60 mb-10 max-w-xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A decentralized exchange designed with simplicity and performance in mind. Lightning fast transactions with the best rates across all chains.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="https://app.synthra.org"
              className="group relative overflow-hidden px-8 py-4 w-full sm:w-auto rounded-full font-medium text-center transition-all"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-fuchsia-600"></span>
              <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-700 to-fuchsia-700"></span>
              <span className="relative text-white">Start Trading</span>
            </a>
            <a
              href="https://docs.synthra.org"
              className="group relative overflow-hidden px-8 py-4 w-full sm:w-auto rounded-full font-medium text-center border border-white/10 hover:border-white/20 transition-all"
            >
              <span className="absolute inset-0 w-full h-full transition-opacity duration-300 bg-white/0 group-hover:bg-white/5"></span>
              <span className="relative text-white/70 group-hover:text-white transition-colors">Learn More</span>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Token cards floating */}
        {!isMobile && (
          <motion.div 
            className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-4xl flex justify-center opacity-60"
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, -100]),
            }}
          >
            <TokenCard 
              position={{ left: '0%', delay: 0.2 }} 
              color="from-purple-500/20 to-purple-700/20"
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
            />
            <TokenCard 
              position={{ left: '25%', delay: 0.3 }}
              color="from-blue-500/20 to-blue-700/20"
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
            />
            <TokenCard 
              position={{ left: '50%', delay: 0.4 }}
              color="from-fuchsia-500/20 to-fuchsia-700/20"
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
            />
            <TokenCard 
              position={{ left: '75%', delay: 0.5 }}
              color="from-indigo-500/20 to-indigo-700/20"
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
            />
          </motion.div>
        )}
      </div>

      {/* Subtle animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Particles />
      </div>
      
      {/* Gradient fade to black at bottom for continuity */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
};

// Token card component
const TokenCard = ({ position, color, mouseX, mouseY }) => {
  return (
    <motion.div
      className={`absolute w-32 h-32 rounded-2xl backdrop-blur-md bg-gradient-to-br ${color} border border-white/10 shadow-xl`}
      style={{ 
        left: position.left, 
        x: useTransform(() => (mouseX - 0.5) * -15),
        y: useTransform(() => (mouseY - 0.5) * -15),
        rotateY: useTransform(() => (mouseX - 0.5) * 10), 
        rotateX: useTransform(() => (mouseY - 0.5) * -10), 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1, 
        delay: position.delay,
        type: "spring",
        stiffness: 100
      }}
    >
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/30 to-white/10" />
        </div>
      </div>
    </motion.div>
  );
};

// Subtle animated particles
const Particles = () => {
  const particleCount = 30;
  const particles = Array.from({ length: particleCount });
  
  return (
    <>
      {particles.map((_, index) => {
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 20 + 10;
        const initialX = Math.random() * 100;
        const initialY = Math.random() * 100;
        const delay = Math.random() * 5;
        
        // Randomly assign colors
        const colors = [
          'bg-white', 
          'bg-purple-400', 
          'bg-blue-400', 
          'bg-fuchsia-400',
          'bg-indigo-400'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <motion.div
            key={index}
            className={`absolute w-1 h-1 rounded-full ${color}`}
            style={{ 
              width: size, 
              height: size,
              left: `${initialX}%`,
              top: `${initialY}%`,
              opacity: 0.1 + Math.random() * 0.2,
              filter: 'blur(0.5px)'
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        );
      })}
    </>
  );
};

export default HeroSection;