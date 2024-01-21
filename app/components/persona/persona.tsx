export default function Persona() {
    //before:animate-heartbeatBlue duration-1000 before:absolute before:right-[10%] before:top-[50%] before:h-[650px] before:w-[650px] before:rounded-full before:bg-lightblue
    return (
        <div
            id='imageBox'
            className='before:2xl:absolute before:2xl:right-[10%] before:2xl:top-[50%] before:2xl:h-[650px] before:2xl:w-[650px] before:2xl:animate-heartbeatBlue before:2xl:rounded-full before:2xl:bg-lightblue'>
            <img
                src='/images/maxime.png'
                className='absolute bottom-0 right-[80px] max-h-[70vh] opacity-30 duration-1000 2xl:opacity-100 portrait:right-0 landscape:max-h-[75vh]'></img>
        </div>
    );
}
