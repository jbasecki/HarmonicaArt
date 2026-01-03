'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const tiles = searchParams.get('tiles') || '';
  const vibe = searchParams.get('client_reference_id') || '14';
  const from = searchParams.get('from') || 'Me';

  // The New Alphabet Rule: First and One-Before-Last
  const processWords = (text: string) => {
    return text.split(/[ ,]+/).filter(Boolean).map(word => {
      const first = word[0].toUpperCase();
      // Logic for one-before-the-last
      const oneBeforeLast = word.length > 1 ? word[word.length - 2].toUpperCase() : first;
      return { first, oneBeforeLast, original: word };
    });
  };

  const wordsArray = processWords(tiles);
  const bucketUrl = "https://storage.googleapis.com/simple-bucket-27";

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', textAlign: 'center', padding: '40px' }}>
      <p style={{ letterSpacing: '4px', fontSize: '0.7rem', marginBottom: '40px' }}>HARMONICA PREVIEW</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {wordsArray.map((w, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', border: '1px solid gold', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 15px gold' }}>
              {/* Asset Path Fix: Looking in the root for alphabet PNGs */}
              <img src={`${bucketUrl}/${w.first}.png`} alt={w.first} style={{ width: '80px' }} />
              <img src={`${bucketUrl}/${w.oneBeforeLast}.png`} alt={w.oneBeforeLast} style={{ width: '80px' }} />
            </div>
            <p style={{ fontSize: '0.6rem', marginTop: '10px' }}>{w.first}{w.oneBeforeLast}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '60px', opacity: 0.6 }}>
        <p>signed,</p>
        <p style={{ fontSize: '1.5rem' }}>{from}</p>
      </div>
    </main>
  );
}

// The Suspense wrapper required to fix the error in image_9428e8.png
export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ color: 'gold' }}>Loading Sanctuary...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
