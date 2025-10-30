import React from 'react';

const Stats = () => {
  const stats = [
    { number: '92%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Projects Completed' },
    { number: '30k+', label: 'Lines of Code' },
    { number: '100%', label: 'On-Time Delivery' }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-brand-dark mb-2">
                {stat.number}
              </div>
              <div className="text-brand-gray text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;