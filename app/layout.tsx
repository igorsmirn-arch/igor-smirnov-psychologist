
import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Nav from '../components/Nav';
import { LangProvider } from '../components/LangProvider';

export const metadata = {
  metadataBase: new URL('https://smirnov-igor.com'),
  title: 'Igor Smirnov — Psychologist',
  description: 'Психолог, гештальт-терапевт. Консультации для взрослых и пар. Бизнес-консалтинг. Вроцлав/онлайн.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <DefaultSeo {...(SEO as any)} />
        <LangProvider>
          <Nav />
          {children}
          <footer className="footer">
            <div className="container">© 2025 Igor Smirnov · <a href="/">Home</a></div>
          </footer>
        </LangProvider>
      </body>
    </html>
  );
}
