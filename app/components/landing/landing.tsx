import ContactZone from '../medias/zone';
import Content from './content/content';
import Persona from './persona/persona';

export default function Landing() {
    return (
        <section
            id='landing'
            className='relative flex min-h-[100svh] w-full items-center overflow-hidden bg-darkblue px-[40px] py-0 xl:px-[100px]'>
            <Persona />
            <Content />
            <ContactZone />
        </section>
    );
}
