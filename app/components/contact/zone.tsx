import Media from './media';

export default function ContactZone() {
    return (
        <ul
            id='contactzone'
            className='fixed bottom-[40px] z-20 flex justify-start landscape:w-[calc(100%-80px)] landscape:justify-end landscape:xl:w-[calc(100%-200px)] landscape:2xl:justify-start'>
            <Media src='/images/medias/enveloppe.png' tooltip='Email'></Media>
            <Media src='/images/medias/linkedin.png' tooltip='Linkedin'></Media>
            <Media src='/images/medias/whatsapp.png' tooltip='Whatsapp'></Media>
            <Media src='/images/medias/discord.png' tooltip='Discord'></Media>
            <Media src='/images/medias/calendrier.png' tooltip='Calendly'></Media>
        </ul>
    );
}
