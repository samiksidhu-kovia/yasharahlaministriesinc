import React from 'react';

const STATS = [
  { number: '12', label: 'Ministries and Organizations' },
  { number: '1,200+', label: 'Lives Impacted' },
  { number: '7', label: 'Countries Reached' },
  { number: '18', label: 'Years of Service' },
];

export default function Impact() {
  return (
    <section id="impact" className="relative py-28 sm:py-36">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/616b8f05d_generated_image.png"
          alt="Large outdoor ministry event aerial view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-playfair text-5xl sm:text-6xl font-bold text-[#d4a853] mb-3">
                {s.number}
              </p>
              <p className="text-white font-inter text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}