'use client';
import React from 'react';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';
import LangSwitch from './LangSwitch';
import ThemeToggle from './ThemeToggle';

export default function Nav(){
  const { t } = useI18n();
  return (
    <nav className="nav-glass">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">{t('brand')}</Link>
        <div className="hidden md:flex gap-5 text-sm">
          <Link href="/about"      className="hover:underline">{t('nav.about')}</Link>
          <Link href="/business"   className="hover:underline">{t('nav.business')}</Link>
          <Link href="/education"  className="hover:underline">{t('nav.education')}</Link>
          <Link href="/blog"       className="hover:underline">{t('nav.blog')}</Link>
          <Link href="/contact"    className="hover:underline">{t('nav.contact')}</Link>
        </div>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
