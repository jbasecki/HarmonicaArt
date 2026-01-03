'use client';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const vibeId = searchParams.get('client_reference_id') || '14'; 
  
  // Simulation of the words composed by the sender
  const stashedWords = ["COME", "OVER", "BREAKFAST"]; 

  return (
    <main style={{ minHeight: '100vh', background: '#000', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <video autoPlay loop muted playsInline style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.5 }}>
        <source src={`https://storage.googleapis.com/simple-bucket-27/${vibeId}.mp4`} type="video/mp4" />
      </video>
      
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <p style={{ color: 'gold', fontSize: '0.8rem', letterSpacing: '4px', marginBottom: '25px', fontWeight: 'bold' }}>A HARMONICA COMPOSED OF MEANINGFUL WORDS</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {stashedWords.map((word, i) => {
            // NEW LOGIC: First letter and the One-Before-The-Last letter
            const firstLetter = word[0].toLowerCase();
            const penultLetter = word.length > 1 ? word[word.length - 2].toLowerCase() : firstLetter;

            return (
              <div key={i} style={{ display: 'flex', gap: '5px' }}>
                {/* Tile for First Letter */}
                <div style={{ width: '45px', height: '70px', border: '1px solid gold', borderRadius: '8px', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/vibes/${firstLetter}.png)`, backgroundSize: 'cover' }} />
                {/* Tile for One-Before-Last Letter */}
                <div style={{ width: '45px', height: '70px', border: '1px solid gold', borderRadius: '8px', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/vibes/${penultLetter}.png)`, backgroundSize: 'cover' }} />
              </div>
            );
          })}
        </div>
        
        <div style={{ marginTop: '50px' }}>
          <p style={{ color: '#FFD700', fontSize: '2.5rem' }}>Sanctuary Stashed</p>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return <Suspense fallback={<p>Loading Tiles...</p>}><SuccessContent /></Suspense>;
}
