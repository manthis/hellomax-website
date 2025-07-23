import About from '@/app/components/about/about';
import Landing from '@/app/components/landing/landing';
import Services from '@/app/components/services';
import { translations } from '@/lib/translations';

export const metadata = {
    title: translations.fr.metadata.title,
    description: translations.fr.metadata.description
};

export default function FrenchHome() {
    return (
        <>
            <Landing />
            <Services />
            <About />
        </>
    );
}