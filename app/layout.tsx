import './globals.css';
import type { Metadata } from 'next';

// This is the metadata that was causing the error in page.tsx
export const metadata: Metadata = {
  title: 'Harmonica | A Sanctuary for Stashed Cognition',
  description: 'Compose, Stash, and Produce your unique interactive gift.',
  openGraph: {
    title: 'Harmonica',
    description: 'A gift of stashed cognition is waiting for you.',
    images: [
      {
        url: '/opengraph-image.jpg', // Points to the file in your repo
        width: 1200,
        height: 630,
        alt: 'Harmonica Gift Preview',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#000' }}>
        {children}
      </body>
    </html>
  );
}
