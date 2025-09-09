'use client';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import ru from '../locales/ru.json';
import pl from '../locales/pl.json';
import en from '../locales/en.json';

type Dict = Record<string, any>;
const DICTS: Record<string, Dict> = { ru, pl, en };

type Ctx = {
  lang: 'ru'|'pl'|'en';
  setLang: (l:'ru'|'pl'|'en')=>void;
  t: (key:string)=>string;
};
const I18nContext = createContext<Ctx | null>(null);

function getByPath(obj:Dict, path:string): any {
  return path.split('.').reduce((o,k)=> (o && typeof o==='object') ? o[k] : undefined, obj);
}

export function I18nProvider({children}:{children:React.ReactNode}) {
  const [lang, setLang] = useState<'ru'|'pl'|'en'>(() => {
    if (typeof window === 'undefined') return 'ru';
    return (localStorage.getItem('lang') as any) || 'ru';
  });

  useEffect(()=>{ try{ localStorage.setItem('lang', lang);}catch{} },[lang]);

  const value = useMemo<Ctx>(()=>({
    lang,
    setLang,
    t: (key:string) => {
      const v = getByPath(DICTS[lang] || ru, key);
      return (typeof v === 'string') ? v : key;
    }
  }),[lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(){
  const ctx = useContext(I18nContext);
  if(!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
