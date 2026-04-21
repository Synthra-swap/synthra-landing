import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { researchPosts } from '../data/researchPosts';
import SEO from '../components/SEO';

const CATEGORIES = ['All', 'On-Chain Analysis', 'Protocol Deep-Dive', 'Testnet Report', 'DeFi Research', 'Network Performance'];

const Research = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const featured = researchPosts.find((p) => p.featured);
  const others = researchPosts;

  const filtered = activeCategory === 'All'
    ? others
    : others.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-24">
      <SEO
        title="Research — On-Chain Analysis & DeFi Protocol Reports"
        description="Independent on-chain data analysis and protocol research by Synthra."
        path="/research"
        keywords="Synthra Research, on-chain analysis, DeFi research"
      />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 mb-12 mt-10">
        <motion.h1
          className="font-playfair text-4xl md:text-5xl text-center mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest Research From The Team
        </motion.h1>
      </section>

      {/* Featured Post — horizontal card */}
      {featured && (
        <motion.section
          className="max-w-4xl mx-auto px-6 mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link to={`/research/${featured.slug}`} className="group block">
            <div className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-400">
              {/* Image — left */}
              <div className="md:w-[48%] aspect-[16/10] md:aspect-auto overflow-hidden flex-shrink-0">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>

              {/* Content — right */}
              <div className="flex flex-col justify-center p-8 md:p-10 gap-4">
                <div>
                  <span className="inline-block text-[11px] tracking-[0.18em] uppercase font-medium px-3 py-1 rounded-full border border-purple-400/40 text-purple-300 mb-4">
                    Featured
                  </span>
                  <h2 className="font-playfair text-2xl md:text-3xl leading-snug mb-3 group-hover:text-white/90 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-white/45 leading-relaxed line-clamp-3">
                    {featured.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                    {featured.authorAvatar ? (
                      <img src={featured.authorAvatar} alt={featured.author} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[10px] text-white/60">{featured.author?.[0]}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-xs text-white/70 font-medium leading-none mb-0.5">{featured.author || 'Synthra'}</p>
                    <p className="text-[11px] text-white/35">{featured.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.section>
      )}

      {/* Category Filters */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'border-white/30 text-white bg-white/10'
                  : 'border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70 bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid — 3 columns */}
      {filtered.length > 0 && (
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <Link to={`/research/${post.slug}`} className="group block">
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-[1.03] transition-all duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] tracking-[0.18em] uppercase text-purple-400/80 font-medium">
                        {post.category}
                      </span>
                      <h4 className="font-playfair text-[17px] leading-snug mt-2 mb-2 group-hover:text-white/90 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-[13px] text-white/35 leading-relaxed line-clamp-2 mb-4">
                        {post.subtitle}
                      </p>

                      <div className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                          {post.authorAvatar ? (
                            <img src={post.authorAvatar} alt={post.author} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-[9px] text-white/60">{post.author?.[0] || 'S'}</span>
                          )}
                        </div>
                        <div>
                          <p className="text-[11px] text-white/60 font-medium leading-none mb-0.5">{post.author || 'Synthra'}</p>
                          <p className="text-[10px] text-white/30">{post.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <div className="max-w-6xl mx-auto px-6 text-center py-20">
          <p className="text-white/30 text-sm">No research posts in this category yet.</p>
        </div>
      )}
    </main>
  );
};

export default Research;