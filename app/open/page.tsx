'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function OpenContent() {
  const searchParams = useSearchParams();
  const vibeId = searchParams.get('vibe') || '14'; 
  const message = searchParams.get('msg') || '';
  const tiles = searchParams.get('tiles') ? searchParams.get('tiles')!.split(',') : [];
  const from = searchParams.get('from') || '';
  const videoUrl = `https://storage.googleapis.com/simple-bucket-27/${vibeId}.mp4`;

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      <video key={vibeId} autoPlay loop muted playsInline style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}>
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'white', textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', fontWeight: '300' }}>{message}</h1>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {tiles.map((word, i) => (
            <img key={i} src={`https://storage.googleapis.com/simple-bucket-27/${word[0].toUpperCase()}5.png`} style={{ width: '50px' }} alt="tile" />
          ))}
        </div>
        <p style={{ color: 'gold', fontSize: '1.2rem', letterSpacing: '4px' }}>— {from}</p>
      </div>
    </main>
  );
}

export default function OpenPage() {
  return <Suspense fallback={<div style={{background:'#000', height:'100vh'}}></div>}><OpenContent /></Suspense>;
}
