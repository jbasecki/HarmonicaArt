"use client";

import React from 'react';

export default function SuccessPage() {
  // Example message coming from your sending page
  const message = "The misty forest sanctuary"; 
  
  // 1. Split the message into individual words
  const words = message.split(" ");

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden">
      {/* Background Video remains the star */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/misty-forest.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="sanctuary-glass w-full max-w-5xl rounded-[40px] p-12 text-center flex flex-col items-center gap-12">
        
        <header>
          <h1 className="font-playfair text-3xl tracking-[0.4em] uppercase text-white/90">
            Alphabet Sanctuary
          </h1>
          <p className="text-white/40 text-xs mt-4 tracking-widest italic">
            First and Penultimate Logic Active
          </p>
        </header>

        {/* 2. Visual Logic: Mapping words to unique icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {words.map((word, index) => {
            const first = word[0]?.toUpperCase();
            // Penultimate logic: if word is 1 char, use first. Otherwise, length - 2.
            const penultimate = word.length > 1 ? word[word.length - 2].toUpperCase() : first;

            return (
              <div key={index} className="flex flex-col items-center gap-2">
                {/* Visual Icon Pair */}
                <div className="gold-edge w-24 h-16 rounded-xl bg-black/40 flex items-center justify-center gap-1 overflow-hidden">
                   <img src={`/alphabet/${first}.jpg`} alt={first} className="h-full w-1/2 object-cover" />
                   <img src={`/alphabet/${penultimate}.jpg`} alt={penultimate} className="h-full w-1/2 object-cover" />
                </div>
                {/* Word Label */}
                <span className="text-[10px] text-gold-500 uppercase tracking-tighter font-bold">
                  {word}
                </span>
              </div>
            );
          })}
        </div>

        {/* 3. The Full Quote Display */}
        <div className="max-w-2xl border-t border-white/10 pt-8">
           <p className="font-playfair text-2xl text-white leading-relaxed italic">
             "{message}"
           </p>
        </div>

      </div>
    </main>
  );
}
