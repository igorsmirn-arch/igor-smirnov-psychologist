'use client';
import React from 'react';
import { useI18n } from './LangProvider';
import LanguageSwitcher from './LanguageSwitcher';
export default function Header(){
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="container mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-semibold">Igor Smirnov · Psychologist</a>
        <div className="flex items-center gap-4">
          <a href="#about" className="text-sm opacity-80 hover:opacity-100">{t('nav.about')}</a>
          <a href="#services" className="text-sm opacity-80 hover:opacity-100">{t('nav.services')}</a>
          <a href="/business" className="text-sm opacity-80 hover:opacity-100">{t('nav.business')}</a>
          <a href="/education" className="text-sm opacity-80 hover:opacity-100">{t('nav.education')}</a>
          <a href="/blog" className="text-sm opacity-80 hover:opacity-100">{t('nav.blog')}</a>
          <a href="/contact" className="text-sm opacity-80 hover:opacity-100">{t('nav.contact')}</a>
          <LanguageSwitcher/>
        </div>
      </nav>
    </header>
  );
}
