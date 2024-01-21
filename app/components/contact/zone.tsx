import Media from './media';

export default function ContactZone() {
    return (
        <ul
            id='contactzone'
            className='fixed bottom-[40px] z-20 flex justify-start landscape:w-[calc(100%-80px)] landscape:justify-end landscape:xl:w-[calc(100%-200px)] landscape:2xl:justify-start'>
            <Media src='/images/x.png'></Media>
            <Media src='/images/linkedin.png'></Media>
        </ul>
    );
}
