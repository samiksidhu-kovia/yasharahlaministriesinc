import React from 'react';
import NetworkCard from './NetworkCard';

const MINISTRIES = [
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/9d35f8cf3_generated_2c6ed97e.png',
    name: 'Community Outreach',
    description: 'Serving local communities through food, shelter, and support programs',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/66a13d7cf_generated_feb75d46.png',
    name: 'Youth Development',
    description: 'Mentoring and equipping the next generation of leaders',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/6dfe71a68_generated_b9ea80b2.png',
    name: 'Faith Education',
    description: 'Teaching and discipleship programs for spiritual growth',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/ccd632371_generated_e6b39a73.png',
    name: 'Business Empowerment',
    description: 'Supporting faith-aligned entrepreneurs and small businesses',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/588db2b60_generated_2f851726.png',
    name: 'Family Services',
    description: 'Strengthening families through counseling, resources, and care',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/36273027e_generated_622c181e.png',
    name: 'Media & Communications',
    description: 'Spreading the message through digital platforms and content',
  },
];

export default function Network() {
  return (
    <section id="network" className="bg-[#1a1a1a] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#d4a853] text-xs font-inter font-semibold tracking-[0.3em] uppercase mb-5">
            Our Network
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white leading-tight max-w-2xl mx-auto">
            Ministries and Businesses United Under One Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MINISTRIES.map((ministry) => (
            <NetworkCard key={ministry.name} {...ministry} />
          ))}
        </div>
      </div>
    </section>
  );
}