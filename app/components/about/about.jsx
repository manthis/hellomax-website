import Button from '../button/button';

const About = () => {
    return (
        <section
            id='about'
            className='bg-background2 relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-cover bg-fixed bg-center bg-no-repeat px-[40px] py-0 xl:px-[100px]'>
            <div className='z-40 my-20 rounded-2xl bg-darkblue p-6 text-justify opacity-95 xl:my-40 xl:w-2/3 xl:p-10'>
                <h1 className='mb-10 mt-6 text-3xl font-extrabold text-white'>About me</h1>
                <div className='flex justify-center py-10 '>
                    <div className='xl:animate-flashing rounded-full shadow-lightblue'>
                        <img src='/images/profile_logo.png' />
                    </div>
                </div>
                <p className='mt-10 text-white '>
                    <span className='text-lightblue'>With 15 years of rich experience in the Tech Industry</span>, I
                    have cultivated a deep passion for
                    <span className='text-lightblue'> Leadership</span>, <span className='text-lightblue'>People</span>,{' '}
                    <span className='text-lightblue'>Technology</span>, and{' '}
                    <span className='text-lightblue'>Products</span>
                    . My journey is marked by a relentless drive to create impact and innovate at every step.
                    <br />
                    <br />
                    My expertise spans three pivotal areas:
                    <br />
                    <ul className='mx-6 my-4 list-disc xl:mx-20'>
                        <li className='my-2'>
                            <span className='text-lightblue'>Technical Expertise:</span> My foundation was laid in the
                            intricate world of development, where I honed my skills as a developer. I then expanded my
                            horizon into DevOps, seamlessly integrating development with operations, and delved into the
                            realm of security as a consultant, ensuring robust and resilient systems.{' '}
                        </li>
                        <li className='my-2'>
                            <span className='text-lightblue'>Management:</span> My leadership capabilities truly shone
                            as I built international teams from the ground up. I mastered the art of team assembly and
                            development, scaling groups to as large as 40 members. This experience not only tested but
                            also enriched my management skills, enabling me to lead diverse and dynamic teams
                            successfully.
                        </li>
                        <li className='my-2'>
                            <span className='text-lightblue'>Entrepreneurship:</span> My entrepreneurial spirit took
                            flight when I launched my own startup, a journey that taught me the intricacies of business
                            creation and growth. Furthermore, my role as a CTO as a Service for several years allowed me
                            to impart my technical and strategic expertise to various ventures, guiding them towards
                            technological excellence.
                        </li>
                    </ul>
                    <br />
                    Today, as a freelance professional, I apply this wealth of experience to a diverse array of clients,
                    ranging from startups to established enterprises.
                    <br />
                    <br />
                    <span className='text-lightblue'>
                        My role is to provide strategic, technical, and managerial insights
                    </span>{' '}
                    tailored to the unique needs of each client. Whether navigating new technological challenges,
                    scaling operations, or driving innovation, I offer a holistic approach to solving complex problems.
                    <br />
                    <br />
                    <span className='text-lightblue'>
                        My mission is to empower organizations of all sizes and stages
                    </span>
                    , helping them harness their full potential in a rapidly evolving tech landscape. In this dynamic
                    career phase, my focus is not just on riding unicorns and centaurs but enabling{' '}
                    <span className='text-lightblue'>a wide spectrum of clients to achieve extraordinary success</span>.
                </p>
                <div className='mt-10 flex justify-center'>
                    <Button
                        label='See my CV'
                        link='https://hellomax.notion.site/Maxime-AUBURTIN-b83086393e2448be908de4f0038a5c9f?pvs=4'
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
