"use client";

export default function SendingPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-6">
      {/* Background Video - Maximized Visibility */}
      <div className="absolute inset-0 -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/misty-forest.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* The Central Sanctuary Form */}
      <div className="sanctuary-glass w-full max-w-2xl rounded-[40px] p-10 flex flex-col gap-8">
        
        <header className="text-center">
          <h1 className="font-playfair text-4xl tracking-widest uppercase text-white/90">
            Harmonica Art
          </h1>
          <p className="text-white/50 text-sm mt-2 italic">
            "Paste your quote or write your message here:"
          </p>
        </header>

        <section className="space-y-4">
          <textarea 
            className="w-full h-40 bg-black/20 gold-edge rounded-2xl p-5 text-white placeholder-white/30 focus:outline-none"
            placeholder="Your favorite quote or message..."
          />
          
          <input 
            type="text" 
            placeholder="A video link to anchor this memory (optional)"
            className="w-full bg-black/20 gold-edge rounded-xl p-3 text-sm text-white placeholder-white/30 focus:outline-none"
          />
        </section>

        {/* Integrated Mini-Payment Area */}
        <section className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs uppercase tracking-widest text-white/40">Secure Offering</span>
            <span className="text-gold-500 font-playfair">$11.11</span>
          </div>
          
          {/* This is where the Stripe Element will mount */}
          <div id="payment-element" className="min-h-[40px] text-center text-xs text-white/20 italic">
            Waiting for Stripe Handshake...
          </div>
        </section>

        <button className="w-full py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all duration-500">
          Send to Sanctuary
        </button>
      </div>
    </main>
  );
}
