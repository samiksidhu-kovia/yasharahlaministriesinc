import React from 'react';

const TIERS = [
  { amount: '$25', desc: 'Feeds a family for a week.' },
  { amount: '$50', desc: 'Sponsors a youth mentorship session.' },
  { amount: '$100', desc: 'Funds a community outreach event.' },
];

export default function Donation() {
  return (
    <section id="donation" className="bg-[#1a1a1a] py-24">
      <div className="max-w-4xl mx-auto px-6 xl:px-8 text-center">
        <p className="text-[#d4a853] text-[10px] font-inter font-bold tracking-[0.35em] uppercase mb-5">
          Generosity
        </p>
        <h2 className="font-playfair text-4xl sm:text-5xl text-white leading-tight mb-5">
          Support Our Mission
        </h2>
        <p className="text-white/80 font-inter text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Your generosity makes it possible to serve communities, empower families, and expand our network reach. Every gift, no matter the size, makes a real difference.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="bg-[#d4a853] text-[#1a1a1a] px-8 py-3.5 text-sm font-inter font-bold tracking-wide hover:bg-[#c49842] transition-colors"
          >
            Give a One-Time Gift
          </a>
          <a
            href="#contact"
            className="bg-[#d4a853] text-[#1a1a1a] px-8 py-3.5 text-sm font-inter font-bold tracking-wide hover:bg-[#c49842] transition-colors"
          >
            Become a Monthly Partner
          </a>
        </div>

        {/* Tier columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {TIERS.map((t) => (
            <div key={t.amount} className="text-center">
              <p className="font-playfair text-5xl font-bold text-[#d4a853] mb-3">{t.amount}</p>
              <p className="text-white font-inter text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}