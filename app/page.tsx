import React from 'react';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden bg-black text-white">
      {/* Background Video Layer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/misty-forest.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gold-Edged Identity Frame */}
      <div className="relative z-20 p-12 rounded-[40px] text-center max-w-xl border border-white/10 bg-black/20 backdrop-blur-md">
        <div className="w-20 h-20 rounded-full border border-yellow-500/50 flex items-center justify-center bg-black/40 mx-auto mb-8 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
          <span className="text-2xl font-serif text-yellow-500">[ I ]</span>
        </div>
        
        <h1 className="text-4xl tracking-[0.3em] uppercase text-white/90 mb-4 font-serif">
          Harmonica
        </h1>
        <p className="text-white/40 text-sm tracking-widest italic mb-10">
          The Art of Greeting
        </p>

        <a 
          href="/open"
          className="inline-block border border-yellow-500/50 px-8 py-3 bg-white/5 text-white/80 hover:text-white uppercase tracking-[0.2em] text-xs transition-all duration-700 hover:bg-yellow-500/10"
        >
          Enter the Sanctuary
        </a>
      </div>
    </main>
  );
}
