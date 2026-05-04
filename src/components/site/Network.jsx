import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const MINISTRIES = [
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/d2414dfdf_image.png',
    alt: 'Community outreach volunteers',
    name: 'Community Outreach',
    desc: 'Serving local communities through food, shelter, and support programs',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/ec7bf69b1_image.png',
    alt: 'Youth development session',
    name: 'Youth Development',
    desc: 'Mentoring and equipping the next generation of leaders',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/c74397d19_image.png',
    alt: 'Faith education gathering',
    name: 'Faith Education',
    desc: 'Teaching and discipleship programs for spiritual growth',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/70aa8e56d_image.png',
    alt: 'Business empowerment meeting',
    name: 'Business Empowerment',
    desc: 'Supporting faith-aligned entrepreneurs and small businesses',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/abb4a4418_image.png',
    alt: 'Family services',
    name: 'Family Services',
    desc: 'Strengthening families through counseling, resources, and care',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/5879dfde0_image.png',
    alt: 'Media and communications',
    name: 'Media and Communications',
    desc: 'Spreading the message through digital platforms and content',
  },
];

export default function Network() {
  return (
    <section id="network" className="bg-[#1a1a1a] py-24">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#d4a853] text-[10px] font-inter font-bold tracking-[0.35em] uppercase mb-5">
            Our Network
          </p>
          <h2 className="font-inter font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Our Ecosystem of Branches and Partners
          </h2>
          <p className="text-white/80 font-inter text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A unified network of aligned branches and community partners working together to circulate care, opportunity, and support.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {MINISTRIES.map((m) => (
            <div key={m.name} className="relative group overflow-hidden cursor-pointer" style={{ aspectRatio: '4/3' }}>
              <img
                src={m.image}
                alt={m.alt}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between z-10">
                <div>
                  <h3 className="text-white font-inter font-bold text-base mb-1">{m.name}</h3>
                  <p className="text-white/80 font-inter text-xs leading-snug">{m.desc}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#d4a853] shrink-0 ml-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}