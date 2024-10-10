export default function Persona() {
    return (
        <div className='absolute bottom-[-5px] right-0 z-0 m-0 border-0 p-0'>
            <div
                id='image-container'
                className='before:xl:absolute before:xl:left-[50%] before:xl:top-[50%] before:xl:-z-10 before:xl:h-[110%] before:xl:w-full before:xl:-translate-x-[50%] before:xl:-translate-y-[10%] before:xl:animate-heartbeatBlue before:xl:rounded-full before:xl:bg-lightblue'>
                <img src='/images/maxime.png' className='opacity-30 xl:h-[65vh] xl:opacity-100 landscape:h-[75vh]' />
            </div>
        </div>
    );
}
