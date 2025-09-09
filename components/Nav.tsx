'use client';
import React from 'react';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';
import LangSwitch from './LangSwitch';
import ThemeToggle from './ThemeToggle';

const NavLink = ({href, children}:{href:string; children:React.ReactNode}) => (
  <Link href={href} className="px-3 py-1 rounded-full border border-white/20 bg-white/40 backdrop-blur hover:bg-white/60 transition dark:bg-white/10 dark:hover:bg-white/20">
    {children}
  </Link>
);

export default function Nav(){
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-3 mt-3 rounded-2xl border bg-white/60 backdrop-blur shadow-sm dark:bg-black/40">
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="font-semibold tracking-tight">{t('brand')}</Link>
          <div className="hidden md:flex items-center gap-2">
            <NavLink href="/about">{t('nav.about')}</NavLink>
            <NavLink href="/business">{t('nav.business')}</NavLink>
            <NavLink href="/education">{t('nav.education')}</NavLink>
            <NavLink href="/blog">{t('nav.blog')}</NavLink>
            <NavLink href="/contact">{t('nav.contact')}</NavLink>
          </div>
          <div className="flex items-center gap-2">
            <LangSwitch />
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
