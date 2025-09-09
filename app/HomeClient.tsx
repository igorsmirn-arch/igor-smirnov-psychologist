'use client';

import { useI18n } from '../components/LangProvider';

export default function HomeClient() {
  const { t } = useI18n();
  return (
    <main style={{padding:'32px 20px', maxWidth:960, margin:'0 auto'}}>
      <h1 style={{fontSize:30, fontWeight:800, marginBottom:16}}>
        {t('home.title') ?? 'Игорь Смирнов — психолог'}
      </h1>
      <p style={{lineHeight:1.6}}>
        {t('home.lead') ?? 'Гештальт-терапевт, транзактный анализ. Консультации RU/PL/EN. Вроцлав и онлайн.'}
      </p>
    </main>
  );
}
