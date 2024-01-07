export default function Home() {
    return (
        <main>
            <div
                id='header'
                className='fixed left-0 right-0 top-0 flex items-center justify-between bg-transparent p-8 text-white'>
                <div>logo</div>
                <div>menu</div>
            </div>
            <section id='landing' className='flex min-h-screen flex-col items-center justify-center'>
                <div id='landing-text'>
                    <h1>Hello Max</h1>
                </div>
            </section>
            <section id='whoami' className='flex min-h-screen flex-col items-center justify-center bg-red-600'>
                <div id='whoami-text'>
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
                <div> Write to me </div>
                <div> Buy me a coffee </div>
                <div> Others? </div>
            </section>
        </main>
    );
}
