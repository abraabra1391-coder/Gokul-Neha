import React, { useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3; // 30% volume

    const attemptPlay = () => {
      audio.play().catch(() => {
        // Autoplay policy prevented playback; will play on first interaction
      });
    };

    // Try playing immediately
    attemptPlay();

    // Fallback: trigger playback on any user interaction if autoplay was blocked
    const handleUserInteraction = () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
      // Remove listeners once playback has started
      ['click', 'touchstart', 'pointerdown', 'scroll', 'keydown'].forEach((event) => {
        window.removeEventListener(event, handleUserInteraction);
      });
    };

    ['click', 'touchstart', 'pointerdown', 'scroll', 'keydown'].forEach((event) => {
      window.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      ['click', 'touchstart', 'pointerdown', 'scroll', 'keydown'].forEach((event) => {
        window.removeEventListener(event, handleUserInteraction);
      });
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/bg-music.mp3"
      autoPlay
      loop
      preload="auto"
    />
  );
}
