import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { MessageSquare, Send, Quote } from 'lucide-react';

const INITIAL_WISHES = [
  {
    id: "seed-1",
    name: "Priya & Family",
    message: "Wishing you a lifetime of love and laughter. So thrilled to celebrate this beautiful union with you both!"
  },
  {
    id: "seed-2",
    name: "Rohan Kapoor",
    message: "From college friends to soulmates — it has been a joy watching your story unfold. Congratulations!"
  },
  {
    id: "seed-3",
    name: "The Menon Family",
    message: "May your journey together be blessed with endless happiness. We love you both dearly."
  }
];

export default function Wishes() {
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('wedding-guest-wishes');
    if (saved) {
      try {
        setWishes(JSON.parse(saved));
      } catch (e) {
        setWishes(INITIAL_WISHES);
      }
    } else {
      setWishes(INITIAL_WISHES);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim()
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    localStorage.setItem('wedding-guest-wishes', JSON.stringify(updated));

    setName('');
    setMessage('');
  };

  return (
    <section id="wishes" className="py-24 sm:py-32 bg-secondary/40 relative">
      <div className="max-w-5xl mx-auto px-5">
        <SectionHeading
          eyebrow="From The Heart"
          title="Guest Wishes"
          subtitle="Leave a blessing for the couple — your words will become a keepsake they treasure forever."
        />

        {/* Form Card */}
        <div className="max-w-2xl mx-auto bg-card border border-gold/25 rounded-2xl p-6 sm:p-8 shadow-lg mb-16 relative backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-foreground/80 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gold/25 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-foreground/80 font-medium mb-2">
                Your Blessing / Message
              </label>
              <textarea
                required
                rows={3}
                placeholder="Write your wishes for Neha and Gokul..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gold/25 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gold text-gold-foreground font-medium text-xs uppercase tracking-[0.25em] hover:bg-gold-light transition-colors shadow-md w-full sm:w-auto"
            >
              <Send className="h-4 w-4" />
              <span>Send Blessing</span>
            </button>
          </form>
        </div>

        {/* Wishes List Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {wishes.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-gold/20 rounded-xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-gold/40 transition-colors"
            >
              <Quote className="h-8 w-8 text-gold/20 absolute top-4 right-4" />
              <p className="font-serif italic text-base text-foreground/90 leading-relaxed mb-6 relative z-10">
                "{item.message}"
              </p>
              <div className="border-t border-gold/15 pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
