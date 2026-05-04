import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'About', href: '#mission' },
  { label: 'Our Network', href: '#network' },
  { label: 'Get Involved', href: '#involved' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ bannerVisible }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bannerHeight = bannerVisible ? 41 : 0;

  return (
    <header
      className="fixed left-0 right-0 z-40 transition-all duration-300"
      style={{ top: bannerHeight }}
    >
      <div className={`transition-all duration-300 ${scrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 xl:px-8 flex items-center justify-between h-[60px]">
          <a href="#" className="shrink-0">
            <img
              src="https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/963b6b6ec_gracecommunitychurchbase44logo1.png"
              alt="Yasharahla Ministries Inc."
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-white/80 hover:text-white text-sm font-inter tracking-wide transition-colors">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#d4a853] text-[#1a1a1a] px-5 py-2.5 text-xs font-inter font-bold tracking-[0.12em] uppercase hover:bg-[#c49842] transition-colors"
            >
              Partner With Us
            </a>
          </nav>

          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#1a1a1a] border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/80 hover:text-white text-sm font-inter tracking-wide transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#d4a853] text-[#1a1a1a] px-5 py-3 text-xs font-inter font-bold tracking-[0.12em] uppercase text-center hover:bg-[#c49842] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}