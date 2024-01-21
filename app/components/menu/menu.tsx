import MenuItem from './menuitem';

export default function Menu() {
    return (
        <ul
            id='menu'
            className='items-sart fixed left-0 top-0 z-[2] flex h-full w-full flex-col justify-center pl-[100px] opacity-0 duration-500'>
            <MenuItem label='Home' />
            <MenuItem label='About' />
            <MenuItem label='Services' />
            <MenuItem label='Contact' />
        </ul>
    );
}
