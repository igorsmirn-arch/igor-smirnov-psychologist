'use client';
import React from 'react';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';
import LangSwitch from './LangSwitch';

export default function Nav(){
  const { t } = useI18n();
  return (
    <nav className="py-4 border-b mb-6">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-semibold">{t('brand')}</Link>
        <div className="flex gap-4">
          <Link href="/about">{t('nav.about')}</Link>
          <Link href="/business">{t('nav.business')}</Link>
          <Link href="/education">{t('nav.education')}</Link>
          <Link href="/blog">{t('nav.blog')}</Link>
          <Link href="/contact">{t('nav.contact')}</Link>
        </div>
        <LangSwitch />
      </div>
    </nav>
  );
}
