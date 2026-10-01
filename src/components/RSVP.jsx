import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { CheckCircle2, Send } from 'lucide-react';

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    attendance: 'accept',
    guests: '1',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contact: '',
      attendance: 'accept',
      guests: '1',
      notes: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="rsvp" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-5">
        <SectionHeading
          eyebrow="Join Us"
          title="RSVP"
          subtitle="Kindly respond by January 15, 2027 so we can plan a seamless celebration."
        />

        <div className="bg-card border border-gold/25 rounded-2xl p-8 sm:p-12 shadow-xl max-w-2xl mx-auto relative backdrop-blur-sm">
          {submitted ? (
            <div className="text-center py-8 animate-fade-in space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold mb-2">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl font-light text-foreground">
                Thank You!
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground font-sans max-w-md mx-auto leading-relaxed">
                Your RSVP response has been received. We look forward to sharing this unforgettable day with you!
              </p>
              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-gold/40 text-foreground bg-secondary/50 hover:bg-gold hover:text-gold-foreground transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium"
                >
                  Submit another response
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-foreground/80 font-medium mb-2">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-gold/25 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-foreground/80 font-medium mb-2">
                  Email / Phone Number <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter email or phone number"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full rounded-lg border border-gold/25 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-foreground/80 font-medium mb-3">
                  Will You Attend?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                    className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      formData.attendance === 'accept'
                        ? 'border-gold bg-gold/15 text-gold shadow-sm'
                        : 'border-gold/25 bg-background/60 text-muted-foreground hover:border-gold/50'
                    }`}
                  >
                    Joyfully Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                    className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      formData.attendance === 'decline'
                        ? 'border-gold bg-gold/15 text-gold shadow-sm'
                        : 'border-gold/25 bg-background/60 text-muted-foreground hover:border-gold/50'
                    }`}
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {/* Number of Guests */}
              {formData.attendance === 'accept' && (
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-foreground/80 font-medium mb-2">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full rounded-lg border border-gold/25 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                  </select>
                </div>
              )}

              {/* Dietary / Notes */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-foreground/80 font-medium mb-2">
                  Special Notes / Dietary Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Let us know if you have any special requirements or notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-lg border border-gold/25 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-lg bg-gold text-gold-foreground font-medium text-xs uppercase tracking-[0.25em] hover:bg-gold-light transition-colors shadow-md"
                >
                  <Send className="h-4 w-4" />
                  <span>Send RSVP</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
