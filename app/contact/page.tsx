'use client';
import React from 'react';
import { useI18n } from '../../lib/i18n';

export default function ContactPage(){
  const { t } = useI18n();

  return (
    <div className="section">
      <div className="container grid md:grid-cols-2 gap-6">
        <div className="card">
          <h1 className="mb-4">Contact</h1>
          <p className="mb-4">
            Wrocław, ul. Kazimierza Wielkiego 67 · Tel: +48 572 090 774 ·
            Telegram: <a className="underline" href="https://t.me/marsell_2021">@marsell_2021</a> ·
            Instagram: <a className="underline" href="https://www.instagram.com/igor.smirn.psychologist/">igor.smirn.psychologist</a>
          </p>

          <form action="https://formspree.io/f/moqgjqey" method="POST" className="space-y-3">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input required type="email" name="email" className="w-full rounded-lg border px-3 py-2 bg-white/80 dark:bg-white/10" />
            </div>
            <div>
              <label className="block text-sm mb-1">{t('hero.ctaBook')}</label>
              <textarea required name="message" rows={5} className="w-full rounded-lg border px-3 py-2 bg-white/80 dark:bg-white/10"></textarea>
            </div>
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1" />
              <span>
                Zgoda RODO: wyrażam zgodę na przetwarzanie moich danych w celu kontaktu.
                Administratorem jest Igor Smirnov (Wrocław). Szczegóły — w Polityce prywatności.
              </span>
            </label>
            <button className="btn-primary" type="submit">Wyślij</button>
          </form>
        </div>

        <div className="card p-0 overflow-hidden">
          <iframe
            title="Office map"
            className="w-full h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Kazimierza%20Wielkiego%2067%20Wroc%C5%82aw&output=embed">
          </iframe>
        </div>
      </div>
    </div>
  );
}
