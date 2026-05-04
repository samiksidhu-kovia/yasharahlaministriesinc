import React from 'react';

export default function MissionCard({ image, title, subtitle }) {
  return (
    <div className="relative group overflow-hidden flex-1 min-h-[400px] sm:min-h-[480px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-10">
        <h3 className="text-white font-inter font-bold text-xl mb-1">{title}</h3>
        <p className="text-white/70 font-inter text-sm mb-4">{subtitle}</p>
        <a href="#" className="inline-flex items-center gap-3 group/link">
          <span className="text-white text-xs font-inter font-semibold tracking-[0.2em] uppercase">
            Learn More
          </span>
          <span className="w-8 h-px bg-[#d4a853] group-hover/link:w-12 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
}