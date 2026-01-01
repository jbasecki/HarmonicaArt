import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harmonica",
  description: "A Sanctuary for Stashed Cognition",
  openGraph: {
    title: "Harmonica",
    images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
