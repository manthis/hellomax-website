interface IconProps {
    url?: string | '#';
    src: string;
}

export default function Icon({ url, src }: IconProps) {
    return (
        <>
            <li className='group h-[50px] w-[50px] list-none'>
                <a
                    href={url}
                    className='flex h-full w-full items-center justify-center rounded-full border-2 border-solid border-white group-hover:bg-white'>
                    <img src={src} className='h-[25px] w-[25px] invert group-hover:invert-0' />
                </a>
            </li>
        </>
    );
}
