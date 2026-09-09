/**
 * Reservation Service — Frontend WhatsApp Flow
 *
 * Current phase: Frontend-only WhatsApp reservation.
 * The form data is validated, a pre-filled WhatsApp message is generated,
 * and the user is redirected to WhatsApp to complete the reservation.
 *
 * Future phase (Antigravity backend):
 * Replace openWhatsAppReservation() with a submitToAPI() call:
 *   POST /api/reservations — { name, email, phone, date, time, guests, message }
 * The backend will then send the WhatsApp notification automatically.
 */

import { CAFE_CONFIG } from '../data/content';

/**
 * Validates reservation form data.
 * @param {Object} data
 * @returns {{ valid: boolean, errors: Record<string, string> }}
 */
export function validateReservation(data) {
  const errors = {};

  if (!data.name?.trim()) errors.name = 'Please enter your name.';
  if (!data.email?.trim()) errors.email = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (!data.date) errors.date = 'Please select a preferred date.';
  else {
    const selected = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) errors.date = 'Please select a future date.';
  }
  if (!data.time) errors.time = 'Please select a preferred time.';
  if (!data.guests) errors.guests = 'Please select the number of guests.';

  return { valid: Object.keys(errors).length === 0, errors };
}

/**
 * Builds a pre-filled WhatsApp message and opens WhatsApp in a new tab.
 * The WhatsApp number comes from CAFE_CONFIG — never hard-coded here.
 *
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {string} data.phone
 * @param {string} data.date
 * @param {string} data.time
 * @param {string} data.guests
 * @param {string} data.message
 */
export function openWhatsAppReservation(data) {
  const formattedDate = data.date
    ? new Date(data.date + 'T00:00:00').toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : data.date;

  // Compact one-line summary — easy to read in a WhatsApp notification
  let message =
    `Hi! Table Booking Request: Name: ${data.name}, Guests: ${data.guests}, Date: ${formattedDate}, Time: ${data.time}`;

  // Append optional fields on new lines if provided
  if (data.phone?.trim())   message += `\nPhone: ${data.phone.trim()}`;
  if (data.email?.trim())   message += `\nEmail: ${data.email.trim()}`;
  if (data.message?.trim()) message += `\nSpecial Request: ${data.message.trim()}`;

  const url = `https://wa.me/${CAFE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// =============================================================================
// FUTURE BACKEND INTEGRATION STUB
// Uncomment and replace openWhatsAppReservation() call in Contact.jsx
// when the Antigravity backend is ready.
// =============================================================================
// export async function submitReservationToAPI(data) {
//   const response = await fetch('/api/reservations', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       date: data.date,
//       time: data.time,
//       guests: data.guests,
//       message: data.message,
//     }),
//   });
//   if (!response.ok) throw new Error('Reservation submission failed');
//   return response.json();
// }
