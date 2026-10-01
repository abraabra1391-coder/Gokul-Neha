import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Blessings() {
  return (
    <section id="blessings" className="py-16 sm:py-20 relative">
      <div className="max-w-4xl mx-auto px-5">
        {/* Box Container */}
        <div className="relative bg-card/90 border border-gold/30 rounded-2xl p-8 sm:p-12 text-center shadow-xl overflow-hidden backdrop-blur-md max-w-3xl mx-auto group hover:border-gold/50 transition-all duration-500">
          
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gold font-medium mb-4">
            With the blessings of our families
          </p>

          {/* Main Blessing Paragraph */}
          <p className="font-serif italic text-lg sm:text-2xl text-foreground/95 leading-relaxed max-w-2xl mx-auto mb-8">
            "As lamps are lit and mantras are chanted, we invite you to witness the sacred union of Gokul and Neha. Your presence, prayers and blessings will make this day complete."
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 my-6">
            <span className="h-px w-10 gold-line" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px w-10 gold-line" />
          </div>

          {/* Date Badge Inside the Box */}
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold/30 bg-gold/10 text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold">
            <span>Sunday, 7 February 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
}
