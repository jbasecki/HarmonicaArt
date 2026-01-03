'use client';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const vibeId = searchParams.get('client_reference_id') || '14'; 
  
  // This captures the words from your "Compose" sanctuary
  const stashedWords = ["HAPPY", "SUNNY", "MONDAY"]; 

  return (
    <main style={{ minHeight: '100vh', background: '#000', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <video autoPlay loop muted playsInline style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.5 }}>
        <source src={`https://storage.googleapis.com/simple-bucket-27/${vibeId}.mp4`} type="video/mp4" />
      </video>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <p style={{ color: 'gold', fontSize: '0.8rem', letterSpacing: '4px', marginBottom: '25px', fontWeight: 'bold' }}>A HARMONICA COMPOSED OF MEANINGFUL WORDS</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {stashedWords.map((word, i) => {
            // THE REFINED LOGIC: First and One-Before-The-Last
            const firstLetter = word[0].toLowerCase();
            const penultLetter = word.length > 1 ? word[word.length - 2].toLowerCase() : firstLetter;
            
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                   <div style={{ width: '40px', height: '60px', border: '1px solid gold', borderRadius: '8px', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/vibes/${firstLetter}.png)`, backgroundSize: 'cover' }} />
                   <div style={{ width: '40px', height: '60px', border: '1px solid gold', borderRadius: '8px', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/vibes/${penultLetter}.png)`, backgroundSize: 'cover' }} />
                </div>
                <p style={{ color: 'gold', fontSize: '0.65rem', marginTop: '12px', letterSpacing: '3px', fontWeight: 'bold' }}>{word.toUpperCase()}</p>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: '50px' }}>
          <p style={{ color: 'rgba(255, 215, 0, 0.6)', fontSize: '0.8rem', letterSpacing: '2px' }}>the sanctuary is stashed.</p>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return <Suspense fallback={<p>Loading Sanctuary...</p>}><SuccessContent /></Suspense>;
}
