'use client';
import React from 'react';

export default function ThemeToggle(){
  const [dark, setDark] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });
  React.useEffect(()=> {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('theme.dark', dark ? '1' : '0'); } catch {}
  }, [dark]);
  React.useEffect(()=> {
    try {
      const v = localStorage.getItem('theme.dark'); 
      if (v) setDark(v === '1');
    } catch {}
  }, []);
  return (
    <button aria-label="Toggle theme" className="btn btn-outline"
            onClick={()=>setDark(d=>!d)}>
      {dark ? '☀︎' : '☾'}
    </button>
  );
}
