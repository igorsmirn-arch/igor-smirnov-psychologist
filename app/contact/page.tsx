'use client';
import React from 'react';
import { useI18n } from '../../lib/i18n';

export default function Page(){
  const { t } = useI18n();

  return (
    <main className="container py-8 grid md:grid-cols-2 gap-8">
      <section>
        <h1 className="text-2xl font-bold mb-3">{t('nav.contact')}</h1>
        <p className="opacity-80 mb-4">
          Wrocław, ul. Kazimierza Wielkiego 67 · Tel: +48 572 090 774 · Telegram: @marsell_2021 · Instagram: igor.smirn.psychologist
        </p>

        <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-3" onSubmit={(e)=>{
          const chk = (document.getElementById('rodo') as HTMLInputElement);
          if (!chk?.checked) { e.preventDefault(); alert('Proszę zaakceptować zgodę RODO.'); }
        }}>
          <input name="name" required placeholder={t('services.more') || 'Имя'} className="w-full px-3 py-2 border rounded"/>
          <input type="email" name="email" required placeholder="Email" className="w-full px-3 py-2 border rounded"/>
          <textarea name="message" rows={5} required placeholder={t('cta.line') || 'Сообщение'} className="w-full px-3 py-2 border rounded"></textarea>

          <label className="flex items-start gap-2 text-sm">
            <input id="rodo" type="checkbox" required className="mt-1"/>
            <span>
              Zgoda RODO: wyrażam zgodę na przetwarzanie moich danych w celu kontaktu.
              Administratorem jest Igor Smirnov (Wrocław). Szczegóły w Polityce prywatności.
            </span>
          </label>

          <button type="submit"
                  className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black">
            {t('hero.ctaBook')}
          </button>
        </form>
      </section>

      <section aria-label="map" className="min-h-[320px]">
        <iframe
          title="Map — Wrocław, Kazimierza Wielkiego 67"
          className="w-full h-full min-h-[320px] rounded border"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Kazimierza+Wielkiego+67,+Wroc%C5%82aw&output=embed">
        </iframe>
      </section>
    </main>
  );
}
