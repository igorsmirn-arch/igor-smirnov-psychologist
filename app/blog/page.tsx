import React from 'react';
export const metadata = { title: 'Блог | Igor Smirnov', description: 'Статьи: выгорание, психология и бизнес, отношения, эмиграция.' };
const posts = [
  { slug: 'burnout-recovery', title: 'Выгорание: как восстановиться', excerpt: 'Простая модель восстановления и профилактики.' },
  { slug: 'psychology-for-business', title: 'Психология для бизнеса', excerpt: 'Как психология помогает командам и лидерам.' }
];
export default function BlogIndex(){
  return (
    <main className="container mx-auto max-w-3xl px-4 py-10 prose prose-invert">
      <h1>Блог</h1>
      <ul>
        {posts.map(p=>(
          <li key={p.slug}>
            <a href={`/blog/${p.slug}`}>{p.title}</a>
            <div className="opacity-70 text-sm">{p.excerpt}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
