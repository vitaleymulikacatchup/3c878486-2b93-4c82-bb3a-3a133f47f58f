import React from 'react';

const Team = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Sargas Team
          </h2>
          <p className="text-brand-gray text-lg">
            Meet the talented individuals behind our success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-brand-dark">T{member}</span>
              </div>
              <h3 className="font-semibold text-brand-dark mb-1">Team Member {member}</h3>
              <p className="text-brand-gray text-sm">Senior Developer</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;