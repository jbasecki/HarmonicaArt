'use client';
import React, { useState } from 'react';

export default function RestoredSanctuary() {
  const [words, setWords] = useState('');
  // Using your verified ID for Rainforest Sanctuary as the default
  const [vibe, setVibe] = useState('14'); 

  const handleStash = () => {
    if (!words.trim()) return;
    // Single flow: Words go directly to the golden tiles
    const query = `?client_reference_id=${vibe}&tiles=${encodeURIComponent(words)}&from=Me`;
    window.location.href = `/success${query}`;
  };

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', fontFamily: 'serif', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* BACKGROUND VIDEO ENGINE */}
      <video
        autoPlay
        loop
        muted
        playsInline
        key={vibe}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, zIndex: 0 }}
      >
        <source src={`https://storage.googleapis.com/simple-bucket-27/${vibe}.mp4`} type="video/mp4" />
      </video>

      {/* RESTORED HEADER DESIGN */}
      <div style={{ position: 'absolute', top: '40px', width: '100%', zIndex: 1 }}>
        <p style={{ letterSpacing: '6px', fontSize: '0.65rem', opacity: 0.7 }}>HOW TO GIFT A HARMONICA</p>
      </div>

      {/* CONTENT LAYER */}
      <div style={{ zIndex: 1, padding: '0 20px' }}>
        <h1 style={{ fontSize: '3.5rem', letterSpacing: '18px', fontWeight: 'normal', margin: '0', color: 'gold' }}>HARMONICA</h1>
        <p style={{ fontStyle: 'italic', opacity: 0.6, letterSpacing: '3px', marginTop: '10px' }}>A Sanctuary for Stashed Cognition</p>
        
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
            letterSpacing: '4px', fontSize: '0.8rem'
          }}
        >
          STASH COGNITION
        </button>
      </div>
    </main>
  );
}
