'use client';
import React, { useState } from 'react';

export default function LandingPage() {
  const [words, setWords] = useState('');
  const vibe = '14'; // Default to your verified Rainforest Sanctuary

  const handleStash = () => {
    if (!words.trim()) return;
    window.location.href = `/success?client_reference_id=${vibe}&tiles=${encodeURIComponent(words)}&from=Me`;
  };

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', fontFamily: 'serif', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
      <video autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}>
        <source src={`https://storage.googleapis.com/simple-bucket-27/${vibe}.mp4`} type="video/mp4" />
      </video>
      <div style={{ zIndex: 1 }}>
        <h1 style={{ fontSize: '3.5rem', letterSpacing: '18px', fontWeight: 'normal' }}>HARMONICA</h1>
        <input type="text" placeholder="ENTER YOUR WORDS..." value={words} onChange={(e) => setWords(e.target.value)}
          style={{ background: 'transparent', border: 'none', borderBottom: '1px solid gold', color: 'white', padding: '15px', width: '300px', textAlign: 'center', outline: 'none', marginTop: '40px' }} 
        />
        <br />
        <button onClick={handleStash} style={{ marginTop: '40px', padding: '15px 50px', border: '1px solid gold', background: 'transparent', color: 'gold', cursor: 'pointer', letterSpacing: '4px' }}>
          STASH COGNITION
        </button>
      </div>
    </main>
  );
}
