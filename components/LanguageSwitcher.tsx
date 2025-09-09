'use client';
import React from 'react';
import { useI18n } from './LangProvider';
const langs = [{code:'ru',label:'RU'},{code:'pl',label:'PL'},{code:'en',label:'EN'}] as const;
export default function LanguageSwitcher(){
  const { locale, setLocale } = useI18n();
  return (
    <div className="flex items-center gap-2">
      {langs.map(l=>(
        <button key={l.code} onClick={()=>setLocale(l.code as any)}
          className={`text-sm px-2 py-1 rounded-md border ${locale===l.code?'bg-white/10 border-white/20':'border-transparent hover:border-white/20'}`}
          aria-pressed={locale===l.code}>{l.label}</button>
      ))}
    </div>
  );
}
