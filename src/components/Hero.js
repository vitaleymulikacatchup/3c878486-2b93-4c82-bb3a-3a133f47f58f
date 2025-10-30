import React from 'react';

const Hero = () => {
  return (
    <section className="gradient-bg section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-brand-blue">AI-powered</span>
                <br />
                <span className="text-brand-dark">web and mobile</span>
                <br />
                <span className="text-brand-blue">in 12 weeks</span>
              </h1>
              <div className="flex items-center space-x-2 text-brand-gray">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span className="font-medium">n8n</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand-dark rounded"></div>
                </div>
                <span>Portfolio Showcase</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-brand-gray">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">T</span>
                </div>
                <span>Telegram</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-xs">W</span>
                </div>
                <span>WhatsApp</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96">
                <img 
                  src="/images/hero-3d-object.png" 
                  alt="3D Abstract Object" 
                  className="w-full h-full object-contain animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;