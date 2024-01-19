import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                lightblue: '#1de5ff',
                darkblue: '#21283a',
                midnight: '#141821',
            },
        },
    },
    plugins: [],
};
export default config;
