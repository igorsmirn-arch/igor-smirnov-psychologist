'use client';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';
import LangSwitch from './LangSwitch';

export default function Nav() {
  const { t } = useI18n();
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <Link href="/" className="font-semibold">{t('brand')}</Link>
        <div className="menu">
          <Link href="/(site)/about">{t('nav.about')}</Link>
          <Link href="/business">{t('nav.business')}</Link>
          <Link href="/education">{t('nav.education')}</Link>
          <Link href="/contact">{t('nav.contact')}</Link>
        </div>
        <LangSwitch />
      </div>
    </nav>
  );
}
