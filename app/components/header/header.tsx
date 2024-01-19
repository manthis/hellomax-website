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
        <header>
            <a href='#' className='logo'>
                Hello<span>Max</span>
            </a>
            <div className='toggle' onClick={handleClick}></div>
        </header>
    );
}
