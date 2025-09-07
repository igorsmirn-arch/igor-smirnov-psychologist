
'use client';
import Image from 'next/image';
import { useI18n } from '../../components/LangProvider';

export const metadata = { title: 'Бизнес-консалтинг' };

export default function BusinessPage() {
  const { t } = useI18n();
  return (
    <main>
      <section className="relative" style={{height:'60vh'}}>
        <Image src="/assets/images/biz_castrol_talk1.jpg" alt="Castrol conference" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{background:'rgba(0,0,0,.45)'}} />
        <div className="container" style={{position:'relative',zIndex:1,height:'100%',display:'flex',alignItems:'end',paddingBottom:28}}>
          <div style={{color:'#fff',maxWidth:780}}>
            <h1 style={{margin:0,fontSize:36, fontWeight:700}}>{t.biz_title}</h1>
            <p style={{marginTop:12,opacity:.95}}>{t.biz_hero}</p>
          </div>
        </div>
      </section>

      <section className="container" style={{paddingTop:28}}>
        <div className="grid grid-3">
          {t.biz_cards.map((b:[string,string],i:number)=>(
            <div className="card" key={i}><h3>{b[0]}</h3><p>{b[1]}</p></div>
          ))}
        </div>
      </section>

      <section className="container" style={{paddingTop:8,paddingBottom:36}}>
        <div className="gallery">
          <figure><Image src="/assets/images/biz_castrol_talk1.jpg" alt="Castrol talk 1" width={800} height={600} className="img-resp" /></figure>
          <figure><Image src="/assets/images/biz_castrol_talk2.jpg" alt="Castrol talk 2" width={800} height={600} className="img-resp" /></figure>
          <figure><Image src="/assets/images/biz_castrol_talk3.jpg" alt="Castrol talk 3" width={800} height={600} className="img-resp" /></figure>
          <figure><Image src="/assets/images/biz_hardhat.jpg" alt="Plant visit" width={800} height={600} className="img-resp" /></figure>
        </div>
      </section>
    </main>
  );
}
