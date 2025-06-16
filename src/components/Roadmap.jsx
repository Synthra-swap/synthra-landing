function Roadmap() {
    return (
      <section id="roadmap" className="py-20 bg-gray-900/50 relative">
        <div className="absolute -top-40 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-gray-900/50"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Roadmap</span> & Vision
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey to revolutionize decentralized trading and build
              the most advanced DeFi ecosystem.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary"></div>
            
            <div className="space-y-24">
              {roadmapItems.map((phase, index) => (
                <div key={index} className={`relative z-10 flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className={`${
                      phase.completed ? 'opacity-70' : 'opacity-100'
                    }`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                        phase.completed 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'gradient-bg'
                      }`}>
                        {phase.period}
                      </span>
                      <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                        {phase.milestones.map((milestone, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`text-${phase.completed ? 'green-400' : 'secondary'} mr-2`}>
                              {phase.completed ? '✓' : '•'}
                            </span>
                            <span className={phase.completed ? 'text-gray-400' : 'text-gray-300'}>
                              {milestone}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full gradient-bg flex items-center justify-center border-4 border-gray-900">
                    <span className="text-xl">{phase.icon}</span>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our vision extends beyond the roadmap. We're committed to continuous innovation and 
                adapting to the evolving needs of the DeFi community.
              </p>
              <button className="btn-primary">Join Our Community</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  const roadmapItems = [
    {
      period: 'Q1 2024',
      title: 'Foundation Phase',
      icon: '🚀',
      completed: true,
      milestones: [
        'Team formation and initial concept',
        'Market research and competitive analysis',
        'Technical architecture design',
        'Smart contract development begins'
      ]
    },
    {
      period: 'Q2 2024',
      title: 'Development Phase',
      icon: '⚙️',
      completed: true,
      milestones: [
        'Core DEX protocol completion',
        'Security audits by leading firms',
        'Testnet deployment and community testing',
        'Partnership announcements'
      ]
    },
    {
      period: 'Q3 2024',
      title: 'Launch Phase',
      icon: '🎯',
      completed: false,
      milestones: [
        'Mainnet launch of Synthra Swap',
        'Token generation event',
        'Liquidity mining program',
        'Marketing campaign and user acquisition'
      ]
    },
    {
      period: 'Q4 2024',
      title: 'Expansion Phase',
      icon: '📈',
      completed: false,
      milestones: [
        'Launch of Synthra Pools and Vaults',
        'Cross-chain integration expansion',
        'Governance system implementation',
        'Mobile app development'
      ]
    },
    {
      period: 'Q1 2025',
      title: 'Scaling Phase',
      icon: '🌐',
      completed: false,
      milestones: [
        'Layer 2 solutions integration',
        'Advanced trading features rollout',
        'Institutional partnerships',
        'Global expansion and localization'
      ]
    }
  ]
  
  export default Roadmap