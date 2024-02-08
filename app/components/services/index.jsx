import Card from './card';
import Service from './service';

const Services = () => {
    return (
        <section
            id='services'
            className='relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-darkblue to-dracula py-20 text-white'>
            <div className='px-10 xl:px-0'>
                <h1 className='mb-10 w-full max-w-7xl text-left text-5xl font-semibold text-white '>Services</h1>
                <div className='flex w-full max-w-7xl flex-col items-center justify-center rounded-3xl bg-cover bg-fixed bg-center bg-no-repeat xl:bg-background2'>
                    <div className='w-full rounded-3xl xl:p-10 xl:backdrop-blur xl:backdrop-grayscale xl:backdrop-filter'>
                        <div className='flex w-full flex-col items-center justify-between xl:flex-row'>
                            <Card id='cto' title='CTO as a Service' image={'/images/services/cto.png'}></Card>
                            <Card
                                id='blockchain'
                                title='Blockchain Developer'
                                image={'/images/services/ethereum.png'}
                            />
                            <Card id='web2' title='Web2 Fullstack Engineer' image={'/images/services/web.png'} />
                        </div>
                    </div>
                </div>
                <div
                    id='cto-content'
                    className='mt-5 w-full max-w-7xl items-center justify-center rounded-3xl py-10 transition delay-1000'>
                    <div className='grid grid-flow-row-dense grid-cols-1 gap-10 xl:grid-cols-2'>
                        <Service title='Early Stage CTO' icon='/images/services/early.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                        <Service title='On-Demand / Interim CTO' icon='/images/services/ondemand.png' colspan={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                        <Service title='Engineering Audit & Optimisation' icon='/images/services/audit.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                        <Service title='Coaching' icon='/images/services/coach.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                        <Service title='Cyber CTO' icon='/images/services/cyber.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                    </div>
                </div>
                <div
                    id='blockchain-content'
                    className=' mt-10 hidden w-full max-w-7xl items-center justify-center rounded-3xl py-10'>
                    <div className='grid grid-flow-row-dense grid-cols-1 gap-10 xl:grid-cols-2'>
                        <Service
                            title='Smart Contract / Solidity Development'
                            icon='/images/services/early.png'
                            colspan={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                        <Service title='dApp development' icon='/images/services/ondemand.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                        <Service title='Decentralized Platform Engineering' icon='/images/services/audit.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                    </div>
                </div>
                <div
                    id='web2-content'
                    className=' mt-10 hidden w-full max-w-7xl items-center justify-center rounded-3xl py-10'>
                    <div className='grid grid-flow-row-dense grid-cols-1 gap-10 xl:grid-cols-2'>
                        <Service title='Fullstack Web Developer' icon='/images/services/early.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                        <Service title='Frontend Web Developer' icon='/images/services/audit.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                        <Service title='Backend Web Developer' icon='/images/services/audit.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                        <Service title='Mobile Developer' icon='/images/services/ondemand.png'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Service>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
