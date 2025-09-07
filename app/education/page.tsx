
'use client';
import Image from 'next/image';
import { useI18n } from '../../components/LangProvider';

export const metadata = { title: 'Образование' };

const CERTS = [
  '/assets/images/cert_2024_wisdom_of_trauma.jpg',
  '/assets/images/cert_august_meetings_2024.jpg',
  '/assets/images/cert_2023_conf.jpg',
  '/assets/images/cert_foundation.jpg',
  '/assets/images/cert_2023_intensive.jpg'
];

export default function EducationPage(){
  const { t } = useI18n();
  return (
    <main className="container" style={{paddingTop:28,paddingBottom:36}}>
      <h1 className="text-3xl font-semibold">{t.edu_title}</h1>
      <div className="gallery" style={{marginTop:16}}>
        {CERTS.map((src)=> (
          <figure key={src}><Image src={src} alt="certificate" width={1200} height={800} className="img-resp"/></figure>
        ))}
      </div>
    </main>
  );
}
