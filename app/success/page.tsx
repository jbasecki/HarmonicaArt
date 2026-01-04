'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const tiles = searchParams.get('tiles') || '';
  const from = searchParams.get('from') || 'Me';

  const wordsArray = tiles.split(/[ ,]+/).filter(Boolean).map(word => {
    const first = word[0].toUpperCase();
    const oneBeforeLast = word.length > 1 ? word[word.length - 2].toUpperCase() : first;
    return { first, oneBeforeLast };
  });

  const bucketUrl = "https://storage.googleapis.com/simple-bucket-27";

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', textAlign: 'center', padding: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '10vh' }}>
        {wordsArray.map((w, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', border: '1px solid gold', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 15px gold' }}>
              <img src={`${bucketUrl}/${w.first}.png`} alt={w.first} style={{ width: '100px' }} />
              <img src={`${bucketUrl}/${w.oneBeforeLast}.png`} alt={w.oneBeforeLast} style={{ width: '100px' }} />
            </div>
            <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>{w.first}{w.oneBeforeLast}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '60px', opacity: 0.8 }}>
        <p style={{ fontSize: '1.8rem' }}>signed, {from}</p>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ color: 'gold' }}>RESTORING...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
