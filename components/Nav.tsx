'use client';
import React from 'react';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';
import LangSwitch from './LangSwitch';
import ThemeToggle from './ThemeToggle';

export default function Nav(){
  const { t } = useI18n();
  const Item = ({href, children}:{href:string; children:React.ReactNode}) => (
    <Link
      href={href}
      className="px-3 py-1.5 rounded-xl border border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur
                 hover:bg-white/50 dark:hover:bg-white/20 transition text-sm"
    >{children}</Link>
  );
  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-white/70 to-transparent
                    dark:from-black/60 backdrop-blur">
      <nav className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight">{t('brand')}</Link>
        <div className="hidden md:flex gap-2">
          <Item href="/about">{t('nav.about')}</Item>
          <Item href="/business">{t('nav.business')}</Item>
          <Item href="/education">{t('nav.education')}</Item>
          <Item href="/blog">{t('nav.blog')}</Item>
          <Item href="/contact">{t('nav.contact')}</Item>
        </div>
        <div className="flex items-center gap-2">
          <LangSwitch/>
          <ThemeToggle/>
        </div>
      </nav>
    </div>
  );
}
