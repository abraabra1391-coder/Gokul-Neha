import React, { useEffect, useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume to 30%
    audio.volume = 0.3;

    // Initialize Web Audio API AudioContext to unlock audio subsystem on Android Chrome & iOS Safari
    let audioCtx = null;
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    } catch (e) {
      console.log('Web Audio API initialized:', e);
    }

    const unlockAndPlay = () => {
      if (!audio) return;

      // Resume Web Audio Context if suspended
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }

      if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Playback successfully started! Safely remove gesture listeners now.
              removeListeners();
            })
            .catch((error) => {
              // Playback was blocked by browser policy for this event.
              // Do NOT remove listeners yet so the next user gesture will trigger playback!
            });
        }
      } else {
        removeListeners();
      }
    };

    // User gesture events that unlock audio on Android Chrome, Samsung Internet, iOS Safari, Desktop
    const gestureEvents = ['touchstart', 'touchend', 'pointerdown', 'mousedown', 'click', 'keydown'];

    const handleUserGesture = () => {
      unlockAndPlay();
    };

    const addListeners = () => {
      gestureEvents.forEach((evt) => {
        window.addEventListener(evt, handleUserGesture, { capture: true, passive: true });
        document.addEventListener(evt, handleUserGesture, { capture: true, passive: true });
      });
    };

    const removeListeners = () => {
      gestureEvents.forEach((evt) => {
        window.removeEventListener(evt, handleUserGesture, { capture: true });
        document.removeEventListener(evt, handleUserGesture, { capture: true });
      });
    };

    // 1. Register gesture listeners for fallback
    addListeners();

    // 2. Attempt immediate autoplay (works on browsers/devices permitting unmuted autoplay)
    unlockAndPlay();

    // 3. Handle Visibility Change (resume audio if user switches back to the tab)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && audio && audio.paused) {
        unlockAndPlay();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      removeListeners();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (audioCtx) {
        audioCtx.close().catch(() => {});
      }
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/audio/bg-music.mp3"
      autoPlay
      loop
      playsInline
      preload="auto"
    />
  );
}
