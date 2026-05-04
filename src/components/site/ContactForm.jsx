import React, { useState } from 'react';
import { toast } from 'sonner';

const INTERESTS = ['Volunteering', 'Partnership', 'Donation', 'Contribution Circle', 'General Inquiry'];

const inputBase =
  'w-full bg-transparent border border-white/20 text-white placeholder-white/35 font-inter text-sm px-4 py-3 focus:border-[#d4a853] focus:outline-none transition-colors';

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    interest: '', message: '', subscribe: false,
  });
  const [busy, setBusy] = useState(false);

  const set = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    await new Promise((r) => setTimeout(r, 900));
    toast.success('Message received. We will be in touch shortly.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '', subscribe: false });
    setBusy(false);
  };

  return (
    <section id="contact" className="bg-[#1a1a1a] py-24">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#d4a853] text-[10px] font-inter font-bold tracking-[0.35em] uppercase mb-5">
            Reach Out
          </p>
          <h2 className="font-playfair text-4xl sm:text-5xl text-white leading-tight mb-5">
            Connect With YMI.
          </h2>
          <p className="text-white/80 font-inter text-sm sm:text-base leading-relaxed">
            Whether you are looking to connect, partner, or learn more about our network, reach out below.
          </p>
        </div>

        <form onSubmit={submit} className="flex flex-col gap-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <input name="firstName" value={form.firstName} onChange={set} placeholder="First Name" required className={inputBase} />
            <input name="lastName" value={form.lastName} onChange={set} placeholder="Last Name" required className={inputBase} />
          </div>
          <input name="email" type="email" value={form.email} onChange={set} placeholder="Email Address" required className={inputBase} />
          <input name="phone" type="tel" value={form.phone} onChange={set} placeholder="Phone Number" className={inputBase} />
          <select
            name="interest"
            value={form.interest}
            onChange={set}
            required
            className={`${inputBase} ${!form.interest ? 'text-white/35' : 'text-white'}`}
          >
            <option value="" disabled>I am interested in:</option>
            {INTERESTS.map((o) => (
              <option key={o} value={o} className="bg-[#1a1a1a] text-white">{o}</option>
            ))}
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={set}
            placeholder="Message"
            rows={5}
            required
            className={`${inputBase} resize-none`}
          />
          <label className="flex items-start gap-3 cursor-pointer pt-1">
            <input
              type="checkbox"
              name="subscribe"
              checked={form.subscribe}
              onChange={set}
              className="mt-0.5 w-4 h-4 accent-[#d4a853] shrink-0"
            />
            <span className="text-white/80 font-inter text-sm leading-relaxed">
              I would like to receive updates about our ministries and events via email.
            </span>
          </label>
          <button
            type="submit"
            disabled={busy}
            className="w-full bg-[#d4a853] text-[#1a1a1a] py-4 font-inter font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#c49842] transition-colors disabled:opacity-60 mt-1"
          >
            {busy ? 'Sending...' : 'Connect With Us'}
          </button>
        </form>
      </div>
    </section>
  );
}