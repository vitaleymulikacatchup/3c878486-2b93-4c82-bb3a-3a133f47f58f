import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'Laravel', color: 'bg-red-500', textColor: 'text-red-500' },
    { name: 'Vue.js', color: 'bg-green-500', textColor: 'text-green-500' },
    { name: 'Next.js', color: 'bg-black', textColor: 'text-black' },
    { name: 'MySQL', color: 'bg-blue-500', textColor: 'text-blue-500' },
    { name: 'MongoDB', color: 'bg-green-600', textColor: 'text-green-600' },
    { name: 'Nginx', color: 'bg-green-700', textColor: 'text-green-700' },
    { name: 'Redis', color: 'bg-red-600', textColor: 'text-red-600' },
    { name: 'TypeScript', color: 'bg-blue-600', textColor: 'text-blue-600' },
    { name: 'JavaScript', color: 'bg-yellow-500', textColor: 'text-yellow-500' }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <p className="text-center text-brand-gray mb-8">We use only modern</p>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`tech-icon ${tech.color}`}>
                <span>{tech.name.charAt(0)}</span>
              </div>
              <span className={`font-medium ${tech.textColor} text-sm lg:text-base`}>
                #{tech.name.toLowerCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;