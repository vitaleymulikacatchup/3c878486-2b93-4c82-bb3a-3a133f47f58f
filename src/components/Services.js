import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Explore our services
          </h2>
        </div>
        
        <div className="space-y-24">
          {/* Web Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-brand-dark">
                Web Development
              </h3>
              <p className="text-brand-gray text-lg leading-relaxed">
                We create modern, responsive web applications using the latest technologies. 
                Our team specializes in building scalable solutions that grow with your business.
              </p>
              <div className="flex space-x-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Vue.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Laravel</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <img 
                  src="/images/web-dev-illustration.png" 
                  alt="Web Development" 
                  className="w-64 h-48 object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Development */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 space-y-6">
              <h3 className="text-3xl font-bold text-brand-dark">
                MOBILE DEVELOPMENT
              </h3>
              <p className="text-brand-gray text-lg leading-relaxed">
                Native and cross-platform mobile applications that deliver exceptional 
                user experiences across iOS and Android devices.
              </p>
              <div className="flex space-x-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Flutter</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Swift</span>
              </div>
            </div>
            <div className="lg:order-1 flex justify-center">
              <div className="w-80 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <img 
                  src="/images/mobile-dev-illustration.png" 
                  alt="Mobile Development" 
                  className="w-64 h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-custom max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Get the same high-quality service for a smaller task
            </h3>
            <p className="text-brand-gray mb-6">
              Whether you need a simple landing page or a complex web application, 
              we deliver the same level of excellence for projects of any size.
            </p>
            <button className="btn-primary">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;