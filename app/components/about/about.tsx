'use client';
import Button from '../button/button';
import { useTranslations } from '@/lib/useTranslations';

const About = () => {
    const { t } = useTranslations();
    
    return (
        <section
            id='about'
            className='relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat py-0 xl:bg-background2'>
            <div className='flex min-h-[100svh] w-full justify-center backdrop-blur backdrop-grayscale'>
                <div className='bg-gradient-to-b from-dracula to-darkblue px-[40px] py-20 text-justify xl:my-40 xl:w-2/3 xl:rounded-2xl xl:px-[100px] xl:opacity-95'>
                    <h1 className='mb-10 mt-6 text-5xl font-semibold text-white'>{t('about.title')}</h1>
                    <div className='flex justify-center py-10'>
                        <div className='rounded-full shadow-lightblue xl:animate-flashing '>
                            <img src='/images/profile_logo.png' alt={t('about.profileAlt')} />
                        </div>
                    </div>
                    <p className='mt-10 text-white'>
                        <span className='text-lightblue'>{t('about.experience')}</span>, I
                        have cultivated a deep passion for
                        <span className='text-lightblue'> {t('about.leadership')}</span>,{' '}
                        <span className='text-lightblue'>{t('about.people')}</span>,{' '}
                        <span className='text-lightblue'>{t('about.technology')}</span>, and{' '}
                        <span className='text-lightblue'>{t('about.products')}</span>
                        . {t('about.journey')}
                        <br />
                        <br />
                        {t('about.expertise')}
                        <br />
                    </p>
                    <ul className='mx-6 my-4 list-disc text-white xl:mx-20'>
                        <li className='my-2'>
                            <span className='text-lightblue'>{t('about.technicalTitle')}</span> {t('about.technicalDescription')}{' '}
                        </li>
                        <li className='my-2'>
                            <span className='text-lightblue'>{t('about.managementTitle')}</span> {t('about.managementDescription')}
                        </li>
                        <li className='my-2'>
                            <span className='text-lightblue'>{t('about.entrepreneurshipTitle')}</span> {t('about.entrepreneurshipDescription')}
                        </li>
                    </ul>
                    <p className='text-white'>
                        <br />
                        {t('about.finalText1')}
                        <br />
                        <br />
                        <span className='text-lightblue'>
                            {t('about.finalText2')}
                        </span>
                    </p>
                    <div className='mt-10 flex items-center justify-center xl:mt-20'>
                        <Button label={t('about.linkedinButton')} link='https://www.linkedin.com/in/maxime-auburtin' />
                        <Button
                            label={t('about.cvButton')}
                            link='https://hellomax.notion.site/Maxime-AUBURTIN-b83086393e2448be908de4f0038a5c9f?pvs=4'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
