'use client';
import React from 'react';

type Consent = { analytics:boolean; marketing:boolean; timestamp:number };

export default function CookieConsent(){
  const [shown,setShown] = React.useState(false);

  React.useEffect(()=>{
    try{
      const v = localStorage.getItem('consent.v1');
      if(!v) setShown(true);
    }catch{}
  },[]);

  const save = (c:Consent)=>{
    try{
      localStorage.setItem('consent.v1', JSON.stringify(c));
      window.dispatchEvent(new CustomEvent('consent:updated', { detail: c }));
    }catch{}
    setShown(false);
  };

  if(!shown) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[720px] rounded-xl border bg-white/95 dark:bg-black/80 backdrop-blur p-4">
      <div className="text-sm mb-3">
        We use cookies for essential site functionality. With your consent we enable **analytics** (GA4) and **marketing** (Meta Pixel).
        You can change your choice anytime by clearing site data. This complies with EU GDPR/RODO.
      </div>
      <div className="flex gap-2 justify-end">
        <button className="px-3 py-2 border rounded" onClick={()=>save({analytics:false, marketing:false, timestamp:Date.now()})}>Decline</button>
        <button className="px-3 py-2 border rounded" onClick={()=>save({analytics:true, marketing:false, timestamp:Date.now()})}>Allow analytics</button>
        <button className="px-3 py-2 rounded bg-black text-white dark:bg-white dark:text-black" onClick={()=>save({analytics:true, marketing:true, timestamp:Date.now()})}>Allow all</button>
      </div>
    </div>
  );
}
