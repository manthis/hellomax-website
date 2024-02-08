const Service = ({ children, title, icon = '', colspan = false }) => {
    let style =
        'rounded-xl xl:border-[1px] xl:border-lightblue xl:bg-lightblue xl:bg-opacity-40 xl:p-10 xl:opacity-90 xl:mx-0';
    if (colspan) {
        style += ' xl:col-span-2';
    }

    return (
        <div className={style}>
            <div className='inline-flex items-center'>
                <img src={icon} className='mr-2 h-8 invert' />
                <h1 className='text-white'>{title}</h1>
            </div>
            <p className='mt-5 text-justify text-sm'>{children}</p>
        </div>
    );
};

export default Service;
