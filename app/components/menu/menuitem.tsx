interface MenuItemProps {
    label: string;
    url?: string | '#';
}

export default function MenuItem({ label, url }: MenuItemProps) {
    return (
        <li className='group list-none'>
            <a
                href={url}
                className='group-hover:text-night mx-0 my-[5px] inline-block px-[10px] py-[5px] text-[1.5em] text-white no-underline duration-500 group-hover:bg-white group-hover:tracking-widest'>
                {label}
            </a>
        </li>
    );
}
