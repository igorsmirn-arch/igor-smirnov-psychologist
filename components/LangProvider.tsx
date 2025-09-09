'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, getT, resolveLocale, type Locale } from '../lib/i18n';
type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: (k: string) => string; };
const LangCtx = createContext<Ctx>({ locale: DEFAULT_LOCALE, setLocale: () => {}, t: (k) => k });
export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);
  useEffect(() => {
    const saved = localStorage.getItem('locale');
    if (saved) setLocale(resolveLocale(saved));
    else if (typeof navigator !== 'undefined') setLocale(resolveLocale(navigator.language));
  }, []);
  useEffect(() => { localStorage.setItem('locale', locale); document.documentElement.lang = locale; }, [locale]);
  const t = useMemo(() => getT(locale), [locale]);
  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t]);
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}
export function useI18n(){ return useContext(LangCtx); }
