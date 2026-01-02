"use client";

import React from 'react';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
          <source src="/videos/misty-forest.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gold-Edged Logo Identity */}
      <div className="sanctuary-glass p-12 rounded-[40px] text-center max-w-xl border border-white/10">
        <div className="w-20 h-20 rounded-full gold-edge flex items-center justify-center bg-black/40 mx-auto mb-8">
          <span className="font-playfair text-2xl text-white">[ I ]</span>
        </div>
        
        <h1 className="font-playfair text-4xl tracking-[0.3em] uppercase text-white/90 mb-4">
          Harmonica
        </h1>
        <p className="text-white/40 text-sm tracking-widest italic mb-10">
          The Art of Greeting
        </p>

        <button 
          onClick={() => window.location.href = '/open'}
          className="gold-edge px-8 py-3 bg-white/5 text-white/80 hover:text-white uppercase tracking-[0.2em] text-xs transition-all duration-700"
        >
          Enter the Sanctuary
        </button>
      </div>
    </main>
  );
}
