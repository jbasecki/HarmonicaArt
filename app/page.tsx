'use client';
import React, { useState } from 'react';

export default function MasterLandingPage() {
  const [words, setWords] = useState('');
  const [vibe, setVibe] = useState('14'); // Default: Snow Day

  const vibes = [
    { id: '14', name: 'SNOW DAY' },
    { id: '08', name: 'GOLDEN HOUR' }
  ];

  const handleStash = () => {
    // This connects the writing space to the success page
    const query = `?client_reference_id=${vibe}&tiles=${encodeURIComponent(words)}&from=Me`;
    window.location.href = `/success${query}`;
  };

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', fontFamily: 'serif', textAlign: 'center' }}>
      {/* BRANDING SECTION - Restores image_689407.jpg design */}
      <div style={{ padding: '40px 20px', borderBottom: '1px solid #111' }}>
        <p style={{ letterSpacing: '4px', fontSize: '0.7rem', marginBottom: '20px', opacity: 0.8 }}>HOW TO GIFT A HARMONICA</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '0.6rem', letterSpacing: '1px' }}>
          <p>1. COMPOSE</p><p>2. STASH</p><p>3. PRODUCE</p><p>4. SHARE</p>
        </div>
      </div>

      <div style={{ marginTop: '10vh', padding: '0 20px' }}>
        <h1 style={{ fontSize: '2.8rem', letterSpacing: '12px', fontWeight: 'normal', marginBottom: '10px' }}>HARMONICA</h1>
        <p style={{ fontStyle: 'italic', opacity: 0.6, letterSpacing: '2px' }}>A Sanctuary for Stashed Cognition</p>
        
        {/* VIBE SELECTOR */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '60px' }}>
          {vibes.map((v) => (
            <button 
              key={v.id} 
              onClick={() => setVibe(v.id)} 
              style={{ 
                padding: '10px 20px', 
                border: vibe === v.id ? '1px solid gold' : '1px solid #333', 
                background: 'transparent', 
                color: 'gold', 
                cursor: 'pointer', 
                fontSize: '0.7rem',
                letterSpacing: '2px'
              }}
            >
              {v.name}
            </button>
          ))}
        </div>

        {/* WRITING SPACE */}
        <div style={{ marginTop: '60px', maxWidth: '450px', margin: '60px auto' }}>
          <input 
            type="text" 
            placeholder="TYPE YOUR WORDS..." 
            value={words}
            onChange={(e) => setWords(e.target.value)}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              borderBottom: '1px solid gold', 
              color: 'white', 
              padding: '15px', 
              width: '100%', 
              fontSize: '1.2rem', 
              textAlign: 'center', 
              outline: 'none', 
              marginBottom: '50px' 
            }}
          />
          
          <button 
            onClick={handleStash} 
            style={{ 
              padding: '18px 60px', 
              border: '1px solid gold', 
              background: 'transparent', 
              color: 'gold', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              letterSpacing: '4px',
              fontSize: '0.9rem'
            }}
          >
            STASH COGNITION
          </button>
        </div>
      </div>
    </main>
  );
}
