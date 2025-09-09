'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from '../lib/i18n';

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-5 border bg-white/60 dark:bg-white/5 backdrop-blur">
      <div className="font-medium mb-1">{title}</div>
      <div className="text-sm opacity-80">{desc}</div>
    </div>
  );
}

export default function HomeSections() {
  const { t } = useI18n();
  const items = t('services.items');

  return (
    <div className="relative">
      {/* мягкий фон-градиент поверх страницы */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-[420px] bg-[radial-gradient(120%_60%_at_10%_0%,rgba(99,102,241,.25),transparent_50%),radial-gradient(120%_60%_at_100%_20%,rgba(217,70,239,.2),transparent_50%)]"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <section
          className="py-16 grid md:grid-cols-2 gap-10 items-center"
          id="top"
          aria-labelledby="hero-title"
        >
          <div>
            <motion.h1
              id="hero-title"
              className="text-3xl md:text-4xl font-bold mb-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('hero.title')}
            </motion.h1>

            <p className="text-base md:text-lg opacity-80 mb-6">
              {t('hero.lead')}
            </p>

            <div className="flex gap-3">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black"
              >
                {t('hero.ctaBook')}
              </Link>
              <a
                href="https://t.me/marsell_2021"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border"
              >
                {t('hero.ctaContact')}
              </a>
            </div>
          </div>

          {/* Портрет */}
          <div className="flex justify-center">
            <div className="rounded-[24px] overflow-hidden border bg-white/40 dark:bg-white/5 backdrop-blur shadow-lg">
              <Image
                src="/images/igor.jpg"
                alt="Igor Smirnov portrait"
                width={480}
                height={600}
                className="object-cover w-[480px] h-[600px] max-w-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-12">
          <h2 className="text-xl font-semibold mb-4">{t('services.title')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {(Array.isArray(items) ? items : []).map((it: any, idx: number) => (
              <Card key={idx} title={it.t} desc={it.d} />
            ))}
          </div>
        </section>

        {/* Education / Approach */}
        <section id="about" className="py-12">
          <h2 className="text-xl font-semibold mb-4">
            {t('approach.title')}
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {[0, 1, 2, 3].map((i) => (
              <li key={i}>{t(`approach.bullets.${i}`)}</li>
            ))}
          </ul>
          <Link href="/about" className="inline-block mt-4 underline">
            {t('approach.more')}
          </Link>
        </section>

        {/* Trust / Community */}
        <section id="community" className="py-12">
          <h2 className="text-xl font-semibold mb-4">{t('trust.title')}</h2>
          <div className="flex gap-6 opacity-80">
            <span className="px-3 py-2 rounded bg-gray-100 dark:bg-white/10">
              EAGT
            </span>
            <span className="px-3 py-2 rounded bg-gray-100 dark:bg-white/10">
              MGI
            </span>
            <span className="px-3 py-2 rounded bg-gray-100 dark:bg-white/10">
              PsyConnect
            </span>
          </div>
        </section>

        {/* Big CTA */}
        <section className="py-14">
          <div className="rounded-2xl p-6 border bg-gradient-to-r from-indigo-100 to-fuchsia-100 dark:from-indigo-900/40 dark:to-fuchsia-900/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-lg">{t('cta.line')}</div>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black"
              >
                {t('cta.btn')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
