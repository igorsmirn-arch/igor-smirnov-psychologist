
'use client';
import { useI18n } from '../../components/LangProvider';

export const metadata = { title: 'Контакты' };

export default function ContactPage() {
  const { t } = useI18n();
  return (
    <main className="container" style={{paddingTop:28,paddingBottom:36}}>
      <h1 className="text-3xl font-semibold">{t.contact_title}</h1>
      <div className="grid grid-3" style={{marginTop:16}}>
        <div className="card">
          <strong>{t.addr_label}</strong><br/>
          {t.address}
        </div>
        <div className="card">
          <strong>{t.phone_label}</strong><br/>
          <a href="tel:+48572090774">+48 572 090 774</a>
        </div>
        <div className="card">
          <strong>{t.social_label}</strong><br/>
          <a href="https://www.instagram.com/igor.smirn.psychologist" target="_blank">Instagram</a> ·{' '}
          <a href="https://t.me/marsell_2021" target="_blank">Telegram</a>
        </div>
      </div>

      <div style={{marginTop:18}}>
        <iframe
          className="map"
          loading="lazy"
          src="https://www.google.com/maps?q=Kazimierza%20Wielkiego%2067-118%20Wroc%C5%82aw&output=embed"
        />
      </div>

      <section id="form" style={{marginTop:24}} className="card">
        <h2 className="text-2xl font-semibold">{t.form_title}</h2>
        <form action="https://formspree.io/f/your_form_id" method="POST" style={{marginTop:12, display:'grid', gap:12}}>
          <input name="name" placeholder={t.form_name} required style={{padding:12,borderRadius:10,border:'1px solid #2a3042',background:'#11141d',color:'#E6EDF3'}} />
          <input type="email" name="email" placeholder={t.form_email} required style={{padding:12,borderRadius:10,border:'1px solid #2a3042',background:'#11141d',color:'#E6EDF3'}} />
          <input name="phone" placeholder={t.form_phone} style={{padding:12,borderRadius:10,border:'1px solid #2a3042',background:'#11141d',color:'#E6EDF3'}} />
          <textarea name="message" placeholder={t.form_message} rows={6} style={{padding:12,borderRadius:10,border:'1px solid #2a3042',background:'#11141d',color:'#E6EDF3'}} />
          <button type="submit" className="btn" style={{width:'fit-content'}}>{t.form_submit}</button>
          <p className="lead" style={{fontSize:12,opacity:.7}}>{t.form_note}</p>
        </form>
      </section>
    </main>
  );
}
