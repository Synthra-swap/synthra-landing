import React from "react";
import uomiLogo from "../assets/UOMI_white.png";
import coinGecko from "../assets/CG-Wordmark@2x-2.png";


const PartnerLogoScroll = () => {
  const partners = [
    { name: "UOMI", logo: uomiLogo },
    {
      name: "TradingView",
      logo: "https://framerusercontent.com/images/s68ogdaNaA5tBCptnCUV4oZJlSg.png?scale-down-to=512",
    },
    { name: "CoinGecko", logo: coinGecko },
    { name: "The Graph", logo: "https://thegraph.com/images/branding/logo-light.svg" },
    // Aggiungi altri partner se servono
  ];

  // Crea multiple copie per un loop fluido
  const repeatedPartners = Array(6).fill(partners).flat();

  return (
    <section className="relative w-full bg-black text-white py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#ff45db]/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#ff45db]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light font-playfair mb-6 tracking-wide">
            Powered by Strategic Partners
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Synthra builds alongside trusted infrastructure providers and protocol-level partners
            to enable next-generation DeFi experiences across exotic chains.
          </p>
        </div>

        {/* UOMI Grant Spotlight */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-10 py-12 mb-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold font-playfair mb-4 text-white">
              Supported by the UOMI Foundation
            </h3>
            <p className="text-white/70 text-lg">
              Synthra is proud to be supported by the UOMI Foundation, committed to empowering builders
              working to expand decentralized financial infrastructure. This partnership allows our team
              to push boundaries in protocol design and liquidity innovation.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6114f1]/30 to-[#ff45db]/20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full border border-white/10 flex items-center justify-center">
                <img src={uomiLogo} alt="UOMI" className="w-20 h-20 object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos Scroll */}
        <div className="relative w-full overflow-hidden h-16">
          <div className="flex space-x-24 animate-scroll whitespace-nowrap">
            {repeatedPartners.map((partner, idx) => (
              <div key={idx} className="flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animation and grid */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 6));
          }
        }
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }
        .bg-grid-pattern {
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};

export default PartnerLogoScroll;