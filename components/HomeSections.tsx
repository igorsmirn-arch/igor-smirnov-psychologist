'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';
import Link from 'next/link';
import Image from 'next/image';

function GlassCard({children}:{children:React.ReactNode}){
  return (
    <div className="rounded-2xl p-5 border bg-white/60 backdrop-blur dark:bg-white/10">
      {children}
    </div>
  );
}

export default function HomeSections(){
  const { t } = useI18n();
  const items = Array.isArray((t as any)('services.items')) ? (t as any)('services.items') : [];

  return (
    <div className="relative">
      {/* фоновые мягкие круги */}
      <div aria-hidden className="pointer-events-none absolute -z-10 inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-indigo-300/30 blur-3xl dark:bg-indigo-500/20" />
        <div className="absolute top-40 -right-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-300/30 blur-3xl dark:bg-fuchsia-500/20" />
      </div>

      <main className="mx-auto max-w-6xl px-4">
        {/* HERO */}
        <section className="py-14 grid md:grid-cols-2 gap-8 items-center" id="top" aria-labelledby="hero-title">
          <div>
            <motion.h1 id="hero-title" className="text-3xl md:text-5xl font-extrabold leading-tight mb-4"
              initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
              {t('hero.title')}
            </motion.h1>
            <p className="text-base md:text-lg opacity-80 mb-6">{t('hero.lead')}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="px-5 py-2.5 rounded-full bg-black text-white shadow dark:bg-white dark:text-black">
                {t('hero.ctaBook')}
              </Link>
              <a href="https://t.me/marsell_2021" target="_blank" rel="noopener noreferrer"
                 className="px-5 py-2.5 rounded-full border bg-white/60 backdrop-blur hover:bg-white/80 transition dark:bg-white/10 dark:hover:bg-white/20">
                {t('hero.ctaContact')}
              </a>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="relative w-[300px] h-[380px] md:w-[360px] md:h-[460px] rounded-[28px] overflow-hidden border shadow-xl">
              <Image
                src="/images/igor.jpg"
                alt="Igor Smirnov portrait"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 300px, 360px"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-10">
          <h2 className="text-2xl font-bold mb-4">{t('services.title')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((it:any, idx:number)=>(
              <GlassCard key={idx}>
                <div className="font-medium">{it.t}</div>
                <div className="text-sm opacity-80 mt-1">{it.d}</div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section id="about" className="py-10">
          <h2 className="text-2xl font-bold mb-4">{t('approach.title')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <GlassCard>
              <ul className="list-disc pl-5 space-y-2">
                {[0,1,2,3].map(i=> <li key={i}>{t(`approach.bullets.${i}`)}</li>)}
              </ul>
              <Link href="/about" className="inline-block mt-4 underline">{t('approach.more')}</Link>
            </GlassCard>
            <GlassCard>
              <div className="text-sm opacity-80">
                {t('hero.lead')}
              </div>
            </GlassCard>
          </div>
        </section>

        {/* REVIEWS (тестовые карточки, i18n ниже добавим) */}
        <section id="reviews" className="py-10">
          <h2 className="text-2xl font-bold mb-4">{t('reviews.title')}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Array.isArray((t as any)('reviews.items')) ? (t as any)('reviews.items').map((r:any, i:number)=>(
              <GlassCard key={i}>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs opacity-70 mb-2">{r.role}</div>
                <div className="text-sm">{r.text}</div>
              </GlassCard>
            )): null}
          </div>
        </section>

        {/* BIG CTA */}
        <section className="py-14">
          <div className="rounded-2xl p-6 border bg-gradient-to-r from-indigo-100 to-fuchsia-100 dark:from-indigo-900/40 dark:to-fuchsia-900/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-lg">{t('cta.line')}</div>
              <Link href="/contact" className="px-5 py-2.5 rounded-full bg-black text-white shadow dark:bg-white dark:text-black">
                {t('cta.btn')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
