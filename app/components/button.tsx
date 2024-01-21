'use client';

interface ButtonProps {
    label: string;
    link?: string | '#';
}

export default function Button({ label, link }: ButtonProps) {
    // className='mr-[20px] inline-block border-2 border-lightblue px-[20px] py-[10px] font-medium uppercase tracking-wider text-white no-underline duration-500 last:bg-lightblue last:text-dracula hover:bg-lightblue hover:text-dracula hover:shadow-light-blue'>

    return (
        <a
            href={link}
            className='mr-[20px] inline-block border-2 border-lightblue px-[20px] py-[10px] font-medium uppercase tracking-wider text-white no-underline duration-500 last:bg-lightblue last:text-dracula hover:bg-lightblue hover:text-dracula hover:shadow-lightblue portrait:mb-2'>
            {label}
        </a>
    );
}
