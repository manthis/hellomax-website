'use client';
import { useTranslations, useLocale } from 'next-intl';

export default function TranslationTest() {
    const t = useTranslations('landing');
    const locale = useLocale();
    
    return (
        <div style={{ 
            position: 'fixed', 
            top: '60px', 
            right: '10px', 
            background: 'green', 
            color: 'white', 
            padding: '10px', 
            zIndex: 1000,
            fontSize: '12px'
        }}>
            <p>Active Locale: {locale}</p>
            <p>Greeting: "{t('greeting')}"</p>
            <p>Name: "{t('name')}"</p>
        </div>
    );
}