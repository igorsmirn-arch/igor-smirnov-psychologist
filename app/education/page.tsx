'use client';
import React from 'react';
import { useI18n } from '../../lib/i18n';

export default function Page(){
  const { t } = useI18n();
  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold mb-3">{t('nav.education')}</h1>
      <p className="opacity-80 mb-4">{t('approach.title')}</p>
      <ul className="list-disc pl-6 space-y-2">
        {[0,1,2,3].map(i => <li key={i}>{t(`approach.bullets.${i}`)}</li>)}
      </ul>
    </main>
  );
}
