
'use client';
import Image from 'next/image';
import Link from 'next/link';
import TestimonialsSlider from '../components/TestimonialsSlider';
import { useI18n } from '../components/LangProvider';

export default function Home() {
  const { t } = useI18n();
  return (
    <main>
      <section className="hero">
        <div className="panel">
          <span className="badge">{t.hero_badge}</span>
          <h1>{t.hero_title}</h1>
          <p className="lead">{t.hero_sub}</p>
          <div style={{marginTop:16, display:'flex', gap:12}}>
            <Link href="/contact#form" className="btn">{t.cta_book}</Link>
            <Link href="/business" className="btn" style={{background:'linear-gradient(135deg,#5AC8FA,#7aa2f7)'}}>{t.cta_business}</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container kv">
          <div style={{flex:1}}>
            <h2>{t.about_title}</h2>
            <p>{t.about_p1}</p>
            <p>{t.about_p2}</p>
          </div>
          <div style={{flex:1, position:'relative', minHeight:320}}>
            <Image src="/assets/images/about_portrait.jpg" alt="Igor portrait" fill className="img-resp object-cover" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.work_title}</h2>
          <div className="grid grid-3">
            {t.work_items.map((w:string, i:number)=>(<div className="card" key={i}>{w}</div>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>{t.reviews_title}</h2>
        </div>
        <TestimonialsSlider />
      </section>
    </main>
  );
}
