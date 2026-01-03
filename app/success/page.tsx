'use client';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const vibeId = searchParams.get('client_reference_id') || '14'; 
  const stashedWords = ["SUCCESS", "SANCTUARY"]; 

  return (
    <main style={{ minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <video autoPlay loop muted playsInline style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.5 }}>
        <source src={`https://storage.googleapis.com/simple-bucket-27/${vibeId}.mp4`} type="video/mp4" />
      </video>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <p style={{ color: 'gold', letterSpacing: '4px', marginBottom: '30px', fontWeight: 'bold' }}>THE PARASITE IS GONE</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {stashedWords.map((word, i) => {
            const letter = word[0]; // The first letter
            return (
              <div key={i} style={{ display: 'flex', gap: '8px' }}>
                <div style={{ 
                  width: '45px', height: '75px', border: '1px solid gold', borderRadius: '8px', 
                  // This fallback tries to find the file even if case-sensitivity is an issue
                  backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/${letter.toLowerCase()}.png), url(https://storage.googleapis.com/simple-bucket-27/${letter.toUpperCase()}.png)`, 
                  backgroundSize: 'cover' 
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return <Suspense fallback={<p>Finding Art...</p>}><SuccessContent /></Suspense>;
}
