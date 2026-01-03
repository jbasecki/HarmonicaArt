import React from 'react';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-6 bg-black overflow-hidden text-white font-serif">
      {/* Background Video Layer */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50">
          <source src="/videos/misty-forest.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      {/* Brand Identity Frame */}
      <div className="relative z-20 p-12 rounded-[40px] text-center max-w-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
        <div className="w-16 h-16 rounded-full border border-yellow-500/50 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
          <span className="text-xl text-yellow-500">[ I ]</span>
        </div>
        
        <h1 className="text-4xl tracking-[0.4em] uppercase text-white/90 mb-2 font-light">
          Harmonica
        </h1>
        <p className="text-white/40 text-xs tracking-widest italic mb-10">
          The Art of Greeting
        </p>

        <a 
          href="/open"
          className="inline-block border border-yellow-500/40 px-10 py-3 text-white/80 hover:text-white uppercase tracking-[0.3em] text-[10px] transition-all duration-700 hover:bg-yellow-500/5 hover:border-yellow-500"
        >
          Enter the Sanctuary
        </a>
      </div>
    </main>
  );
}
