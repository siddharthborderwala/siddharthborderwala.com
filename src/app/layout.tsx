import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { DM_Mono } from 'next/font/google';
import LocalFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from 'react-hot-toast';

import Footer from '../components/footer';
import Nav from '../components/navbar';
import './styles/globals.css';
import './styles/compose.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  preload: true,
});

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  display: 'swap',
  preload: false,
});

const gelica = LocalFont({
  src: [
    {
      path: '../fonts/gelica/gelica-extralight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/gelica/gelica-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/gelica/gelica-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/gelica/gelica-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/gelica/gelica-semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/gelica/gelica-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/gelica/gelica-black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Siddharth Borderwala',
  description: `Full-stack web developer who loves open source.`,
  icons: {
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        // @ts-ignore
        '--font-sans': dmSans.style.fontFamily,
        '--font-serif': gelica.style.fontFamily,
        '--font-mono': dmMono.style.fontFamily,
      }}
    >
      <body>
        <Nav />
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
