'use client';
import { useTranslations } from '@/lib/useTranslations';
import Link from 'next/link';

export default function LanguageSwitcher() {
    const { locale, t } = useTranslations();
    
    return (
        <div className="flex gap-1">
            <Link 
                href="/en" 
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    locale === 'en' 
                        ? 'bg-lightblue text-darkblue' 
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
            >
                🇺🇸 EN
            </Link>
            <Link 
                href="/fr" 
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    locale === 'fr' 
                        ? 'bg-lightblue text-darkblue' 
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
            >
                🇫🇷 FR
            </Link>
        </div>
    );
}