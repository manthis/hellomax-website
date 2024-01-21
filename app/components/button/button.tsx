interface ButtonProps {
    label: string;
    link?: string | '#';
}

export default function Button({ label, link }: ButtonProps) {
    return (
        <a
            href={link}
            className='hover:text-dracula hover:shadow-light-blue last:text-dracula mr-[20px] inline-block border-2 border-lightblue px-[20px] py-[10px] font-medium uppercase tracking-wider text-white no-underline duration-500 last:bg-lightblue hover:bg-lightblue'>
            {label}
        </a>
    );
}
