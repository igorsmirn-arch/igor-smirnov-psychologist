'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const REVIEWS = [
  { author: '—', text: 'Здравствуйте, Игорь. Я благодарю вас за поддержку, которую я получал на наших встречах... Сейчас я чувствую себя намного лучше, появилась внутренняя сила справляться с изменениями.' },
  { author: '—', text: 'Наши встречи с Игорем начались 4 месяца назад... Теперь Игорь помогает мне искать новый путь к себе — уверенному, сильному, здоровому человеку. Choose life.' },
  { author: '—', text: 'Занимаюсь с Игорем более двух месяцев онлайн... Вижу прогресс в своём психологическом состоянии и за это отдельная благодарность!' },
  { author: 'Ольга, 32', text: 'За 2 месяца работы мы исследовали мою глубину, силу, нашли точки опоры. Очень чуткий, внимательный, с ним работать безопасно, тепло, комфортно.' },
  { author: 'Григорий', text: 'После 5 сессий нашёл работу на выгодных условиях и наладил отношения в семье. Атмосфера сессий — тёплая и поддерживающая. Планирую продолжать.' }
];

export default function TestimonialsSlider() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' });
  const prev = useCallback(()=> embla?.scrollPrev(), [embla]);
  const next = useCallback(()=> embla?.scrollNext(), [embla]);
  return (
    <div className="py-14">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold">Отзывы</h2>
        <div className="relative mt-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {REVIEWS.map((r,i)=>(
                <article key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 px-2">
                  <div className="h-full card" style={{background:'#fff',color:'#111'}}>
                    <p className="leading-relaxed">{r.text}</p>
                    <p className="mt-4 text-sm" style={{opacity:.7}}>{r.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button onClick={prev} className="px-4 py-2 border rounded-md">←</button>
            <button onClick={next} className="px-4 py-2 border rounded-md">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}