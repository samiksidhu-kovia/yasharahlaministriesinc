import React from 'react';

const IMPACT_IMAGE = 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/8f84b834e_generated_a95d0d41.png';

const STATS = [
  { number: '10+', label: 'Ministries & Organizations' },
  { number: '500+', label: 'Lives Impacted' },
  { number: '5', label: 'Countries Reached' },
  { number: '15+', label: 'Years of Service' },
];

export default function Impact() {
  return (
    <section id="impact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <img
          src={IMPACT_IMAGE}
          alt="Large outdoor ministry event aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[#d4a853] font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
                {stat.number}
              </p>
              <p className="text-white font-inter text-xs sm:text-sm tracking-[0.15em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}