import ru from '../locales/ru.json';
import pl from '../locales/pl.json';
import en from '../locales/en.json';
export type Locale = 'ru' | 'pl' | 'en';
export const DEFAULT_LOCALE: Locale = 'ru';
const bundles: Record<Locale, Record<string, string>> = { ru, pl, en };
export function resolveLocale(candidate?: string | null): Locale {
  const v = (candidate || '').toLowerCase();
  if (v.startsWith('pl')) return 'pl';
  if (v.startsWith('en')) return 'en';
  if (v.startsWith('ru')) return 'ru';
  return DEFAULT_LOCALE;
}
export function getT(locale: Locale) {
  const dict = bundles[locale] || bundles[DEFAULT_LOCALE];
  return (key: string) => dict[key] ?? key;
}
