'use client';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';

export default function Footer(){
  const { t } = useI18n();
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="opacity-80">{t('footer.copy')}</div>
        <div className="flex gap-4">
          <Link href="/privacy" className="opacity-80 hover:opacity-100 underline">{t('footer.privacy')}</Link>
          <Link href="/terms" className="opacity-80 hover:opacity-100 underline">{t('footer.terms')}</Link>
        </div>
      </div>
    </footer>
  );
}
