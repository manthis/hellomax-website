const Service = ({ children, title, icon = '' }) => {
    return (
        <div className='rounded-xl border-[1px] border-lightblue bg-lightblue bg-opacity-40 p-10 opacity-90 xl:mx-0'>
            <div className='inline-flex items-center'>
                <img src={icon} className='mr-2 h-8 invert' />
                <h1>{title}</h1>
            </div>
            <p className='mt-5 text-justify text-sm'>{children}</p>
        </div>
    );
};

export default Service;
