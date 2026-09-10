import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CAFE_CONFIG, OPENING_HOURS, TIME_SLOTS, GUEST_OPTIONS } from '../data/content';
import { validateReservation, openWhatsAppReservation } from '../services/reservationService';
import FadeInSection from './FadeInSection';

const inputClass = 'w-full px-4 py-3 bg-[#FAF6F1] rounded-xl border border-[#E8DDD0] text-[#2C1A0E] text-sm placeholder-[#C4B5A0] focus:outline-none focus:border-[#B8935A] focus:bg-white transition-all duration-200';
const inputErrorClass = 'w-full px-4 py-3 bg-[#FAF6F1] rounded-xl border border-red-300 text-[#2C1A0E] text-sm placeholder-[#C4B5A0] focus:outline-none focus:border-red-400 focus:bg-white transition-all duration-200';
const labelClass = 'block text-[10px] tracking-[0.25em] uppercase text-[#B8935A] mb-2 font-medium';

const EMPTY_FORM = { name: '', email: '', phone: '', date: '', time: '', guests: '', message: '' };

function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { valid, errors: ve } = validateReservation(form);
    if (!valid) { setErrors(ve); document.getElementById('res-' + Object.keys(ve)[0])?.focus(); return; }
    setErrors({});
    openWhatsAppReservation(form);
    setSubmitted(true);
  };

  const handleReset = () => { setForm(EMPTY_FORM); setErrors({}); setSubmitted(false); };
  const fc = (n) => errors[n] ? inputErrorClass : inputClass;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeInSection className="text-center mb-16">
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#B8935A] mb-4 font-medium">Find Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2C1A0E]">Visit &amp; Connect</h2>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20">
          {/* LEFT - Info */}
          <FadeInSection direction="right">
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-5">
                {[
                  { Icon: MapPin, label: 'Address', value: CAFE_CONFIG.address, href: null },
                  { Icon: Phone,  label: 'Phone',   value: CAFE_CONFIG.phone,   href: `tel:${CAFE_CONFIG.phone}` },
                  { Icon: Mail,   label: 'Email',   value: CAFE_CONFIG.email,   href: `mailto:${CAFE_CONFIG.email}` },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="mt-0.5 w-9 h-9 rounded-full border border-[#E8DDD0] flex items-center justify-center shrink-0">
                      <Icon size={14} className="text-[#B8935A]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className={labelClass}>{label}</p>
                      {href
                        ? <a href={href} className="text-[#2C1A0E] text-sm hover:text-[#B8935A] transition-colors">{value}</a>
                        : <p className="text-[#2C1A0E] text-sm leading-relaxed">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className={labelClass}>Opening Hours</p>
                <ul className="space-y-2.5">
                  {OPENING_HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm border-b border-[#F0E8DE] pb-2.5 last:border-0">
                      <span className="text-[#8B7355]">{h.day}</span>
                      <span className="text-[#2C1A0E] font-medium">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={CAFE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  aria-label="Get directions"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2C1A0E] text-[#2C1A0E] text-sm font-medium hover:bg-[#2C1A0E] hover:text-white transition-all duration-300">
                  <MapPin size={14} strokeWidth={1.5} /> Get Directions
                </a>
                <a href={`tel:${CAFE_CONFIG.phone}`} aria-label="Call us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#B8935A] text-[#B8935A] text-sm font-medium hover:bg-[#B8935A] hover:text-white transition-all duration-300">
                  <Phone size={14} strokeWidth={1.5} /> Call Us
                </a>
                <a href={`https://wa.me/${CAFE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  aria-label="WhatsApp us"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#1EBE59] transition-all duration-300">
                  <WhatsAppIcon size={14} /> WhatsApp Us
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* RIGHT - Reservation form */}
          <FadeInSection direction="left" delay={0.15}>
            <div className="bg-[#FAF6F1] rounded-2xl p-6 md:p-8 border border-[#EDE4D8]">
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-[#2C1A0E] mb-1">Reserve a Table</h3>
                <p className="text-[#8B7355] text-sm">Fill in your details and we will open WhatsApp with your reservation pre-filled.</p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5 text-[#25D366]">
                    <WhatsAppIcon size={24} />
                  </div>
                  <h4 className="font-serif text-xl text-[#2C1A0E] mb-2">WhatsApp Opened</h4>
                  <p className="text-[#8B7355] text-sm max-w-xs mx-auto mb-6">Your reservation details are pre-filled. Just tap Send to confirm with us.</p>
                  <button onClick={handleReset} className="text-xs tracking-widest uppercase text-[#B8935A] hover:text-[#2C1A0E] transition-colors">
                    Make another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="res-name" className={labelClass}>Name *</label>
                      <input id="res-name" type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={fc('name')} />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="res-email" className={labelClass}>Email *</label>
                      <input id="res-email" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={fc('email')} />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="res-phone" className={labelClass}>Phone</label>
                      <input id="res-phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className={fc('phone')} />
                    </div>
                    <div>
                      <label htmlFor="res-guests" className={labelClass}>Guests *</label>
                      <select id="res-guests" name="guests" required value={form.guests} onChange={handleChange} className={`${fc('guests')} appearance-none cursor-pointer`}>
                        <option value="">Select guests</option>
                        {GUEST_OPTIONS.map((g) => <option key={g} value={g}>{g}</option>)}
                      </select>
                      {errors.guests && <p className="mt-1 text-xs text-red-500">{errors.guests}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="res-date" className={labelClass}>Date *</label>
                      <input id="res-date" type="date" name="date" required value={form.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className={fc('date')} />
                      {errors.date && <p className="mt-1 text-xs text-red-500">{errors.date}</p>}
                    </div>
                    <div>
                      <label htmlFor="res-time" className={labelClass}>Time *</label>
                      <select id="res-time" name="time" required value={form.time} onChange={handleChange} className={`${fc('time')} appearance-none cursor-pointer`}>
                        <option value="">Select time</option>
                        {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                      {errors.time && <p className="mt-1 text-xs text-red-500">{errors.time}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="res-message" className={labelClass}>Special Requests</label>
                    <textarea id="res-message" name="message" rows={3} value={form.message} onChange={handleChange}
                      placeholder="Dietary requirements, celebrations, seating preferences..."
                      className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#25D366] text-white rounded-full text-sm font-medium tracking-wide hover:bg-[#1EBE59] transition-all duration-300 hover:scale-[1.01]">
                    <WhatsAppIcon size={16} /> Reserve via WhatsApp
                  </button>
                  <p className="text-center text-[11px] text-[#8B7355]/60">Clicking the button opens WhatsApp with your details pre-filled.</p>
                </form>
              )}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}