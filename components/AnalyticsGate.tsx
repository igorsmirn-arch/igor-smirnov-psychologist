'use client';
import React from 'react';

function injectScript(id:string, src:string, inner?:string){
  if (document.getElementById(id)) return;
  const s = document.createElement('script');
  s.id = id;
  if (src) { s.async = true; s.src = src; }
  if (inner) { s.innerHTML = inner; }
  document.head.appendChild(s);
}

export default function AnalyticsGate(){
  React.useEffect(()=>{
    const run = ()=>{
      try{
        const c = JSON.parse(localStorage.getItem('consent.v1')||'{}');
        const GA = process.env.NEXT_PUBLIC_GA_ID || '';
        const FB = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL || '';
        if (c.analytics && GA){
          injectScript('ga4', `https://www.googletagmanager.com/gtag/js?id=${GA}`);
          injectScript('ga4-inline','',`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA}');
          `);
        }
        if (c.marketing && FB){
          injectScript('fbp', '',`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${FB}'); fbq('track','PageView');
          `);
        }
      }catch{}
    };
    run();
    const h = (e:any)=>run();
    window.addEventListener('consent:updated', h as any);
    return ()=> window.removeEventListener('consent:updated', h as any);
  },[]);
  return null;
}
