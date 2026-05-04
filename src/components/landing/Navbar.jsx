import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#mission' },
  { label: 'Our Network', href: '#network' },
  { label: 'Get Involved', href: '#involved' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ bannerVisible }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topOffset = bannerVisible ? 'top-[41px]' : 'top-0';

  return (
    <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${topOffset} ${scrolled ? 'bg-[#1a1a1a]/90 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-white text-sm font-inter font-semibold tracking-[0.25em] uppercase">
            Yasharahla Ministries Inc.
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-inter tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#d4a853] text-[#1a1a1a] px-6 py-2.5 text-sm font-inter font-semibold tracking-wide hover:bg-[#d4a853]/90 transition-colors"
            >
              Partner With Us
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-[#1a1a1a]/95 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/80 hover:text-white text-sm font-inter tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-[#d4a853] text-[#1a1a1a] px-6 py-2.5 text-sm font-inter font-semibold tracking-wide text-center hover:bg-[#d4a853]/90 transition-colors"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}