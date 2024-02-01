'use client';

import HomeContent from '@/app/components/homecontent/home';

export default function Home() {
    return (
        <>
            <section
                id='landing'
                className='relative flex min-h-[100vh] w-full items-center overflow-hidden bg-darkblue px-[40px] py-0 xl:px-[100px]'>
                <HomeContent />
            </section>
        </>
    );
}
