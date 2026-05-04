import React from 'react';
import { ExternalLink } from 'lucide-react';

const PRODUCTS = [
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/ada8c8602_generated_image.png',
    alt: 'Partner product image - Faith Journal Collection',
    name: 'Faith Journal Collection',
    desc: 'Guided journals for daily devotion and reflection',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/c87cbd8fd_generated_image.png',
    alt: 'Partner product image - Community Wellness Kit',
    name: 'Community Wellness Kit',
    desc: 'Curated wellness tools for personal and family care',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/1dd52ccba_generated_image.png',
    alt: 'Partner product image - Heritage Apparel Line',
    name: 'Heritage Apparel Line',
    desc: 'Culturally inspired clothing that represents identity',
  },
  {
    image: 'https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/7c7b8a339_generated_image.png',
    alt: 'Partner product image - Educational Resource Pack',
    name: 'Educational Resource Pack',
    desc: 'Learning materials for youth and family development',
  },
];

export default function PartnerProducts() {
  return (
    <section id="products" className="bg-white pb-24">
      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <div className="w-full h-px bg-[#d4a853]/30 mb-24" />

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#d4a853] text-[10px] font-inter font-bold tracking-[0.35em] uppercase mb-5">
            Partner Products
          </p>
          <h2 className="font-inter font-bold text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Shop YMI.
          </h2>
          <p className="text-[#1a1a1a] font-inter text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Merchandise, branded products, and partner items. A portion of every purchase supports Yasharahla Ministries Inc. and our community programs.
          </p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((p) => (
            <div key={p.name} className="flex flex-col group">
              <div className="overflow-hidden aspect-square mb-5">
                <img
                  src={p.image}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
              </div>
              <h3 className="text-[#1a1a1a] font-inter font-bold text-base mb-1.5">{p.name}</h3>
              <p className="text-[#1a1a1a] font-inter text-sm leading-snug mb-5 flex-1">{p.desc}</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#d4a853] text-[#1a1a1a] px-5 py-2.5 text-xs font-inter font-bold tracking-[0.12em] uppercase hover:bg-[#c49842] transition-colors self-start"
              >
                Shop Now
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}