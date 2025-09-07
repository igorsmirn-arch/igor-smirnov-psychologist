
import Image from 'next/image';

export const metadata = { title: 'Обо мне' };

export default function AboutPage(){
  return (
    <main className="section">
      <div className="container kv">
        <div style={{flex:1}}>
          <h1 className="text-3xl font-semibold">Обо мне</h1>
          <p className="mt-4">
            Я — Игорь Смирнов. Гештальт-терапевт (EAGT standards), член сообщества PsyConnect, предприниматель с 2006 года.
            Провожу индивидуальные, парные и групповые сессии онлайн и офлайн во Вроцлаве.
          </p>
          <p className="mt-2">
            В Беларуси возглавлял дистрибьюторский бизнес ГСМ и тех. химии с партнёрами Exxon Mobil, BP/Castrol, SK Lubricants, Henkel, Donaldson.
            Фокус: выгорание, отношения, кризисы, адаптация, коммуникации, границы.
          </p>
        </div>
        <div style={{flex:1, position:'relative', minHeight:340}}>
          <Image src="/assets/images/office_chair.jpg" alt="office" fill className="object-cover img-resp" />
        </div>
      </div>
    </main>
  );
}
