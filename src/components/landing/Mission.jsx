import React from 'react';
import MissionCard from './MissionCard';

const CARDS = [
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/9daa03f4d_generated_6d9e0370.png',
    title: 'Our Story',
    subtitle: 'The journey of Yasharahla Ministries',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/ee701be79_generated_021ecd62.png',
    title: 'Our Beliefs',
    subtitle: 'The foundation of everything we do',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/89ecce190_generated_d0b1feb3.png',
    title: 'Our Vision',
    subtitle: 'Where we\'re headed as a network',
  },
];

export default function Mission() {
  return (
    <section id="mission" className="bg-white">
      <div className="py-20 sm:py-28 px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <p className="text-[#d4a853] text-xs font-inter font-semibold tracking-[0.3em] uppercase mb-5">
          Our Mission
        </p>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-6">
          We are a network of faith-based organizations dedicated to transforming lives
        </h2>
        <p className="text-[#1a1a1a]/60 font-inter text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Through community empowerment, education, spiritual growth, and collaboration, we bring together ministries and businesses to create lasting change. Our commitment extends beyond programs to building relationships that uplift and strengthen communities from the inside out.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row">
        {CARDS.map((card) => (
          <MissionCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}