import type { Metadata } from 'next';
import { DM_Sans as Font } from 'next/font/google';
// import { GeistSans as font } from 'geist/font/sans';
import Footer from '../components/footer';
import Nav from '../components/nav';
import './styles/globals.css';
import './styles/compose.css';
import { Toaster } from 'react-hot-toast';

const font = Font({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Siddharth Borderwala',
  description: `Hi, I'm Siddharth Borderwala. I'm a full-stack web developer who loves open source.`,
  icons: {
    shortcut: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
