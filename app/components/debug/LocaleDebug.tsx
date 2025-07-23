'use client';
import { useLocale, useTranslations } from 'next-intl';

export default function LocaleDebug() {
    const locale = useLocale();
    const t = useTranslations('landing');
    
    return (
        <div style={{ position: 'fixed', top: '10px', right: '10px', background: 'red', color: 'white', padding: '10px', zIndex: 1000 }}>
            <p>Locale: {locale}</p>
            <p>Greeting: {t('greeting')}</p>
            <p>Name: {t('name')}</p>
        </div>
    );
}