import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'About', href: '#mission' },
  { label: 'Our Network', href: '#network' },
  { label: 'Get Involved', href: '#involved' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 xl:px-8 pt-16 pb-10">
        {/* Brand name */}
        <div className="flex justify-center mb-8">
          <img
            src="https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/963b6b6ec_gracecommunitychurchbase44logo1.png"
            alt="Yasharahla Ministries Inc."
            className="h-16 w-auto"
          />
        </div>

        {/* Gold line */}
        <div className="w-full h-px bg-[#d4a853]/30 mb-12" />

        {/* Four columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-4">About</h4>
            <p className="text-white/80 font-inter text-sm leading-relaxed">
              Yasharahla Ministries Incorporated is a unified network of faith-based organizations and community partners dedicated to connecting people to trusted resources, services, and support across the nation and globe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/80 hover:text-white font-inter text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-white/80 font-inter text-sm">(555) 123-4567</li>
              <li className="text-white/80 font-inter text-sm">info@yasharahla.org</li>
              <li>
                <a href="#contact" className="text-[#d4a853] hover:text-[#c49842] font-inter text-sm transition-colors">
                  Send Us a Message
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-white/50 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/50 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Gold line */}
        <div className="w-full h-px bg-[#d4a853]/30 mb-8" />

        {/* Copyright */}
        <p className="text-white/25 font-inter text-xs text-center">
          &copy; 2026 Yasharahla Ministries Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}