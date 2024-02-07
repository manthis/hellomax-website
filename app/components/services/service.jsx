const Service = ({ children, title, icon = '', isImportant = false }) => {
    let style = 'rounded-xl p-10 opacity-90 border-lightblue bg-lightblue bg-opacity-40 border-[1px] border-lightblue';
    if (isImportant) {
        style += ' col-span-2';
    }

    return (
        <div className={style}>
            <div className='inline-flex items-center'>
                <img src={icon} className='mr-2 h-8 invert' />
                <h1>{title}</h1>
            </div>
            <p className='mt-5 text-justify text-sm'>{children}</p>
        </div>
    );
};

export default Service;
