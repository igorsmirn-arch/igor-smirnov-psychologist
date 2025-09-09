'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {useI18n} from '../lib/i18n';
import Link from 'next/link';

function Card({title,desc}:{title:string;desc:string}){
  return (
    <div className="card-glass p-5">
      <div className="font-medium mb-1">{title}</div>
      <div className="text-sm opacity-80">{desc}</div>
    </div>
  );
}

export default function HomeSections(){
  const { t } = useI18n();
  const items = t('services.items');

  return (
    <div className="container">
      {/* HERO */}
      <section className="pt-10 md:pt-16 pb-8">
        <motion.div
          initial={{opacity:0, y:8}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5}}
          className="card-glass p-6 md:p-10 bg-gradient-to-br from-indigo-50/70 to-fuchsia-50/60 dark:from-indigo-900/20 dark:to-fuchsia-900/20"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{t('hero.title')}</h1>
          <p className="text-base md:text-lg opacity-80 mb-6">{t('hero.lead')}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black">
              {t('hero.ctaBook')}
            </Link>
            <a href="https://t.me/marsell_2021" target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 rounded-md border">
              {t('hero.ctaContact')}
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-8">
        <h2 className="text-xl font-semibold mb-4">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {(Array.isArray(items)?items:[]).map((it:any, idx:number)=>(
            <Card key={idx} title={it.t} desc={it.d} />
          ))}
        </div>
      </section>

      {/* EDUCATION / APPROACH */}
      <section id="about" className="py-8">
        <div className="card-glass p-6">
          <h2 className="text-xl font-semibold mb-4">{t('approach.title')}</h2>
          <ul className="list-disc pl-5 space-y-2">
            {[0,1,2,3].map(i=> <li key={i}>{t(`approach.bullets.${i}`)}</li>)}
          </ul>
          <Link href="/about" className="inline-block mt-4 underline">{t('approach.more')}</Link>
        </div>
      </section>

      {/* TRUST */}
      <section id="community" className="py-8">
        <div className="card-glass p-6">
          <h2 className="text-xl font-semibold mb-4">{t('trust.title')}</h2>
          <div className="flex gap-3 opacity-80">
            <span className="px-3 py-2 rounded bg-gray-100 dark:bg-white/10">EAGT</span>
            <span className="px-3 py-2 rounded bg-gray-100 dark:bg-white/10">MGI</span>
            <span className="px-3 py-2 rounded bg-gray-100 dark:bg-white/10">PsyConnect</span>
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="py-10">
        <div className="card-glass p-6 bg-gradient-to-r from-indigo-100/60 to-fuchsia-100/60 dark:from-indigo-900/30 dark:to-fuchsia-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-lg">{t('cta.line')}</div>
            <Link href="/contact" className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black">
              {t('cta.btn')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
