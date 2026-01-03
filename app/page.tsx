'use client';
import React, { useState } from 'react';

export default function RestorationPage() {
  const [words, setWords] = useState('');
  // We keep your verified vibe '14' as the default background
  const [vibe, setVibe] = useState('14'); 

  const handleStash = () => {
    if (!words.trim()) return;
    // Direct flight: Sends words straight to the tiles without a second stop
    const query = `?client_reference_id=${vibe}&tiles=${encodeURIComponent(words)}&from=Me`;
    window.location.href = `/success${query}`;
  };

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', fontFamily: 'serif', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {/* Restored Header Design from image_689407.jpg */}
      <div style={{ position: 'absolute', top: '40px', width: '100%' }}>
        <p style={{ letterSpacing: '6px', fontSize: '0.65rem', opacity: 0.7 }}>HOW TO GIFT A HARMONICA</p>
      </div>

      <div>
        <h1 style={{ fontSize: '3.5rem', letterSpacing: '18px', fontWeight: 'normal', margin: '0', color: 'gold' }}>HARMONICA</h1>
        <p style={{ fontStyle: 'italic', opacity: 0.5, letterSpacing: '3px', marginTop: '10px' }}>A Sanctuary for Stashed Cognition</p>
        
        <div style={{ marginTop: '80px' }}>
          <input 
            type="text" 
            placeholder="ENTER YOUR WORDS..." 
            value={words}
            onChange={(e) => setWords(e.target.value)}
            style={{ 
              background: 'transparent', border: 'none', borderBottom: '1px solid gold', 
              color: 'white', padding: '15px', width: '300px', fontSize: '1.2rem', 
              textAlign: 'center', outline: 'none' 
            }}
          />
        </div>

        <button 
          onClick={handleStash} 
          style={{ 
            marginTop: '60px', padding: '15px 50px', border: '1px solid gold', 
            background: 'transparent', color: 'gold', cursor: 'pointer', 
            letterSpacing: '4px', fontSize: '0.8rem', transition: '0.3s'
          }}
        >
          STASH COGNITION
        </button>
      </div>
    </main>
  );
}
