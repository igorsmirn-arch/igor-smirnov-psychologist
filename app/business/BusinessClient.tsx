'use client';
import Image from 'next/image';
import { useI18n } from '../../components/LangProvider';

export default function BusinessClient() {
  const { t } = useI18n();
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">{t('business.title')}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4 leading-relaxed">
          <p>{t('business.lead')}</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('business.point1')}</li>
            <li>{t('business.point2')}</li>
            <li>{t('business.point3')}</li>
          </ul>
        </div>
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
          <Image src="/assets/photos/castrol_talk_1.jpg" alt="Castrol conference" fill className="object-cover" priority />
        </div>
      </div>
    </main>
  );
}
