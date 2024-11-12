import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { Bangers } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: 'Yowie',
  description: 'Born in the icy mountains, yowie is a piece of art with an infinite universe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(bangers.className, 'sans-serif leading-none tracking-wider')}>
        {children}
      </body>
    </html>
  );
}
