import React from 'react';

const CaseStudies = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-8">
            Case Studies
          </h2>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">
                  Dios
                </h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  A comprehensive digital platform that revolutionized how businesses 
                  manage their operations. Built with modern technologies and scalable architecture.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">$2,500</div>
                    <div className="text-blue-200 text-sm">Budget</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">120+</div>
                    <div className="text-blue-200 text-sm">Hours</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <img 
                    src="/images/dios-case-study.png" 
                    alt="Dios Case Study" 
                    className="w-full max-w-sm h-64 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;