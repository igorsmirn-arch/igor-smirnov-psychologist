
'use client';
import { useI18n } from './LangProvider';

export default function LangSwitch(){
  const { lang, setLang } = useI18n();
  const btn = (code:'ru'|'en'|'pl', label:string) => (
    <button
      onClick={()=>setLang(code)}
      className="badge"
      style={{opacity: lang===code? 1 : .6, marginLeft: 8}}
    >{label}</button>
  );
  return <div>{btn('ru','RU')}{btn('en','EN')}{btn('pl','PL')}</div>;
}
