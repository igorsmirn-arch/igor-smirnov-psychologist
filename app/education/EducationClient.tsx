'use client';
import { useI18n } from '../../components/LangProvider';

type TFunc = (key: string) => string;

const useSafeT = (): TFunc => {
  const maybe = useI18n?.() as unknown;
  return typeof maybe === 'function' ? (maybe as TFunc) : (k: string) => k;
};

export default function EducationClient() {
  const t = useSafeT();

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>
        {t('education.title') || 'Образование'}
      </h1>
      <ul style={{ lineHeight: 1.7 }}>
        <li>{t('education.item1') || 'Гештальт-терапия (сертификация)'}</li>
        <li>{t('education.item2') || 'Транзакционный анализ'}</li>
        <li>{t('education.item3') || 'Курсы повышения квалификации'}</li>
      </ul>
    </main>
  );
}
