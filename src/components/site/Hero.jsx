import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src="https://media.base44.com/images/public/69f7db1d0108a1a70fe58d5f/1eb83d1fc_generated_image.png"
          alt="Wide shot of diverse community gathering outdoors"
          className="w-full h-full object-cover scale-110"
          style={{ willChange: 'transform' }}
        />
        <div className="absolute inset-0 bg-black/62" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-8 w-full pt-36 pb-24">
        <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] text-white leading-[1.08] max-w-3xl mb-5">
          Yasharahla Ministries Incorporated.
        </h1>

        <p className="text-[#d4a853] font-inter font-semibold text-lg sm:text-xl tracking-wide max-w-xl mb-5">
          One Mission. One Family. One Love.
        </p>

        <p className="text-white/75 font-inter text-base sm:text-lg leading-relaxed max-w-2xl mb-10">
          Connecting individuals, families, communities, branches, and partners to trusted resources, services, education, and support.
        </p>

        {/* Button row 1 */}
        <div className="flex flex-wrap gap-4 mb-4">
          <a
            href="#contact"
            className="bg-[#d4a853] text-[#1a1a1a] px-7 py-3.5 text-sm font-inter font-bold tracking-wide hover:bg-[#c49842] transition-colors"
          >
            Get Connected
          </a>
          <a
            href="#donation"
            className="border border-white text-white px-7 py-3.5 text-sm font-inter font-semibold tracking-wide hover:bg-white/10 transition-colors"
          >
            Donate
          </a>
        </div>

        {/* Button row 2 */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="border border-[#d4a853] text-[#d4a853] px-7 py-3.5 text-sm font-inter font-semibold tracking-wide hover:bg-[#d4a853]/15 transition-colors"
          >
            Join a Contribution Circle
          </a>
          <a
            href="#network"
            className="border border-[#d4a853] text-[#d4a853] px-7 py-3.5 text-sm font-inter font-semibold tracking-wide hover:bg-[#d4a853]/15 transition-colors"
          >
            Support a Community Project
          </a>
        </div>
      </div>
    </section>
  );
}