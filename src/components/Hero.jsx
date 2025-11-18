import React from 'react';

const Hero = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-r from-primary-blue to-secondary-dark text-white py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;