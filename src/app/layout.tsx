import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
const inter = Inter({ subsets: ['latin'] });
//necessary to get user info for 'user client' b/c SessionProvider doesnt work for 'user server'
import SessionProvider from './SessionProvider';

export const metadata: Metadata = {
  title: 'Choice-Mega',
  description: 'We love to sell',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="p-4 max-w-7xl mx-auto min-w-[300px]">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
