import React from 'react';
import { motion } from 'framer-motion';

// Import delle immagini
import syntraLogo from '../assets/syntra-logo.png';
import syntraLogoNoBg from '../assets/syntra-logo-no-bg.png';
import syntraLogoBlack from '../assets/Synthra-logo-inteto-no-bg-black.png';
import syntraLogoWhite from '../assets/Synthra-logo-inteto-no-bg-bianco.png';

const BrandAssets = () => {
  const logoVariants = [
    {
      name: 'Primary Logo',
      description: 'Main logo with colored background',
      preview: syntraLogo,
      file: syntraLogo
    },
    {
      name: 'Logo No Background',
      description: 'Transparent version for overlays',
      preview: syntraLogoNoBg,
      file: syntraLogoNoBg
    },
    {
      name: 'Logo Black Version',
      description: 'Black variant for light backgrounds',
      preview: syntraLogoBlack,
      file: syntraLogoBlack
    },
    {
      name: 'Logo White Version',
      description: 'White variant for dark backgrounds',
      preview: syntraLogoWhite,
      file: syntraLogoWhite
    }
  ];

  const colorPalette = [
    { name: 'Primary Purple', hex: '#6114f1' },
    { name: 'Secondary Pink', hex: '#ff45db' },
    { name: 'Brand Gradient', hex: 'linear-gradient(to right, #6114f1, #ff45db)', isGradient: true },
    { name: 'Pure Black', hex: '#000000' },
    { name: 'Pure White', hex: '#ffffff' }
  ];

  const guidelines = [
    {
      type: 'do',
      title: 'Maintain Clear Space',
      description: 'Always maintain minimum clear space equal to half the logo height around the logo'
    },
    {
      type: 'do',
      title: 'Use Correct Colors',
      description: 'Only use the official brand colors specified in the color palette'
    },
    {
      type: 'do',
      title: 'Minimum Size',
      description: 'Never scale the logo smaller than 24px in height for digital use'
    },
    {
      type: 'dont',
      title: 'Don\'t Distort',
      description: 'Never stretch, compress, or alter the logo proportions'
    },
    {
      type: 'dont',
      title: 'Don\'t Change Colors',
      description: 'Never use unauthorized colors or apply effects to the logo'
    },
    {
      type: 'dont',
      title: 'Don\'t Rotate',
      description: 'Always keep the logo in its original orientation'
    }
  ];

  const handleDownload = (logoFile, logoName) => {
    const link = document.createElement('a');
    link.href = logoFile;
    link.download = `${logoName.toLowerCase().replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Brand{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6114f1] to-[#ff45db] font-medium">
              Assets
            </span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Guidelines and resources for maintaining consistent brand identity across all platforms and communications.
          </p>
        </motion.div>

        {/* Logo Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-light mb-16 text-center">Logo Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {logoVariants.map((logo, index) => (
              <motion.div 
                key={index} 
                className="group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
                  <div className="h-64 bg-gradient-to-br from-purple-500/20 to-pink-400/20 flex items-center justify-center p-12">
                    <img 
                      src={logo.preview} 
                      alt={logo.name} 
                      className="max-h-32 max-w-full object-contain"
                    />
                  </div>
                  <div className="p-8 bg-white/5">
                    <h3 className="text-xl font-medium mb-3">{logo.name}</h3>
                    <p className="text-white/50 mb-6">{logo.description}</p>
                    <button 
                      onClick={() => handleDownload(logo.file, logo.name)}
                      className="w-full bg-gradient-to-r from-[#6114f1] to-[#ff45db] py-3 px-6 rounded-2xl font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                    >
                      Download PNG
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Typography Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-2xl font-light mb-16 text-center">Typography</h2>
          <div className="max-w-3xl mx-auto">
            <div className="border border-white/10 rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 p-16 text-center">
                <div className="mb-8">
                  <h1 className="font-goldman text-6xl md:text-8xl font-extralight text-white mb-4 tracking-wide">
                    SYNTHRA
                  </h1>
                </div>
              </div>
              <div className="p-8 bg-white/5">
                <h3 className="text-xl font-medium mb-3">Goldman Font</h3>
                <p className="text-white/50 mb-4">Official brand typography - use Goldman Light for the main brand name</p>
                <div className="text-sm text-white/40">
                  <p>Font Family: Goldman</p>
                  <p>Weight: 400 (Light)</p>
                  <p>Case: UPPERCASE</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Color Palette */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-light mb-16 text-center">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {colorPalette.map((color, index) => (
              <motion.div 
                key={index} 
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                  <div 
                    className="h-32 w-full"
                    style={{ 
                      background: color.isGradient 
                        ? 'linear-gradient(to right, #6114f1, #ff45db)'
                        : color.hex 
                    }}
                  ></div>
                  <div className="p-4 bg-white/5">
                    <h3 className="font-medium mb-2 text-sm">{color.name}</h3>
                    <p className="text-white/50 text-xs font-mono">
                      {color.isGradient ? '' : color.hex}
                    </p>
                    {color.isGradient && (
                      <p className="text-white/30 text-xs mt-1">
                        #6114f1 → #ff45db
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Guidelines */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-light mb-12 text-center">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Do's */}
            <div>
              <h3 className="text-lg font-medium mb-6 text-green-400 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Do's
              </h3>
              <div className="space-y-4">
                {guidelines.filter(g => g.type === 'do').map((guideline, index) => (
                  <div key={index} className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                    <h4 className="font-medium mb-2">{guideline.title}</h4>
                    <p className="text-white/60 text-sm">{guideline.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Don'ts */}
            <div>
              <h3 className="text-lg font-medium mb-6 text-red-400 flex items-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                Don'ts
              </h3>
              <div className="space-y-4">
                {guidelines.filter(g => g.type === 'dont').map((guideline, index) => (
                  <div key={index} className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                    <h4 className="font-medium mb-2">{guideline.title}</h4>
                    <p className="text-white/60 text-sm">{guideline.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Usage Examples */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-light mb-12 text-center">Usage Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Correct Usage */}
            <div className="text-center">
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 mb-6">
                <div className="bg-black rounded-xl p-8 mb-4 flex items-center justify-center min-h-[120px]">
                  <img 
                    src={syntraLogoWhite} 
                    alt="Correct usage" 
                    className="h-22"
                  />
                </div>
                <div className="flex items-center justify-center mb-4">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-green-400 font-medium">Correct Usage</span>
                </div>
                <ul className="text-white/60 text-sm space-y-1 text-left">
                  <li>• Proper spacing maintained</li>
                  <li>• Original proportions preserved</li>
                  <li>• Appropriate contrast</li>
                  <li>• Correct size and placement</li>
                </ul>
              </div>
            </div>

            {/* Incorrect Usage */}
            <div className="text-center">
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 mb-6">
                <div className="bg-black rounded-xl p-8 mb-4 flex items-center justify-center min-h-[120px]">
                  <img 
                    src={syntraLogoWhite} 
                    alt="Incorrect usage" 
                    className="h-22"
                    style={{ 
                      filter: 'hue-rotate(180deg) brightness(0.7)',
                      transform: 'scaleX(1.4)'
                    }}
                  />
                </div>
                <div className="flex items-center justify-center mb-4">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                  <span className="text-red-400 font-medium">Incorrect Usage</span>
                </div>
                <ul className="text-white/60 text-sm space-y-1 text-left">
                  <li>• Logo distorted horizontally</li>
                  <li>• Unauthorized color changes</li>
                  <li>• Poor contrast ratio</li>
                  <li>• Effects applied inappropriately</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default BrandAssets;