import React, { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
  const texts = ["Liquidity", "Pools", "Swaps"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const embedRef = useRef(null);

  // Initialize UnicornStudio embed
  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve) => {
        if (document.querySelector('script[src*="unicornStudio"]')) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src =
          'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js';
        script.onload = resolve;
        document.head.appendChild(script);
      });
    };

    const init = async () => {
      await loadScript();
      // Clean up any previous canvases from StrictMode remount
      if (embedRef.current) {
        const existing = embedRef.current.querySelectorAll('canvas, iframe');
        existing.forEach(el => el.remove());
      }
      if (window.UnicornStudio && window.UnicornStudio.init) {
        window.UnicornStudio.init();
      }
    };

    init();

    return () => {
      // Clean up on unmount
      if (embedRef.current) {
        const canvases = embedRef.current.querySelectorAll('canvas, iframe');
        canvases.forEach(el => el.remove());
      }
    };
  }, []);

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
    <div className="relative bg-black overflow-hidden" style={{ minHeight: 'calc(100vh + 0px)' }}>
      {/* UnicornStudio Embed Background */}
      <div className="absolute inset-0 w-full h-full">
        <div
          data-us-project="d8wW4AHEarhN4danwQbU"
          id="unicorn-hero"
          ref={embedRef}
          style={{ width: '100%', height: '110%' }}
        />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/100 md:from-black/60 md:via-black/10 md:to-black/100 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center md:justify-end md:flex-row md:items-end p-4 sm:p-6 md:p-8 lg:p-16 pt-20 pb-12 md:pt-8 lg:pt-16 md:pb-16">
        {/* Text Content */}
        <div className="text-center md:text-left mb-12 md:mb-16 md:flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight md:leading-none mb-3">
            High-Performance
          </h1>

          {/* Typing Text */}
          <div className="relative mb-3">
            <h2
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight md:leading-none italic min-h-[1.2em]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {displayText}
              <span className="animate-pulse text-[#ff45db] ml-1">|</span>
            </h2>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight md:leading-none">
            Protocol
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-end justify-center md:justify-start">
          <button
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap text-center"
            onClick={() => window.open('https://app.synthra.org', '_blank')}
          >
            Launch App
          </button>
          <button
            className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-center"
            onClick={() => window.open('https://docs.synthra.org', '_blank')}
          >
            Read the Docs
          </button>
        </div>
      </div>

      {/* Import Google Fonts + hide UnicornStudio watermark */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap');
        #unicorn-hero a[href*="unicorn"],
        #unicorn-hero > a,
        #unicorn-hero div > a[target="_blank"] {
          display: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;