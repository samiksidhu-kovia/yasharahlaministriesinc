import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <p className="text-white text-sm font-inter font-semibold tracking-[0.25em] uppercase text-center mb-8">
          Yasharahla Ministries Inc.
        </p>

        <div className="w-full h-px bg-[#d4a853]/30 mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-4">About</h4>
            <p className="text-white/40 font-inter text-sm leading-relaxed">
              Yasharahla Ministries Inc. is a network of faith-based organizations and businesses united to serve, uplift, and transform communities worldwide through faith and action.
            </p>
          </div>

          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['About', 'Our Network', 'Get Involved', 'Impact', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, '')}`}
                    className="text-white/40 hover:text-white/70 font-inter text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-white/40 font-inter text-sm">
              <li>(555) 123-4567</li>
              <li>info@yasharahla.org</li>
              <li>
                <a href="#contact" className="text-[#d4a853] hover:text-[#d4a853]/80 transition-colors">
                  Send Us a Message
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-inter font-semibold text-sm mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#d4a853]/30 mb-8" />

        <p className="text-white/30 font-inter text-xs text-center">
          &copy; 2026 Yasharahla Ministries Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}