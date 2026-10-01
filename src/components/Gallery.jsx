import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  const images = [
    { src: "/images/gallery-1.png", alt: "The couple holding hands", span: "row-span-2" },
    { src: "/images/gallery-2.png", alt: "Elegant reception table decor", span: "col-span-2" },
    { src: "/images/gallery-3.png", alt: "Couple walking at golden hour", span: "col-span-1" },
    { src: "/images/gallery-4.png", alt: "Wedding rings on rose petals", span: "col-span-1" },
    { src: "/images/gallery-5.png", alt: "Ceremony aisle with florals", span: "row-span-2" },
    { src: "/images/gallery-6.png", alt: "Bridal bouquet", span: "col-span-1" },
  ];

  const handleKeyDown = (e) => {
    if (activeIdx === null) return;
    if (e.key === 'Escape') setActiveIdx(null);
    if (e.key === 'ArrowRight') setActiveIdx((prev) => (prev + 1) % images.length);
    if (e.key === 'ArrowLeft') setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (activeIdx !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [activeIdx]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-secondary/40 relative">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading
          eyebrow="Cherished Moments"
          title="Our Gallery"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[220px]">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`relative overflow-hidden rounded-xl border border-gold/20 shadow-sm cursor-pointer group bg-card ${
                img.span.includes('col-span-2') ? 'sm:col-span-2' : ''
              } ${img.span.includes('row-span-2') ? 'sm:row-span-2' : ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 backdrop-blur-[2px]">
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium mb-1">
                  Click to Expand
                </p>
                <p className="font-serif text-lg text-foreground">
                  {img.alt}
                </p>
                <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-gold/20 text-gold flex items-center justify-center">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setActiveIdx(null)}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 z-10 h-11 w-11 rounded-full border border-gold/30 bg-card/80 text-foreground hover:bg-gold hover:text-gold-foreground transition-colors flex items-center justify-center shadow-md"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={() => setActiveIdx((prev) => (prev - 1 + images.length) % images.length)}
            aria-label="Previous Image"
            className="absolute left-4 sm:left-8 z-10 h-11 w-11 rounded-full border border-gold/30 bg-card/80 text-foreground hover:bg-gold hover:text-gold-foreground transition-colors flex items-center justify-center shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={() => setActiveIdx((prev) => (prev + 1) % images.length)}
            aria-label="Next Image"
            className="absolute right-4 sm:right-8 z-10 h-11 w-11 rounded-full border border-gold/30 bg-card/80 text-foreground hover:bg-gold hover:text-gold-foreground transition-colors flex items-center justify-center shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image & Caption Display */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={images[activeIdx].src}
              alt={images[activeIdx].alt}
              className="max-w-full max-h-[70vh] object-contain rounded-xl border border-gold/30 shadow-2xl"
            />
            <p className="mt-4 font-serif text-xl text-foreground text-center">
              {images[activeIdx].alt}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mt-1">
              {activeIdx + 1} of {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
