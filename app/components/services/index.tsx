'use client';

import Blob from './blob';
import Card from './card';
import Service from './service';
import { useTranslations } from '@/lib/useTranslations';

const Services: React.FC = () => {
    const { t } = useTranslations();

    return (
        <section
            id='services'
            className='relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-darkblue to-dracula py-20 text-white'>
            <Blob />
            <div className='px-10 xl:px-0'>
                <h1 className='mb-10 w-full max-w-7xl text-left text-5xl font-semibold text-white '>
                    {t('services.title')}
                </h1>
                <div className='z-0 flex w-full max-w-7xl flex-col items-center justify-center rounded-3xl bg-cover bg-fixed bg-center bg-no-repeat xl:bg-background2'>
                    <div className='w-full rounded-3xl xl:p-10 xl:backdrop-blur xl:backdrop-grayscale xl:backdrop-filter'>
                        <div className='flex w-full flex-col items-center justify-between xl:flex-row'>
                            <Card 
                                id='cto' 
                                title={t('services.cto.title')} 
                                image={'/images/services/cto.png'} 
                            />
                            <Card
                                id='blockchain'
                                title={t('services.blockchain.title')}
                                image={'/images/services/ethereum.png'}
                            />
                            <Card 
                                id='web2' 
                                title={t('services.web2.title')} 
                                image={'/images/services/web.png'} 
                            />
                        </div>
                    </div>
                </div>
                <div
                    id='cto-content'
                    className='mt-5 w-full max-w-7xl items-center justify-center rounded-3xl py-10 transition delay-1000'>
                    <div className='z-10 grid grid-flow-row-dense grid-cols-1 gap-10 xl:grid-cols-2'>
                        <Service 
                            title={t('services.cto.earlyStage')} 
                            icon='/images/services/early.png' 
                            colspan={true}
                        >
                            {t('services.cto.earlyStageDesc')}
                        </Service>
                        <Service 
                            title={t('services.cto.screening')} 
                            icon='/images/services/screening.png'
                        >
                            {t('services.cto.screeningDesc')}
                        </Service>
                        <Service 
                            title={t('services.cto.onDemand')} 
                            icon='/images/services/ondemand.png' 
                            colspan={true}
                        >
                            {t('services.cto.onDemandDesc')}
                        </Service>
                        <Service 
                            title={t('services.cto.audit')} 
                            icon='/images/services/audit.png'
                        >
                            {t('services.cto.auditDesc')}
                        </Service>
                        <Service 
                            title={t('services.cto.coaching')} 
                            icon='/images/services/coach.png'
                        >
                            {t('services.cto.coachingDesc')}
                        </Service>
                        <Service 
                            title={t('services.cto.cyber')} 
                            icon='/images/services/cyber.png'
                        >
                            {t('services.cto.cyberDesc')}
                        </Service>
                        <Service 
                            title={t('services.cto.career')} 
                            icon='' 
                            colspan={true}
                        >
                            {t('services.cto.careerDesc')}
                        </Service>
                    </div>
                </div>
                <div
                    id='blockchain-content'
                    className=' mt-10 hidden w-full max-w-7xl items-center justify-center rounded-3xl py-10'>
                    <div className='grid grid-flow-row-dense grid-cols-1 gap-10 xl:grid-cols-2'>
                        <Service
                            title={t('services.blockchain.smartContract')}
                            icon='/images/services/contract.png'
                            colspan={true}
                        >
                            {t('services.blockchain.smartContractDesc')}
                        </Service>
                        <Service 
                            title={t('services.blockchain.dapp')} 
                            icon='/images/services/app.png'
                        >
                            {t('services.blockchain.dappDesc')}
                        </Service>
                        <Service 
                            title={t('services.blockchain.platform')} 
                            icon='/images/services/devops.png'
                        >
                            {t('services.blockchain.platformDesc')}
                        </Service>
                    </div>
                </div>
                <div
                    id='web2-content'
                    className=' mt-10 hidden w-full max-w-7xl items-center justify-center rounded-3xl py-10'>
                    <div className='grid grid-flow-row-dense grid-cols-1 gap-10 xl:grid-cols-2'>
                        <Service 
                            title={t('services.web2.fullstack')} 
                            icon='/images/services/fullstack.png'
                        >
                            {t('services.web2.fullstackDesc')}
                        </Service>
                        <Service 
                            title={t('services.web2.frontend')} 
                            icon='/images/services/frontend.png'
                        >
                            {t('services.web2.frontendDesc')}
                        </Service>
                        <Service 
                            title={t('services.web2.backend')} 
                            icon='/images/services/backend.png'
                        >
                            {t('services.web2.backendDesc')}
                        </Service>
                        <Service 
                            title={t('services.web2.mobile')} 
                            icon='/images/services/mobile.png'
                        >
                            {t('services.web2.mobileDesc')}
                        </Service>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;