"use client";

import React from 'react';

export default function SuccessPage() {
  const message = "The oceanic breath of the sanctuary"; 
  const words = message.split(" ");

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between p-10 bg-black overflow-hidden">
      {/* Background Video - Fixed and Z-Indexed to back */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60">
          <source src="/videos/golden-bust.mp4" type="video/mp4" />
        </video>
      </div>

      {/* TOP SAFE ZONE: Alphabet Icons (Penultimate Logic) */}
      <div className="w-full flex justify-center pt-4">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-wrap gap-3">
          {words.map((word, index) => {
            const first = word[0]?.toUpperCase();
            const penultimate = word.length > 1 ? word[word.length - 2].toUpperCase() : first;
            return (
              <div key={index} className="w-14 h-10 border border-yellow-500/30 rounded-md overflow-hidden flex">
                 <img src={`/alphabet/${first}.jpg`} className="w-1/2 object-cover" alt={first} />
                 <img src={`/alphabet/${penultimate}.jpg`} className="w-1/2 object-cover" alt={penultimate} />
              </div>
            );
          })}
        </div>
      </div>

      {/* MIDDLE ZONE: LEFT COMPLETELY EMPTY FOR THE ARTISTIC SUBJECT */}
      <div className="flex-grow" />

      {/* BOTTOM SAFE ZONE: Title and Message */}
      <div className="w-full text-center pb-10 space-y-4">
        <h2 className="text-yellow-500/80 tracking-[0.6em] uppercase text-sm border-t border-white/10 pt-4 inline-block">
          Oceanic Breath
        </h2>
        <p className="text-white font-serif italic text-2xl max-w-2xl mx-auto leading-relaxed px-6">
          "{message}"
        </p>
      </div>
    </main>
  );
}
