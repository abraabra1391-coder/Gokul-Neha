import React from 'react';
import SectionHeading from './SectionHeading';
import { Heart } from 'lucide-react';

export default function Couple() {
  return (
    <section id="couple" className="py-24 sm:py-32 relative">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeading
          eyebrow="The Beloved"
          title="Two Families, One Blessing"
        />

        {/* Bride & Groom Cards */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
          {/* Groom Card */}
          <div className="text-center group">
            <div className="relative mx-auto max-w-sm mb-6">
              <div className="relative overflow-hidden rounded-t-full border border-gold/40 shadow-xl bg-card aspect-[3/4.2] transition-colors group-hover:border-gold">
                <img
                  src="/images/groom.png"
                  alt="Gokul"
                  className="w-full h-full object-cover object-top scale-125 transition-transform duration-700 group-hover:scale-130"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl font-light text-foreground mb-1">
              Gokul
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-2">
              The Groom
            </p>
            <p className="text-xs font-serif italic text-foreground/80 mb-4">
              Son of Mr. Subramanian & Mrs. Sreedevi
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs sm:max-w-sm mx-auto font-sans">
              Gokul is a wanderer at heart, drawn to mountain trails, long hikes, and the timeless charm of classic films and songs. He finds joy in the journey, wonder in the wild, and beauty in the moments worth remembering.
            </p>
          </div>

          {/* Bride Card */}
          <div className="text-center group">
            <div className="relative mx-auto max-w-sm mb-6">
              <div className="relative overflow-hidden rounded-t-full border border-gold/40 shadow-xl bg-card aspect-[3/4.2] transition-colors group-hover:border-gold">
                <img
                  src="/images/bride.png"
                  alt="Neha"
                  className="w-full h-full object-cover object-top scale-100 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="font-serif text-3xl font-light text-foreground mb-1">
              Neha
            </h3>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-medium mb-2">
              The Bride
            </p>
            <p className="text-xs font-serif italic text-foreground/80 mb-4">
              Daughter of Gopi K.C & Mrs. Hema
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs sm:max-w-sm mx-auto font-sans">
              Neha is a lover of poetry, wildflowers, quiet beaches, and stories found between the pages of old novels. She carries a gentle heart and finds beauty in the little things.
            </p>
          </div>
        </div>

        {/* Our Story Card */}
        <div className="max-w-3xl mx-auto bg-card/80 border border-gold/20 rounded-2xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden backdrop-blur-sm">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold mb-6">
            <Heart className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-3xl font-light text-foreground mb-6">
            Our Story
          </h3>
          <p className="font-serif italic text-base sm:text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
            "Somewhere along the way, two strangers became each other’s favourite person, and two distant lives began to feel wonderfully intertwined. We found something that neither time nor miles could undo, the quiet certainty that we were meant to find our way to one another. And so, here we are, turning a story that began across the ocean into a lifetime together."
          </p>
        </div>
      </div>
    </section>
  );
}
