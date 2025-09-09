'use client';

import { useI18n } from '../../components/LangProvider';

export default function BusinessClient() {
  const { t } = useI18n();
  return (
    <main style={{padding:'32px 20px', maxWidth:960, margin:'0 auto'}}>
      <h1 style={{fontSize:28, fontWeight:700, marginBottom:16}}>
        {t('business.title') ?? 'Бизнес-консалтинг'}
      </h1>
      <p style={{lineHeight:1.6}}>
        {t('business.lead') ?? 'Дистрибуция ГСМ и теххимии, автоматизация, финансы, стратегия, опыт в 3 странах с 2006 года.'}
      </p>
    </main>
  );
}
