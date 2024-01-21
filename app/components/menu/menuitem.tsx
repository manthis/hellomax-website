interface MenuItemProps {
    label: string;
    url?: string | '#';
}

export default function MenuItem({ label, url }: MenuItemProps) {
    return (
        <li className='list-none'>
            <a
                href={url}
                className='mx-0 my-[5px] inline-block px-[10px] py-[5px] text-[1.5em] text-white no-underline duration-500 hover:bg-white hover:tracking-widest hover:text-night'>
                {label}
            </a>
        </li>
    );
}
