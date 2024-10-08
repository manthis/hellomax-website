const Card = ({ id, title, image }) => {
    const handleClick = (e, action) => {
        e.preventDefault();

        let cto = document.getElementById('cto');
        let ctoContent = document.getElementById('cto-content');

        let blockchain = document.getElementById('blockchain');
        let blockchainContent = document.getElementById('blockchain-content');

        let web2 = document.getElementById('web2');
        let web2Content = document.getElementById('web2-content');

        let target;
        if (action === 'cto') {
            ctoContent.style.display = 'flex';
            blockchainContent.style.display = 'none';
            web2Content.style.display = 'none';

            cto.classList.add('shadow-lightblue', 'bg-opacity-90');

            blockchain.classList.remove('shadow-lightblue', 'bg-opacity-90');
            blockchain.classList.add('bg-opacity-40');
            web2.classList.remove('shadow-lightblue', 'bg-opacity-90');
            web2.classList.add('bg-opacity-40');
        } else if (action === 'blockchain') {
            blockchainContent.style.display = 'flex';
            ctoContent.style.display = 'none';
            web2Content.style.display = 'none';

            blockchain.classList.add('shadow-lightblue', 'bg-opacity-90');

            cto.classList.remove('shadow-lightblue', 'bg-opacity-90');
            cto.classList.add('bg-opacity-40');
            web2.classList.remove('shadow-lightblue', 'bg-opacity-90');
            web2.classList.add('bg-opacity-40');
        } else if (action === 'web2') {
            web2Content.style.display = 'flex';
            ctoContent.style.display = 'none';
            blockchainContent.style.display = 'none';

            web2.classList.add('shadow-lightblue', 'bg-opacity-90');

            cto.classList.remove('shadow-lightblue', 'bg-opacity-90');
            cto.classList.add('bg-opacity-40');
            blockchain.classList.remove('shadow-lightblue', 'bg-opacity-90');
            blockchain.classList.add('bg-opacity-40');
        }
    };

    let style =
        'flex xl:h-80 xl:min-h-60 w-full min-w-[200px] cursor-pointer xl:flex-col items-center justify-center rounded-xl border-[1px] border-lightblue bg-lightblue bg-opacity-40 xl:p-10 backdrop-blur-md backdrop-filter hover:bg-lightblue hover:bg-opacity-90 hover:shadow-2xl hover:shadow-lightblue xl:mr-[60px] xl:last:mx-0 mb-5 last:mb-0 p-2';
    if (id === 'cto') {
        style += ' shadow-lightblue bg-opacity-90';
    }

    return (
        <div id={id} onClick={(e) => handleClick(e, id)} className={style}>
            <img src={image} className='mr-2 h-8 invert xl:mr-0 xl:h-20' />
            <h1 className='text-center font-semibold uppercase text-white xl:mt-10'>{title}</h1>
        </div>
    );
};

export default Card;
