'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState, Suspense } from 'react';

function OpenContent() {
  const searchParams = useSearchParams();
  const [isRevealed, setIsRevealed] = useState(false);
  
  // Parameters for the unique gift experience
  const vibeId = searchParams.get('vibe') || '14'; 
  const tilesStr = searchParams.get('tiles') || 'Harmonica,Art';
  const stashedWords = tilesStr.split(',');
  const senderSignature = searchParams.get('from') || 'A Friend';

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <video autoPlay loop muted playsInline style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: isRevealed ? 0.4 : 0.1 }}>
        <source src={`https://storage.googleapis.com/simple-bucket-27/${vibeId}.mp4`} type="video/mp4" />
      </video>
      
      {!isRevealed ? (
        <div style={{ marginTop: '20vh' }}>
          <div onClick={() => setIsRevealed(true)} style={{ width: '150px', height: '150px', margin: '0 auto', borderRadius: '50%', background: 'radial-gradient(circle, #FFD700 0%, #B8860B 100%)', boxShadow: '0 0 60px gold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ color: 'black', fontWeight: 'bold', letterSpacing: '2px' }}>UNFOLD</p>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '10vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
            {stashedWords.map((word, i) => {
              const wordClean = word.trim();
              // LOGIC: First and One-Before-The-Last
              const first = wordClean[0].toUpperCase();
              const penult = wordClean.length > 1 ? wordClean[wordClean.length - 2].toUpperCase() : first;
              
              return (
                <div key={i} style={{ display: 'flex', gap: '5px' }}>
                  <div style={{ width: '50px', height: '80px', border: '1px solid gold', borderRadius: '8px', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/${first}.png)`, backgroundSize: 'cover' }} />
                  <div style={{ width: '50px', height: '80px', border: '1px solid gold', borderRadius: '8px', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/${penult}.png)`, backgroundSize: 'cover' }} />
                </div>
              );
            })}
          </div>
          <p style={{ color: 'gold', fontSize: '2rem' }}>{senderSignature}</p>
        </div>
      )}
    </div>
  );
}

export default function ReceiverPage() {
  return <main style={{ minHeight: '100vh', background: '#000' }}><Suspense fallback={<p>Opening...</p>}><OpenContent /></Suspense></main>;
}
