import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Testimonials
          </h2>
          <p className="text-brand-gray text-lg">
            What our clients say about working with us
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-brand-gray mb-6 leading-relaxed">
                "Working with Sargas was an exceptional experience. They delivered 
                our project on time and exceeded our expectations in every way."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-brand-dark font-medium">JD</span>
                </div>
                <div>
                  <div className="font-medium text-brand-dark">John Doe</div>
                  <div className="text-sm text-brand-gray">CEO, TechCorp</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;