'use client';
import React from 'react';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';
import LangSwitch from './LangSwitch';
import ThemeToggle from './ThemeToggle';

export default function Nav(){
  const { t } = useI18n();
  return (
    <div className="nav-wrap">
      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="brand">{t('brand')}</Link>

          <div className="nav-menu">
            <Link href="/about">{t('nav.about')}</Link>
            <Link href="/business">{t('nav.business')}</Link>
            <Link href="/education">{t('nav.education')}</Link>
            <Link href="/blog">{t('nav.blog')}</Link>
            <Link href="/contact">{t('nav.contact')}</Link>
          </div>

          <div className="nav-actions">
            <LangSwitch />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
