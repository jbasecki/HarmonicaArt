'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const tiles = searchParams.get('tiles') || '';
  const from = searchParams.get('from') || 'Me';

  const processWords = (text: string) => {
    return text.split(/[ ,]+/).filter(Boolean).map(word => {
      const first = word[0].toUpperCase();
      // Logic for one-before-the-last (e.g., GOLD -> G, L)
      const oneBeforeLast = word.length > 1 ? word[word.length - 2].toUpperCase() : first;
      return { first, oneBeforeLast };
    });
  };

  const wordsArray = processWords(tiles);
  // Verified Bucket URL from your previous logs
  const bucketUrl = "https://storage.googleapis.com/simple-bucket-27";

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', textAlign: 'center', padding: '40px' }}>
      <p style={{ letterSpacing: '4px', fontSize: '0.7rem', marginBottom: '40px', opacity: 0.8 }}>HARMONICA PREVIEW</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {wordsArray.map((w, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', border: '1px solid gold', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 15px gold', background: '#111' }}>
              {/* Asset Path Fix: Points to root of bucket */}
              <img src={`${bucketUrl}/${w.first}.png`} alt={w.first} style={{ width: '100px', height: 'auto' }} />
              <img src={`${bucketUrl}/${w.oneBeforeLast}.png`} alt={w.oneBeforeLast} style={{ width: '100px', height: 'auto' }} />
            </div>
            <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'gold' }}>{w.first}{w.oneBeforeLast}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px', opacity: 0.8 }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '2px' }}>signed,</p>
        <p style={{ fontSize: '1.8rem', color: 'gold', fontFamily: 'serif' }}>{from}</p>
      </div>
    </main>
  );
}

// Fixed: Wrapping in Suspense to satisfy Vercel Build Logs
export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ color: 'gold', marginTop: '20vh' }}>CONNECTING TO SANCTUARY...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
