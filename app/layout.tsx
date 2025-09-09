import '../styles/globals.css';
import React from 'react';
import { I18nProvider } from '../lib/i18n';
import Nav from '../components/Nav';
import CookieConsent from '../components/CookieConsent';
import AnalyticsGate from '../components/AnalyticsGate';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' });

export const metadata = {
  title: 'Igor Smirnov — Psychologist',
  description: 'Psychologist & Gestalt therapist. RU · PL · EN. Online & Wrocław.',
  metadataBase: new URL('https://smirnov-igor.com'),
  openGraph: { title: 'Igor Smirnov — Psychologist', url: 'https://smirnov-igor.com', siteName: 'Igor Smirnov' }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider>
          <Nav />
          <main>{children}</main>
          <CookieConsent />
          <AnalyticsGate />
        </I18nProvider>
      </body>
    </html>
  );
}
