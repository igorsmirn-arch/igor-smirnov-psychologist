'use client';
import { useI18n } from '../../components/LangProvider';

export default function BusinessClient() {
  const t = useI18n?.() ?? ((k: string) => k);
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>
        {t('business.title') ?? 'Бизнес-консалтинг'}
      </h1>
      <p>
        {t('business.lead') ??
          'Дистрибуция ГСМ и теххимии, автоматизация, финансы, стратегия. Опыт в 3 странах с 2006 года.'}
      </p>
    </main>
  );
}
