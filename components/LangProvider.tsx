
'use client';
import React, {createContext, useContext, useMemo, useState, useEffect} from 'react';
import dict from './i18n.json';

type Lang = 'ru'|'en'|'pl';
type Ctx = { lang: Lang; t: any; setLang: (l:Lang)=>void };

const I18nCtx = createContext<Ctx>({ lang:'ru', t: dict['ru'], setLang: ()=>{} });

export function LangProvider({children}:{children: React.ReactNode}){
  const [lang, setLang] = useState<Lang>('ru');
  useEffect(()=>{ const saved = localStorage.getItem('lang') as Lang || 'ru'; setLang(saved); },[]);
  useEffect(()=>{ localStorage.setItem('lang', lang); document.documentElement.lang = lang; },[lang]);
  const t = useMemo(()=> (dict as any)[lang], [lang]);
  return <I18nCtx.Provider value={{lang, t, setLang}}>{children}</I18nCtx.Provider>;
}
export function useI18n(){ return useContext(I18nCtx); }
