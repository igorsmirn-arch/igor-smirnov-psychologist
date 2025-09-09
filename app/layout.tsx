cat > app/layout.tsx << 'EOF'
import './globals.css';
import { LangProvider } from '../components/LangProvider';

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
  alternates: {
    languages: { ru: '/ru', pl: '/pl', en: '/en' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
EOF
