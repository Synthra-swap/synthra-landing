import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      className={`fixed bg-black/60 backdrop-blur-md top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        
        <div className="hidden md:flex space-x-8">
          {/* Internal navigation */}
          <Link 
            to="/" 
            className={`transition-colors text-sm font-medium ${
              isActive('/') ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/brand-assets" 
            className={`transition-colors text-sm font-medium ${
              isActive('/brand-assets') ? 'text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Brand Assets
          </Link>
          
          {/* External links */}
          {[
            { name: 'Docs', url: 'https://docs.synthra.org' },
            { name: 'Analytics', url: 'https://info.synthra.org' }
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <a
          href="https://app.synthra.org"
          target="_blank"
          rel="noopener noreferrer"
          className=" bg-white text-black  px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all"
        >
          Launch App
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
