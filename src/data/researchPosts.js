export const researchPosts = [
  {
    slug: 'arc-testnet-100-days',
    title: 'Arc Testnet at 100 Days: an Independent On-Chain Analysis',
    subtitle: 'An independent analysis of Circle\'s Arc testnet covering 130M+ transactions, 1.7M addresses, and 11.5M contract deployments across the network\'s first 100 days.',
    date: 'February 7, 2026',
    readingTime: '25 min read',
    author: 'Synthra Research',
    category: 'On-Chain Analysis',
    tags: ['Arc', 'Circle', 'Testnet', 'L1', 'Stablecoins'],
    cover: '/research/arc-testnet/cover.png',
    featured: true,
  },
];

export const getPostBySlug = (slug) => researchPosts.find((p) => p.slug === slug);
