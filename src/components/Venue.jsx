import React from 'react';
import SectionHeading from './SectionHeading';
import { MapPin, Navigation } from 'lucide-react';

export default function Venue() {
  return (
    <section id="venue" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeading
          eyebrow="Where To Celebrate"
          title="The Venue"
        />

        <div className="max-w-4xl mx-auto bg-card border border-gold/20 rounded-2xl overflow-hidden shadow-xl grid md:grid-cols-2">
          {/* Venue Image */}
          <div className="relative min-h-[300px] md:min-h-full overflow-hidden">
            <img
              src="/images/venue.png"
              alt="Grand Palace Convention Center"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Venue Details */}
          <div className="p-8 sm:p-12 flex flex-col justify-center text-left">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold mb-6">
              <MapPin className="h-5 w-5" />
            </div>

            <h3 className="font-serif text-3xl font-light text-foreground mb-3">
              Kottayil Convention Centre
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-sans">
              Palakkad - Shornur Road, Near Chithrapuri Hotel, Edathara, Parali, Kerala, India
            </p>

            <div>
              <a
                href="https://maps.app.goo.gl/47n3xqSL9JYbfgEb9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/40 text-foreground bg-secondary/50 hover:bg-gold hover:text-gold-foreground transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
