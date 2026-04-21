import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';
import '../index.css';

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
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glassmorphism container */}
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center rounded-2xl px-6 py-3.5 transition-all duration-500 border ${
          scrolled
            ? 'bg-white/[0.07] backdrop-blur-xl border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-white/[0.04] backdrop-blur-lg border-white/[0.08]'
        }`}
        style={{
          background: scrolled
            ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        }}
      >
        {/* Logo */}
        <Link to="/" className="relative z-10 flex-shrink-0">
          <Logo />
        </Link>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            to="/"
            className={`transition-colors duration-200 text-[13px] font-medium tracking-[-0.01em] ${
              isActive('/') ? 'text-white' : 'text-white/50 hover:text-white/90'
            }`}
          >
            Home
          </Link>
          <Link
            to="/research"
            className={`transition-colors duration-200 text-[13px] font-medium tracking-[-0.01em] ${
              location.pathname.startsWith('/research') ? 'text-white' : 'text-white/50 hover:text-white/90'
            }`}
          >
            Research
          </Link>
          <Link
            to="/brand-assets"
            className={`transition-colors duration-200 text-[13px] font-medium tracking-[-0.01em] ${
              isActive('/brand-assets') ? 'text-white' : 'text-white/50 hover:text-white/90'
            }`}
          >
            Brand Assets
          </Link>
          <a
            href="https://docs.synthra.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white/90 transition-colors duration-200 text-[13px] font-medium tracking-[-0.01em]"
          >
            Docs
          </a>
        </div>

        {/* CTA - border style like ZeroLend "Use App" */}
        <a
          href="https://app.synthra.org"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex-shrink-0 px-5 py-2 rounded-xl text-[13px] font-semibold text-white border border-white/20 bg-white/[0.06] hover:bg-white/[0.12] hover:border-white/30 transition-all duration-300 tracking-[-0.01em]"
        >
          Launch App
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;