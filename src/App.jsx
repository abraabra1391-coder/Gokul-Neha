import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Blessings from './components/Blessings';
import Events from './components/Events';
import Couple from './components/Couple';
import Venue from './components/Venue';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold/20 selection:text-gold">
      <AudioPlayer />
      <Navbar />
      <main>
        <Hero />
        <Blessings />
        <Events />
        <Couple />
        <Venue />
      </main>
      <Footer />
    </div>
  );
}
