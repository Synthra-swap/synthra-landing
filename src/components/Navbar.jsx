import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/Synthra-logo-white-cropped.png';

const navLinks = [
  { label: 'Research', href: '/research', internal: true },
  { label: 'Brand', href: '/brand-assets', internal: true },
  { label: 'Docs', href: 'https://docs.synthra.org' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (href) => location.pathname === href;

  return (
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-50 px-3 sm:px-6 lg:px-8 transition-[padding] duration-500 ${
          scrolled ? 'pt-1 sm:pt-2' : 'pt-2 sm:pt-3'
        }`}
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Outer wrapper holds the gradient border via padding + inner bg */}
        <div className="relative mx-auto max-w-[92rem]">
          {/* Gradient border layer */}
          <div
            className={`pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-b from-white/20 via-white/8 to-white/[0.03] transition-opacity duration-500 ${
              scrolled ? 'opacity-100' : 'opacity-80'
            }`}
          />
          {/* Inner navbar */}
          <div
            className={`relative m-px grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[25px] bg-[#0a0a0c]/75 px-3 backdrop-blur-2xl transition-all duration-500 sm:px-4 ${
              scrolled
                ? 'py-2 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]'
                : 'py-2.5 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.5)]'
            }`}
          >
            {/* Subtle top highlight */}
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

            {/* Logo */}
            <Link
              to="/"
              className="group relative flex items-center rounded-2xl px-2 py-1.5 transition-colors duration-300 hover:bg-white/[0.04]"
              aria-label="Synthra home"
            >
              <img
                src={logo}
                alt="Synthra"
                draggable="false"
                className={`w-auto select-none object-contain transition-all duration-500 ${
                  scrolled ? 'h-6 sm:h-6' : 'h-8 sm:h-8'
                }`}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden justify-center md:flex">
              <div className="relative flex items-center gap-0.5 rounded-full border border-white/[0.08] bg-white/[0.025] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                {navLinks.map((link) => {
                  const active = link.internal && isActive(link.href);
                  const baseClasses =
                    'relative rounded-full px-4 py-2 text-[13px] font-small tracking-[-0.005em] transition-colors duration-300';
                  const colorClasses = active
                    ? 'text-white'
                    : 'text-white/55 hover:text-white';

                  const content = (
                    <>
                      {active && (
                        <motion.span
                          layoutId="nav-active-pill"
                          className="absolute inset-0 rounded-full bg-white/[0.09] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative inline-flex items-center gap-1">
                        {link.label}
                        {!link.internal && (
                          <ArrowUpRight
                            size={12}
                            className="opacity-50 transition-opacity duration-300 group-hover:opacity-100"
                          />
                        )}
                      </span>
                    </>
                  );

                  return link.internal ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`group ${baseClasses} ${colorClasses}`}
                    >
                      {content}
                    </Link>
                  ) : (
                      <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group ${baseClasses} ${colorClasses}`}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right side: CTA + mobile toggle */}
            <div className="flex items-center gap-2 justify-self-end">

              <a
                href="https://app.synthra.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative hidden h-10 items-center overflow-hidden rounded-full bg-white pl-5 pr-1.5 text-[13px] font-semibold tracking-[-0.005em] text-black transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.08),0_12px_30px_-8px_rgba(255,255,255,0.25)] sm:inline-flex"
              >
                <span className="relative z-10">Launch app</span>
                <span className="relative z-10 ml-3 grid h-5 w-5 place-items-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} strokeWidth={2.25} />
                </span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-colors duration-300 hover:bg-white/[0.08] md:hidden"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.span
                      key="x"
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 45, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X size={18} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-2 max-w-[92rem] md:hidden"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0c]/85 p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl">
                <div className="flex flex-col">
                  {navLinks.map((link) => {
                    const active = link.internal && isActive(link.href);
                    const cls = `flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] font-medium transition-colors duration-200 ${
                      active
                        ? 'bg-white/[0.07] text-white'
                        : 'text-white/70 hover:bg-white/[0.04] hover:text-white'
                    }`;
                    return link.internal ? (
                      <Link key={link.label} to={link.href} className={cls}>
                        <span>{link.label}</span>
                        <ArrowUpRight size={16} className="opacity-50" />
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cls}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight size={16} className="opacity-50" />
                      </a>
                    );
                  })}
                  <a
                    href="https://app.synthra.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-[15px] font-semibold text-black"
                  >
                    <span>Launch app</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
  );
};

export default Navbar;