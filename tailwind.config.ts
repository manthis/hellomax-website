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
        backgroundImage: {
            'burger-bar': "url('/images/burger-bar.png')",
        },
        animation: {
            heartbeatBlue: 'heartbeatBlue 3s infinite alternate',
        },
        keyframes: {
            heartbeatBlue: {
                '0%': {
                    transform: 'scale(1) translateY(-50%)',
                    'box-shadow': '0 0 10px #1de5ff, 0 0 40px #1de5ff',
                },
                '100%': {
                    transform: 'scale(1.3) translateY(-10%)',
                    'box-shadow': '0 0 20px #1de5ff, 0 0 50px #1de5ff, 0 0 150px #1de5ff',
                },
            },
        },
    },
    plugins: [],
};
export default config;
