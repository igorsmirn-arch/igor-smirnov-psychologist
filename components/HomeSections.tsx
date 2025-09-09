'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {useI18n} from '../lib/i18n';
import Link from 'next/link';
import Image from 'next/image';

function Card({title,desc}:{title:string;desc:string}){
  return (
    <div className="rounded-2xl p-5 border border-white/20 bg-white/40 dark:bg-white/10 backdrop-blur
                    shadow-sm hover:shadow transition">
      <div className="font-medium mb-1">{title}</div>
      <div className="text-sm opacity-80">{desc}</div>
    </div>
  );
}

export default function HomeSections(){
  const { t } = useI18n();
  const items = t('services.items');
  return (
    <div className="relative">
      {/* мягкий фоновый градиент */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br
                      from-indigo-100 via-fuchsia-100 to-rose-100
                      dark:from-indigo-900/40 dark:via-fuchsia-900/30 dark:to-rose-900/30" />
      <div className="container">

        {/* HERO */}
        <section className="py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
              initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:.5}}>
              {t('hero.title')}
            </motion.h1>
            <p className="text-base md:text-lg opacity-80 mb-6">{t('hero.lead')}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact"
                className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                {t('hero.ctaBook')}
              </Link>
              <a href="https://t.me/marsell_2021" target="_blank" rel="noopener noreferrer"
                 className="px-4 py-2 rounded-xl border border-black/10 dark:border-white/20 bg-white/50
                            dark:bg-white/10 backdrop-blur">
                {t('hero.ctaContact')}
              </a>
            </div>
          </div>

          <motion.div initial={{opacity:0, scale:.98}} animate={{opacity:1, scale:1}} transition={{duration:.5}}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/30
                            bg-white/50 dark:bg-white/10 backdrop-blur">
              <Image
                alt="Igor Smirnov portrait"
                src="/hero-fallback.svg"  /* замените на /img/igor.jpg, когда добавите портрет */
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-10">
          <h2 className="text-xl font-semibold mb-4">{t('services.title')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {(Array.isArray(items)?items:[]).map((it:any, idx:number)=>(
              <Card key={idx} title={it.t} desc={it.d} />
            ))}
          </div>
        </section>

        {/* APPROACH */}
        <section id="about" className="py-10">
          <h2 className="text-xl font-semibold mb-4">{t('approach.title')}</h2>
          <ul className="list-disc pl-5 space-y-2">
            {[0,1,2,3].map(i=> <li key={i}>{t(`approach.bullets.${i}`)}</li>)}
          </ul>
          <Link href="/about" className="inline-block mt-4 underline">{t('approach.more')}</Link>
        </section>

        {/* COMMUNITY */}
        <section id="community" className="py-10">
          <h2 className="text-xl font-semibold mb-4">{t('trust.title')}</h2>
          <div className="flex gap-3 opacity-80">
            <span className="px-3 py-2 rounded bg-white/60 dark:bg-white/10 backdrop-blur">EAGT</span>
            <span className="px-3 py-2 rounded bg-white/60 dark:bg-white/10 backdrop-blur">MGI</span>
            <span className="px-3 py-2 rounded bg-white/60 dark:bg-white/10 backdrop-blur">PsyConnect</span>
          </div>
        </section>

        {/* BIG CTA */}
        <section className="py-14">
          <div className="rounded-2xl p-6 border border-white/30 bg-gradient-to-r
                          from-indigo-100 to-fuchsia-100 dark:from-indigo-900/40 dark:to-fuchsia-900/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-lg">{t('cta.line')}</div>
              <Link href="/contact"
                    className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black">
                {t('cta.btn')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
