'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {useI18n} from '../lib/i18n';
import Link from 'next/link';

function Card({title,desc}:{title:string;desc:string}){
  return (
    <div className="card">
      <div className="font-medium mb-1">{title}</div>
      <div className="text-sm opacity-80">{desc}</div>
    </div>
  );
}

export default function HomeSections(){
  const { t } = useI18n();
  const items = t('services.items');

  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{opacity:0, y:8}}
            animate={{opacity:1, y:0}}
            transition={{duration:.45}}
            className="rounded-3xl p-8 md:p-12 border border-white/40 dark:border-white/10
                       bg-gradient-to-br from-white/70 to-white/30 dark:from-white/[0.08] dark:to-white/[0.02]
                       backdrop-blur shadow-sm">
            <h1 className="mb-3">{t('hero.title')}</h1>
            <p className="text-base md:text-lg opacity-80 mb-6">{t('hero.lead')}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">{t('hero.ctaBook')}</Link>
              <a href="https://t.me/marsell_2021" target="_blank" rel="noopener noreferrer" className="btn-outline">
                {t('hero.ctaContact')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <h2 className="mb-4">{t('services.title')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {(Array.isArray(items)?items:[]).map((it:any, idx:number)=>(
              <Card key={idx} title={it.t} desc={it.d} />
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="mb-4">{t('approach.title')}</h2>
          <div className="card">
            <ul className="list-disc pl-5 space-y-2">
              {[0,1,2,3].map(i=> <li key={i}>{t(`approach.bullets.${i}`)}</li>)}
            </ul>
            <Link href="/about" className="inline-block mt-4 underline">{t('approach.more')}</Link>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section" id="community">
        <div className="container">
          <h2 className="mb-4">{t('trust.title')}</h2>
          <div className="flex flex-wrap gap-3">
            <div className="card">EAGT</div>
            <div className="card">MGI</div>
            <div className="card">PsyConnect</div>
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl p-6 border bg-gradient-to-r from-indigo-100 to-fuchsia-100
                          dark:from-indigo-900/40 dark:to-fuchsia-900/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-lg">{t('cta.line')}</div>
              <Link href="/contact" className="btn-primary">{t('cta.btn')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
