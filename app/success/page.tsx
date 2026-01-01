'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const tiles = searchParams.get('tiles') ? searchParams.get('tiles')!.split(',') : [];
  const message = searchParams.get('msg') || '';

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontSize: '1rem', letterSpacing: '4px', marginBottom: '40px' }}>ALPHABET SANCTUARY</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginBottom: '60px', padding: '20px', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '15px' }}>
        {tiles.map((word, i) => (
          <div key={i} style={{ background: '#111', padding: '10px', borderRadius: '5px', border: '1px solid gold' }}>
            <img src={`https://storage.googleapis.com/simple-bucket-27/${word[0].toUpperCase()}5.png`} style={{ width: '60px' }} alt="gold tile" />
          </div>
        ))}
      </div>
      <p style={{ fontSize: '1.2rem', color: '#fff' }}>"{message}"</p>
      <div style={{ marginTop: '80px', opacity: 0.5 }}><p>[ I ]</p></div>
    </main>
  );
}

export default function SuccessPage() {
  return <Suspense fallback={<div>Loading Sanctuary...</div>}><SuccessContent /></Suspense>;
}
