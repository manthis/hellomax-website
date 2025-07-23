'use client';

import { translations, Locale } from './translations';
import { usePathname } from 'next/navigation';

export function useTranslations() {
  const pathname = usePathname();
  const locale = (pathname.startsWith('/fr') ? 'fr' : 'en') as Locale;
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
  
  return { t, locale };
}