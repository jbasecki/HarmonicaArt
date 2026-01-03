'use client';
import React, { useState } from 'react';

const vibes = [
  { id: '14', name: 'Rainforest Sanctuary' }, { id: '19', name: 'The Golden Clearing' },
  { id: '10', name: 'Misty Peak' }, { id: '9', name: 'Solar Bloom' },
  { id: '1', name: 'Midnight Stash' }, { id: '2', name: 'Ethereal Dawn' },
  { id: '3', name: 'Golden Cognition' }, { id: '4', name: 'Velvet Silence' },
  { id: '5', name: 'Amber Echo' }, { id: '6', name: 'Stardust Archive' },
  { id: '7', name: 'Celestial Harmony' }, { id: '8', name: 'Lunar Drift' },
  { id: '11', name: 'Winter Night' }, { id: '12', name: 'Oceanic Breath' },
  { id: '13', name: 'Enchanted Gold' }, { id: '15', name: 'Crimson Glow' },
  { id: '16', name: 'Twilight Ember' }, { id: '17', name: 'Serene Moss' },
  { id: '18', name: 'Radiant Stillness' }
];

export default function MasterLandingPage() {
  const [words, setWords] = useState('');
  const [vibe, setVibe] = useState('14');

  const handleStash = () => {
    const query = `?client_reference_id=${vibe}&tiles=${encodeURIComponent(words)}&from=Me`;
    window.location.href = `/success${query}`;
  };

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', fontFamily: 'serif', textAlign: 'center' }}>
      <div style={{ padding: '40px 20px', borderBottom: '1px solid #111' }}>
        <p style={{ letterSpacing: '4px', fontSize: '0.7rem', opacity: 0.8 }}>HOW TO GIFT A HARMONICA</p>
      </div>

      <div style={{ marginTop: '5vh' }}>
        <h1 style={{ fontSize: '2.5rem', letterSpacing: '10px', fontWeight: 'normal' }}>HARMONICA</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
          {vibes.map((v) => (
            <button key={v.id} onClick={() => setVibe(v.id)} style={{
              padding: '10px', border: vibe === v.id ? '1px solid gold' : '1px solid #222',
              background: 'transparent', color: vibe === v.id ? 'gold' : '#666',
              cursor: 'pointer', fontSize: '0.6rem', letterSpacing: '1px'
            }}> {v.name} </button>
          ))}
        </div>

        <input type="text" placeholder="TYPE YOUR WORDS..." value={words} onChange={(e) => setWords(e.target.value)}
          style={{ background: 'transparent', border: 'none', borderBottom: '1px solid gold', color: 'white', 
          padding: '15px', width: '80%', maxWidth: '400px', fontSize: '1.2rem', textAlign: 'center', outline: 'none', marginBottom: '40px' }} 
        />
        <br />
        <button onClick={handleStash} style={{ padding: '15px 40px', border: '1px solid gold', background: 'transparent', color: 'gold', cursor: 'pointer', letterSpacing: '3px' }}>
          STASH COGNITION
        </button>
      </div>
    </main>
  );
}
