import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from './Logo';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrolled ? 'bg-[#0a071a]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Swap', url: 'https://app.synthra.org/#/swap' },
              { name: 'Pool', url: 'https://app.synthra.org/#/pools' },
              { name: 'Docs', url: 'https://docs.synthra.org' },
              { name: 'Earn', url: 'https://app.synthra.org/#/earn' },
              { name: 'Analytics', url: 'https://info.synthra.org' }
            ].map((item, i) => (
              <a key={i} href={item.url} className="text-white/60 hover:text-white transition-colors text-sm font-medium">
                {item.name}
              </a>
            ))}
          </div>
          <a
            href="https://app.synthra.org"
            className="bg-gradient-to-r from-[#6114f1] to-[#ff45db] px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all"
          >
            Launch App
          </a>
        </div>
      </motion.nav>
    </>
  );
};

export default HeroSection;
