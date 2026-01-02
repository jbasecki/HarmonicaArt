"use client";

import React from 'react';

export default function SuccessPage() {
  const message = "The oceanic breath of the sanctuary"; 
  const words = message.split(" ");

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between p-10 overflow-hidden bg-black">
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
          <source src="/videos/golden-bust.mp4" type="video/mp4" />
        </video>
      </div>

      {/* TOP ZONE: Icons remain at the top edge */}
      <header className="sanctuary-glass rounded-3xl p-6 self-center w-full max-w-4xl mt-4">
        <div className="flex flex-wrap justify-center gap-4">
          {words.map((word, index) => {
            const first = word[0]?.toUpperCase();
            const penultimate = word.length > 1 ? word[word.length - 2].toUpperCase() : first;
            return (
              <div key={index} className="gold-edge w-16 h-12 rounded-lg bg-black/40 flex overflow-hidden">
                 <img src={`/alphabet/${first}.jpg`} alt={first} className="w-1/2 object-cover border-r border-gold-500/20" />
                 <img src={`/alphabet/${penultimate}.jpg`} alt={penultimate} className="w-1/2 object-cover" />
              </div>
            );
          })}
        </div>
      </header>

      {/* MIDDLE ZONE: Empty to keep the eyes/face clear */}
      <div className="flex-grow" />

      {/* BOTTOM ZONE: Quote and Title pinned to the bottom edge */}
      <footer className="w-full max-w-2xl self-center text-center space-y-4 mb-8">
        <h2 className="font-playfair text-white tracking-[0.5em] uppercase text-xl border-b border-gold-500/30 pb-2">
          Oceanic Breath
        </h2>
        <p className="font-playfair italic text-white/80 text-lg px-4">
          "{message}"
        </p>
      </footer>
    </main>
  );
}
