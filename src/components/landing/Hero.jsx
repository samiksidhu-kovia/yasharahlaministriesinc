import React from 'react';

const HERO_IMAGE = 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/c9f6d1d94_generated_b0d5b5c4.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Wide shot of diverse community gathering outdoors"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <p className="text-[#d4a853] text-xs font-inter font-semibold tracking-[0.3em] uppercase mb-6">
          Yasharahla Ministries Inc.
        </p>
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-3xl mb-6">
          Empowering Lives Through Faith and Support
        </h1>
        <p className="text-white/80 font-inter text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
          A network of ministries and businesses united under one vision to serve, uplift, and transform communities worldwide.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#network"
            className="bg-[#d4a853] text-[#1a1a1a] px-8 py-3.5 font-inter font-semibold text-sm tracking-wide hover:bg-[#d4a853]/90 transition-colors"
          >
            Explore Our Network
          </a>
          <a
            href="#involved"
            className="border border-white text-white px-8 py-3.5 font-inter font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}