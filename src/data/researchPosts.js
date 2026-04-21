export const researchPosts = [
  {
    slug: 'robinhood-chain-70-days',
    title: 'Robinhood Chain Testnet: The Rocket That Ran Out of Fuel',
    subtitle: 'An independent analysis of Robinhood Chain\'s first ~70 days: 90.6M transactions, 530K addresses, 9.48M contracts deployed, and an unmistakable decline that Robinhood\'s press releases aren\'t discussing.',
    date: 'April 20, 2026',
    readingTime: '22 min read',
    author: 'Synthra Research',
    category: 'On-Chain Analysis',
    tags: ['Robinhood', 'Arbitrum', 'Testnet', 'L2', 'RWA'],
    cover: '/research/robinhood-testnet/cover.webp',
    featured: true,
  },
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
    featured: false,
  },
];

export const getPostBySlug = (slug) => researchPosts.find((p) => p.slug === slug);
