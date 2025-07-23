'use client';

import MenuItem from './menuitem';
import { useTranslations } from '@/lib/useTranslations';

export default function Menu() {
    const { t } = useTranslations();

    return (
        <ul
            id='menu'
            className='items-sart fixed left-0 top-0 flex h-full w-full flex-col justify-center pl-[100px] opacity-0 duration-500 portrait:items-center portrait:p-0'>
            <MenuItem label={t('navigation.home')} />
            <MenuItem label={t('navigation.about')} />
            <MenuItem label={t('navigation.services')} />
        </ul>
    );
}
