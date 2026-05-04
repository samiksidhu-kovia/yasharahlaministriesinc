import React, { useState } from 'react';
import { toast } from 'sonner';

const INTEREST_OPTIONS = [
  'Volunteering',
  'Partnership',
  'Donation',
  'General Inquiry',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    subscribe: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success('Thank you! We will be in touch soon.');
    setForm({ firstName: '', lastName: '', email: '', phone: '', interest: '', message: '', subscribe: false });
    setSubmitting(false);
  };

  const inputClass =
    'w-full bg-transparent border border-white/20 text-white font-inter text-sm px-4 py-3 placeholder-white/40 focus:border-[#d4a853] focus:outline-none transition-colors';

  return (
    <section id="contact" className="bg-[#1a1a1a] py-20 sm:py-28">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#d4a853] text-xs font-inter font-semibold tracking-[0.3em] uppercase mb-5">
            Reach Out
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-white/60 font-inter text-sm sm:text-base leading-relaxed">
            Whether you're looking to connect, partner, or learn more about our network, drop us a line.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className={inputClass}
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className={inputClass}
            />
          </div>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className={inputClass}
          />
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className={inputClass}
          />
          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            required
            className={`${inputClass} ${!form.interest ? 'text-white/40' : ''}`}
          >
            <option value="" disabled>I'm interested in:</option>
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-[#1a1a1a] text-white">
                {opt}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            required
            className={`${inputClass} resize-none`}
          />

          <label className="flex items-start gap-3 cursor-pointer pt-1">
            <input
              type="checkbox"
              name="subscribe"
              checked={form.subscribe}
              onChange={handleChange}
              className="mt-0.5 accent-[#d4a853] w-4 h-4"
            />
            <span className="text-white/60 font-inter text-sm leading-relaxed">
              I'd like to receive updates about our ministries and events via email.
            </span>
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#d4a853] text-[#1a1a1a] py-3.5 font-inter font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#d4a853]/90 transition-colors disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Connect With Us'}
          </button>
        </form>
      </div>
    </section>
  );
}