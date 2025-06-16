function Ecosystem() {
    return (
      <section id="ecosystem" className="py-20 relative overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/20 blur-3xl rounded-full opacity-30"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/20 blur-3xl rounded-full opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The <span className="gradient-text">Synthra</span> Ecosystem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A complete suite of DeFi products designed to work together seamlessly,
              providing everything you need for your crypto journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecosystemProducts.map((product, index) => (
              <div 
                key={index} 
                className="card hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg mb-6 mx-auto">
                  <span className="text-2xl">{product.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{product.title}</h3>
                <p className="text-gray-400 text-center">{product.description}</p>
                <div className="mt-6 text-center">
                  <a href="#" className="text-secondary hover:text-primary transition-colors font-medium">
                    {product.status === 'Live' ? 'Try Now' : 'Learn More'} →
                  </a>
                </div>
                {product.status === 'Live' ? (
                  <span className="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                    Live
                  </span>
                ) : (
                  <span className="absolute top-4 right-4 bg-gray-500/20 text-gray-400 text-xs font-medium px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-6">
              Join our growing ecosystem of partners and integrations
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                  <span className="text-2xl font-bold gradient-text">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  const ecosystemProducts = [
    {
      icon: '💱',
      title: 'Synthra Swap',
      description: 'Our flagship DEX with advanced trading features, low fees, and lightning-fast execution.',
      status: 'Live'
    },
    {
      icon: '🏊',
      title: 'Synthra Pools',
      description: 'Provide liquidity and earn passive income through our optimized yield-generating pools.',
      status: 'Live'
    },
    {
      icon: '🔐',
      title: 'Synthra Vault',
      description: 'Secure yield-optimizing strategies that automatically maximize your returns.',
      status: 'Live'
    },
    {
      icon: '🌉',
      title: 'Synthra Bridge',
      description: 'Seamlessly move assets across multiple blockchains with minimal fees and maximum security.',
      status: 'Coming Soon'
    },
    {
      icon: '📈',
      title: 'Synthra Analytics',
      description: 'Advanced data visualization and market insights to help you make informed decisions.',
      status: 'Coming Soon'
    },
    {
      icon: '💼',
      title: 'Synthra Portfolio',
      description: 'Track your DeFi portfolio performance across all platforms in one intuitive dashboard.',
      status: 'Coming Soon'
    }
  ]
  
  const partners = [
    'Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Avalanche', 'Chainlink', 'The Graph'
  ]
  
  export default Ecosystem
  