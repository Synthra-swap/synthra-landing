import React, { useState } from 'react';
import { Download, Copy, Check, Eye, Palette, Type, Image, Grid, FileText } from 'lucide-react';

// Import delle immagini (sostituisci con i path corretti nel tuo progetto)
import syntraLogo from '../assets/syntra-logo.png';
import syntraLogoNoBg from '../assets/syntra-logo-no-bg.png';
import syntraLogoBlack from '../assets/Synthra-logo-inteto-no-bg-black.png';
import syntraLogoWhite from '../assets/Synthra-logo-inteto-no-bg-bianco.png';

const BrandAssets = () => {
  const [copiedColor, setCopiedColor] = useState(null);

  const logoVariants = [
    {
      id: 'primary',
      name: 'Primary Logo',
      description: 'Main logo with colored background',
      preview: syntraLogo,
      file: syntraLogo,
      bgColor: 'bg-white/5'
    },
    {
      id: 'transparent',
      name: 'Transparent',
      description: 'For overlays and flexible use',
      preview: syntraLogoNoBg,
      file: syntraLogoNoBg,
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-400/10'
    },
    {
      id: 'black',
      name: 'Black Version',
      description: 'For light backgrounds',
      preview: syntraLogoBlack,
      file: syntraLogoBlack,
      bgColor: 'bg-white/90'
    },
    {
      id: 'white',
      name: 'White Version',
      description: 'For dark backgrounds',
      preview: syntraLogoWhite,
      file: syntraLogoWhite,
      bgColor: 'bg-gray-900'
    }
  ];

  const colorPalette = [
    { name: 'Primary', hex: '#6114f1', rgb: '97, 20, 241' },
    { name: 'Secondary', hex: '#ff45db', rgb: '255, 69, 219' },
    { name: 'Black', hex: '#000000', rgb: '0, 0, 0' },
    { name: 'White', hex: '#ffffff', rgb: '255, 255, 255' }
  ];

  const spacingScale = [
    { name: 'xs', value: '4px', rem: '0.25rem' },
    { name: 'sm', value: '8px', rem: '0.5rem' },
    { name: 'md', value: '16px', rem: '1rem' },
    { name: 'lg', value: '24px', rem: '1.5rem' },
    { name: 'xl', value: '32px', rem: '2rem' },
    { name: '2xl', value: '48px', rem: '3rem' },
    { name: '3xl', value: '64px', rem: '4rem' }
  ];

  const iconography = [
    { name: 'Download', component: Download },
    { name: 'Copy', component: Copy },
    { name: 'Eye', component: Eye },
    { name: 'Palette', component: Palette },
    { name: 'Type', component: Type },
    { name: 'Image', component: Image },
    { name: 'Grid', component: Grid },
    { name: 'FileText', component: FileText }
  ];

  const handleDownload = (logoFile, logoName) => {
    const link = document.createElement('a');
    link.href = logoFile;
    link.download = `${logoName.toLowerCase().replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedColor(id);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <div className="relative pt-40 pb-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-light text-white leading-none mb-8">
            Brand
          </h1>
          <h2 
            className="text-7xl md:text-9xl lg:text-[12rem] text-white leading-none italic mb-16"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Assets
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-white/50 leading-relaxed mb-12">
              Complete visual identity system and brand guidelines for consistent application across all touchpoints.
            </p>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-6xl font-light mb-6">Logos</h3>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Primary brand marks in multiple formats for different use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {logoVariants.map((logo) => (
              <div key={logo.id} className="group">
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500">
                  <div className={`h-72 flex items-center justify-center p-12 ${logo.bgColor}`}>
                    <img 
                      src={logo.preview} 
                      alt={logo.name} 
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                  <div className="p-10">
                    <h4 className="text-xl font-medium mb-3">{logo.name}</h4>
                    <p className="text-white/50 mb-8 leading-relaxed">{logo.description}</p>
                    <button 
                      onClick={() => handleDownload(logo.file, logo.name)}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-2xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Download size={18} />
                      Download PNG
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-6xl font-light mb-6">Typography</h3>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Carefully selected typefaces that embody our brand personality
            </p>
          </div>

          <div className="space-y-16">
            {/* Goldman Font */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden">
              <div className="p-16 text-center border-b border-white/[0.08]">
                <div 
                  className="text-6xl md:text-8xl font-light tracking-wider uppercase mb-6"
                  style={{ fontFamily: 'Goldman, sans-serif' }}
                >
                  SYNTHRA
                </div>
                <p className="text-white/40">Primary brand typography</p>
              </div>
              <div className="p-10">
                <h4 className="text-xl font-medium mb-4">Goldman</h4>
                <p className="text-white/50 mb-6">Used for main brand name and primary headings</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">400 Regular</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Uppercase</span>
                </div>
              </div>
            </div>

            {/* Playfair Display Font */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden">
              <div className="p-16 text-center border-b border-white/[0.08]">
                <div 
                  className="text-5xl md:text-7xl italic mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Decentralized Exchange
                </div>
                <p className="text-white/40">Display typography</p>
              </div>
              <div className="p-10">
                <h4 className="text-xl font-medium mb-4">Playfair Display</h4>
                <p className="text-white/50 mb-6">Used for hero text, decorative elements, and accent typography</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">400 Regular</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">700 Bold</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Italic</span>
                </div>
              </div>
            </div>

            {/* Inter Font */}
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl overflow-hidden">
              <div className="p-16 text-center border-b border-white/[0.08]">
                <div className="text-4xl md:text-5xl font-light mb-4">
                  The quick brown fox jumps over the lazy dog
                </div>
                <p className="text-white/40">Supporting typography</p>
              </div>
              <div className="p-10">
                <h4 className="text-xl font-medium mb-4">Inter</h4>
                <p className="text-white/50 mb-6">Used for body text, UI elements, and secondary content</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">300 Light</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">400 Regular</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">500 Medium</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">600 Semibold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-6xl font-light mb-6">Colors</h3>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              A focused palette that ensures consistency and visual impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {colorPalette.map((color, index) => (
              <div key={index} className="group">
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
                  <div 
                    className="h-32 w-full cursor-pointer"
                    style={{ backgroundColor: color.hex }}
                    onClick={() => copyToClipboard(color.hex, index)}
                  />
                  <div className="p-6">
                    <h4 className="font-medium mb-3">{color.name}</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => copyToClipboard(color.hex, `hex-${index}`)}
                        className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors w-full text-left"
                      >
                        {copiedColor === `hex-${index}` ? <Check size={12} /> : <Copy size={12} />}
                        {color.hex}
                      </button>
                      <button
                        onClick={() => copyToClipboard(`rgb(${color.rgb})`, `rgb-${index}`)}
                        className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors w-full text-left"
                      >
                        {copiedColor === `rgb-${index}` ? <Check size={12} /> : <Copy size={12} />}
                        {color.rgb}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient */}
          <div className="max-w-md mx-auto">
            <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-purple-600 to-pink-600" />
              <div className="p-6 text-center">
                <h4 className="font-medium mb-3">Brand Gradient</h4>
                <button
                  onClick={() => copyToClipboard('linear-gradient(to right, #6114f1, #ff45db)', 'gradient')}
                  className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mx-auto"
                >
                  {copiedColor === 'gradient' ? <Check size={12} /> : <Copy size={12} />}
                  linear-gradient(90deg, #6114f1, #ff45db)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      

      {/* Guidelines Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-6xl font-light mb-6">Guidelines</h3>
            <p className="text-white/40 text-lg max-w-xl mx-auto">
              Essential rules for maintaining brand consistency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Logo Usage */}
            <div className="space-y-8">
              <h4 className="text-2xl font-light mb-8">Logo Usage</h4>
              
              <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                <div className="bg-black rounded-xl p-12 mb-6 flex items-center justify-center">
                  <img 
                    src={syntraLogoWhite} 
                    alt="Correct usage" 
                    className="h-24 object-contain"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Check className="text-green-400" size={16} />
                  <span className="text-green-400 font-medium">Correct</span>
                </div>
                <p className="text-white/60 text-sm">Proper spacing, contrast, and proportions</p>
              </div>

              <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                <div className="bg-gray-600 rounded-xl p-12 mb-6 flex items-center justify-center">
                  <img 
                    src={syntraLogoWhite} 
                    alt="Incorrect usage" 
                    className="h-16 object-contain opacity-60"
                    style={{ 
                      filter: 'hue-rotate(180deg)',
                      transform: 'scaleX(1.5)'
                    }}
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-4 h-4 bg-red-400 rounded-full flex items-center justify-center">
                    <span className="w-2 h-0.5 bg-black"></span>
                  </span>
                  <span className="text-red-400 font-medium">Incorrect</span>
                </div>
                <p className="text-white/60 text-sm">Distorted, poor contrast, unauthorized colors</p>
              </div>
            </div>

            {/* Key Rules */}
            <div className="space-y-8">
              <h4 className="text-2xl font-light mb-8">Key Rules</h4>
              
              <div className="space-y-6">
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
                  <h5 className="font-medium mb-2">Clear Space</h5>
                  <p className="text-white/60 text-sm">Maintain minimum clear space equal to half the logo height</p>
                </div>
                
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
                  <h5 className="font-medium mb-2">Minimum Size</h5>
                  <p className="text-white/60 text-sm">Never smaller than 24px height for digital use</p>
                </div>
                
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
                  <h5 className="font-medium mb-2">Color Usage</h5>
                  <p className="text-white/60 text-sm">Only use approved brand colors and variants</p>
                </div>
                
                <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6">
                  <h5 className="font-medium mb-2">Proportions</h5>
                  <p className="text-white/60 text-sm">Never distort, stretch, or modify the logo shape</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
     

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,700&family=Inter:wght@300;400;500;600;700&family=Goldman:wght@400&display=swap');
      `}</style>
    </div>
  );
};

export default BrandAssets;