'use client';
import Media from './media';
import { useTranslations } from '@/lib/useTranslations';

export default function ContactZone() {
    const { t } = useTranslations();
    // TODO: Add Calendly link

    return (
        <ul
            id='contactzone'
            className='fixed bottom-[20px] z-10 flex justify-start xl:bottom-[40px] landscape:w-[calc(100%-80px)] landscape:justify-end landscape:xl:w-[calc(100%-200px)] landscape:2xl:justify-start'>
            <Media src='/images/medias/enveloppe.png' tooltip={t('contact.tooltips.email')} url='mailto:m@hellomax.io'></Media>
            <Media src='/images/medias/sms.png' tooltip={t('contact.tooltips.imessage')} url='sms:33769403192'></Media>
            <Media src='/images/medias/whatsapp.png' tooltip={t('contact.tooltips.whatsapp')} url='https://wa.me/33667424130'></Media>
            <Media src='/images/medias/calendrier.png' tooltip={t('contact.tooltips.calendly')} url='https://bookme.hellomax.io'></Media>
            {/*
            <Media
                src='/images/medias/ethereum.png'
                tooltip='Ethereum'
                url='bitcoin:0xC3Fc9c9EB999eb04a830ab0eAcAa45FEA8CB90DF'></Media>
            */}
        </ul>
    );
}
