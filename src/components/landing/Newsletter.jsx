import React, { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success('You have been subscribed!');
    setEmail('');
  };

  return (
    <section className="bg-[#222222] py-20 sm:py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[#d4a853] text-xs font-inter font-semibold tracking-[0.3em] uppercase mb-5">
          Stay Connected
        </p>
        <h2 className="font-playfair text-3xl sm:text-4xl text-white leading-tight mb-4">
          Never Miss an Update
        </h2>
        <p className="text-white/50 font-inter text-sm sm:text-base leading-relaxed mb-8">
          Get the latest news, events, and stories from across our network delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 bg-transparent border border-white/20 text-white font-inter text-sm px-4 py-3 placeholder-white/40 focus:border-[#d4a853] focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="bg-[#d4a853] text-[#1a1a1a] px-8 py-3 font-inter font-semibold text-sm tracking-wide hover:bg-[#d4a853]/90 transition-colors flex-shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}