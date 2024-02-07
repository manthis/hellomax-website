const Card = ({ id, title, image }) => {
    const handleClick = (e, action) => {
        e.preventDefault();

        let ctoContent = document.getElementById('cto-content');
        let blockchainContent = document.getElementById('blockchain-content');
        let web2Content = document.getElementById('web2-content');

        console.log(action);

        let target;
        if (action === 'cto') {
            ctoContent.style.display = 'flex';
            blockchainContent.style.display = 'none';
            web2Content.style.display = 'none';
        } else if (action === 'blockchain') {
            blockchainContent.style.display = 'flex';
            ctoContent.style.display = 'none';
            web2Content.style.display = 'none';
        } else if (action === 'web2') {
            web2Content.style.display = 'flex';
            ctoContent.style.display = 'none';
            blockchainContent.style.display = 'none';
        }
    };

    return (
        <div
            onClick={(e) => handleClick(e, id)}
            className='flex h-80 min-h-60 w-full min-w-[200px] cursor-pointer flex-col items-center justify-center rounded-xl border-[1px] border-lightblue bg-lightblue bg-opacity-40 px-10 py-10 backdrop-blur-md backdrop-filter hover:bg-lightblue hover:bg-opacity-90 hover:shadow-2xl hover:shadow-lightblue xl:mr-[60px] xl:last:mx-0'>
            <img src={image} className='h-20 invert' />
            <h1 className='mt-10 text-center font-semibold uppercase text-white'>{title}</h1>
        </div>
    );
};

export default Card;
