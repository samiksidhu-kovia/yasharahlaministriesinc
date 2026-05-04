import React, { useState } from 'react';
import { toast } from 'sonner';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success('You have been subscribed to our newsletter.');
    setEmail('');
  };

  return (
    <section className="bg-[#222222] py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[#d4a853] text-[10px] font-inter font-bold tracking-[0.35em] uppercase mb-5">
          Stay Connected
        </p>
        <h2 className="font-playfair text-4xl sm:text-5xl text-white leading-tight mb-4">
          Join The YMI Community.
        </h2>
        <p className="text-white/80 font-inter text-sm sm:text-base leading-relaxed mb-9">
          Get the latest news, events, and stories from across our network delivered to your inbox.
        </p>
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 bg-transparent border border-white/20 text-white placeholder-white/35 font-inter text-sm px-5 py-3.5 focus:border-[#d4a853] focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="bg-[#d4a853] text-[#1a1a1a] px-8 py-3.5 font-inter font-bold text-xs tracking-[0.14em] uppercase hover:bg-[#c49842] transition-colors shrink-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}