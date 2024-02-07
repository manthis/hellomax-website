'use client';
import About from '@/app/components/about/about';
import Landing from '@/app/components/landing/landing';
import Services from '@/app/components/services';

export default function Home() {
    return (
        <>
            <Landing />
            <Services />
            <About />
        </>
    );
}
