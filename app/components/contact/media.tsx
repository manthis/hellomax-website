interface MediaProps {
    url?: string | '#';
    src: string;
    tooltip: string;
}

export default function Media({ url, src, tooltip }: MediaProps) {
    return (
        <li
            className='group/media tooltip mr-[10px] h-[40px] w-[40px] list-none last:mr-0 xl:h-[50px] xl:w-[50px]'
            data-tooltip={tooltip}>
            <a
                href={url}
                className='flex h-full w-full items-center justify-center rounded-full border-2 border-solid border-white group-hover/media:bg-white'>
                <img src={src} className='h-[25px] w-[25px] invert group-hover/media:invert-0' />
            </a>
        </li>
    );
}
