'use client';

import { useI18n } from '../../components/LangProvider';

export default function EducationClient() {
  const { t } = useI18n();
  return (
    <main style={{padding:'32px 20px', maxWidth:960, margin:'0 auto'}}>
      <h1 style={{fontSize:28, fontWeight:700, marginBottom:16}}>
        {t('education.title') ?? 'Образование и сертификаты'}
      </h1>
      <p style={{lineHeight:1.6}}>
        {t('education.lead') ?? 'Подборка основных обучающих программ, тренингов и сертификатов.'}
      </p>
    </main>
  );
}
