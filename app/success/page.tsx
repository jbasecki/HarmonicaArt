'use client';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const vibeId = searchParams.get('client_reference_id') || '14'; 
  
  // This simulates the words "SUCCESS SANCTUARY" using your new logic
  const stashedWords = ["SUCCESS", "SANCTUARY"]; 

  return (
    <main style={{ minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <video autoPlay loop muted playsInline style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.5 }}>
        <source src={`https://storage.googleapis.com/simple-bucket-27/${vibeId}.mp4`} type="video/mp4" />
      </video>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <p style={{ color: 'gold', letterSpacing: '4px', marginBottom: '25px', fontWeight: 'bold' }}>COMPOSED OF MEANINGFUL WORDS</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {stashedWords.map((word, i) => {
            const first = word[0].toLowerCase();
            const penult = word.length > 1 ? word[word.length - 2].toLowerCase() : first;
            return (
              <div key={i} style={{ display: 'flex', gap: '5px' }}>
                <div style={{ width: '50px', height: '80px', border: '1px solid gold', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/vibes/${first}.png)`, backgroundSize: 'cover' }} />
                <div style={{ width: '50px', height: '80px', border: '1px solid gold', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/vibes/${penult}.png)`, backgroundSize: 'cover' }} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return <Suspense fallback={<p>Loading...</p>}><SuccessContent /></Suspense>;
}
