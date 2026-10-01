import React from 'react';

export default function SectionHeading({ eyebrow, title, subtitle, className = "" }) {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-16 ${className}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.35em] text-gold font-sans font-medium mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl font-light text-foreground tracking-wide leading-tight">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 my-5">
        <span className="h-px w-12 gold-line" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px w-12 gold-line" />
      </div>
      {subtitle && (
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
