'use client';

export default function Header() {
    const handleClick = () => {
        // Section
        let landing = document.getElementById('landing');
        if (landing) {
            landing.classList.toggle('active');
        }

        // Menu Toggle
        let menuToggle = document.getElementById('toggle');
        if (menuToggle) {
            menuToggle.classList.toggle('active');
        }

        // Div containing my image
        let imageContainer = document.getElementById('image-container');
        if (imageContainer) {
            imageContainer.classList.toggle('active');
        }

        // Logo
        let logo = document.getElementById('logo');
        if (logo) {
            logo.classList.toggle('active');
        }

        // Menu
        let menu = document.getElementById('menu');
        if (menu) {
            menu.classList.toggle('active');
        }
    };

    return (
        <header className='fixed left-0 top-0 z-50 flex w-full items-center justify-between px-[40px] py-[10px] xl:px-[100px] xl:py-[30px]'>
            <div
                id='logo'
                className='origin-left text-xl font-semibold uppercase tracking-widest text-white no-underline duration-500 xl:text-2xl'>
                Hello<span className='border-b-4 border-lightblue text-lightblue'>Max</span>
            </div>

            {/* Commented out for now cause we don't want a menu yet
            <div
                id='toggle'
                className='bg-size-[30px] relative h-[30px] w-[30px] cursor-pointer bg-burger-bar bg-no-repeat invert'
                onClick={handleClick}></div>
            */}
            <div>
                <img src='/images/logo.svg' className='h-[35px] w-[35px] invert xl:h-[45px] xl:w-[45px]' />
            </div>
        </header>
    );
}
