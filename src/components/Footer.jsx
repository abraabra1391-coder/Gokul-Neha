import React, { useState } from 'react';
import { Camera, Users, Share2, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e) => {
    e.preventDefault();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Gokul & Neha — Wedding Invitation',
          text: 'Join us as we celebrate our wedding on February 7, 2027 in Palakkad, Kerala.',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-background py-20">
      <div className="mx-auto max-w-3xl px-5 text-center">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-[0.4em] text-gold font-medium">
          Two hearts, one beautiful journey
        </p>

        {/* Subtitle */}
        <p className="mt-4 text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium">
          With love and blessings,
        </p>

        {/* Names */}
        <h2 className="mt-4 font-serif text-5xl font-light text-foreground sm:text-6xl tracking-tight">
          Gokul <span className="mx-3 text-gold font-serif italic">&</span> Neha
        </h2>

        {/* Decorative Ornament */}
        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-10 gold-line" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          <span className="h-px w-10 gold-line" />
        </div>

        {/* Thank You Note */}
        <p className="mx-auto mt-8 max-w-md text-base sm:text-lg leading-relaxed text-foreground/90 font-serif italic">
          "Thank you for being a part of our special day."
        </p>

        <p className="mt-12 text-xs tracking-wide text-muted-foreground font-sans">
          Made with love for our special day
        </p>
      </div>
    </footer>
  );
}
