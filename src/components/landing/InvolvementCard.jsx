import React from 'react';

export default function InvolvementCard({ icon: Icon, title, description, buttonText }) {
  return (
    <div className="text-center flex flex-col items-center">
      <div className="mb-6">
        <Icon className="w-10 h-10 text-[#d4a853] stroke-[1.2]" />
      </div>
      <h3 className="font-inter font-bold text-[#1a1a1a] text-xl mb-3">{title}</h3>
      <p className="text-[#1a1a1a]/60 font-inter text-sm leading-relaxed mb-6 max-w-xs">
        {description}
      </p>
      <a
        href="#contact"
        className="border border-[#d4a853] text-[#d4a853] px-7 py-2.5 font-inter font-semibold text-sm tracking-wide hover:bg-[#d4a853] hover:text-[#1a1a1a] transition-colors mt-auto"
      >
        {buttonText}
      </a>
    </div>
  );
}