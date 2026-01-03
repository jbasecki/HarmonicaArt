'use client';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  // Catches the vibe (e.g., 14 for Snow Day)
  const vibeId = searchParams.get('client_reference_id') || '14'; 
  
  // These words will eventually be dynamic from your composition
  const stashedWords = ["SUCCESS", "SANCTUARY"]; 

  return (
    <main style={{ minHeight: '100vh', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      {/* Background Video Restoration */}
      <video autoPlay loop muted playsInline style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, opacity: 0.5 }}>
        <source src={`https://storage.googleapis.com/simple-bucket-27/${vibeId}.mp4`} type="video/mp4" />
      </video>

      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <p style={{ color: 'gold', fontSize: '0.8rem', letterSpacing: '4px', marginBottom: '30px', fontWeight: 'bold' }}>THE PARASITE IS GONE</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          {stashedWords.map((word, i) => {
            // NEW LOGIC: First and One-Before-The-Last (Uppercase for Bucket)
            const first = word[0].toUpperCase();
            const penult = word.length > 1 ? word[word.length - 2].toUpperCase() : first;
            
            return (
              <div key={i} style={{ display: 'flex', gap: '8px' }}>
                {/* Tile 1: First Letter */}
                <div style={{ width: '45px', height: '75px', border: '1px solid gold', borderRadius: '8px', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/${first}.png)`, backgroundSize: 'cover' }} />
                {/* Tile 2: Penultimate Letter */}
                <div style={{ width: '45px', height: '75px', border: '1px solid gold', borderRadius: '8px', backgroundImage: `url(https://storage.googleapis.com/simple-bucket-27/${penult}.png)`, backgroundSize: 'cover' }} />
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
  return <Suspense fallback={<p>Restoring Sanctuary...</p>}><SuccessContent /></Suspense>;
}
