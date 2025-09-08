'use client';
import Image from 'next/image';
import { useI18n } from '../../components/LangProvider';

const CERTS = [
  '/assets/images/cert_2024_wisdom_of_trauma.jpg'
];

export default function EducationClient(){
  const { t } = useI18n();
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">{t('education.title')}</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {CERTS.map((src) => (
          <div key={src} className="relative aspect-[3/4] rounded-xl overflow-hidden">
            <Image src={src} alt="certificate" fill className="object-cover"/>
          </div>
        ))}
      </div>
    </main>
  );
}
