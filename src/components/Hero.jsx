import React, { useState, useEffect } from 'react';

export default function Hero() {
  const targetDate = new Date('2027-02-07T09:30:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Full Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Gokul and Neha"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.85]"
        />
        {/* Multi-layered dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center text-white">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gold font-medium mb-4">
          Together with our families
        </p>

        {/* Title */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-white tracking-tight leading-none mb-4 drop-shadow-md">
          Gokul <span className="text-gold font-serif italic mx-2">&</span> Neha
        </h1>

        {/* Date Line */}
        <div className="my-5 inline-flex items-center gap-4 text-xs sm:text-sm uppercase tracking-[0.25em] text-white/90 font-medium">
          <span className="h-px w-10 gold-line opacity-80" />
          <span>Sunday, February 7, 2027</span>
          <span className="h-px w-10 gold-line opacity-80" />
        </div>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-white/80 font-serif italic max-w-lg mx-auto mb-10 leading-relaxed drop-shadow-sm">
          We request the pleasure of your presence as we begin our journey together
        </p>

        {/* Countdown Timer Overlay */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-md mx-auto mb-10">
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="bg-black/60 border border-gold/30 rounded-xl p-3 sm:p-4 text-center shadow-lg backdrop-blur-md"
            >
              <div className="font-serif text-2xl sm:text-4xl font-light text-white mb-0.5">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Solid Gold CTA Button */}
        <div>
          <a
            href="#blessings"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold text-foreground hover:bg-gold-light transition-all duration-300 text-xs font-bold uppercase tracking-[0.25em] shadow-xl hover:scale-105"
          >
            View Invitation
          </a>
        </div>
      </div>
    </section>
  );
}
