import ContactZone from '../contact/zone';
import Persona from '../persona/persona';
import Content from './content';

export default function HomeContent() {
    return (
        <>
            <Persona />
            <Content />
            <ContactZone />
        </>
    );
}
