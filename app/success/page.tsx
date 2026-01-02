"use client";

import React from 'react';

export default function SuccessPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden">
      {/* 1. Background Video - The "Sanctuary" view */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/misty-forest.mp4" type="video/mp4" />
        </video>
        {/* Slightly darker overlay to make the success message feel intimate */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* 2. Success Glass Panel */}
      <div className="sanctuary-glass w-full max-w-3xl rounded-[40px] p-12 text-center flex flex-col items-center gap-8">
        
        {/* The [ I ] Signature / Gold-Edged Identity */}
        <div className="w-20 h-20 rounded-full gold-edge flex items-center justify-center bg-black/40 mb-2">
          <span className="font-playfair text-2xl text-white">[ I ]</span>
        </div>

        <header>
          <h1 className="font-playfair text-4xl tracking-[0.3em] uppercase text-white/90 mb-4">
            Sanctuary Opened
          </h1>
          <div className="w-24 h-[1px] bg-gold-500 mx-auto mb-6" />
          <p className="text-white/70 text-lg italic font-light">
            "Your message has been anchored in the mist."
          </p>
        </header>

        {/* 3. The Alphabet Sanctuary Display Area */}
        <section className="w-full py-10 bg-white/5 rounded-3xl border border-white/10 mt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-8">
            Current Transmission
          </p>
          
          {/* This is where the user's specific quote/message will appear */}
          <div className="px-6">
            <h2 className="text-3xl md:text-5xl font-playfair text-white leading-relaxed">
              The Alphabet Sanctuary
            </h2>
          </div>
        </section>

        <footer className="mt-8">
          <button 
            onClick={() => window.location.href = '/'}
            className="text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors duration-500"
          >
            Return to the Entrance
          </button>
        </footer>
      </div>
    </main>
  );
}
