import Icon from './icon';

export default function ContactZone() {
    return (
        <ul
            id='contactzone'
            className='absolute bottom-[40px] z-[2] flex origin-left items-center justify-center gap-[15px] duration-500'>
            <Icon src='/images/x.png'></Icon>
            <Icon src='/images/linkedin.png'></Icon>
        </ul>
    );
}
