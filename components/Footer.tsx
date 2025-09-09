import React from 'react';
import Link from 'next/link';
import { useI18n } from '../lib/i18n';

export default function Footer(){
  const { t } = useI18n();
  return (
    <footer className="mt-10 border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div className="opacity-80">{t('footer.copy')}</div>
        <div className="flex gap-4">
          <Link href="/privacy" className="underline">{t('footer.privacy')}</Link>
          <Link href="/terms" className="underline">{t('footer.terms')}</Link>
        </div>
        <div className="md:text-right">
          <a className="underline mr-3" href="https://t.me/marsell_2021" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a className="underline" href="https://instagram.com/igor.smirn.psychologist" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
