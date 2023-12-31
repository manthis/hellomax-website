import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// TODO: replace the font
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'HelloMax',
    description: 'Maxime AUBURTIN - CTO & Full Stack Web 3 Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
