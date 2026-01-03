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
      // Verified Rule: First and One-Before-The-Last (e.g., GOING -> G, N)
      const oneBeforeLast = word.length > 1 ? word[word.length - 2].toUpperCase() : first;
      return { first, oneBeforeLast };
    });
  };

  const wordsArray = processWords(tiles);
  // This URL must point to your root bucket where S.png lives
  const bucketUrl = "https://storage.googleapis.com/simple-bucket-27";

  return (
    <main style={{ minHeight: '100vh', background: '#000', color: 'gold', textAlign: 'center', padding: '40px' }}>
      <p style={{ letterSpacing: '4px', fontSize: '0.7rem', marginBottom: '40px', opacity: 0.8 }}>HARMONICA PREVIEW</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {wordsArray.map((w, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ 
              display: 'flex', 
              border: '1px solid gold', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              boxShadow: '0 0 15px gold', 
              background: '#111' 
            }}>
              {/* These images will appear once the build is green and paths are right */}
              <img 
                src={`${bucketUrl}/${w.first}.png`} 
                alt={w.first} 
                style={{ width: '100px', height: 'auto', display: 'block' }} 
              />
              <img 
                src={`${bucketUrl}/${w.oneBeforeLast}.png`} 
                alt={w.oneBeforeLast} 
                style={{ width: '100px', height: 'auto', display: 'block' }} 
              />
            </div>
            <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'gold', letterSpacing: '2px' }}>
              {w.first}{w.oneBeforeLast}
            </p>
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

// Fixing the Vercel Build Error: useSearchParams() requires Suspense
export default function SuccessPage() {
  return (
    <Suspense fallback={<div style={{ color: 'gold', marginTop: '20vh' }}>CONNECTING TO SANCTUARY...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
