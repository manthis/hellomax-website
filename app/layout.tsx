import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from './components/header';
import Menu from './components/menu/menu';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'HelloMax',
    description: 'Maxime AUBURTIN - Blockchain CTO & Fullstack Engineer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={poppins.className} suppressHydrationWarning={true}>
                <Header />
                {children}
                <Menu />
            </body>
        </html>
    );
}
