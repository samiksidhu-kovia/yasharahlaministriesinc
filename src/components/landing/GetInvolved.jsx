import React from 'react';
import { HandHelping, Users, Heart } from 'lucide-react';
import InvolvementCard from './InvolvementCard';

const CARDS = [
  {
    icon: HandHelping,
    title: 'Volunteer',
    description: 'Give your time and skills to make a difference in communities that need it most.',
    buttonText: 'Get Started',
  },
  {
    icon: Users,
    title: 'Partner',
    description: 'Bring your organization alongside ours for greater kingdom impact.',
    buttonText: 'Learn More',
  },
  {
    icon: Heart,
    title: 'Give',
    description: 'Your financial support fuels every program, event, and outreach we run.',
    buttonText: 'Donate',
  },
];

export default function GetInvolved() {
  return (
    <section id="involved" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#d4a853] text-xs font-inter font-semibold tracking-[0.3em] uppercase mb-5">
            Join Us
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
            There's a Place for You
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {CARDS.map((card) => (
            <InvolvementCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}