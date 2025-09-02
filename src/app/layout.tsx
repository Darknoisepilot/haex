// Base Layout

/* What to add in public/ (drop these in when you have them)
	•	/og-image.png — 1200×630 (Twitter + OG)
	•	/favicon.ico (or /favicon-32x32.png, /favicon-16x16.png)
	•	/apple-touch-icon.png — 180×180
	•	(Optional) /safari-pinned-tab.svg

  Optional niceties
	•	Add NEXT_PUBLIC_SITE_URL=https://your-domain.com to .env.local so 
  canonical/OG URLs are correct in all environments.
	•	If you ship a PWA later, include /site.webmanifest and reference 
  it under icons.other.
*/

import type { Metadata, Viewport } from 'next';
import { fontMono, fontSans } from './fonts';
import './globals.css';

const siteName = 'Hæxsliðe';
const siteDescription = 'A hex crawl tool.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s • ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteName} OG image`,
      },
    ],
    locale: 'en',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' },
    ],
  },
  alternates: { canonical: '/' },
  category: 'utilities',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
