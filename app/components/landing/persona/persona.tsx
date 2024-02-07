export default function Persona() {
    return (
        <div className='absolute bottom-[-5px] right-0 m-0 border-0 p-0'>
            <div
                id='image-container'
                className='before:2xl:absolute before:2xl:left-[50%] before:2xl:top-[50%] before:2xl:-z-10 before:2xl:h-[110%] before:2xl:w-full before:2xl:-translate-x-[50%] before:2xl:-translate-y-[10%] before:2xl:animate-heartbeatBlue before:2xl:rounded-full before:2xl:bg-lightblue'>
                <img src='/images/maxime.png' className='opacity-30 2xl:h-[65vh] 2xl:opacity-100 landscape:h-[75vh]' />
            </div>
        </div>
    );
}
