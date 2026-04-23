import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShaderBackground } from './ui/shaders-hero-section';

const HeroSection = () => {
  const texts = ["Liquidity", "Pools", "Swaps"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  // Typing animation
  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (charIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isTyping, currentTextIndex, texts]);

  return (
    <ShaderBackground>
      <div className="relative z-10 flex min-h-screen items-end px-4 pb-12 pt-28 sm:px-6 sm:pb-14 md:px-8 md:pb-16 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:gap-12">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-center md:text-left">
              <h1 className="mb-3 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-4xl md:leading-none lg:text-5xl xl:text-6xl">
                High-Performance
              </h1>

              <div className="relative mb-3">
                <h2
                  className="min-h-[1.2em] text-4xl leading-tight text-white italic sm:text-5xl md:text-5xl md:leading-none lg:text-6xl xl:text-7xl"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {displayText}
                  <span className="ml-1 animate-pulse text-fuchsia-300">|</span>
                </h2>
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-4xl md:leading-none lg:text-5xl xl:text-6xl">
                Protocol
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row md:items-end md:justify-start"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="w-full whitespace-nowrap rounded-full border border-fuchsia-200/10 bg-white px-6 py-3 text-center font-semibold text-black shadow-[0_18px_80px_rgba(232,121,249,0.18)] transition-all duration-300 hover:scale-[1.02] hover:bg-fuchsia-50 sm:w-auto"
              onClick={() => window.open('https://app.synthra.org', '_blank')}
            >
              Launch App
            </button>
            <button
              className="w-full whitespace-nowrap rounded-full border border-white/24 bg-white/6 px-6 py-3 text-center font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/12 sm:w-auto"
              onClick={() => window.open('https://docs.synthra.org', '_blank')}
            >
              Read the Docs
            </button>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap');
      `}</style>
    </ShaderBackground>
  );
};

export default HeroSection;
