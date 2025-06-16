function TokenInfo() {
    return (
      <section id="token" className="py-20 bg-gray-900/50 relative">
        <div className="absolute -top-40 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-gray-900/50"></div>
        <div className="absolute -bottom-40 left-0 right-0 h-40 bg-gradient-to-t from-transparent to-gray-900/50"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                The <span className="gradient-text">$SYNTH</span> Token
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Our native token powers the entire Synthra ecosystem, providing utility, 
                governance rights, and rewards for platform participants.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="card bg-gray-900/80">
                  <p className="text-sm text-gray-400">Max Supply</p>
                  <p className="text-2xl font-bold gradient-text">100,000,000</p>
                </div>
                <div className="card bg-gray-900/80">
                  <p className="text-sm text-gray-400">Circulating Supply</p>
                  <p className="text-2xl font-bold gradient-text">38,500,000</p>
                </div>
                <div className="card bg-gray-900/80">
                  <p className="text-sm text-gray-400">Market Cap</p>
                  <p className="text-2xl font-bold gradient-text">$45.6M</p>
                </div>
                <div className="card bg-gray-900/80">
                  <p className="text-sm text-gray-400">Current Price</p>
                  <p className="text-2xl font-bold gradient-text">$1.18</p>
                </div>
              </div>
              
              <button className="btn-primary">Buy $SYNTH</button>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-50"></div>
                <div className="relative bg-gray-900 rounded-3xl p-6 border border-gray-800">
                  <h3 className="text-2xl font-bold mb-6">Token Allocation</h3>
                  
                  <div className="space-y-4">
                    {allocations.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span>{item.category}</span>
                          <span className="text-gray-400">{item.percentage}%</span>
                        </div>
                        <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full" 
                            style={{ 
                              width: `${item.percentage}%`,
                              background: `linear-gradient(90deg, #6114f1 0%, #ff45db ${item.percentage * 2}%)` 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-gray-800/50 rounded-xl">
                    <h4 className="text-lg font-medium mb-2">Token Utility</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Fee discounts for token holders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Governance voting rights</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Staking rewards and yield farming</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        <span>Access to premium features and tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  const allocations = [
    { category: 'Ecosystem & Rewards', percentage: 40 },
    { category: 'Team & Advisors', percentage: 20 },
    { category: 'Public Sale', percentage: 15 },
    { category: 'Private Sale', percentage: 10 },
    { category: 'Treasury', percentage: 10 },
    { category: 'Marketing', percentage: 5 }
  ]
  
  export default TokenInfo