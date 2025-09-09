'use client';
import React from 'react';
import { useI18n } from '../lib/i18n';
import type { Locale } from '../lib/i18n';

export default function LangSwitch(){
  const { locale, setLocale } = useI18n();
  const Button = ({ code, label }: { code: Locale; label: string }) => (
    <button
      onClick={() => setLocale(code)}
      className={`text-sm px-2 py-1 rounded-md border ${
        locale === code ? 'bg-white/10 border-white/20' : 'border-transparent hover:border-white/20'
      }`}
      aria-pressed={locale === code}
    >
      {label}
    </button>
  );

  return (
    <div className="flex items-center gap-2">
      <Button code="ru" label="RU" />
      <Button code="pl" label="PL" />
      <Button code="en" label="EN" />
    </div>
  );
}
