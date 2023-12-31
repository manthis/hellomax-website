export default function Home() {
    return (
        <main>
            <section id='landing' className='flex min-h-screen flex-col items-center justify-center'>
                <div id='landing-text'>
                    <h1>Hello Max</h1>
                </div>
            </section>
            <section id='whoami'>
                <div id='whoami-text'>
                    <h1>Maxime AUBURTIN</h1>
                    <h2>CTO & Fullstack Web3 Developer</h2>
                </div>
            </section>
            <section id='services'>
                <div>CTO as a Service</div>
                <div>Web2/Web3 Development</div>
                <div>Business Referral</div>
                <div>Training</div>
            </section>
            <section id='hireme'></section>
        </main>
    );
}
