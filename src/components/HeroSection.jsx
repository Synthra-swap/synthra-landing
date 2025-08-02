import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const texts = ["Liquidity" , "Pools" , "Swaps"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

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
        // Pausa prima di iniziare a cancellare
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
        // Passa al testo successivo
        const timeout = setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isTyping, currentTextIndex, texts]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Video Background */}
        <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          style={{
            filter: 'hue-rotate(280deg) saturate(1.5) contrast(1.1)',
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://framerusercontent.com/assets/bYZzkYr0CEAeYZMVKyCbuMdjZtk.webm" type="video/webm" />
        </video>
        
        {/* Overlay colorato aggiuntivo */}
        <div className="absolute inset-0 bg-[#ff45db]/15 pointer-events-none" />
        
        {/* Gradient overlay - sfumato dall'alto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/100 z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-end justify-between p-8 lg:p-16">
        {/* Left Side - Text */}
        <div className="flex-1 mb-8 lg:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-none mb-2">
            High-Performance
          </h1>
          
          {/* Typing Text */}
          <div className="relative mb-2">
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-none italic"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {displayText}
              <span className="animate-pulse text-[#ff45db] ml-1">|</span>
            </h2>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-none">
            Protocol
          </h1>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex  gap-4 items-end">
          <button className="px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            onClick={() => window.open('https://app.synthra.org', '_blank')}
          >
            Launch App
          </button>
          <button className="px-4 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
           onClick={() => window.open('https://docs.synthra.org', '_blank')}
           >
            Read the Docs
          </button>
        </div>
      </div>

      {/* Import Google Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&display=swap');
      `}</style>
    </div>
  );
};

export default HeroSection;