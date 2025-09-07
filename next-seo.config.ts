
import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Igor Smirnov — Psychologist',
  defaultTitle: 'Igor Smirnov — Psychologist & Business Consultant',
  description: 'Психотерапия (гештальт), консультации для взрослых и пар. Бизнес-консалтинг. Вроцлав/онлайн.',
  openGraph: {
    type: 'website',
    siteName: 'smirnov-igor.com',
    url: 'https://smirnov-igor.com',
    images: [{ url: '/assets/images/portrait_studio.jpg', width: 1200, height: 630 }]
  },
  twitter: { cardType: 'summary_large_image' }
};
export default config;
