import React from 'react';
import { HandHelping, Users, Heart } from 'lucide-react';

const COLUMNS = [
  {
    Icon: HandHelping,
    title: 'Volunteer',
    desc: 'Give your time and skills to make a difference in communities that need it most.',
    btn: 'Get Started',
  },
  {
    Icon: Users,
    title: 'Partner',
    desc: 'Bring your organization alongside ours for greater kingdom impact.',
    btn: 'Learn More',
  },
  {
    Icon: Heart,
    title: 'Give',
    desc: 'Your financial support fuels every program, event, and outreach we run.',
    btn: 'Donate',
  },
];

export default function GetInvolved() {
  return (
    <section id="involved" className="bg-[#f7f5f2] py-24">
      <div className="max-w-7xl mx-auto px-6 xl:px-8">
        <div className="text-center mb-16">
          <p className="text-[#d4a853] text-[10px] font-inter font-bold tracking-[0.35em] uppercase mb-5">
            Join Us
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-[#1a1a1a] leading-tight">
            Get Involved With YMI.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 lg:gap-16">
          {COLUMNS.map(({ Icon, title, desc, btn }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-7">
                <Icon className="w-10 h-10 text-[#d4a853]" strokeWidth={1.2} />
              </div>
              <h3 className="font-inter font-bold text-[#1a1a1a] text-xl mb-3">{title}</h3>
              <p className="text-[#1a1a1a] font-inter text-sm leading-relaxed mb-8 max-w-xs flex-1">
                {desc}
              </p>
              <a
                href="#contact"
                className="border border-[#d4a853] text-[#d4a853] px-7 py-2.5 text-xs font-inter font-bold tracking-[0.12em] uppercase hover:bg-[#d4a853]/15 transition-colors"
              >
                {btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}