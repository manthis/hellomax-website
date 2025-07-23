'use client';
import { useTranslations } from '@/lib/useTranslations';

const Footer = () => {
    const { t } = useTranslations();
    const currentYear = new Date().getFullYear();
    
    return (
        <div className='flex items-center justify-center bg-darkblue p-5 text-white xl:bg-dracula'>
            © {currentYear} HelloMax - {t('footer.rights')}
        </div>
    );
};

export default Footer;
