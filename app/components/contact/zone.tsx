import Media from './media';

export default function ContactZone() {
    return (
        <ul
            id='contactzone'
            className='fixed bottom-[20px] z-20 flex justify-start xl:bottom-[40px] landscape:w-[calc(100%-80px)] landscape:justify-end landscape:xl:w-[calc(100%-200px)] landscape:2xl:justify-start'>
            <Media src='/images/medias/enveloppe.png' tooltip='Email' url='mailto:m@hellomax.io'></Media>
            <Media src='/images/medias/sms.png' tooltip='iMessage' url='sms:33769403192'></Media>
            <Media src='/images/medias/whatsapp.png' tooltip='Whatsapp' url='https://wa.me/33667424130'></Media>
            <Media src='/images/medias/calendrier.png' tooltip='Calendly'></Media>
            <Media
                src='/images/medias/linkedin.png'
                tooltip='Linkedin'
                url='https://www.linkedin.com/in/maxime-auburtin'></Media>
        </ul>
    );
}
