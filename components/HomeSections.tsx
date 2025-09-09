'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';
import Link from 'next/link';
import Image from 'next/image';

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
      {/* Hero */}
      <section className="hero">
        <div>
          <motion.h1
            initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.45}}
          >
            {t('hero.title')}
          </motion.h1>
          <p className="lead mt-3">{t('hero.lead')}</p>
          <div className="hero-cta">
            <Link href="/contact" className="btn-primary">{t('hero.ctaBook')}</Link>
            <a href="https://t.me/marsell_2021" target="_blank" rel="noopener noreferrer" className="btn-ghost">{t('hero.ctaContact')}</a>
          </div>
        </div>

        <motion.div className="hero-photo"
          initial={{opacity:0, scale:.98}} animate={{opacity:1, scale:1}} transition={{duration:.5, delay:.1}}
        >
          <Image src="/images/hero.jpg" alt="Igor Smirnov portrait" width={1200} height={900} className="w-full h-full object-cover"/>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2 className="mb-4">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {(Array.isArray(items)?items:[]).map((it:any, idx:number)=>(
            <Card key={idx} title={it.t} desc={it.d} />
          ))}
        </div>
      </section>

      {/* Approach */}
      <section id="about" className="section">
        <h2 className="mb-4">{t('approach.title')}</h2>
        <div className="card">
          <ul className="list-disc pl-5 space-y-2">
            {[0,1,2,3].map(i=> <li key={i}>{t(`approach.bullets.${i}`)}</li>)}
          </ul>
          <Link href="/about" className="inline-block mt-4 underline">{t('approach.more')}</Link>
        </div>
      </section>

      {/* Trust / Community */}
      <section id="community" className="section">
        <h2 className="mb-4">{t('trust.title')}</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="card text-center">EAGT</div>
          <div className="card text-center">MGI</div>
          <div className="card text-center">PsyConnect</div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="section">
        <div className="card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="text-lg">{t('cta.line')}</div>
            <Link href="/contact" className="btn-primary">
              {t('cta.btn')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
