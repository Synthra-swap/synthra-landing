import React from "react";
import uomiLogo from "../assets/UOMI_white.png";

const PartnerLogoScroll = () => {
  // These would normally be actual logo images from your public folder
  const partners = [
    { name: "UOMI", logo: uomiLogo },
    {
      name: "TradingView",
      logo: "https://framerusercontent.com/images/s68ogdaNaA5tBCptnCUV4oZJlSg.png?scale-down-to=512",
    },
  ];

  return (
    <div className="w-full bg-[#0a071a] text-white">
      {/* Top section with Sui Grant - visible in the image but not the focus of request */}
      <div className="border-b border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">UOMI Grant</h2>

              <p className="text-white/70">
                Synthra is honored to be a key recipient of UOMI Foundation
                grants, supporting organizations dedicated to expanding the UOMI
                blockchain ecosystem. These investments enable our team to
                develop innovative solutions that showcase UOMI's technological
                potential. Synthra plays a vital role
                in advancing UOMI's capabilities while driving adoption across
                industries worldwide.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/30 to-pink-700/20 blur-xl"></div>
                <div className="relative w-full h-full rounded-full border border-white/10 flex items-center justify-center">
                  {/* Placeholder for Sui logo */}
                  <div className="w-24 h-24 rounded-full bg-white/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner ticker section with scrolling logos */}
      <div className="border-t border-white/10 bg-gradient-to-r from-[#1e133a]/20 via-[#2a1655]/10 to-[#1e133a]/20 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white/80 text-lg mb-6">
            Fully integrated with{" "}
            <span className="font-semibold text-white">UOMI Ecosystem</span>
          </div>

          {/* Logo scroll container */}
          {/* Scrolling animation container */}
          <div className="relative w-full overflow-hidden h-12">
            {/* This creates the scrolling effect using CSS animation */}
            <div className="flex space-x-20 animate-scroll whitespace-nowrap absolute">
              {/* Double the logos to create seamless loop */}
              {[...partners, ...partners, ...partners].map((partner, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid overlay for the subtle pattern seen in the background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default PartnerLogoScroll;
