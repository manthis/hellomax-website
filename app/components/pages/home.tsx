import Persona from '../persona/persona';
import SocialNetworks from '../socialNetworks/social';
import Content from './content';

export default function HomeContent() {
    return (
        <>
            <Persona />
            <Content />
            <SocialNetworks />
        </>
    );
}
