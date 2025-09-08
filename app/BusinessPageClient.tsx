// app/business/BusinessPageClient.tsx  (CLIENT COMPONENT)
'use client';

import Image from 'next/image';
import { useI18n } from '../../components/LangProvider';

export default function BusinessPageClient() {
  const t = useI18n();

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">
        {t('business.title', 'Бизнес-консалтинг')}
      </h1>

      <p className="mb-6 max-w-3xl leading-7">
        {t(
          'business.lead',
          'Я — предприниматель с опытом создания и управления бизнесами в 3 странах, с 2006 года. В Беларуси — дистрибьюторский бизнес в сфере ГСМ и технической химии с мировыми лидерами: Exxon Mobil, BP/Castrol, SK Lubricants, Henkel, Donaldson. Построение и автоматизация дистрибьюции, финансы, стратегический менеджмент.'
        )}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Image
          src="/images/business/castrol-talk-1.jpg" // фото с конференции Castrol
          alt="Выступление на бизнес-конференции Castrol"
          width={1200}
          height={800}
          className="rounded-xl object-cover w-full h-auto"
          priority
        />
        <Image
          src="/images/business/castrol-talk-2.jpg"
          alt="Доклад на сцене, опыт дистрибуции"
          width={1200}
          height={800}
          className="rounded-xl object-cover w-full h-auto"
        />
      </div>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">
          {t('business.servicesTitle', 'Чем помогу')}
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>{t('business.s1', 'Аудит дистрибуции и построение каналов')}</li>
          <li>{t('business.s2', 'Автоматизация и управленческие отчёты')}</li>
          <li>{t('business.s3', 'Финансовая модель и P&L')}</li>
          <li>{t('business.s4', 'Стратегия роста и операционные KPI')}</li>
        </ul>
      </section>
    </main>
  );
}
