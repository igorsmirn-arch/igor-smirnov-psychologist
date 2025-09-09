'use client';
import React from 'react';
import { useI18n } from '../../lib/i18n';
import Link from 'next/link';

export default function Page(){
  const { t } = useI18n();
  return (
    <main className="container py-8">
      <h1 className="text-2xl font-bold mb-3">{t('nav.business')}</h1>
      <p className="opacity-80 mb-4">
        {t('hero.lead')}
      </p>

      <section className="space-y-3">
        <p>
          С 2006 года я в бизнесе: дистрибуция ГСМ и теххимии (Exxon Mobil, BP/Castrol, SK Lubricants, Henkel, Donaldson),
          автоматизация, финансы, стратегический менеджмент. В Грузии — сеть бьюти-коворкингов Beauty HAB.
          В Польше — ресторан Le Gosse и сообщество психологов PsyConnect.
        </p>
        <ul className="list-disc pl-6">
          <li>Диагностика и стратегия</li>
          <li>Процессы и автоматизация</li>
          <li>Финмодель и юнит-экономика</li>
          <li>Коммуникация и командная динамика</li>
        </ul>
      </section>

      <div className="mt-6">
        <Link href="/contact" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black">
          {t('hero.ctaBook')}
        </Link>
      </div>
    </main>
  );
}
