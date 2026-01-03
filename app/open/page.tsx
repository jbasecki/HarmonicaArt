'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState, Suspense } from 'react';

function OpenContent() {
  const searchParams = useSearchParams();
  const [isRevealed, setIsRevealed] = useState(false);
  const vibeId = searchParams.get('vibe') || '14'; 
  const tilesStr = searchParams.get('tiles') || 'Success,Sanctuary';
  const stashedWords = tilesStr.split(',');

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <video autoPlay loop muted playsInline style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: isRevealed ? 0.4 : 0.1 }}>
        <source src={`https://storage.googleapis.com/simple-bucket-27/${vibeId}.mp4`} type="video/mp4" />
      </video>
      {!isRevealed ? (
        <div onClick={() => setIsRevealed(true)} style={{ width: '140px', height: '140px', margin: '20vh auto', borderRadius: '50%', background: 'gold', boxShadow: '0 0 50px gold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'black', fontWeight: 'bold' }}>UNFOLD</p>
        </div>
      ) : (
        <div style={{ marginTop: '10vh', display: 'flex', gap: '15px', justifyContent: 'center' }}>
          {stashedWords.map((word, i) => {
            const first = word.trim()[0].toLowerCase();
            const penult = word.trim().length > 1 ? word.trim()[word.trim().length - 2].toLowerCase() : first;
            return (
              <div key={i} style={{ display: 'flex', gap: '5px' }}>
                {/* Updated Path: Removing /vibes/ if it caused the error */}
                <div style={{ width: '50px', height: '80px', border: '1px solid gold', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/${first}.png)`, backgroundSize: 'cover' }} />
                <div style={{ width: '50px', height: '80px', border: '1px solid gold', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/${penult}.png)`, backgroundSize: 'cover' }} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ReceiverPage() {
  return <main style={{ minHeight: '100vh', background: '#000' }}><Suspense fallback={<p>Loading...</p>}><OpenContent /></Suspense></main>;
}
