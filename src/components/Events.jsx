import React from 'react';
import SectionHeading from './SectionHeading';
import { Calendar, Clock, MapPin, Shirt, Sparkles, Navigation } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="py-24 sm:py-32 bg-secondary/40 relative">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeading
          eyebrow="Save The Date"
          title="Event Details"
          subtitle="We would be honored by your presence. Here is everything you need to know about our special day."
        />

        {/* Single Centered Wedding Ceremony Box */}
        <div className="max-w-xl mx-auto bg-card border border-gold/25 rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden group">
          {/* Decorative Top Accent */}
          <div className="h-1 w-full bg-gold-line absolute top-0 left-0" />

          <div className="mb-6">
            <h3 className="font-serif text-3xl font-light text-foreground mb-1">
              Wedding Ceremony
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              The Sacred Vows
            </p>
          </div>

          <div className="space-y-4 border-t border-gold/15 pt-6 text-sm text-foreground/90 font-sans">
            {/* Date */}
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-gold shrink-0" />
              <span>Sunday, February 7, 2027</span>
            </div>

            {/* Time / Muhurtham */}
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-gold shrink-0" />
              <span>Muhurtham between 9:30 AM - 10:30 AM</span>
            </div>

            {/* Venue Location */}
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div className="flex flex-wrap items-center gap-2">
                <span>Kottayil Convention Centre, Palakkad</span>
                <a
                  href="https://maps.app.goo.gl/47n3xqSL9JYbfgEb9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-gold hover:underline font-medium ml-1"
                >
                  <Navigation className="h-3 w-3" />
                  <span>(Google Maps)</span>
                </a>
              </div>
            </div>

            {/* Dress Code */}
            <div className="flex items-center gap-3">
              <Shirt className="h-4 w-4 text-gold shrink-0" />
              <span>Dress code: <span className="font-medium">Traditional or formal</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
