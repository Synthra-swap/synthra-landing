import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { researchPosts } from '../data/researchPosts';

const Research = () => {
  const featured = researchPosts.find((p) => p.featured);
  const others = researchPosts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <motion.p
          className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Synthra Research
        </motion.p>
        <motion.h1
          className="font-playfair text-5xl md:text-7xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Research
        </motion.h1>
        <motion.p
          className="text-lg text-white/50 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          On-chain data analysis and protocol research.
        </motion.p>
      </section>

      {/* Featured Post */}
      {featured && (
        <motion.section
          className="max-w-5xl mx-auto px-6 mb-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link to={`/research/${featured.slug}`} className="group block">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
              {/* Cover image */}
              <div className="aspect-[2.2/1] overflow-hidden">
                <img
                  src={featured.cover}
                  alt={featured.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-[1.02] transform"
                />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs tracking-[0.2em] uppercase text-purple-400/80">
                    {featured.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-xs text-white/30">
                    {featured.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-xs text-white/30">
                    {featured.readingTime}
                  </span>
                </div>

                <h2 className="font-playfair text-2xl md:text-4xl leading-snug mb-4 group-hover:text-white/90 transition-colors">
                  {featured.title}
                </h2>

                <p className="text-white/40 leading-relaxed max-w-2xl text-[15px]">
                  {featured.subtitle}
                </p>

                <div className="flex items-center gap-3 mt-8">
                  <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                    Read report
                  </span>
                  <svg
                    className="w-4 h-4 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </motion.section>
      )}

      {/* Other Posts Grid */}
      {others.length > 0 && (
        <section className="max-w-5xl mx-auto px-6">
          <div className="border-t border-white/[0.06] pt-16">
            <h3 className="text-xs tracking-[0.3em] uppercase text-white/30 mb-12">
              All Research
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {others.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <Link to={`/research/${post.slug}`} className="group block">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-400 hover:border-white/[0.12] hover:bg-white/[0.04]">
                      <div className="aspect-[2/1] overflow-hidden">
                        <img
                          src={post.cover}
                          alt={post.title}
                          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[11px] tracking-[0.15em] uppercase text-purple-400/70">
                            {post.category}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="text-[11px] text-white/30">
                            {post.date}
                          </span>
                        </div>
                        <h4 className="font-playfair text-lg leading-snug mb-2 group-hover:text-white/90 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-white/35 leading-relaxed line-clamp-2">
                          {post.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Research;
