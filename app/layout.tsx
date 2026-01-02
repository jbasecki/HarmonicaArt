export const metadata: Metadata = {
  // 1. The visual identity of your new house
  title: "Harmonica | The Art of Greeting",
  description: "A sanctuary for thoughtful words and metaphors.",
  
  // 2. Ensuring the brand "Face" shows up on the new domain
  metadataBase: new URL("https://harmonica-art.vercel.app"), 
  
  openGraph: {
    title: "Harmonica Art",
    description: "Anchor your messages in the Alphabet Sanctuary.",
    url: "https://harmonica-art.vercel.app",
    siteName: "Harmonica",
    images: [
      {
        url: "/opengraph-image.jpg", // This uses the gold-edged image in your root folder
        width: 1200,
        height: 630,
        alt: "Harmonica Art - The Golden Orb",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
