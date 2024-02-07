import Media from './media';

export default function ContactZone() {
    // TODO: Add Calendly link

    return (
        <ul
            id='contactzone'
            className='fixed bottom-[20px] z-10 flex justify-start xl:bottom-[40px] landscape:w-[calc(100%-80px)] landscape:justify-end landscape:xl:w-[calc(100%-200px)] landscape:2xl:justify-start'>
            <Media src='/images/medias/enveloppe.png' tooltip='Email' url='mailto:m@hellomax.io'></Media>
            <Media src='/images/medias/sms.png' tooltip='iMessage' url='sms:33769403192'></Media>
            <Media src='/images/medias/whatsapp.png' tooltip='Whatsapp' url='https://wa.me/33667424130'></Media>
            <Media src='/images/medias/calendrier.png' tooltip='Calendly'></Media>
            {/*
            <Media
                src='/images/medias/ethereum.png'
                tooltip='Ethereum'
                url='bitcoin:0xC3Fc9c9EB999eb04a830ab0eAcAa45FEA8CB90DF'></Media>
            */}
        </ul>
    );
}
