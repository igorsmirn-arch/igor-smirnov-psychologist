'use client';
import { useI18n } from '../../components/LangProvider';

type TFunc = (key: string) => string;

/** Возвращает t(), даже если useI18n() ничего не вернуло. */
const useSafeT = (): TFunc => {
  const maybe = useI18n?.() as unknown;
  return typeof maybe === 'function' ? (maybe as TFunc) : (k: string) => k;
};

export default function BusinessClient() {
  const t = useSafeT();

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>
        {t('business.title') || 'Бизнес-консалтинг'}
      </h1>
      <p>
        {t('business.lead') ||
          'Дистрибуция ГСМ и теххимии, автоматизация, финансы, стратегия. Опыт в 3 странах с 2006 года.'}
      </p>
    </main>
  );
}
