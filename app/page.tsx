'use client';
import { useTranslations } from '@/lib/useTranslations';

export default function HomePage() {
    const { t } = useTranslations();
    
    return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
            <h1>{t('temp.title')}</h1>
            <p>{t('temp.description')}</p>
            <p>{t('temp.addI18n')}</p>
        </div>
    );
}