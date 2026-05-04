import React from 'react';

const CARDS = [
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/f5c412030_generated_image.png',
    alt: 'Community gathering at sunset',
    title: 'Our Story',
    subtitle: 'The journey of Yasharahla Ministries',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/75cda1e17_generated_image.png',
    alt: 'Hands on open bible',
    title: 'Our Beliefs',
    subtitle: 'The foundation of everything we do',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/05f89f25e_generated_image.png',
    alt: 'Sunrise over city skyline',
    title: 'Our Vision',
    subtitle: 'Where we are headed as a network',
  },
];

export default function Mission() {
  return (
    <section id="mission" className="bg-white">
      {/* Text block */}
      <div className="max-w-3xl mx-auto text-center px-6 pt-24 pb-20">
        <p className="text-[#d4a853] text-[10px] font-inter font-bold tracking-[0.35em] uppercase mb-6">
          Our Mission
        </p>
        <h2 className="font-playfair text-4xl sm:text-5xl text-[#1a1a1a] leading-tight mb-7">
          One Mission. One Family. One Love.
        </h2>
        <p className="text-[#1a1a1a] font-inter text-base sm:text-lg leading-relaxed">
          Yasharahla Ministries Incorporated connects individuals, families, communities, branches, and partners to trusted resources, services, education, and support. Through a unified ecosystem of aligned branches and community partners, YMI helps circulate care, opportunity, and practical support where it is needed most.
        </p>
      </div>

      {/* Image cards edge to edge, no gaps */}
      <div className="flex flex-col sm:flex-row">
        {CARDS.map((card) => (
          <div key={card.title} className="relative flex-1 overflow-hidden group" style={{ minHeight: 460 }}>
            <img
              src={card.image}
              alt={card.alt}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 z-10">
              <h3 className="text-white font-inter font-bold text-xl mb-1">{card.title}</h3>
              <p className="text-white/80 font-inter text-sm mb-5">{card.subtitle}</p>
              <a href="#" className="inline-flex items-center gap-3 group/link">
                <span className="text-white text-[10px] font-inter font-bold tracking-[0.22em] uppercase">
                  Learn More
                </span>
                <span className="block h-px w-8 bg-[#d4a853] group-hover/link:w-12 transition-all duration-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}