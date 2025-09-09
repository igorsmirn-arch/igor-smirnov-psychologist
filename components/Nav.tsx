'use client';
import React from 'react';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';
import LangSwitch from './LangSwitch';
import ThemeToggle from './ThemeToggle';

export default function Nav(){
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/40 dark:border-white/10 bg-white/60 dark:bg-[#0b0b12]/40">
      <nav className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">{t('brand')}</Link>
        <div className="hidden md:flex gap-5 text-sm">
          <Link href="/about">{t('nav.about')}</Link>
          <Link href="/business">{t('nav.business')}</Link>
          <Link href="/education">{t('nav.education')}</Link>
          <Link href="/blog">{t('nav.blog')}</Link>
          <Link href="/contact">{t('nav.contact')}</Link>
        </div>
        <div className="flex gap-2">
          <LangSwitch />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
