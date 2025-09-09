import '../styles/globals.css';
import Header from '../components/Header';
import { LangProvider } from '../components/LangProvider';
import React from 'react';
import NavBar from '../components/NavBar';
import SiteFooter from '../components/SiteFooter';

export const metadata = {
  title: 'Igor Smirnov — Psychologist',
  description: 'Гештальт-терапевт, ТА. Консультации RU/PL/EN. Wrocław.',
  metadataBase: new URL('https://smirnov-igor.com'),
  openGraph: {
    title: 'Igor Smirnov — Psychologist',
    description: 'Гештальт-терапевт, ТА. Консультации RU/PL/EN. Wrocław.',
    url: 'https://smirnov-igor.com',
    siteName: 'Igor Smirnov',
  },
  alternates: { languages: { ru: '/ru', pl: '/pl', en: '/en' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <Header />
        <LangProvider>
          <NavBar />
          <main className="container">{children}</main>
          <SiteFooter />
        </LangProvider>
      </body>
    </html>
  );
}
