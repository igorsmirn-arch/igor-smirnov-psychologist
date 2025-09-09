'use client';

import { useI18n } from '../../components/LangProvider';

export default function ContactClient() {
  const { t } = useI18n();
  return (
    <main style={{padding:'32px 20px', maxWidth:960, margin:'0 auto'}}>
      <h1 style={{fontSize:28, fontWeight:700, marginBottom:16}}>
        {t('contact.title') ?? 'Контакты и запись'}
      </h1>
      <p style={{lineHeight:1.6, marginBottom:12}}>
        {t('contact.address') ?? 'Kazimierza Wielkiego 67-118, Wrocław, Poland'}
      </p>
      <form action="#" method="post" style={{display:'grid', gap:12, maxWidth:520}}>
        <input required name="name" placeholder={t('form.name') ?? 'Имя'} style={{padding:12, border:'1px solid #ddd', borderRadius:8}} />
        <input required type="email" name="email" placeholder={t('form.email') ?? 'Email'} style={{padding:12, border:'1px solid #ddd', borderRadius:8}} />
        <textarea required name="message" placeholder={t('form.msg') ?? 'Сообщение'} rows={5} style={{padding:12, border:'1px solid #ddd', borderRadius:8}} />
        <button type="submit" style={{ padding: '12px 16px', border: 0, borderRadius: 10, background: '#111', color: '#fff', cursor: 'pointer' }}>
          {t('form.submit') ?? 'Отправить'}
        </button>
      </form>
    </main>
  );
}
