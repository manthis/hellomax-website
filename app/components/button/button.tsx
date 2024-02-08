'use client';

interface ButtonProps {
    label: string;
    link?: string | '#';
}

export default function Button({ label, link }: ButtonProps) {
    return (
        <a
            href={link}
            className='mr-[20px] inline-block cursor-pointer border-2 border-lightblue px-[20px] py-[10px] text-start font-medium uppercase tracking-wider text-white no-underline duration-500 last:mr-0 last:bg-lightblue last:text-dracula hover:bg-lightblue hover:text-dracula hover:shadow-lightblue portrait:mb-2'>
            {label}
        </a>
    );
}
