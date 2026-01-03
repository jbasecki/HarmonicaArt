'use client';
import React, { useState } from 'react';

// This metadata helps the OpenGraph preview "form" when you share the link
export const metadata = {
  title: 'Harmonica | A Sanctuary for Stashed Cognition',
  description: 'Compose, Stash, and Produce your unique interactive gift.',
  openGraph: {
    images: ['/opengraph-image.jpg'], // Points to the file in your repo
  },
};

export default function MasterLandingPage() {
  const [words, setWords] = useState('');
  const [vibe, setVibe] = useState('14'); 

  const vibes = [
    { id: '14', name: 'SNOW DAY', color: '#87CEEB' },
    { id: '08', name: 'GOLDEN HOUR', color: '#FFD700' }
  ];

  const handleStash = () => {
    // Directs the user to the success page with chosen parameters
    const query = `?client_reference_id=${vibe}&tiles=${encodeURIComponent(words)}&from=Me`;
    window.location.href = `/success${query}`;
  };

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', fontFamily: 'serif', textAlign: 'center' }}>
      {/* BRANDING SECTION */}
      <div style={{ padding: '40px 20px', borderBottom: '1px solid #111' }}>
        <p style={{ letterSpacing: '4px', fontSize: '0.7rem', marginBottom: '20px' }}>HOW TO GIFT A HARMONICA</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '0.6rem' }}>
          <p>1. COMPOSE</p><p>2. STASH</p><p>3. PRODUCE</p><p>4. SHARE</p>
        </div>
      </div>

      <div style={{ marginTop: '10vh', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2.5rem', letterSpacing: '10px' }}>HARMONICA</h1>
        <p style={{ fontStyle: 'italic', opacity: 0.6 }}>A Sanctuary for Stashed Cognition</p>
        
        {/* VIBE SELECTOR */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '40px' }}>
          {vibes.map((v) => (
            <button key={v.id} onClick={() => setVibe(v.id)} style={{ padding: '8px 15px', border: vibe === v.id ? '1px solid gold' : '1px solid #333', background: 'transparent', color: 'gold', cursor: 'pointer', fontSize: '0.6rem' }}>
              {v.name}
            </button>
          ))}
        </div>

        {/* WRITING SPACE */}
        <div style={{ marginTop: '40px', maxWidth: '400px', margin: '40px auto' }}>
          <input 
            type="text" 
            placeholder="TYPE WORDS..." 
            value={words}
            onChange={(e) => setWords(e.target.value)}
            style={{ background: 'transparent', border: 'none', borderBottom: '1px solid gold', color: 'white', padding: '10px', width: '100%', fontSize: '1.1rem', textAlign: 'center', outline: 'none', marginBottom: '40px' }}
          />
          
          <button onClick={handleStash} style={{ padding: '15px 40px', border: '1px solid gold', background: 'gold', color: 'black', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '2px' }}>
            STASH COGNITION
          </button>
        </div>
      </div>
    </main>
  );
}
