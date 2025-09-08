'use client';
import { useI18n } from '../../components/LangProvider';

export default function ContactClient() {
  const { t } = useI18n();
  return (
    <main className="container mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-semibold">{t('contact.title')}</h1>
      <div className="space-y-2">
        <p>Email: igor.smirn@gmail.com</p>
        <p>Телефон/Telegram: +48 …</p>
        <p>Адрес офиса: <b>Kazimierza Wielkiego 67-118, Wrocław, Poland</b></p>
      </div>
      <form action="https://formspree.io/f/your_form_id" method="POST" className="grid gap-4 max-w-xl">
        <input name="name" placeholder={t('form.name')} className="input" required />
        <input type="email" name="email" placeholder="Email" className="input" required />
        <textarea name="message" placeholder={t('form.message')} className="input min-h-32" required />
        <button className="btn-primary">{t('form.send')}</button>
      </form>
      <iframe title="Office map" className="w-full h-80 rounded-xl" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Kazimierza%20Wielkiego%2067-118%20Wroclaw&output=embed" />
    </main>
  );
}
