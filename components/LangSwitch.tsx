'use client';
import React from 'react';
import { useI18n } from '../lib/i18n';

export default function LangSwitch(){
  const { lang, setLang } = useI18n();
  const btn = (code:'ru'|'en'|'pl', label:string) => (
    <button
      key={code}
      onClick={()=>setLang(code)}
      className={`px-2 py-1 rounded ${lang===code ? 'bg-black text-white dark:bg-white dark:text-black' : 'border'}`}>
      {label}
    </button>
  );
  return (
    <div className="flex gap-2">
      {btn('ru','RU')}
      {btn('pl','PL')}
      {btn('en','EN')}
    </div>
  );
}
