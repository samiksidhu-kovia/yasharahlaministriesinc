import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function NetworkCard({ image, name, description }) {
  return (
    <div className="relative group overflow-hidden aspect-[4/3] cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex items-end justify-between">
        <div>
          <h3 className="text-white font-inter font-bold text-lg mb-1">{name}</h3>
          <p className="text-white/60 font-inter text-sm leading-relaxed">{description}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-[#d4a853] flex-shrink-0 ml-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </div>
  );
}