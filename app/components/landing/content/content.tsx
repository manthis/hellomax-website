'use client';
import Button from '../../button/button';
import { useTranslations } from '@/lib/useTranslations';

export default function Content() {
    const { t } = useTranslations();
    
    return (
        <div
            id='content'
            className='relative flex w-full origin-left items-center justify-between duration-500 landscape:mt-8'>
            <div className='relative max-w-[600px]'>
                <h4 className='text-2xl font-normal tracking-widest text-lightblue landscape:text-lg'>
                    {t('landing.greeting')}
                </h4>
                <h2 className='my-4 text-7xl text-white landscape:my-2 landscape:text-6xl landscape:xl:text-9xl'>
                    {t('landing.name')}
                </h2>
                <h3 className='text-2xl font-light leading-[1.5em] text-white landscape:2xl:text-3xl'>
                    {t('landing.title')}
                </h3>
                <p className='mb-[20px] mt-[10px] text-base text-white landscape:text-sm'>
                    {t('landing.description')}{' '}
                    <span className='italic'>
                        &quot;{t('landing.descriptionQuote')}&quot;
                    </span>
                </p>

                <Button
                    href='https://bookme.hellomax.io'
                    text={t('landing.hireMeButton')}
                    target='_blank'
                />
            </div>
        </div>
    );
}