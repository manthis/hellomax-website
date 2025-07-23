import { getTranslations } from 'next-intl/server';

export default async function ServerDebug({ locale }: { locale: string }) {
    const t = await getTranslations('landing');
    
    return (
        <div style={{ position: 'fixed', top: '10px', left: '10px', background: 'blue', color: 'white', padding: '10px', zIndex: 1000 }}>
            <p>Server Locale: {locale}</p>
            <p>Server Greeting: {t('greeting')}</p>
            <p>Server Name: {t('name')}</p>
        </div>
    );
}