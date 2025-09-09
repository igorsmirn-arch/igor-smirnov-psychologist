import '../styles/globals.css';
import React from 'react';
import { I18nProvider } from '../lib/i18n';
import Nav from '../components/Nav';
import CookieConsent from '../components/CookieConsent';
import AnalyticsGate from '../components/AnalyticsGate';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Igor Smirnov — Psychologist',
  description: 'Psychologist & Gestalt therapist. RU · PL · EN. Online & Wrocław.',
  metadataBase: new URL('https://smirnov-igor.com'),
  openGraph: { title: 'Igor Smirnov — Psychologist', url: 'https://smirnov-igor.com', siteName: 'Igor Smirnov' }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        <I18nProvider>
          <Nav />
          {children}
          <Footer />
          <CookieConsent />
          <AnalyticsGate />
        </I18nProvider>
      </body>
    </html>
  );
}
