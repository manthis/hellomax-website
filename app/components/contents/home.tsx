import Persona from '../persona/persona';
import SocialNetworks from '../socialNetworks/social';

export default function HomeContent() {
    return (
        <>
            <Persona />
            <div className='content'>
                <div className='contentBx'>
                    <h4>Hello,</h4>
                    <h2>
                        I&apos;m <span>Max</span>
                    </h2>
                    <h3>Blockchain CTO & Full Stack Engineer</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quas vel distinctio eligendi
                        optio molestias debitis modi dignissimos similique inventore!
                    </p>
                    <a href='#'>Download CV</a>
                    <a href='#'>Hire me</a>
                </div>
            </div>
            <SocialNetworks />
        </>
    );
}
