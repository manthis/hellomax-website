export default function Header() {
    const handleClick = () => {
        let main = document.querySelector('.main');
        if (main) {
            main.classList.toggle('active');
        }
        let menuToggle = document.querySelector('.toggle');
        if (menuToggle) {
            menuToggle.classList.toggle('active');
        }
        let imageBox = document.querySelector('.imageBox');
        if (imageBox) {
            imageBox.classList.toggle('active');
        }
    };

    return (
        <header className='fixed left-0 top-0 z-50 flex w-full items-center justify-between px-[100px] py-[30px]'>
            <a href='#'>
                <span className='origin-left text-2xl font-semibold uppercase tracking-widest text-white no-underline duration-500'>
                    Hello<span className='text-lightblue border-lightblue border-b-4'>Max</span>
                </span>
            </a>
            <div className='toggle' onClick={handleClick}></div>
        </header>
    );
}
