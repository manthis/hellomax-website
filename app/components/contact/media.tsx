interface MediaProps {
    url?: string | '#';
    src: string;
}

export default function Media({ url, src }: MediaProps) {
    return (
        <li className='group/media h-[50px] w-[50px] list-none'>
            <a
                href={url}
                className='flex h-full w-full items-center justify-center rounded-full border-2 border-solid border-white group-hover/media:bg-white'>
                <img src={src} className='h-[25px] w-[25px] invert group-hover/media:invert-0' />
            </a>
        </li>
    );
}
