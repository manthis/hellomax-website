import About from '@/app/components/about/about';
import Landing from '@/app/components/landing/landing';
import Services from '@/app/components/services';
import { translations } from '@/lib/translations';

export const metadata = {
    title: translations.en.metadata.title,
    description: translations.en.metadata.description
};

export default function EnglishHome() {
    return (
        <>
            <Landing />
            <Services />
            <About />
        </>
    );
}