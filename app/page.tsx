'use client';

export default function Home() {
    const handleClick = () => {
        let banner = document.querySelector('.banner');
        if (banner) {
            banner.classList.toggle('active');
        }
        let menuToggle = document.querySelector('.toggle');
        if (menuToggle) {
            menuToggle.classList.toggle('active');
        }
        let imageBox = document.querySelector('.imageBox');
        if (imageBox) {
            imageBox.classList.toggle('active');
        }
    };
    return (
        <main>
            <section className='banner'>
                <header>
                    <a href='#' className='logo'>
                        Hello<span>Max</span>
                    </a>
                    <div className='toggle' onClick={handleClick}></div>
                </header>
                <div className='imageBox'>
                    <img src='/images/maxime.png' className='man'></img>
                </div>
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
                <ul className='socialNetworks'>
                    <li>
                        <a href='#'>
                            <img src='/images/x.png' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src='/images/linkedin.png' />
                        </a>
                    </li>
                </ul>
                <ul className='menu'>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>About</a>
                    </li>
                    <li>
                        <a href='#'>Services</a>
                    </li>
                    <li>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </section>
        </main>
    );

    /*
    return (
        <main className='bg-gradient-to-r from-green-600 from-30% to-green-500 bg-no-repeat dark:from-slate-950 dark:from-30% dark:to-slate-900 dark:text-white'>
            <div
                id='header'
                className='fixed left-0 right-0 top-0 flex items-center justify-between bg-transparent p-8 text-white'>
                <div>
                    <Logo width={60} height={60} fill='white' />
                </div>
                <div>menu</div>
            </div>
            <section id='landing' className='flex min-h-screen flex-col items-center justify-center bg-transparent'>
                <div id='landing-text' className='flex flex-col items-center justify-center'>
                    <h1>
                        Hello <span className='text-fuchsia-600'>Max</span>
                    </h1>
                    <h2>I build your apps, drive your teams & enable your business</h2>
                    <div>Photo</div>
                </div>
            </section>
            <section id='whoami' className='flex min-h-screen flex-col items-center justify-center bg-red-600'>
                <div id='whoami-text' className='flex flex-col items-center justify-center'>
                    <h1>Maxime AUBURTIN</h1>
                    <h2>CTO on Demand & Fullstack Engineer | Blockchain | Web3</h2>
                </div>
            </section>
            <section id='services' className='flex min-h-screen flex-col items-center justify-center bg-green-700'>
                <h1>Services</h1>
                <br />
                <ul>
                    <li>CTO on Demand</li>
                    <li>Web2/Web3 Development</li>
                    <li>Business Referral</li>
                    <li>Training / Coaching</li>
                </ul>
            </section>
            <section id='hireme' className='flex min-h-screen flex-col items-center justify-center bg-blue-800'>
                <h1>Hire me</h1>
                <br />
                <div> LinkedIn </div>
                <div> Get in touch </div>
                <div> Book me </div>
                <div> Buy me a coffee </div>
                <div> Others? </div>
            </section>
        </main>
    );
    */
}
