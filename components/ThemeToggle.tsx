'use client';
import * as React from 'react';

function getInitial(): 'light'|'dark' {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('theme.v1') as 'light'|'dark'|null;
  if (saved) return saved;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle(){
  const [theme,setTheme] = React.useState<'light'|'dark'>(getInitial);

  // apply to <html> and persist
  React.useEffect(()=>{
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    try { localStorage.setItem('theme.v1', theme); } catch {}
  },[theme]);

  return (
    <button
      aria-label="Toggle theme"
      onClick={()=>setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      className="px-2 py-1 rounded-md border hover:bg-black/5 dark:hover:bg-white/10"
    >
      {theme === 'dark' ? '☀︎' : '☾'}
    </button>
  );
}
